const isSelf = (req, res, next) => {
  if (+req.params.userId !== req.user.id) {
    res.status(403).send('Not Authorized')
  } else {
    next()
  }
}

const throwError = (status, message) => {
  let err = new Error(message)
  throw err
}

module.exports = {
  isSelf,
  throwError
}
