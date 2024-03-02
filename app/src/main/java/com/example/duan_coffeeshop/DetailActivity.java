package com.example.duan_coffeeshop;

import static com.example.duan_coffeeshop.OrderActivity.orderDAO;

import androidx.appcompat.app.AppCompatActivity;
import androidx.recyclerview.widget.LinearLayoutManager;
import androidx.recyclerview.widget.RecyclerView;

import android.graphics.Color;
import android.os.Bundle;
import android.view.View;
import android.widget.Button;
import android.widget.EditText;
import android.widget.ImageView;
import android.widget.RadioButton;
import android.widget.TextView;
import android.widget.Toast;

import com.bumptech.glide.Glide;
import com.bumptech.glide.request.RequestOptions;
import com.example.duan_coffeeshop.adapter.CartAdapter;
import com.example.duan_coffeeshop.adapter.ToppingAdapter;
import com.example.duan_coffeeshop.model.Order;
import com.example.duan_coffeeshop.model.Topping;

import java.util.ArrayList;
import java.util.List;

import retrofit2.Call;
import retrofit2.Callback;
import retrofit2.Response;
import retrofit2.Retrofit;
import retrofit2.converter.gson.GsonConverterFactory;

public class DetailActivity extends AppCompatActivity {
    private Order item;
  private   Topping tp ;

    private ArrayList<Topping> list;
    private RadioButton rdoCTT, rdoCCD;
    private CartAdapter cartAdapter;

