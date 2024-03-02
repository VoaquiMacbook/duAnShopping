package com.example.duan_coffeeshop.model;

public class ThongKe {
    private String TenThucUong;
    private String TongSoLuong;
    private String TongTienThongKe;
    private String DoanhThu;
    private String Ngay;

    public ThongKe(String tenThucUong, String tongSoLuong, String tongTienThongKe, String doanhThu, String ngayLapHD) {
        TenThucUong = tenThucUong;
        TongSoLuong = tongSoLuong;
        TongTienThongKe = tongTienThongKe;
        DoanhThu = doanhThu;
        Ngay = ngayLapHD;
    }

    public String getDoanhThu() {
        return DoanhThu;
    }

    public void setDoanhThu(String doanhThu) {
        DoanhThu = doanhThu;
    }

    public String getNgayLapHD() {
        return Ngay;
    }

    public void setNgayLapHD(String ngayLapHD) {
        Ngay = ngayLapHD;
    }

    public String getTenThucUong() {
        return TenThucUong;
    }

    public void setTenThucUong(String tenThucUong) {
        TenThucUong = tenThucUong;
    }

    public String getTongSoLuong() {
        return TongSoLuong;
    }

    public void setTongSoLuong(String tongSoLuong) {
        TongSoLuong = tongSoLuong;
    }

    public String getTongTienThongKe() {
        return TongTienThongKe;
    }

    public void setTongTienThongKe(String tongTienThongKe) {
        TongTienThongKe = tongTienThongKe;
    }
}
