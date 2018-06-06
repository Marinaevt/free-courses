/* Task 3 */

var args = process.argv.slice(2);
var notwntsym = /[^A-Za-z0-9]/g;
var vowels = /[aeiouAEIOU]/g;
var num = /[0-9]/g;
var str = args.join('').replace(notwntsym, '');
var vow = str.match(vowels);
var strnum = str.match(num);
if (vow){
    process.stdout.write(`${vow.join("")} `);
}
process.stdout.write(`${str.replace(vowels, '').replace(num, '')} `);
if (strnum){
    process.stdout.write(strnum.join(""));
}
