/* Task 3 */

var args = process.argv.slice(2);
var notwntsym = /[^A-Za-z0-9]/g;
var vowels = /[aeiouyAEIOUY]/g;
var num = /[0-9]/g;
var str = args.join('').replace(notwntsym, '');
var vow = str.match(vowels);
var strnum = str.match(num);
if (vow){
    process.stdout.write(vow.join(""));
}
process.stdout.write(" ")
var cons = str.replace(vowels, '').replace(num, '')
if (cons){
    process.stdout.write(cons);
}
process.stdout.write(" ")
if (strnum){
    process.stdout.write(strnum.join(""));
}


