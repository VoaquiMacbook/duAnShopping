package com.example.duan_coffeeshop;

import static com.example.duan_coffeeshop.OrderActivity.orderDAO;

import android.os.Bundle;

import androidx.annotation.NonNull;
import androidx.annotation.Nullable;
import androidx.fragment.app.Fragment;
import androidx.recyclerview.widget.LinearLayoutManager;
import androidx.recyclerview.widget.RecyclerView;

import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.LinearLayout;

import com.example.duan_coffeeshop.adapter.CartAdapter;
import com.example.duan_coffeeshop.adapter.HistoryAdapter;
import com.example.duan_coffeeshop.adapter.ItemHistoryAdapter;
import com.example.duan_coffeeshop.adapter.OrderAdapterRcv;
import com.example.duan_coffeeshop.model.DonHang;
import com.example.duan_coffeeshop.model.ChiTietDonHang;

import java.util.ArrayList;
import java.util.List;

import retrofit2.Call;
import retrofit2.Callback;
import retrofit2.Response;
import retrofit2.Retrofit;
import retrofit2.converter.gson.GsonConverterFactory;

/**
 * A simple {@link Fragment} subclass.
 * Use the {@link HistoryFragment#newInstance} factory method to
 * create an instance of this fragment.
 */
public class HistoryFragment extends Fragment {

    // TODO: Rename parameter arguments, choose names that match
    // the fragment initialization parameters, e.g. ARG_ITEM_NUMBER
    private static final String ARG_PARAM1 = "param1";
    private static final String ARG_PARAM2 = "param2";

    // TODO: Rename and change types of parameters
    private String mParam1;
    private String mParam2;

   private RecyclerView rcv;
   private HistoryAdapter historyadapter; // Thêm biến AdapterLichsu


    public HistoryFragment() {
        // Required empty public constructor
    }

    /**
     * Use this factory method to create a new instance of
     * this fragment using the provided parameters.
     *
     * @param param1 Parameter 1.
     * @param param2 Parameter 2.
     * @return A new instance of fragment HistoryFragment.
     */
    // TODO: Rename and change types and number of parameters
    public static HistoryFragment newInstance(String param1, String param2) {
        HistoryFragment fragment = new HistoryFragment();
        Bundle args = new Bundle();
        args.putString(ARG_PARAM1, param1);
        args.putString(ARG_PARAM2, param2);
        fragment.setArguments(args);
        return fragment;
    }
    @Override
    public void onResume() {
        super.onResume();


        Retrofit retrofit = new Retrofit.Builder()
                .baseUrl(APIService.base_URL)
                .addConverterFactory(GsonConverterFactory.create())
                .build();

        APIService service = retrofit.create(APIService.class);

        service.getListItem().enqueue(new Callback<ArrayList<DonHang>>() {
            @Override
            public void onResponse(Call<ArrayList<DonHang>> call, Response<ArrayList<DonHang>> response) {
                ArrayList<DonHang>  list = response.body();
                RecyclerView.LayoutManager layoutManager = new LinearLayoutManager(
                        getContext(),
                        LinearLayoutManager.VERTICAL, false);
                rcv.setLayoutManager(layoutManager);
                historyadapter = new HistoryAdapter(getContext(), list);
                rcv.setAdapter(historyadapter);
                historyadapter.notifyDataSetChanged();

            }


            @Override
            public void onFailure(Call<ArrayList<DonHang>> call, Throwable t) {
                // Xử lý lỗi khi gọi API
            }
        });


    }
    @Override
    public void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        if (getArguments() != null) {
            mParam1 = getArguments().getString(ARG_PARAM1);
            mParam2 = getArguments().getString(ARG_PARAM2);
        }
    }

    @Override
    public View onCreateView(LayoutInflater inflater, ViewGroup container,
                             Bundle savedInstanceState) {
        View view = inflater.inflate(R.layout.fragment_history, container, false);
        rcv = view.findViewById(R.id.rcvHistory);


        return view;

    }

    @Override
    public void onViewCreated(@NonNull View view, @Nullable Bundle savedInstanceState) {
        super.onViewCreated(view, savedInstanceState);
        rcv = view.findViewById(R.id.rcvHistory);


        Retrofit retrofit = new Retrofit.Builder()
                .baseUrl(APIService.base_URL)
                .addConverterFactory(GsonConverterFactory.create())
                .build();

        APIService service = retrofit.create(APIService.class);

        service.getListItem().enqueue(new Callback<ArrayList<DonHang>>() {
            @Override
            public void onResponse(Call<ArrayList<DonHang>> call, Response<ArrayList<DonHang>> response) {
              ArrayList<DonHang>  list = response.body();
                RecyclerView.LayoutManager layoutManager = new LinearLayoutManager(
                        getContext(),
                        LinearLayoutManager.VERTICAL, false);
                rcv.setLayoutManager(layoutManager);
                historyadapter = new HistoryAdapter(getContext(), list);
                rcv.setAdapter(historyadapter);
                historyadapter.notifyDataSetChanged();

            }


            @Override
            public void onFailure(Call<ArrayList<DonHang>> call, Throwable t) {
                // Xử lý lỗi khi gọi API
            }
        });
    }

}