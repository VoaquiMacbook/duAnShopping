package com.example.duan_coffeeshop.model;

public class invoiceDetail {
    private String size;
    private String cost;
    private String quantity;

    public invoiceDetail() {
    }

    public invoiceDetail(String size, String cost, String quantity) {
        this.size = size;
        this.cost = cost;
        this.quantity = quantity;
    }

    public String getSize() {
        return size;
    }

    public void setSize(String size) {
        this.size = size;
    }

    public String getCost() {
        return cost;
    }

    public void setCost(String cost) {
        this.cost = cost;
    }

    public String getQuantity() {
        return quantity;
    }

    public void setQuantity(String quantity) {
        this.quantity = quantity;
    }
}
