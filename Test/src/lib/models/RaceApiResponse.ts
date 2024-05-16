export type RaceApiResponse = {
  data: RaceDataApiResponse;
  status: number;
  message: string;
};

export type RaceDataApiResponse = {
  next_to_go_ids: string[];
  race_summaries: { [id: string]: RaceSummaryApiResponse };
};

export type RaceSummaryApiResponse = {
  advertised_start: { seconds: number };
  category_id: string;
  meeting_id: string;
  meeting_name: string;
  race_id: string;
  race_name: string;
  race_number: number;
  venue_country: string;
  venue_id: string;
  venue_name: string;
  venue_state: string;
};
