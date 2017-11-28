const sanitizeUser = user => ({
  id: user.id,
  name: user.name,
  zipCode: user.zipCode,
  email: user.email,
  googleId: user.googleId,
  zipcode: user.zipcode
})

module.exports = sanitizeUser
