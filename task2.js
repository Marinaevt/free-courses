/* Task 2 */

function sumarrays(a, b){
    var temp, leftover = 0;
    var c = new Array(a.length);
    c.fill(0);
    for (var i = a.length-1; i >= 0; i--){
        temp = a[i] + b[i] + parseInt(leftover);
        if (temp >= 10){
            leftover = temp.toString().split("")[0];
            temp = temp.toString().split("")[1];
        }
        else{
            leftover = 0;
        }
        c[i] = parseInt(temp);
    }
    return c;
}


var num = process.argv[2], flag = 0;
if (num < 0){
    flag = 1;
    num = -num;
}
var d;
if (num == 0 || num == 1){
    d = 1;
}
else{
    d = (num * Math.log10(1.6180339887498948)) - ((Math.log10(5)) / 2);
    d = Math.ceil(d);
}
var f1 = new Array(d), f2 = new Array(d);
f1.fill(0);
f2.fill(0);
f1[d-1] = 1;
//and I am not a big fan of recursion so
var temp, i = num;

while (i > 0){
    temp = f1;
    f1 = sumarrays(f1, f2);
    f2 = temp;
    i--;
}
/*So i decided to try the array method. Consumes a lot of memory and kinda slow
but it should work for the task*/
if (flag && num%2 == 0){
    //f2 = Math.pow(-1, num + 1)*f2;
    process.stdout.write("-");
}
process.stdout.write(f2.join(""));
