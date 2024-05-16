class DateHelpers {
  public convertUnixSecondsToMinutes = (seconds: number) => {
    const date = new Date(seconds * 1000);
    return new Date().getMinutes() - date.getMinutes();
  };
}

const dateHelpers = new DateHelpers();

export default dateHelpers;
