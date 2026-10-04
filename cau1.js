let mang = [];
function nhapMang() {
    mang = [];
    let n = Number(document.getElementById("soLuong").value);
    if (n < 1 || n > 50) {
        alert("Số lượng phần tử phải từ 1 đến 50!");
        return;
    }
    let html = "";
    for (let i = 0; i < n; i++) {
        html +=
            "Phần tử a[" + i + "] = " +
            "<input type='number' id='phanTu" + i + "'>" +
            "<br>";
    }
    document.getElementById("nhapPhanTu").innerHTML = html;
}
function xuLyMang() {
    let n = Number(document.getElementById("soLuong").value);
    if (n < 1 || n > 50) {
        alert("Số lượng phần tử phải từ 1 đến 50!");
        return;
    }
    mang = [];
    for (let i = 0; i < n; i++) {
        let giaTri = Number(document.getElementById("phanTu" + i).value);
        mang.push(giaTri);
    }
    let tong = 0;
    let dem = 0;
    for (let i = 0; i < mang.length; i++) {
        // Kiểm tra chia hết cho 3
        if (mang[i] % 3 === 0) {
            tong += mang[i];
            dem++;
        }
    }
    let ketQua = "Mảng vừa nhập: " + mang.join(", ") + "<br>";
    if (dem === 0) {
        ketQua += "Không có số nào chia hết cho 3.";
    } else {
        let trungBinh = tong / dem;
        ketQua += "Các số chia hết cho 3: ";
        for (let i = 0; i < mang.length; i++) {
            if (mang[i] % 3 === 0) {
                ketQua += mang[i] + " ";
            }
        }
        ketQua += "<br>Trung bình cộng = " + trungBinh;
    }
    document.getElementById("ketQuaMang").innerHTML = ketQua;
}