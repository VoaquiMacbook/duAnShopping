package com.example.duan_coffeeshop.model;

import java.util.ArrayList;
import java.util.List;

public class DonHang {
    private String MaHoaDon;
    private String MaThuNgan;
    private String NgayLapHD;
    private String GhiChu;

    public DonHang() {
    }

    private String TongTien;
    private ArrayList<ChiTietDonHang> chiTietDonHang;

    public DonHang(String maHoaDon, String maThuNgan, String ngayLapHD, String ghiChu, String tongTien, ArrayList<ChiTietDonHang> chiTietDonHang) {
        MaHoaDon = maHoaDon;
        MaThuNgan = maThuNgan;
        NgayLapHD = ngayLapHD;
        GhiChu = ghiChu;
        TongTien = tongTien;
        this.chiTietDonHang = chiTietDonHang;
    }

    public String getMaHoaDon() {
        return MaHoaDon;
    }

    public void setMaHoaDon(String maHoaDon) {
        MaHoaDon = maHoaDon;
    }

    public String getMaThuNgan() {
        return MaThuNgan;
    }

    public void setMaThuNgan(String maThuNgan) {
        MaThuNgan = maThuNgan;
    }

    public String getNgayLapHD() {
        return NgayLapHD;
    }

    public void setNgayLapHD(String ngayLapHD) {
        NgayLapHD = ngayLapHD;
    }

    public String getGhiChu() {
        return GhiChu;
    }

    public void setGhiChu(String ghiChu) {
        GhiChu = ghiChu;
    }

    public String getTongTien() {
        return TongTien;
    }

    public void setTongTien(String tongTien) {
        TongTien = tongTien;
    }

    public ArrayList<ChiTietDonHang> getChiTietDonHang() {
        return chiTietDonHang;
    }

    public void setChiTietDonHang(ArrayList<ChiTietDonHang> chiTietDonHang) {
        this.chiTietDonHang = chiTietDonHang;
    }
}
