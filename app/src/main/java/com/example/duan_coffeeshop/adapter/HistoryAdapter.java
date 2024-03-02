package com.example.duan_coffeeshop.adapter;

import android.content.Context;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.LinearLayout;
import android.widget.TextView;
import android.widget.Toast;

import androidx.annotation.NonNull;
import androidx.recyclerview.widget.LinearLayoutManager;
import androidx.recyclerview.widget.RecyclerView;

import com.example.duan_coffeeshop.APIService;
import com.example.duan_coffeeshop.R;
import com.example.duan_coffeeshop.model.ChiTietDonHang;
import com.example.duan_coffeeshop.model.DonHang;

import java.util.ArrayList;
import java.util.List;

import retrofit2.Call;
import retrofit2.Callback;
import retrofit2.Response;
import retrofit2.Retrofit;
import retrofit2.converter.gson.GsonConverterFactory;

public class HistoryAdapter extends RecyclerView.Adapter<HistoryAdapter.MyViewHolder> {
    private RecyclerView.RecycledViewPool viewPool= new RecyclerView.RecycledViewPool();
    private Context context;
    private ArrayList<DonHang> dataList;

    public HistoryAdapter(Context context, ArrayList<DonHang> dataList) {
        this.context = context;
        this.dataList = dataList;
    }

    public void setData(List<DonHang> newDataList) {
        this.dataList = new ArrayList<>(newDataList);
    }

    @NonNull
    @Override
    public MyViewHolder onCreateViewHolder(@NonNull ViewGroup parent, int viewType) {
        View view = LayoutInflater.from(context).inflate(R.layout.item_history, parent, false);
        return new MyViewHolder(view);
    }

    @Override
    public void onBindViewHolder(@NonNull MyViewHolder holder, int position) {
        DonHang item = dataList.get(position);
        holder.tvMahoadon.setText(item.getMaHoaDon());
        holder.tvNgay.setText(item.getNgayLapHD());
        holder.tvHistoryNote.setText(item.getGhiChu());
        holder.tvTongTien.setText(item.getTongTien());
        Retrofit retrofit = new Retrofit.Builder()
                .baseUrl(APIService.base_URL)
                .addConverterFactory(GsonConverterFactory.create())
                .build();

        APIService service = retrofit.create(APIService.class);
        service.getSpHistory(Integer.parseInt(item.getMaHoaDon())).enqueue(new Callback<ArrayList<ChiTietDonHang>>() {
            @Override
            public void onResponse(Call<ArrayList<ChiTietDonHang>> call, Response<ArrayList<ChiTietDonHang>> response) {

               ArrayList<ChiTietDonHang> lst= response.body();
                LinearLayoutManager layoutManager= new LinearLayoutManager(holder.rvchitiet.getContext(),LinearLayoutManager.VERTICAL, false);
                layoutManager.setInitialPrefetchItemCount(lst.size());
                holder.rvchitiet.setLayoutManager(layoutManager);
                ItemHistoryAdapter itemHistoryAdapter = new ItemHistoryAdapter(context.getApplicationContext(), lst);
                holder.rvchitiet.setAdapter(itemHistoryAdapter);
                itemHistoryAdapter.notifyDataSetChanged();
                holder.rvchitiet.setRecycledViewPool(viewPool);
            }


            @Override
            public void onFailure(Call<ArrayList<ChiTietDonHang>> call, Throwable t) {

            }
        });


    }

    @Override
    public int getItemCount() {
        return dataList.size();
    }

    static class MyViewHolder extends RecyclerView.ViewHolder {
        TextView tvMahoadon, tvNgay, tvHistoryNote,tvTongTien;
        RecyclerView rvchitiet;

        public MyViewHolder(@NonNull View itemView) {
            super(itemView);
            tvNgay = itemView.findViewById(R.id.tvNgay);
            tvMahoadon = itemView.findViewById(R.id.tvHDMahoadon);
            tvHistoryNote = itemView.findViewById(R.id.tvHistoryNote);
            rvchitiet= itemView.findViewById(R.id.rcvHisorySP);
            tvTongTien=itemView.findViewById(R.id.tvHDTongTien);
        }
    }
}