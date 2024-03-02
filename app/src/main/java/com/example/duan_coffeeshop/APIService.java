package com.example.duan_coffeeshop;

import com.example.duan_coffeeshop.model.DonHang;
import com.example.duan_coffeeshop.model.NhanVien;
import com.example.duan_coffeeshop.model.Notify;
import com.example.duan_coffeeshop.model.Order;


import com.example.duan_coffeeshop.model.ChiTietDonHang;
import com.example.duan_coffeeshop.model.ThanhToan;
import com.example.duan_coffeeshop.model.ThongKe;
import com.example.duan_coffeeshop.model.Topping;

import java.util.ArrayList;

import retrofit2.Call;
import retrofit2.http.Body;
import retrofit2.http.GET;
import retrofit2.http.POST;
import retrofit2.http.Query;

public interface APIService {
    public static String base_URL = "https://nan2205nguyentrannhatan.id.vn/APICoffee/";
    // GOI API lay danh sach san pham


    @GET("getnv.php")
    Call<ArrayList<NhanVien>> getListNV();


    @GET("getitem.php")
    Call<ArrayList<DonHang>> getListItem();
    @GET("gettest2.php")
    Call<ArrayList<ChiTietDonHang>> getSpHistory(@Query("iditem") int iditemSpHistory);
    @GET("getsize.php")
    Call<Order> getSize(@Query("id") int idSize ,@Query("size") String nameSize);
    @GET("getopping.php")
    Call<ArrayList<Topping>> getTopping();

  //  Call<ArrayList<Cart>> getListCart(@Query("id")int cart);

    @GET("getOrder.php")
    Call<ArrayList<Order>> getListOrder();
    @GET("getLoaihucUong.php")
    Call<ArrayList<Order>> getLoaiCall(@Query("id")int id);

    @GET("getdoanhthu.php")
    Call<ArrayList<ThongKe>> getDoanhThu(@Query("s")String dateStart, @Query("e")String dateEnd );
    @GET("getseller.php")
    Call<ArrayList<ThongKe>> getThongke();
    @POST("posThanhToan.php")
    Call<Notify> addThanhToan(@Body ThanhToan thanhToan);
    

/*
* @Method("Tên của api")'
* Call<Giá trị trả về của api> tên_Hàm(gia_tri_gui_len_api)
* */
}
