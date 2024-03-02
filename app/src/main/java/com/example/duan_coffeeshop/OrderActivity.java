package com.example.duan_coffeeshop;

import androidx.annotation.NonNull;
import androidx.appcompat.app.ActionBar;
import androidx.appcompat.app.ActionBarDrawerToggle;
import androidx.appcompat.app.AppCompatActivity;
import androidx.appcompat.widget.Toolbar;
import androidx.drawerlayout.widget.DrawerLayout;
import androidx.fragment.app.Fragment;
import androidx.fragment.app.FragmentManager;
import androidx.fragment.app.FragmentTransaction;
import androidx.recyclerview.widget.RecyclerView;

import android.app.AlertDialog;
import android.content.DialogInterface;
import android.os.Bundle;
import android.widget.Toast;

import com.example.duan_coffeeshop.dao.OrderDAO;
import com.example.duan_coffeeshop.model.NhanVien;

import java.util.ArrayList;

import retrofit2.Call;
import retrofit2.Callback;
import retrofit2.Response;
import retrofit2.Retrofit;
import retrofit2.converter.gson.GsonConverterFactory;

import android.view.MenuItem;
import android.widget.TextView;

import com.google.android.material.bottomnavigation.BottomNavigationView;
import com.google.android.material.navigation.NavigationBarView;
import com.google.android.material.navigation.NavigationView;

public class OrderActivity extends AppCompatActivity {
    Toolbar toolbar;
    DrawerLayout drawerLayout;
    BottomNavigationView bottomNavigationView;
    NavigationView navigationView;
    Fragment fragment;
    RecyclerView recyclerView;

    TextView  txtToobarTitile;

    //array item san pham,

    public static OrderDAO orderDAO = new OrderDAO();

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_order);

        //api
        Retrofit retrofit = new Retrofit.Builder()
                .baseUrl(APIService.base_URL)
                .addConverterFactory(GsonConverterFactory.create())
                .build();

        APIService service = retrofit.create(APIService.class);
        service.getListNV().enqueue(new Callback<ArrayList<NhanVien>>() {
            @Override
            public void onResponse(Call<ArrayList<NhanVien>> call, Response<ArrayList<NhanVien>> response) {
                ArrayList<NhanVien> list = response.body();

            }

            @Override
            public void onFailure(Call<ArrayList<NhanVien>> call, Throwable t) {

            }
        });



        ActionBar actionBar = getSupportActionBar();

//        actionBar.hide();
        toolbar = findViewById(R.id.toolbar);
        init(); // findViewById
        replace(new OrderFragment()); // set FragmentManager
        setSupportActionBar(toolbar);
        getSupportActionBar().setDisplayHomeAsUpEnabled(true);
        //getSupportActionBar().hide();
        //getSupportActionBar().setHomeButtonEnabled(true);
        //getSupportActionBar().setDisplayHomeAsUpEnabled(true);
        //getSupportActionBar().setHomeAsUpIndicator(R.drawable.img_avt);
        getSupportActionBar().setTitle("");
        drawerLayout = findViewById(R.id.drawerLayout);
        ActionBarDrawerToggle drawerToggle = new ActionBarDrawerToggle(
                this, drawerLayout,
                toolbar,
                R.string.open,
                R.string.close);
        drawerLayout.addDrawerListener(drawerToggle);
        drawerToggle.syncState();
        //ActionBar actionBar = getSupportActionBar();
        getSupportActionBar().setHomeButtonEnabled(true);
        getSupportActionBar().setDisplayHomeAsUpEnabled(true);
        getSupportActionBar().setHomeAsUpIndicator(R.drawable.baseline_block_24);
        /* bottomNavigationView */
        bottomNavigationView.setOnItemSelectedListener(new NavigationBarView.OnItemSelectedListener() {
            @Override
            public boolean onNavigationItemSelected(@NonNull MenuItem item) {
                if (item.getItemId() == R.id.order) {
                    txtToobarTitile.setText("Order");
                    replace(new OrderFragment());
                } else if (item.getItemId() == R.id.cart) {
                    txtToobarTitile.setText("Giỏ Hàng");
                    replace(new Cart_Fragment());
                } else if (item.getItemId() == R.id.history) {
                    txtToobarTitile.setText("Lịch Sử Hoá Đơn");
                    replace(new HistoryFragment());
                } else if (item.getItemId() == R.id.statistical) {
                    txtToobarTitile.setText("Thống Kê Doanh Thu");
                    replace(new ThongKeFragment());
                }
                return true;
            }
        });
        /* NavigationView */
        navigationView.setNavigationItemSelectedListener(new NavigationView.OnNavigationItemSelectedListener() {
            @Override
            public boolean onNavigationItemSelected(@NonNull MenuItem item) {

                if (item.getItemId() == R.id.oderNavigation) {
                    txtToobarTitile.setText("Order");
                    fragment = new OrderFragment();
                } else if (item.getItemId() == R.id.cartNavigation) {
                    txtToobarTitile.setText("Giỏ Hàng");
                    fragment = new Cart_Fragment();
                } else if (item.getItemId() == R.id.historyNavigation) {
                    txtToobarTitile.setText("Lịch Sử Hoá Đơn");
                    fragment = new HistoryFragment();
                } else if (item.getItemId() == R.id.statisticalNavigation) {
                    txtToobarTitile.setText("Thống Kê Doanh Thu");
                    fragment = new ThongKeFragment();
                } else if(item.getItemId() == R.id.logoutNavigation) {
                    onBack();
                }
                getSupportFragmentManager()
                        .beginTransaction()
                        .replace(R.id.frameLayoutBottom, fragment)
                        .commit();
                drawerLayout.close();
                return true;
            }
        });
        /*button back*/



    }

    private void onBack(){
        new AlertDialog.Builder(getBaseContext())
                .setMessage("Bạn chắc chắn thoát chứ?")
                .setCancelable(false)
                .setPositiveButton("Không muốn", new DialogInterface.OnClickListener() {
                    @Override
                    public void onClick(DialogInterface dialog, int which) {
                        finish();
                    }
                })
                .setNegativeButton("đúng vậy",null);
    }

    private void replace(Fragment fragment) {
        // set FragmentManager
        FragmentManager fragmentManager = getSupportFragmentManager();
        FragmentTransaction fragmentTransaction = fragmentManager.beginTransaction();
        fragmentTransaction.replace(R.id.frameLayoutBottom, fragment);
        fragmentTransaction.commit();
    }
// get gio hang, cart fragment
    // set gio hang , order fragment
    private void init() {

        bottomNavigationView = findViewById(R.id.bottomNavigationView);
        navigationView = findViewById(R.id.navigationView);
        toolbar = findViewById(R.id.toolbar);
       txtToobarTitile = findViewById(R.id.txtToobarTitile);

    }
}