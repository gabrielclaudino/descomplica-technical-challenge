// returns a new object wihout the keys that have undefined or null values
export const removeUndefined = (object) =>
  Object.entries(object).reduce((previous, [key, value]) => {
    return value !== undefined && value !== null
      ? { ...previous, [key]: value }
      : previous;
  }, {});
