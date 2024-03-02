package com.example.duan_coffeeshop.adapter;

import android.app.Activity;
import android.content.Context;
import android.content.Intent;
import android.os.Bundle;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.Button;
import android.widget.ImageView;
import android.widget.TextView;
import android.widget.Toast;

import androidx.annotation.NonNull;
import androidx.cardview.widget.CardView;
import androidx.recyclerview.widget.RecyclerView;

import com.bumptech.glide.Glide;
import com.bumptech.glide.request.RequestOptions;
import com.example.duan_coffeeshop.DetailActivity;
import com.example.duan_coffeeshop.R;
import com.example.duan_coffeeshop.model.Order;

import java.util.ArrayList;

public class CartAdapter extends RecyclerView.Adapter<CartAdapter.MyViewHolder>{
    Context context;
    ArrayList<Order> list;
    private Float tongtien;
    private TextView tvCartTien;// Thêm một tham chiếu đến TextView

    public CartAdapter(Context context, ArrayList<Order> list, TextView tvCartTien) {
        this.context = context;
        this.list = list;
        this.tongtien = 0.0f;
        this.tvCartTien = tvCartTien; // Gán tham chiếu đến TextView
        TinhToanTongTien();
    }

    @NonNull
    @Override
    public CartAdapter.MyViewHolder onCreateViewHolder(@NonNull ViewGroup parent, int viewType) {
        LayoutInflater inflater =((Activity)context).getLayoutInflater();
        View view= inflater.inflate(R.layout.item_cart,null);
        MyViewHolder viewHolder = new MyViewHolder(view);
        return viewHolder ;
    }

    @Override
    public void onBindViewHolder(@NonNull CartAdapter.MyViewHolder holder, int position) {
        final Order cart= list.get(position);
        final  int pos= position;
        Float giaTheosl;
       Float gia= Float.parseFloat(cart.getGiaSize());
        Float giaTopping=0.0f;
        if(cart.getToppingsSelect()!=null)
        {
            holder.tvMotaSP.setText(cart.getToppingsSelect().getTenTopping());
            giaTopping= Float.parseFloat(cart.getToppingsSelect().getGiaTopping());

        }

        giaTheosl= (gia+giaTopping)*cart.getQuantity();

        holder.tvTenSp.setText(cart.getTenThucUong());

        holder.tvGiaSp.setText(String.valueOf(giaTheosl));
        holder.tvSize.setText(cart.getTenSize());
        holder.edtSL.setText(String.valueOf(cart.getQuantity()));
        holder.itemsanpham.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                Intent i = new Intent(context, DetailActivity.class);
                Bundle bundle = new Bundle();
                bundle.putSerializable("cart", cart); // Đóng gói đối tượng Cart vào Bundle
                i.putExtras(bundle); // Truyền Bundle vào Intent
                context.startActivity(i);
            }
        });
        holder.btnThem.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                int soluong;
                float gia;
                float giaTopping=0.0f;
                    soluong= cart.getQuantity();
                    soluong+=1;
                if (cart.getToppingsSelect()!=null)
                {
                    giaTopping=Float.parseFloat(cart.getToppingsSelect().getGiaTopping());
                }
                    holder.edtSL.setText(String.valueOf(soluong));
                    cart.setQuantity(soluong);
                gia = soluong * (Float.parseFloat(cart.getGiaSize())+giaTopping);

                holder.tvGiaSp.setText(String.valueOf(gia));



                TinhToanTongTien();

            }
        });
        holder.btnTru.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                int soluong;
                float gia;
                float giaTopping=0.0f;

                    soluong= cart.getQuantity();
                    soluong-=1;
                    if(soluong==0)
                    {
                        xoaItem(pos);
                    }
                    if (cart.getToppingsSelect()!=null)
                    {
                        giaTopping=Float.parseFloat(cart.getToppingsSelect().getGiaTopping());
                    }

                    holder.edtSL.setText(String.valueOf(soluong));
                    cart.setQuantity(soluong);
                    gia = soluong * (Float.parseFloat(cart.getGiaSize())+giaTopping);

                    holder.tvGiaSp.setText(String.valueOf(gia));



                TinhToanTongTien();
            }
        });

        Glide.with(context)
                .load(cart.getHinhAnh())
                .apply(RequestOptions.centerCropTransform())
                .into(holder.ivAnh);

    }

    @Override
    public int getItemCount() {
        return list.size();
    }

    public interface PaymentClickListener {
    }


    class MyViewHolder extends RecyclerView.ViewHolder
    {

        TextView tvTenSp, tvGiaSp, tvMotaSP,tvSize;
        Button btnTru, btnThem;
        TextView edtSL;
        ImageView ivAnh;
        CardView itemsanpham;

        public MyViewHolder(View view)
        {
            super(view);
            tvSize=view.findViewById(R.id.tvSize);
            tvTenSp=view.findViewById(R.id.tvTenSp);
            btnTru=view.findViewById(R.id.btnTru);
            edtSL=view.findViewById(R.id.edtSL);
            btnThem=view.findViewById(R.id.btnThem);
            tvGiaSp=view.findViewById(R.id.tvGiaSp);
            ivAnh=view.findViewById(R.id.imageCart);
            tvMotaSP=view.findViewById(R.id.tvMotaSp);
            itemsanpham=view.findViewById(R.id.itemsanpham);

        }
    }
    public void xoaItem(int position)
    {
        list.remove(position); // Xóa item khỏi danh sách

        notifyDataSetChanged(); // Thông báo cho Adapter biết item đã bị xóa


    }

    public void TinhToanTongTien() {
        tongtien = 0.0f;
        for (Order cart : list) {
            float gia = Float.parseFloat(cart.getGiaSize());
//            if (cart.getQuantity() == null) {
//                cart.setQuantity(1);
//            }
            int soLuong = cart.getQuantity();
            Float giaTopping=0.0f;
            if(cart.getToppingsSelect()!=null)
            {
                giaTopping= Float.parseFloat(cart.getToppingsSelect().getGiaTopping());
            }
            float thanhTien = (gia+giaTopping )* soLuong;
            tongtien += thanhTien;
        }

        // Cập nhật TextView với giá trị mới của tongtien
        tvCartTien.setText(String.valueOf(tongtien));
    }

    public Float getTongtien() {
        return tongtien;
    }
}
