package com.example.duan_coffeeshop.model;

public class Detail {
    private String HinhAnh;
    private String TenSanPham;
    private String MoTa;
    private String TenTopping;
    private String TenSize;
    private String GiaSize;
    private String GhiChu;

    public Detail(String hinhAnh, String tenSanPham, String moTa, String tenTopping, String tenSize, String giaSize, String ghiChu) {
        HinhAnh = hinhAnh;
        TenSanPham = tenSanPham;
        MoTa = moTa;
        TenTopping = tenTopping;
        TenSize = tenSize;
        GiaSize = giaSize;
        GhiChu = ghiChu;
    }

    public String getHinhAnh() {
        return HinhAnh;
    }

    public void setHinhAnh(String hinhAnh) {
        HinhAnh = hinhAnh;
    }

    public String getTenSanPham() {
        return TenSanPham;
    }

    public void setTenSanPham(String tenSanPham) {
        TenSanPham = tenSanPham;
    }

    public String getMoTa() {
        return MoTa;
    }

    public void setMoTa(String moTa) {
        MoTa = moTa;
    }

    public String getTenTopping() {
        return TenTopping;
    }

    public void setTenTopping(String tenTopping) {
        TenTopping = tenTopping;
    }

    public String getTenSize() {
        return TenSize;
    }

    public void setTenSize(String tenSize) {
        TenSize = tenSize;
    }

    public String getGiaSize() {
        return GiaSize;
    }

    public void setGiaSize(String giaSize) {
        GiaSize = giaSize;
    }

    public String getGhiChu() {
        return GhiChu;
    }

    public void setGhiChu(String ghiChu) {
        GhiChu = ghiChu;
    }
}
