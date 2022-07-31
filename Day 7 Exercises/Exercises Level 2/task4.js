// Write a function name showDateTime which shows time in this format: 08/01/2020 04:08 using the Date object.

	showDateTime()
08/01/2020 04:08

const now = new Date()
const day = now.getDate()
const month = now.getMonth(1) + 1
const year = now.getFullYear()
const hours = now.getHours()
const minutes = now.getMinutes()

console.log(`${day}/0${month}/${year} ${hours}:${minutes}`)
