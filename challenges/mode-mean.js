function modemean(array) {
  if (array.length === 1) {
    return true;
  }

  console.log(array);
  const mean = Math.floor(array.reduce((acc, cur) => acc + cur) / array.length);
  let mode = {};

  array.forEach(el => {
    if (!mode[el]) {
      mode[el] = 1;
      console.log(mode);
    } else {
      mode[el] += 1;
      console.log(mode);
    }
  });

  mode = Object.keys(mode).reduce((a, b) => (mode[a] > mode[b] ? a : b));

  console.log("mode ->", mode, "mean ->", mean);

  return mode == mean;
}

module.exports = modemean;
