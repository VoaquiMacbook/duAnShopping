package com.example.duan_coffeeshop;

import androidx.appcompat.app.AppCompatActivity;

import android.content.Intent;
import android.os.Bundle;
import android.view.View;
import android.widget.Button;
import android.widget.EditText;
import android.widget.Toast;

import com.example.duan_coffeeshop.APIService;
import com.example.duan_coffeeshop.OrderActivity;
import com.example.duan_coffeeshop.R;
import com.example.duan_coffeeshop.model.NhanVien;

import java.util.ArrayList;

import retrofit2.Call;
import retrofit2.Callback;
import retrofit2.Response;
import retrofit2.Retrofit;
import retrofit2.converter.gson.GsonConverterFactory;

public class LoginActivity extends AppCompatActivity {

    private EditText edtLoginUser, edtLoginPassword;
    private Button btnLogin;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_login);

        Retrofit retrofit = new Retrofit.Builder()
                .baseUrl(APIService.base_URL)
                .addConverterFactory(GsonConverterFactory.create())
                .build();

        APIService service = retrofit.create(APIService.class);
        // Ánh xạ các thành phần giao diện
        edtLoginUser = findViewById(R.id.edtLoginUser);
        edtLoginPassword = findViewById(R.id.edtLoginPassword);
        btnLogin = findViewById(R.id.btnLogin);

        // Xử lý sự kiện khi nhấn nút đăng nhập
        btnLogin.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                // Lấy dữ liệu từ EditText
                String userNhanVien = edtLoginUser.getText().toString();
                String passNhanVien = edtLoginPassword.getText().toString();

                service.getListNV().enqueue(new Callback<ArrayList<NhanVien>>() {
                    @Override
                    public void onResponse(Call<ArrayList<NhanVien>> call, Response<ArrayList<NhanVien>> response) {
                        ArrayList<NhanVien> list =response.body();
                        for (NhanVien nv: list) {
                            if (isValidFrom( userNhanVien,passNhanVien)) {
                                if (nv.getTaiKhoan().matches(userNhanVien) && nv.getMatKhau().matches(passNhanVien)) {
                                    Toast.makeText(LoginActivity.this, "tai khoan dung", Toast.LENGTH_SHORT).show();

                                    Intent i = new Intent(LoginActivity.this, OrderActivity.class);
                                    startActivity(i);
                                    break;
                                } else {
                                    Toast.makeText(LoginActivity.this, "Emai hoặc Mật khẩu sai!",
                                            Toast.LENGTH_SHORT).show();
                                }
                            }

                        }


                    }

                    @Override
                    public void onFailure(Call<ArrayList<NhanVien>> call, Throwable t) {

                    }
                });






            }
        });
// if (isValidFrom(email,pwd)) {
    } private boolean isValidFrom(String userNhanVien,String passNhanVien){
        if (userNhanVien.trim().length() == 0){
            Toast.makeText(LoginActivity.this,"Email không được để trống",
                    Toast.LENGTH_SHORT).show();
            return false;
        }
        //Tao pattern email
//        String str = "(\\w{2,}\\.)?\\w{2,}@\\w{2,}(\\.[a-zA-Z]{2,3}){1,2}";
//        if(userNhanVien.matches(str)){
//
//        }
        if (passNhanVien.trim().length() == 0) {

            Toast.makeText(LoginActivity.this, "Password không được để trống",
                    Toast.LENGTH_SHORT).show();
            return false;
        }
        return true;
    }
}