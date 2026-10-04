class CongNhan {
    constructor(stt, hoTen, ngaySinh, diaChi, luong, chucVu) {
        this.stt = stt;
        this.hoTen = hoTen;
        this.ngaySinh = ngaySinh;
        this.diaChi = diaChi;
        this.luong = luong;
        this.chucVu = chucVu;
    }
}
let danhSachCongNhan = [
    new CongNhan(1, "Trương Tấn A", "11-11-1997", "Quảng Nam", 2000, "Abc"),
    new CongNhan(2, "Trương Tấn B", "11-11-1998", "Đà Nẵng", 2000, "Abc"),
    new CongNhan(3, "Trương Tấn C", "11-11-1999", "Huế", 2000, "Abc"),
];
function sapXepTheoHoTen(danhSach) {
    return danhSach.sort((a, b) => 
        a.hoTen.localeCompare(b.hoTen, 'vi', { sensitivity: 'base' })
    );
}

function hienThiDanhSach() {
    const tableBody = document.getElementById("workerTableBody");   
    if (!tableBody) return;
    tableBody.innerHTML = "";
    const danhSachDaSapXep = sapXepTheoHoTen([...danhSachCongNhan]);
    danhSachDaSapXep.forEach((worker, index) => {
        const row = document.createElement("tr");

        row.innerHTML = `
            <td>${index + 1}</td>
            <td>${worker.hoTen}</td>
            <td>${worker.ngaySinh}</td>
            <td>${worker.diaChi}</td>
            <td>${worker.luong}</td>
            <td>${worker.chucVu}</td>
        `;
        tableBody.appendChild(row);
    });
}
document.addEventListener("DOMContentLoaded", function () {
    hienThiDanhSach();
});