    private ImageView img_detail_anhSP;
    private TextView tvDetailTenSP, tvDetailGia, tvDetailMoTa, tvSoLuong;
    private EditText edtGhiChu;
    private Button btnSizeS, btnSizeM, btnSizeL, btnDetailTru, btnDetailCong, btnDetailThem;
    private RecyclerView lvDetailTP;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_detail);
        initDetail();

        bundle();


    }

    public void bundle() {
        item = (Order) getIntent().getSerializableExtra("cart");

        String initialSize = item.getTenSize();
        Float gia = Float.parseFloat(item.getGiaSize());
        float giaTopping = 0;
        if(item.getToppingsSelect()!=null)
        {
            giaTopping= Float.parseFloat(item.getToppingsSelect().getGiaTopping());
        }

        Float giaTheosl = (gia+giaTopping) * item.getQuantity();
        Toast.makeText(this, ""+giaTheosl, Toast.LENGTH_SHORT).show();
        tvSoLuong.setText(String.valueOf(item.getQuantity()));
        switch (initialSize) {
            case "S":
                resetButtonColors(btnSizeS);
                anSML("S");
                break;
            case "M":
                resetButtonColors(btnSizeM);
                anSML("M");
                break;
            case "L":
                resetButtonColors(btnSizeL);
                anSML("L");
                break;
            default:

                break;
        }
        Glide.with(DetailActivity.this)
                .load(item.getHinhAnh())
                .apply(RequestOptions.centerCropTransform())
                .into(img_detail_anhSP);
        tvDetailTenSP.setText(item.getTenThucUong());
        tvDetailGia.setText(String.valueOf(giaTheosl));
        tvDetailMoTa.setText(item.getMoTa());
        edtGhiChu.setText(item.getGhiChu());
        if(item.getToppingsSelect()==null)
        {
            rdoCTT.setChecked(false);
            rdoCCD.setChecked(false);
        }
        else
        {
           if(item.getToppingsSelect().getMaTopping().equals("1"))
           {
               rdoCCD.setChecked(false);
               rdoCTT.setChecked(true);
           }
           if(item.getToppingsSelect().getMaTopping().equals("2"))
            {
                rdoCTT.setChecked(false);
                rdoCCD.setChecked(true);
            }

        }
        btnDetailCong.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                int soluong;
                float gia;

                soluong = item.getQuantity();
                soluong += 1;

                tvSoLuong.setText(String.valueOf(soluong));
                item.setQuantity(soluong);
                float giaTopping = 0;
                if(item.getToppingsSelect()!=null)
                {
                    giaTopping= Float.parseFloat(item.getToppingsSelect().getGiaTopping());
                }

                gia = soluong * (Float.parseFloat(item.getGiaSize())+giaTopping) ;

                tvDetailGia.setText(String.valueOf(gia));
            }
        });
        Retrofit retrofit = new Retrofit.Builder()
                .baseUrl(APIService.base_URL)
                .addConverterFactory(GsonConverterFactory.create())
                .build();
        APIService service = retrofit.create(APIService.class);
        service.getTopping().enqueue(new Callback<ArrayList<Topping>>() {
            @Override
            public void onResponse(Call<ArrayList<Topping>> call, Response<ArrayList<Topping>> response) {
                list= response.body();
            }

            @Override
            public void onFailure(Call<ArrayList<Topping>> call, Throwable t) {

            }
        });

        rdoCTT.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                int soluong;
                soluong= item.getQuantity();
                tp=list.get(0);
                item.setToppingsSelect(tp);
                float gia;
                float giaTopping = Float.parseFloat(tp.getGiaTopping());

                gia = soluong * (Float.parseFloat(item.getGiaSize())+giaTopping) ;

                tvDetailGia.setText(String.valueOf(gia));
            }
        });
        rdoCCD.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                int soluong;
                soluong= item.getQuantity();
                tp=list.get(1);
                item.setToppingsSelect(tp);
                float gia;
                float giaTopping = Float.parseFloat(tp.getGiaTopping());

                gia = soluong * (Float.parseFloat(item.getGiaSize())+giaTopping );

                tvDetailGia.setText(String.valueOf(gia));
            }
        });

        btnDetailTru.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                int soluong;
                float gia;

                soluong = item.getQuantity();
                soluong -= 1;
                tvSoLuong.setText(String.valueOf(soluong));
                item.setQuantity(soluong);
                if (soluong == 0) {
                    if (orderDAO.listCart.size() > 0) {
                        for (Order order : orderDAO.listCart) {
                            if (order.getMaSize().equals(item.getMaSize())) {


                                int index = orderDAO.listCart.indexOf(order);

                                orderDAO.listCart.remove(index);
                                if (cartAdapter != null) {
                                    cartAdapter.notifyDataSetChanged();
                                }

                                break;
                            }
                        }

                    }
                    finish();
                }

                float giaTopping = 0;
                if(item.getToppingsSelect()!=null)
                {
                    giaTopping= Float.parseFloat(item.getToppingsSelect().getGiaTopping());
                }

                gia = soluong * (Float.parseFloat(item.getGiaSize())+giaTopping) ;

                tvDetailGia.setText(String.valueOf(gia));
            }
        });
        // Bên trong DetailActivity
        btnDetailThem.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {

                item.setQuantity(Integer.parseInt(tvSoLuong.getText().toString()));
                item.setGhiChu(edtGhiChu.getText().toString());
                item.setToppingsSelect(tp);
                if (orderDAO.listCart.size() > 0) {
                    boolean check = false;
                    Order orderUpdate = null;
                    for (Order order : orderDAO.listCart) {
                        if (order.getMaSize().equals(item.getMaSize())) {
                            check = true;
                            orderUpdate = order;
                            break;
                        }
                    }

                    if (check) {
                        int index = orderDAO.listCart.indexOf(orderUpdate);
                        int quantity = item.getQuantity();
                        Topping tpp= item.getToppingsSelect();
                        orderUpdate.setGhiChu(item.getGhiChu());
                        orderUpdate.setQuantity(quantity);
                        orderUpdate.setToppingsSelect(tpp);

                        orderDAO.listCart.set(index, orderUpdate);
                    } else {
                        orderDAO.listCart.add(item);
                    }
                } else {

                    orderDAO.listCart.add(item);
                }

                finish();
            }
        });


        btnSizeS.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                resetButtonColors(btnSizeS);

                anSML("S");
            }
        });
        btnSizeM.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                resetButtonColors(btnSizeM);

                anSML("M");
            }
        });
        btnSizeL.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                resetButtonColors(btnSizeL);



                anSML("L");
            }
        });
    }

    public void initDetail() {
        tvDetailGia = findViewById(R.id.tvDetailGia);
        tvDetailTenSP = findViewById(R.id.tvDetailTenSP);
        tvDetailMoTa = findViewById(R.id.tvDetailMoTa);
        btnSizeS = findViewById(R.id.btnSizeS);
        img_detail_anhSP = findViewById(R.id.img_detail_anhSP);
        btnSizeM = findViewById(R.id.btnSizeM);
        btnSizeL = findViewById(R.id.btnSizeL);
        btnDetailTru = findViewById(R.id.btnDetailTru);
        btnDetailCong = findViewById(R.id.btnDetailCong);
        rdoCTT = findViewById(R.id.rdoToppingCTT);
        rdoCCD = findViewById(R.id.rdoToppingCTTD);
        btnDetailThem = findViewById(R.id.btnDetailThem);
        tvSoLuong = findViewById(R.id.edtDetailSL);
        edtGhiChu = findViewById(R.id.edtDetailGhiChu);
    }


    private void resetButtonColors(Button selectedButton) {
        for (Button button : getAllButtons()) {
            if (button == selectedButton) {
                button.setBackgroundResource(R.drawable.img_detail_changesml);
                button.setTextColor(Color.parseColor("#FF5722"));
                button.setTag(true);
                button.setEnabled(false);
            } else {
                button.setBackgroundResource(R.drawable.img_detail_sml);
                button.setTextColor(Color.parseColor("#000000"));
                button.setTag(false);
                button.setEnabled(true);
            }
        }
    }

    private List<Button> getAllButtons() {
        List<Button> buttons = new ArrayList<>();
        buttons.add(btnSizeS);
        buttons.add(btnSizeM);
        buttons.add(btnSizeL);


        return buttons;
    }

    private void anSML(String size) {


        Retrofit retrofit = new Retrofit.Builder()
                .baseUrl(APIService.base_URL)
                .addConverterFactory(GsonConverterFactory.create())
                .build();

        APIService service = retrofit.create(APIService.class);
        service.getSize(Integer.parseInt(item.getMaThucUong()), size).enqueue(new Callback<Order>() {
            @Override
            public void onResponse(Call<Order> call, Response<Order> response) {
                Order type = response.body();
                if (orderDAO.listCart.size() > 0) {

                    boolean check = false;
                    Order orderUpdate = null;
                    for (Order order : orderDAO.listCart) {
                        if (order.getMaSize().equals(type.getMaSize())) {
                            check = true;
                            orderUpdate = order;
                            break;
                        }
                    }

                    if (check) {

                        int index = orderDAO.listCart.indexOf(orderUpdate);

                        int quantity = orderUpdate.getQuantity();
                        Float gia = Float.parseFloat(orderUpdate.getGiaSize());
                        item.setQuantity(quantity);
                        item.setMaSize(orderUpdate.getMaSize());
                        item.setGhiChu(orderUpdate.getGhiChu());
                        edtGhiChu.setText(orderUpdate.getGhiChu());
                        item.setTenSize(orderUpdate.getTenSize());
                        tvSoLuong.setText(String.valueOf(quantity));
                        item.setGhiChu(orderUpdate.getGhiChu());
                        Float giaTopping=0.0f;
                       if(orderUpdate.getToppingsSelect()!=null)
                       {
                           item.setToppingsSelect(orderUpdate.getToppingsSelect());

                           if(item.getToppingsSelect().getMaTopping().equals("1"))
                           {

                               rdoCTT.setChecked(true);
                           }
                           if(item.getToppingsSelect().getMaTopping().equals("2"))
                           {

                               rdoCCD.setChecked(true);
                           }
                           giaTopping=Float.parseFloat(item.getToppingsSelect().getGiaTopping());
                       }



                        item.setGiaSize(orderUpdate.getGiaSize());
                        float giaFinal = quantity * (gia+giaTopping);
                        tvDetailGia.setText(String.valueOf(giaFinal));
                        orderDAO.listCart.set(index, orderUpdate);
                        if (cartAdapter != null) {
                            cartAdapter.notifyDataSetChanged();
                        }
                    } else {

                        item.setQuantity(1);
                        tvSoLuong.setText("1");
                        item.setMaSize(type.getMaSize());
                        item.setTenSize(type.getTenSize());
                        tvDetailGia.setText(type.getGiaSize());
                        item.setGiaSize(type.getGiaSize());

                    }
                } else {

                    item.setQuantity(1);
                    tvSoLuong.setText("1");

                    item.setMaSize(type.getMaSize());
                    item.setTenSize(type.getTenSize());
                    tvDetailGia.setText(type.getGiaSize());
                    item.setGiaSize(type.getGiaSize());

                }



            }

            @Override
            public void onFailure(Call<Order> call, Throwable t) {

            }
        });

    }

}

