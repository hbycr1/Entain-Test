import dateHelpers from "../helpers/date.helper";
import type {
  RaceApiResponse,
  RaceDataApiResponse,
} from "../models/RaceApiResponse";
import { RaceCategory } from "../models/RaceCategory.enum";

class RaceService {
  private _apiUrl = "https://api.neds.com.au/rest/v1/racing/?method=nextraces";

  private fetchRaces = (count: number) => {
    const url = `${this._apiUrl}&count=${count}`;
    return fetch(url).then((x) => (x ? x.json() : null));
  };

  public getRacesByCategory = (
    category: string,
    count: number
  ): Promise<RaceDataApiResponse> => {
    return this.fetchRaces(50).then((x: RaceApiResponse) => {
      const { race_summaries } = x.data;
      let next_to_go_ids: string[] = [];

      // if filtering by category
      if (category !== RaceCategory.All) {
        x.data.next_to_go_ids.forEach((id) => {
          const { category_id, advertised_start } = race_summaries[id];
          const startTimeMinutes = dateHelpers.convertUnixSecondsToMinutes(
            advertised_start.seconds
          );
          if (
            category_id == category &&
            next_to_go_ids.length < count &&
            startTimeMinutes >= -1
          ) {
            next_to_go_ids.push(id);
          }
        });
      } else {
        next_to_go_ids = x.data.next_to_go_ids
          .filter((id) => {
            const { advertised_start } = race_summaries[id];
            const startTimeMinutes = dateHelpers.convertUnixSecondsToMinutes(
              advertised_start.seconds
            );
            return startTimeMinutes >= -1;
          })
          .splice(0, count);
      }

      // apply sorting
      next_to_go_ids.sort((a, b) => {
        const { advertised_start: a_start } = race_summaries[a];
        const { advertised_start: b_start } = race_summaries[b];
        return (
          dateHelpers.convertUnixSecondsToMinutes(a_start.seconds) -
          dateHelpers.convertUnixSecondsToMinutes(b_start.seconds)
        );
      });

      return {
        next_to_go_ids,
        race_summaries,
      };
    });
  };
}

const raceService = new RaceService();

export default raceService;
