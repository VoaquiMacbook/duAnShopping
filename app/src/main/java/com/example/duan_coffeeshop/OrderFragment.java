package com.example.duan_coffeeshop;

import android.os.Bundle;

import androidx.annotation.NonNull;
import androidx.annotation.Nullable;
import androidx.fragment.app.Fragment;
import androidx.recyclerview.widget.LinearLayoutManager;
import androidx.recyclerview.widget.RecyclerView;

import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.Button;

import com.example.duan_coffeeshop.adapter.OrderAdapterRcv;
import com.example.duan_coffeeshop.model.Order;

import java.util.ArrayList;

import retrofit2.Call;
import retrofit2.Callback;
import retrofit2.Response;
import retrofit2.Retrofit;
import retrofit2.converter.gson.GsonConverterFactory;

/**
 * A simple {@link Fragment} subclass.
 * Use the {@link OrderFragment#newInstance} factory method to
 * create an instance of this fragment.
 */
public class OrderFragment extends Fragment {
    RecyclerView rcvOrder;
    OrderAdapterRcv adapterRcv;
    private Button btnOrderALl, btnOrSInhTo,btnOrderMt,btnOrderNuoc,btnOrderCoffe;

    // TODO: Rename parameter arguments, choose names that match
    // the fragment initialization parameters, e.g. ARG_ITEM_NUMBER
    private static final String ARG_PARAM1 = "param1";
    private static final String ARG_PARAM2 = "param2";

    // TODO: Rename and change types of parameters
    private String mParam1;
    private String mParam2;
    private  RecyclerView recyclerView;

    public OrderFragment() {
        // Required empty public constructor
    }
    public static OrderFragment newInstance(String param1, String param2) {
        OrderFragment fragment = new OrderFragment();
        Bundle args = new Bundle();
        args.putString(ARG_PARAM1, param1);
        args.putString(ARG_PARAM2, param2);
        fragment.setArguments(args);
        return fragment;
    }


    @Override
    public void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);


//        recyclerView.setLayoutManager(new LinearLayoutManager(this));

        if (getArguments() != null) {
            mParam1 = getArguments().getString(ARG_PARAM1);
            mParam2 = getArguments().getString(ARG_PARAM2);
        }
    }

    @Override
    public View onCreateView(LayoutInflater inflater, ViewGroup container,
                             Bundle savedInstanceState) {
        // Inflate the layout for this fragment
        return inflater.inflate(R.layout.fragment_order, container, false);
    }

    @Override
    public void onViewCreated(@NonNull View view, @Nullable Bundle savedInstanceState) {
        super.onViewCreated(view, savedInstanceState);
        recyclerView = view.findViewById(R.id.rcvOrder);
        btnOrderALl = view.findViewById(R.id.btnOrderALl);
        btnOrderMt = view.findViewById(R.id.btnOrderMt);
        btnOrderCoffe = view.findViewById(R.id.btnOrderCofee);
        btnOrderNuoc = view.findViewById(R.id.btnOrderNuoc);
        btnOrSInhTo = view.findViewById(R.id.btnOrSInhTo);
        getorderALl();
        btnOrderALl.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                getorderALl();
            }
        });
        btnOrderCoffe.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                getLoai(1);
            }
        });
        btnOrderMt.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                getLoai(3);
            }
        });
        btnOrderNuoc.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                getLoai(4);
            }
        });
        btnOrSInhTo.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                getLoai(2);
            }
        });



    }
    private void getorderALl()
    {
        Retrofit retrofit = new Retrofit.Builder()
                .baseUrl(APIService.base_URL)
                .addConverterFactory(GsonConverterFactory.create())
                .build();
        APIService service = retrofit.create(APIService.class);
        service.getListOrder().enqueue(new Callback<ArrayList<Order>>() {
            @Override
            public void onResponse(Call<ArrayList<Order>> call, Response<ArrayList<Order>> response) {
                ArrayList<Order> orders = response.body();
                RecyclerView.LayoutManager layoutManager = new LinearLayoutManager(
                        getContext(),
                        LinearLayoutManager.VERTICAL, false);
                recyclerView.setLayoutManager(layoutManager);
                adapterRcv = new OrderAdapterRcv(getContext(), orders);
                recyclerView.setAdapter(adapterRcv);
                adapterRcv.notifyDataSetChanged();
            }
            @Override
            public void onFailure(Call<ArrayList<Order>> call, Throwable t) {

            }
        });
    }
    private   void getLoai(int i)
    {
        Retrofit retrofit = new Retrofit.Builder()
                .baseUrl(APIService.base_URL)
                .addConverterFactory(GsonConverterFactory.create())
                .build();
        APIService service = retrofit.create(APIService.class);
        service.getLoaiCall(i).enqueue(new Callback<ArrayList<Order>>() {
            @Override
            public void onResponse(Call<ArrayList<Order>> call, Response<ArrayList<Order>> response) {
                ArrayList<Order> orders = response.body();
                RecyclerView.LayoutManager layoutManager = new LinearLayoutManager(
                        getContext(),
                        LinearLayoutManager.VERTICAL, false);
                recyclerView.setLayoutManager(layoutManager);
                adapterRcv = new OrderAdapterRcv(getContext(), orders);
                recyclerView.setAdapter(adapterRcv);
                adapterRcv.notifyDataSetChanged();
            }
            @Override
            public void onFailure(Call<ArrayList<Order>> call, Throwable t) {

            }
        });
    }


}