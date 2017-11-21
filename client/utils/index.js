const getBaseLog = (base, num) => (
  Math.log(num) / Math.log(base)
)

export const getCurrentPrice = (basePrice, inStorePrice, pickupDate) => {
  // MEAL CONTRACTS HAVE A 30 DAY LIFE-CYCLE
  // THE DAY-COUNT STARTS AT 0 WHEN THE RESTAURANT CREATES THE MEAL
  const STARTING_DAY = 0
  // THE DAY-COUNT ENDS AFTER 30 DAYS, WHEN THE MEAL EXPIRES
  const EXPIRATION_DAY = 30

  pickupDate = +(new Date(pickupDate)) / 86400000

  // NEED ROUNDING FOR TIME IN CURRENTDAY FUNCTION
  const currentDay = EXPIRATION_DAY - Math.ceil(+pickupDate - (+(new Date()) / 86400000))

  if (currentDay <= STARTING_DAY) return +basePrice
  else if (currentDay >= EXPIRATION_DAY) return +inStorePrice
  else {
    console.log(currentDay)
    return getBaseLog(
      Math.pow(Math.abs(31), 1 / (+inStorePrice - +basePrice)),
      currentDay + 1
    ) + +basePrice
  }
}
