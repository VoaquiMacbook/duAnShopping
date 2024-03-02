package com.example.duan_coffeeshop.model;

public class ChiTietDonHang {
    private String MaHoaDon;
    private String    MaSize;
    private String     DonGia;
    private String     SoLuong;
    private String     TenTopping;
    private String GiaTopping;
    private String  gia;
    private String    HinhAnh;
    private String TenThucUong;

    public ChiTietDonHang() {
    }

    public ChiTietDonHang(String maHoaDon, String maSize, String donGia, String soLuong, String tenTopping, String giaTopping, String gia, String hinhAnh, String tenThucUong) {
        MaHoaDon = maHoaDon;
        MaSize = maSize;
        DonGia = donGia;
        SoLuong = soLuong;
        TenTopping = tenTopping;
        GiaTopping = giaTopping;
        this.gia = gia;
        HinhAnh = hinhAnh;
        TenThucUong = tenThucUong;
    }

    public String getMaHoaDon() {
        return MaHoaDon;
    }

    public void setMaHoaDon(String maHoaDon) {
        MaHoaDon = maHoaDon;
    }

    public String getMaSize() {
        return MaSize;
    }

    public void setMaSize(String maSize) {
        MaSize = maSize;
    }

    public String getDonGia() {
        return DonGia;
    }

    public void setDonGia(String donGia) {
        DonGia = donGia;
    }

    public String getSoLuong() {
        return SoLuong;
    }

    public void setSoLuong(String soLuong) {
        SoLuong = soLuong;
    }

    public String getTenTopping() {
        return TenTopping;
    }

    public void setTenTopping(String tenTopping) {
        TenTopping = tenTopping;
    }

    public String getGiaTopping() {
        return GiaTopping;
    }

    public void setGiaTopping(String giaTopping) {
        GiaTopping = giaTopping;
    }

    public String getGia() {
        return gia;
    }

    public void setGia(String gia) {
        this.gia = gia;
    }

    public String getHinhAnh() {
        return HinhAnh;
    }

    public void setHinhAnh(String hinhAnh) {
        HinhAnh = hinhAnh;
    }

    public String getTenThucUong() {
        return TenThucUong;
    }

    public void setTenThucUong(String tenThucUong) {
        TenThucUong = tenThucUong;
    }
}
