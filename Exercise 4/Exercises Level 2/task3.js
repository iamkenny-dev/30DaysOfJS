// Check if a day is weekend day or a working day. Your script will take day as an input.
//     What is the day  today? Saturday
//         Saturday is a weekend.
//
//             What is the day today? saturDaY
//                 Saturday is a weekend.
//
//                     What is the day today? Friday
//                         Friday is a working day.
//
//                             What is the day today? FrIDAy
//                                 Friday is a working day.

let day = prompt('What is the day today: ');

if (day == 'saturday' || day == 'sunday') {
	console.log(`${day} is a weekend`);
} else {
	console.log(`${day} is a working day`);
}
