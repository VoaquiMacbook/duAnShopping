package com.example.duan_coffeeshop.model;

import java.util.List;

public class ThanhToan {
    private String manv;
    private String ngay;
    private String ghichu;
    private List<invoiceDetail> invoiceDetails;
    private List<toppingDetail> toppingDetails;

    public ThanhToan() {
    }

    public ThanhToan(String manv, String ngay, String ghichu, List<invoiceDetail> invoiceDetails, List<toppingDetail> toppingDetails) {
        this.manv = manv;
        this.ngay = ngay;
        this.ghichu = ghichu;
        this.invoiceDetails = invoiceDetails;
        this.toppingDetails = toppingDetails;
    }

    public String getManv() {
        return manv;
    }

    public void setManv(String manv) {
        this.manv = manv;
    }

    public String getNgay() {
        return ngay;
    }

    public void setNgay(String ngay) {
        this.ngay = ngay;
    }

    public String getGhichu() {
        return ghichu;
    }

    public void setGhichu(String ghichu) {
        this.ghichu = ghichu;
    }

    public List<invoiceDetail> getInvoiceDetails() {
        return invoiceDetails;
    }

    public void setInvoiceDetails(List<invoiceDetail> invoiceDetails) {
        this.invoiceDetails = invoiceDetails;
    }

    public List<toppingDetail> getToppingDetails() {
        return toppingDetails;
    }

    public void setToppingDetails(List<toppingDetail> toppingDetails) {
        this.toppingDetails = toppingDetails;
    }
}

