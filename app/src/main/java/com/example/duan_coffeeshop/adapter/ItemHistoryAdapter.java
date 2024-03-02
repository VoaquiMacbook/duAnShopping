package com.example.duan_coffeeshop.adapter;

import android.app.Activity;
import android.content.Context;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.ImageView;
import android.widget.TextView;

import androidx.annotation.NonNull;
import androidx.recyclerview.widget.RecyclerView;

import com.bumptech.glide.Glide;
import com.bumptech.glide.request.RequestOptions;
import com.example.duan_coffeeshop.R;
import com.example.duan_coffeeshop.model.ChiTietDonHang;

import java.util.ArrayList;

public class ItemHistoryAdapter extends RecyclerView.Adapter<ItemHistoryAdapter.MyViewHolder>{
    Context context;
    ArrayList<ChiTietDonHang> list;
    public ItemHistoryAdapter(Context context, ArrayList<ChiTietDonHang> list) {
        this.context = context;
        this.list = list;
//        this.tongtien = 0.0f;
//        this.tvCartTien = tvCartTien; // Gán tham chiếu đến TextView
//        TinhToanTongTien();
    }

    @NonNull
    @Override
    public ItemHistoryAdapter.MyViewHolder onCreateViewHolder(@NonNull ViewGroup parent, int viewType) {
        View view = LayoutInflater.from(context).inflate(R.layout.item_history_sanpham, parent, false);

        ItemHistoryAdapter.MyViewHolder viewHolder=new ItemHistoryAdapter.MyViewHolder(view);
        return viewHolder ;
    }

    @Override
    public void onBindViewHolder(@NonNull MyViewHolder holder, int position) {

         ChiTietDonHang item = list.get(position);
         Float gia;
         Float dongia= Float.parseFloat(item.getDonGia());
         if(item.getGia()!=null)
         {
            Float giaTopping=  Float.parseFloat(item.getGia());
            gia= dongia+giaTopping;
         }
         else
         {
             gia=dongia;
         }
        holder.tvHistoryTenSP.setText(item.getTenThucUong());
        holder.tvHistoryTopping.setText(item.getTenTopping());

        holder.tvHistorySoLuongSP.setText(item.getSoLuong());
        holder.tvHistoryGiaBanSP.setText(String.valueOf(gia));
        Glide.with(context)
                .load(item.getHinhAnh())
                .apply(RequestOptions.centerCropTransform())
                .into(holder.imgHistoryViewSP);

    }



    @Override
    public int getItemCount() {
        return list.size();
    }


    class MyViewHolder extends RecyclerView.ViewHolder
    {

        TextView tvHistoryTenSP, tvHistoryTopping, tvHistorySoLuongSP,tvHistoryGiaBanSP;
        ImageView imgHistoryViewSP;

        public MyViewHolder(View view)
        {
            super(view);
            tvHistoryTenSP=view.findViewById(R.id.tvHistoryTenSP);
            tvHistoryTopping=view.findViewById(R.id.tvHistoryTopping);
            imgHistoryViewSP=view.findViewById(R.id.imgHistoryViewSP);
            tvHistorySoLuongSP=view.findViewById(R.id.tvHistorySoLuongSP);

            tvHistoryGiaBanSP=view.findViewById(R.id.tvHistoryGiaBanSP);


        }
    }

}
