export const sanitizeUser = user => ({
  id: user.id,
  name: user.name,
  email: user.email,
  googleId: user.googleId,
  zipcode: user.zipcode
})