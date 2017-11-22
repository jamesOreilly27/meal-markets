const getBaseLog = (base, num) => (
  Math.log(num) / Math.log(base)
)

export const getCurrentPrice = (basePrice, inStorePrice, pickupDate) => {
  // MEAL CONTRACTS HAVE A 30 DAY LIFE-CYCLE
  // THE DAY-COUNT STARTS AT 0 WHEN THE RESTAURANT CREATES THE MEAL
  const STARTING_DAY = 0
  // THE DAY-COUNT ENDS AFTER 30 DAYS, WHEN THE MEAL EXPIRES
  const EXPIRATION_DAY = 30

  // ONLY NEED THE LINES BELOW IF THE PICKUPDATE COMES IN AS A DATE
  // RATHER THAN AN INTEGER
  // pickupDate = +(new Date(pickupDate)) / 86400000
  // const currentDay = EXPIRATION_DAY - Math.ceil(+pickupDate - (+(new Date()) / 86400000))

  if (pickupDate <= STARTING_DAY) return +basePrice
  else if (pickupDate >= EXPIRATION_DAY) return +inStorePrice
  else {
    return getBaseLog(
      Math.pow(Math.abs(31), 1 / (+inStorePrice - +basePrice)),
      pickupDate + 1
    ) + +basePrice
  }
}
