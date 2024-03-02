package com.example.duan_coffeeshop.adapter;

import android.app.Activity;
import android.content.Context;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.TextView;

import androidx.annotation.NonNull;
import androidx.recyclerview.widget.RecyclerView;

import com.example.duan_coffeeshop.R;
import com.example.duan_coffeeshop.model.ThongKe;

import java.util.ArrayList;

public class ThongKeAdapter extends RecyclerView.Adapter<ThongKeAdapter.ViewHoldert> {
   private Context context;
    private ArrayList<ThongKe> list;
    private int tongtien;

    public ThongKeAdapter(Context context, ArrayList<ThongKe> list, int tongtien) {
        this.context = context;
        this.list = list;
        this.tongtien = tongtien;
    }

    @NonNull
    @Override
    public ViewHoldert onCreateViewHolder(@NonNull ViewGroup parent, int viewType) {
        LayoutInflater inflater =((Activity)context).getLayoutInflater();
        View view= inflater.inflate(R.layout.item_detail_topseller,null);
        ThongKeAdapter.ViewHoldert viewHolder = new ThongKeAdapter.ViewHoldert(view);
        return viewHolder ;
    }

    @Override
    public void onBindViewHolder(@NonNull ViewHoldert holder, int position) {
        final ThongKe thongKe= list.get(position);
        final  int pos= position;
        holder.tvTkGia.setText(thongKe.getTongTienThongKe());
        holder.tvTkSoLy.setText(thongKe.getTongSoLuong());
        holder.tvTkTen.setText(thongKe.getTenThucUong());

    }

    @Override
    public int getItemCount() {
        return list.size();
    }


     class ViewHoldert extends RecyclerView.ViewHolder {
        TextView tvTkTen,tvTkGia,tvTkSoLy ;
        public ViewHoldert(View view) {
            super(view);
            tvTkTen=view.findViewById(R.id.tvTkTen);
            tvTkGia=view.findViewById(R.id.tvTkGia);
            tvTkSoLy=view.findViewById(R.id.tvTkSoLy);


        }
    }
}
