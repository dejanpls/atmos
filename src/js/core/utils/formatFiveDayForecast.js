export default function getFiveDayForecast(days) {
  return Object.entries(days).map(([date, items]) => {
    const maxTemps = items.map((item) => item.main.temp_max);
    const minTemps = items.map((item) => item.main.temp_min);
    const conditions = items.map((item) => item.weather[0].description);
    const icons = items.map((item) => item.weather[0].icon);

    const frequency = getConditionsFrequency(conditions);
    const mostFrequent = getMostFrequentCondition(frequency);
    const dayIcons = icons.filter((icon) => icon.endsWith('d'));
    const mostFrequentIcon = getIconFrequency(dayIcons);

    return {
      date,
      icon: mostFrequentIcon,
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

function getIconFrequency(dayIcons) {
  return dayIcons.reduce((acc, icon) => {
    acc[icon] = (acc[icon] || 0) + 1;
    return acc;
  }, {});
}
