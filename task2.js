/* Task 2 */

var num = process.argv[2], flag = 0;
if (num <= 0){
    flag = 1;
    num = -num;
}

//and I am not a big fan of recursion so
var f1 = 1, f2 = 0, temp, i = num;

while (i > 0){
    temp = f1;
    f1 = f1 + f2;
    f2 = temp;
    i--;
}
/*and I hope for now that the fact that the biggest number is 10000 is a mistake
bc it is not possible with just a standart Number type and when libraries is not allowed
I dont think I need this course if Im required to write my own BigNumbers library to be enrolled*/
if (flag){
    f2 = Math.pow(-1, num + 1)*f2;
}
process.stdout.write(f2.toString());
