package com.example.duan_coffeeshop;

import static com.example.duan_coffeeshop.OrderActivity.orderDAO;

import android.os.Bundle;

import androidx.annotation.NonNull;
import androidx.annotation.Nullable;
import androidx.fragment.app.Fragment;
import androidx.recyclerview.widget.LinearLayoutManager;
import androidx.recyclerview.widget.RecyclerView;

import android.util.Log;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.Button;
import android.widget.TextView;
import android.widget.Toast;

import com.example.duan_coffeeshop.adapter.CartAdapter;
import com.example.duan_coffeeshop.model.Order;
import com.example.duan_coffeeshop.model.toppingDetail;
import com.example.duan_coffeeshop.model.DonHang;
import com.example.duan_coffeeshop.model.Notify;
import com.example.duan_coffeeshop.model.ThanhToan;
import com.example.duan_coffeeshop.model.invoiceDetail;
import com.google.gson.Gson;

import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Calendar;
import java.util.Date;
import java.util.List;

import retrofit2.Call;
import retrofit2.Callback;
import retrofit2.Response;
import retrofit2.Retrofit;
import retrofit2.converter.gson.GsonConverterFactory;

/**
 * A simple {@link Fragment} subclass.
 * Use the {@link Cart_Fragment#newInstance} factory method to
 * create an instance of this fragment.
 */
public class Cart_Fragment extends Fragment{
  private   RecyclerView rvcart;
  private   CartAdapter adapter;
 private toppingDetail toppingDetail;
 private invoiceDetail invoiceDetail;
  private   DonHang donhang;

  private  List<toppingDetail> toppingDetails;

  private List<invoiceDetail>invoiceDetails ;
   private TextView tvCartTien;
   private Button btnCartBuy;
    private APIService apiService;
    // TODO: Rename parameter arguments, choose names that match
    // the fragment initialization parameters, e.g. ARG_ITEM_NUMBER
    private static final String ARG_PARAM1 = "param1";
    private static final String ARG_PARAM2 = "param2";

    // TODO: Rename and change types of parameters
    private String mParam1;
    private String mParam2;


    public Cart_Fragment() {
        // Required empty public constructor
    }

    /**
     * Use this factory method to create a new instance of
     * this fragment using the provided parameters.
     *
     * @param param1 Parameter 1.
     * @param param2 Parameter 2.
     * @return A new instance of fragment Cart_Fragment.
     */
    // TODO: Rename and change types and number of parameters
    public static Cart_Fragment newInstance(String param1, String param2) {
        Cart_Fragment fragment = new Cart_Fragment();
        Bundle args = new Bundle();
        args.putString(ARG_PARAM1, param1);
        args.putString(ARG_PARAM2, param2);
        fragment.setArguments(args);
        return fragment;
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
    public void onResume() {
        super.onResume();


        RecyclerView.LayoutManager layoutManager= new LinearLayoutManager(
                getContext(),
                LinearLayoutManager.VERTICAL,false
        );
        rvcart.setLayoutManager(layoutManager);
        adapter = new CartAdapter(getContext(),  orderDAO.listCart, tvCartTien); // Truyền tham chiếu TextView
        rvcart.setAdapter(adapter);
        adapter.notifyDataSetChanged();

    }

    @Override
    public View onCreateView(LayoutInflater inflater, ViewGroup container,
                             Bundle savedInstanceState) {
       //khoi tao Retrofit




        // Inflate the layout for this fragment
        return inflater.inflate(R.layout.fragment_cart_, container, false);
    }

    @Override
    public void onViewCreated(@NonNull View view, @Nullable Bundle savedInstanceState) {
        super.onViewCreated(view, savedInstanceState);
        rvcart= view.findViewById(R.id.rvcart);
        tvCartTien= view.findViewById(R.id.tvCartTien);
        btnCartBuy =view.findViewById(R.id.btnCartBuy);
        RecyclerView.LayoutManager layoutManager= new LinearLayoutManager(
                getContext(),
                LinearLayoutManager.VERTICAL,false
        );
        rvcart.setLayoutManager(layoutManager);
        adapter = new CartAdapter(getContext(),  orderDAO.listCart, tvCartTien); // Truyền tham chiếu TextView
        rvcart.setAdapter(adapter);
        adapter.notifyDataSetChanged();
        btnCartBuy.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
               invoiceDetail = new invoiceDetail(); // Khởi tạo
                toppingDetail = new toppingDetail(); // Khởi tạo
                donhang = new DonHang(); // Khởi tạo

                invoiceDetails = new ArrayList<>(); // Khởi tạo danh sách
                toppingDetails = new ArrayList<>();
                StringBuilder stringBuilder = new StringBuilder();
                String ghichu;

                for ( Order order: orderDAO.listCart
                     )
                {
                    if(order.getGhiChu()!=null)
                    {
                        ghichu= order.getTenThucUong()+"- Size "+order.getTenSize()+": "+ order.getGhiChu()+"\n";
                        stringBuilder.append(ghichu);
                    }

                    invoiceDetail.setSize(order.getMaSize());
                    invoiceDetail.setQuantity(String.valueOf(order.getQuantity()));
                    String dongia= String.valueOf(order.getQuantity()*Float.parseFloat(order.getGiaSize()));
                    invoiceDetail.setCost(dongia);
                    invoiceDetails.add(invoiceDetail);
                    if(order.getToppingsSelect()!=null)
                    {
                        Float gia= Float.parseFloat(order.getToppingsSelect().getGiaTopping());

                        toppingDetail.setId(order.getToppingsSelect().getMaTopping());
                        toppingDetail.setSize(order.getMaSize());
                        toppingDetail.setQuantity(String.valueOf(order.getQuantity()));
                        toppingDetail.setPrice(String.valueOf(order.getQuantity()*gia));
                        toppingDetails.add(toppingDetail);

                    }


                }

                Calendar calendar = Calendar.getInstance();
                Date currentDate = calendar.getTime();
                SimpleDateFormat dateFormat = new SimpleDateFormat("yyyy-MM-dd");
                String formattedDate = dateFormat.format(currentDate);

                donhang.setNgayLapHD(currentDate.toString());
                donhang.setMaThuNgan("1");
                Retrofit retrofit = new Retrofit.Builder()
                        .baseUrl(APIService.base_URL)
                        .addConverterFactory(GsonConverterFactory.create())
                        .build();

                APIService service = retrofit.create(APIService.class);

                ThanhToan thanhToan= new ThanhToan("1",formattedDate,stringBuilder.toString(),invoiceDetails,toppingDetails);
                Log.d("ThongTinThanhToan", new Gson().toJson(thanhToan));

              service.addThanhToan(thanhToan).enqueue(new Callback<Notify>() {
                   @Override
                    public void onResponse(Call<Notify> call, Response<Notify> response) {
                       Notify notify =  response.body();
                        Toast.makeText(getContext(), ""+notify.getMessage(), Toast.LENGTH_SHORT).show();
                    }

                    @Override
                    public void onFailure(Call<Notify> call, Throwable t) {
                        Toast.makeText(getContext(), ""+t.getMessage(), Toast.LENGTH_SHORT).show();
                    }
                });
        }
        });


    }

    }
