package com.example.duan_coffeeshop.model;

import java.io.Serializable;

public class Topping implements Serializable {
    private String MaTopping;
    private String TenTopping;
    private String GiaTopping;

    private boolean checked;

    public Topping(String maTopping, String tenTopping, String giaTopping, boolean checked) {
        MaTopping = maTopping;
        TenTopping = tenTopping;
        GiaTopping = giaTopping;
        this.checked = checked;
    }

    public String getMaTopping() {
        return MaTopping;
    }

    public void setMaTopping(String maTopping) {
        MaTopping = maTopping;
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

    public boolean isChecked() {
        return checked;
    }

    public void setChecked(boolean checked) {
        this.checked = checked;
    }
}
