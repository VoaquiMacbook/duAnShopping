package com.example.duan_coffeeshop.model;

public class NhanVien {
    private String MaThuNgan;
    private String TenThuNgan;
    private String TaiKhoan;
    private String MatKhau;

    public NhanVien(String maThuNgan, String tenThuNgan, String taiKhoan, String matKhau) {
        MaThuNgan = maThuNgan;
        TenThuNgan = tenThuNgan;
        TaiKhoan = taiKhoan;
        MatKhau = matKhau;
    }

    public String getMaThuNgan() {
        return MaThuNgan;
    }

    public void setMaThuNgan(String maThuNgan) {
        MaThuNgan = maThuNgan;
    }

    public String getTenThuNgan() {
        return TenThuNgan;
    }

    public void setTenThuNgan(String tenThuNgan) {
        TenThuNgan = tenThuNgan;
    }

    public String getTaiKhoan() {
        return TaiKhoan;
    }

    public void setTaiKhoan(String taiKhoan) {
        TaiKhoan = taiKhoan;
    }

    public String getMatKhau() {
        return MatKhau;
    }

    public void setMatKhau(String matKhau) {
        MatKhau = matKhau;
    }
}
