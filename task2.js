/* Task 2 */

var num = process.argv[2];
//bc there is no info about how I should react to negative numbers I am assuming it is 0
if (num <= 0){
    process.stdout.write("0");
    return 0;
}

//and I am not a big fan of recursion so
var f1 = 1, f2 = 0, temp;

while (num > 0){
    temp = f1;
    f1 = f1 + f2;
    f2 = temp;
    num--;
}
/*and I am assuming for now that the fact that the biggest number is 10000 is a mistake
bc it is not possible with just a standart Number type and when libraries is not allowed
I dont think I need this course if Im required to write my own BigNumbers library to be enrolled*/
process.stdout.write(f2.toString());