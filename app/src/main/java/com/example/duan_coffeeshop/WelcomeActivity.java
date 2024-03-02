package com.example.duan_coffeeshop;

import androidx.appcompat.app.AppCompatActivity;

import android.content.Intent;
import android.os.Bundle;
import android.os.Handler;

public class WelcomeActivity extends AppCompatActivity {
    private static final int DELAY_TIME = 2000; // Độ trễ 3 giây (3000 millisecond)
    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_welcome);

        Handler handler = new Handler();

        // Chạy mã sau khi độ trễ đã qua
        handler.postDelayed(new Runnable() {
            @Override
            public void run() {
                // Tạo Intent để chuyển đến LoginActivity
                Intent intent = new Intent(WelcomeActivity.this, LoginActivity.class);
                startActivity(intent);
                finish(); // Kết thúc WelcomeActivity sau khi chuyển trang
            }
        }, DELAY_TIME);
    }
}