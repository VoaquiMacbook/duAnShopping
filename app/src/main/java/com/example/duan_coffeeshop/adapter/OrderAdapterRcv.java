package com.example.duan_coffeeshop.adapter;



import static com.example.duan_coffeeshop.OrderActivity.orderDAO;

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

public class OrderAdapterRcv extends RecyclerView.Adapter<OrderAdapterRcv.ViewHolder> {
private final Context context;
private ArrayList<Order> list;

    public OrderAdapterRcv(Context context, ArrayList<Order> list) {
        this.context = context;
        this.list = list;
    }

    @NonNull
    @Override
    public ViewHolder onCreateViewHolder(@NonNull ViewGroup parent, int viewType) {
        LayoutInflater layoutInflater = ((Activity) context).getLayoutInflater();
        View view = layoutInflater.inflate(R.layout.item_order,null);
        ViewHolder viewHolder = new ViewHolder(view);
        return viewHolder;
    }

    @Override
    public void onBindViewHolder(@NonNull ViewHolder holder, int position) {
        final Order order = list.get(position);
        holder.orderTitle.setText(order.getTenThucUong() + " - Size " + order.getTenSize());
        holder.orderContent.setText(order.getMoTa());
        holder.orderGia.setText(order.getGiaSize());

        Glide.with(context)
                .load(order.getHinhAnh())
                .apply(RequestOptions.centerCropTransform())
                .into(holder.orderPic);

holder.cvOrder.setOnClickListener(new View.OnClickListener() {
    @Override
    public void onClick(View v) {


                Intent i = new Intent(context, DetailActivity.class);
                Bundle bundle = new Bundle();
                order.setQuantity(1);
        i.putExtra("pos", position);
                bundle.putSerializable("cart", order); // Đóng gói đối tượng Cart vào Bundle
                i.putExtras(bundle); // Truyền Bundle vào Intent
                context.startActivity(i);
            }

});
        holder.btnOrderThem.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {

                if(orderDAO.listCart.size() > 0){
                    boolean check = false;
                    Order orderUpdate = null;
                    for (Order order: orderDAO.listCart) {
                        if(order.getMaSize().equals(list.get(holder.getAdapterPosition()).getMaSize())){
                            check = true;
                            orderUpdate = order;
                            break;
                        }
                    }

                    if(check){
                        int index = orderDAO.listCart.indexOf(orderUpdate);
                        int quantity = orderUpdate.getQuantity() + 1;
                        orderUpdate.setQuantity(quantity);
                        orderDAO.listCart.set(index, orderUpdate);
                    }else {
                        Order orderAdd = list.get(holder.getAdapterPosition());
                        orderAdd.setQuantity(1);
                        orderDAO.listCart.add(orderAdd);
                    }
                }else {
                    Order orderAdd = list.get(holder.getAdapterPosition());
                    orderAdd.setQuantity(1);
                    orderDAO.listCart.add(orderAdd);
                }
                Toast.makeText(context, "Thêm Thành Công", Toast.LENGTH_SHORT).show();

            }
        });
    }

    @Override
    public int getItemCount() {
        return list.size();
    }




    public class ViewHolder extends RecyclerView.ViewHolder{
        TextView orderTitle, orderContent,orderGia;
        ImageView orderPic;
        CardView cvOrder;
        Button btnOrderThem;

        public ViewHolder(@NonNull View itemView) {
            super(itemView);
            orderTitle = itemView.findViewById(R.id.txtOrderTitle);
            orderContent = itemView.findViewById(R.id.txtOrderContent);
            cvOrder = itemView.findViewById(R.id.cvOrder);
            orderGia = itemView.findViewById(R.id.txtOrderGia);
            orderPic = itemView.findViewById(R.id.imgOrderPic);
            btnOrderThem = itemView.findViewById(R.id.btnOrderThem);
        }
    }
}
