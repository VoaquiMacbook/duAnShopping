package com.example.duan_coffeeshop.model;

public class toppingDetail {
    private String   id;
    private String    size;
    private String  price;
    private String  quantity;

    public toppingDetail() {
    }

    public toppingDetail(String id, String size, String price, String quantity) {
        this.id = id;
        this.size = size;
        this.price = price;
        this.quantity = quantity;
    }

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getSize() {
        return size;
    }

    public void setSize(String size) {
        this.size = size;
    }

    public String getPrice() {
        return price;
    }

    public void setPrice(String price) {
        this.price = price;
    }

    public String getQuantity() {
        return quantity;
    }

    public void setQuantity(String quantity) {
        this.quantity = quantity;
    }
}
