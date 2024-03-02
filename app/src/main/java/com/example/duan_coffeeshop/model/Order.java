package com.example.duan_coffeeshop.model;

import java.io.Serializable;
import java.util.ArrayList;
import java.util.List;

public class Order implements Serializable {
   private Topping toppingsSelect;
   private String MaSize;
   private String MaThucUong;
   private String TenSize;
   private String TenThucUong;
   private String MoTa;
   private String GiaSize;
   private String HinhAnh;
   private String GhiChu;
   private int quantity;

   public Order(Topping toppingsSelect, String maSize, String maThucUong, String tenSize, String tenThucUong, String moTa, String giaSize, String hinhAnh, String ghiChu, int quantity) {
      this.toppingsSelect = toppingsSelect;
      MaSize = maSize;
      MaThucUong = maThucUong;
      TenSize = tenSize;
      TenThucUong = tenThucUong;
      MoTa = moTa;
      GiaSize = giaSize;
      HinhAnh = hinhAnh;
      GhiChu = ghiChu;
      this.quantity = quantity;
   }

   public Topping getToppingsSelect() {
      return toppingsSelect;
   }

   public void setToppingsSelect(Topping toppingsSelect) {
      this.toppingsSelect = toppingsSelect;
   }

   public String getMaSize() {
      return MaSize;
   }

   public void setMaSize(String maSize) {
      MaSize = maSize;
   }

   public String getMaThucUong() {
      return MaThucUong;
   }

   public void setMaThucUong(String maThucUong) {
      MaThucUong = maThucUong;
   }

   public String getTenSize() {
      return TenSize;
   }

   public void setTenSize(String tenSize) {
      TenSize = tenSize;
   }

   public String getTenThucUong() {
      return TenThucUong;
   }

   public void setTenThucUong(String tenThucUong) {
      TenThucUong = tenThucUong;
   }

   public String getMoTa() {
      return MoTa;
   }

   public void setMoTa(String moTa) {
      MoTa = moTa;
   }

   public String getGiaSize() {
      return GiaSize;
   }

   public void setGiaSize(String giaSize) {
      GiaSize = giaSize;
   }

   public String getHinhAnh() {
      return HinhAnh;
   }

   public void setHinhAnh(String hinhAnh) {
      HinhAnh = hinhAnh;
   }

   public String getGhiChu() {
      return GhiChu;
   }

   public void setGhiChu(String ghiChu) {
      GhiChu = ghiChu;
   }

   public int getQuantity() {
      return quantity;
   }

   public void setQuantity(int quantity) {
      this.quantity = quantity;
   }
}


