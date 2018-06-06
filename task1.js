/* Task 1 */

var args = process.argv.slice(2);
var sym = /[^A-Za-z0-9]/g;
var str = args.join('').toLowerCase().replace(sym, '');
if (str == str.split('').reverse().join('')){
    process.stdout.write("YES");
}
else{
    process.stdout.write("NO");
}
