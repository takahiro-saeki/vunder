const check = async () => {
  try {
    const module = await require.resolve('hoge') || false
    await console.log(module)
  } catch (err) {
    await console.log('error occured')
  }
}

check()