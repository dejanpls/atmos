export default function getFiveDayForecast(days) {
  return Object.entries(days).map(([date, items]) => {
    const maxTemps = items.map((item) => item.main.temp_max);
    const minTemps = items.map((item) => item.main.temp_min);
    const conditions = items.map((item) => item.weather[0].description);
    const icons = items.map((item) => item.weather[0].icon);

    const frequency = getConditionsFrequency(conditions);
    const mostFrequent = getMostFrequentCondition(frequency);
    
    return {
      date,
      icon: getWeatherIcon(icons),
      max: Math.ceil(Math.max(...maxTemps)),
      min: Math.ceil(Math.min(...minTemps)),
      conditions: mostFrequent,
    };
  });
}

function getConditionsFrequency(conditions) {
  return conditions.reduce((acc, condition) => {
    acc[condition] = (acc[condition] || 0) + 1;
    return acc;
  }, {});
}

function getMostFrequentCondition(frequency) {
  return Object.entries(frequency).reduce((maxEntry, currentEntry) => {
    return currentEntry[1] > maxEntry[1] ? currentEntry : maxEntry;
  })[0];
}

function getWeatherIcon(icons) {
  const dayIcons = icons.filter((icon) => icon.endsWith('d'));
  return dayIcons[0] === undefined ? icons[-1] : dayIcons[0];
}

