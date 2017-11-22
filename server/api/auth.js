const { User, RestaurantUser } = require('../db/models')

const isSelf = (req, res, next) => {
  if (+req.params.userId !== req.user.id) {
    res.status(403).send('Not Authorized')
  } else {
    next()
  }
}

const useRole = role => {
  switch (role) {
    case 'eater':
      return User
    case 'owner':
      return RestaurantUser
    default:
      return User
  }
}

const throwError = (status, message) => {
  let err = new Error(message)
  throw err
}

module.exports = {
  isSelf,
  throwError,
  useRole
}
