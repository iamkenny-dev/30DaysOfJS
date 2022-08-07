// Calculate the total annual income of the person from the following text. ‘He earns 4000 euro from salary per month, 10000 euro annual bonus, 5500 euro online courses per month.’

const txt = 'He earns 4000 euro from salary per month, 10000 euro annual bonus, 5500 euro online courses per month.'
const pattern = /\d+/g
const matched = txt.match(pattern)
console.log(matched)
let salPerMonth = Number(matched[0] * 12)
let annualBonus = Number(matched[1])
let onlineCoursesPerMonth = Number(matched[2])
console.log(salPerMonth)
console.log(parseInt(salPerMonth + annualBonus + onlineCoursesPerMonth))
