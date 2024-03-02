package com.example.duan_coffeeshop.adapter;

import android.app.Activity;
import android.content.Context;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.CheckBox;
import android.widget.RadioButton;

import androidx.annotation.NonNull;
import androidx.recyclerview.widget.RecyclerView;

import com.example.duan_coffeeshop.R;
import com.example.duan_coffeeshop.model.Order;
import com.example.duan_coffeeshop.model.Topping;

import java.util.ArrayList;

public class ToppingAdapter extends RecyclerView.Adapter<ToppingAdapter.ViewHolder2> {
Context context;
ArrayList<Topping> list;



    public ToppingAdapter(Context context, ArrayList<Topping> list) {
        this.context = context;
        this.list = list;
    }

    @NonNull
    @Override
    public ViewHolder2 onCreateViewHolder(@NonNull ViewGroup parent, int viewType) {
        LayoutInflater inflater =((Activity)context).getLayoutInflater();
        View view= inflater.inflate(R.layout.item_detail_topping,null);
        ToppingAdapter.ViewHolder2 viewHolder=new ToppingAdapter.ViewHolder2(view);
        return viewHolder ;
    }

    @Override
    public void onBindViewHolder(@NonNull ViewHolder2 holder, int position) {
        final Topping topping= list.get(position);
        final  int pos= position;

       holder.ckTopping.setText(topping.getTenTopping());
        holder.ckTopping.setChecked(topping.isChecked());
        holder.ckTopping.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                boolean isChecked = holder.ckTopping.isChecked();
                topping.setChecked(isChecked);

            }
        });
    }

    @Override
    public int getItemCount() {
        return list.size();
    }
    class ViewHolder2 extends RecyclerView.ViewHolder
    {
        RadioButton ckTopping;

        public ViewHolder2(@NonNull View itemView) {

            super(itemView);
            ckTopping =itemView.findViewById(R.id.rdoTopping);
        }
    }
}
