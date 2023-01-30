const arrToObj = (array, key, key2, key3) => {
  const initialValue = {};
  return array.reduce((obj, item) => {
    return {
      ...obj,
      [item[key][key2]]: item[key3],
    };
  }, initialValue);
};

export default arrToObj