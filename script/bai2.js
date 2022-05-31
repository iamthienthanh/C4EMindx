n = prompt("Nhập số nguyên n: ");
function numberOneTriangle(n) {
    ans = "";
    for (let i = 1; i<=n;i++) {
        ans += "*";
        console.log(ans);
    }
}
numberOneTriangle(n);