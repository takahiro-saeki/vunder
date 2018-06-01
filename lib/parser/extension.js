const extension = (file, ext) => {
  if(file.includes(ext)) {
    return file
  }
  const toBeFile = `${file}${ext}`;
  return toBeFile
}

module.exports = extension