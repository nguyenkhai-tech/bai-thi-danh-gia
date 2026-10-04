function isLeapYear(nam) {
    if ((nam % 4 === 0 && nam % 100 !== 0) || (nam % 400 === 0)) {
        return true;
    }
    return false;
}
function tinhSoNgayTrongThang(thang, nam) {
    switch (thang) {
        
        case 1:
        case 3:
        case 5:
        case 7:
        case 8:
        case 10:
        case 12:
            return 31;

        
        case 4:
        case 6:
        case 9:
        case 11:
            return 30;

        case 2:
            return isLeapYear(nam) ? 29 : 28;

        default:
            return null;
        }
}
function xuLyTinhSoNgay() {
    const inputElement = document.getElementById("thangNam");
    const chuoiNhap = inputElement.value.trim();

    const regexMMYYYY = /^(0[1-9]|1[0-2])\/\d{4}$/;

    if (!regexMMYYYY.test(chuoiNhap)) {
        alert("Định dạng nhập vào không hợp lệ! Vui lòng nhập đúng định dạng MM/yyyy (Ví dụ: 02/2020, 08/2024).");
        document.getElementById("ketQua").innerHTML = "Lỗi: Định dạng nhập vào phải là MM/yyyy!";
        return;
    }

    const parts = chuoiNhap.split("/");
    const thang = parseInt(parts[0], 10);
    const nam = parseInt(parts[1], 10);

    const soNgay = tinhSoNgayTrongThang(thang, nam);

    let thongBao = `Tháng ${thang}/${nam} có <strong>${soNgay} ngày</strong>.`;
    
    if (thang === 2) {
        if (isLeapYear(nam)) {
            thongBao += " (Do " + nam + " là năm nhuận)";
        } else {
            thongBao += " (Do " + nam + " không phải là năm nhuận)";
        }
    }

    document.getElementById("ketQua").innerHTML = thongBao;
}