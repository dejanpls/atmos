export default function getFiveDayForecast(days) {
  return Object.entries(days).map(([date, items]) => {
    const maxTemps = items.map((item) => item.main.temp_max);
    const minTemps = items.map((item) => item.main.temp_min);
    const conditions = items.map((item) => item.weather[0].description);

    const frequency = conditions.reduce((acc, condition) => {
      acc[condition] = (acc[condition] || 0) + 1;
      return acc;
    }, {});

    const mostFrequent = Object.entries(frequency).reduce(
      (maxEntry, currentEntry) => {
        return currentEntry[1] > maxEntry[1] ? currentEntry : maxEntry;
      }
    )[0];

    return {
      date,
      max: Math.ceil(Math.max(...maxTemps)),
      min: Math.ceil(Math.min(...minTemps)),
      conditions: mostFrequent,
    };
  });
}
