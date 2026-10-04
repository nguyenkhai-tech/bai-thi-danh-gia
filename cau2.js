function laSoHoanHao(n) {
    if (n < 2) {
        return false;
    }
    let tong = 0;
    for (let i = 1; i < n; i++) {
        if (n % i === 0) {
            tong += i;
        }
    }
    if (tong === n) {
        return true;
    } else {
        return false;
    }
}
function kiemTraSoHoanHao() {
    // Lấy số nhập vào
    let n = Number(document.getElementById("soNguyenDuong").value);
    if (n <= 0 || !Number.isInteger(n)) {
        alert("Vui lòng nhập số nguyên dương!");
        return;
    }
    let ketQua = laSoHoanHao(n);
    document.getElementById("ketQuaHoanHao").innerHTML =
        "Số " + n + " có phải số hoàn hảo không? " + ketQua;
}