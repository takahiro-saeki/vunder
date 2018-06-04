const checkPath = path => {
  const check = path.split('/');
  const length = check.length - 1;
  const filter = check.filter((item, id) => id < length)
  const reduce = filter.reduce((a, b) => `${a}/${b}`)
  return reduce
}

module.exports = checkPath;