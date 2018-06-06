/* Task 3 */

var args = process.argv.slice(2);
var notwntsym = /[^A-Za-z0-9]/g;
var vowels = /[aeiouAEIOU]/g;
var num = /[0-9]/g;
var str = args.join('').replace(notwntsym, '');
//console.log(str.match(vowels))
process.stdout.write(`${str.match(vowels).join("")} `);
process.stdout.write(`${str.replace(vowels, '').replace(num, '')} `);
process.stdout.write(str.match(num).join(""));

