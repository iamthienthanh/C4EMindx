a = prompt("Mời bạn nhập số a: ");
b = prompt("Mời bạn nhập số b: ");
function checkPrime(x) {
    var count = 0;
    for (let i = 1;i<=x;i++) {
        if (x%i==0) {
            count+=1;
        }
    }
    if (count == 2) {
        return true
    }
    else {return false}
}

ans = [];
for (let i = Math.min(a,b)+1; i<Math.max(a,b);i++) {
    if (checkPrime(i)==true) {
        ans.push(i);
    }
}
alert("Các số nguyên tố nằm trong khoảng a b là "+ans)