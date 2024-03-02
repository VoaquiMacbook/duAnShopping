package com.example.duan_coffeeshop;

import android.app.DatePickerDialog;
import android.graphics.Color;
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
import android.widget.DatePicker;
import android.widget.TextView;
import android.widget.Toast;

import com.example.duan_coffeeshop.adapter.ThongKeAdapter;
import com.example.duan_coffeeshop.model.ThongKe;
import com.github.mikephil.charting.charts.BarChart;
import com.github.mikephil.charting.components.Legend;
import com.github.mikephil.charting.components.XAxis;
import com.github.mikephil.charting.components.YAxis;
import com.github.mikephil.charting.data.BarData;
import com.github.mikephil.charting.data.BarDataSet;
import com.github.mikephil.charting.data.BarEntry;
import com.github.mikephil.charting.formatter.IndexAxisValueFormatter;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.Calendar;
import java.util.List;

import retrofit2.Call;
import retrofit2.Callback;
import retrofit2.Response;
import retrofit2.Retrofit;
import retrofit2.converter.gson.GsonConverterFactory;

/**
 * A simple {@link Fragment} subclass.
 * Use the {@link ThongKeFragment#newInstance} factory method to
 * create an instance of this fragment.
 */
public class ThongKeFragment extends Fragment {
 private    RecyclerView rcvThongKeTopSell;
  private ThongKeAdapter adapter;
   private TextView tvThongKeDoanhThu;
   // private List<String> xValues= Arrays.asList("22/04","23/05","25/11","29/12","13/06");
   private BarChart barChart;
    private int tongtien;
    private Button btnStartDate, btnEndDate;
    private Calendar calendar;
    private int selectedYear, selectedMonth, selectedDay;

    // TODO: Rename parameter arguments, choose names that match
    // the fragment initialization parameters, e.g. ARG_ITEM_NUMBER
    private static final String ARG_PARAM1 = "param1";
    private static final String ARG_PARAM2 = "param2";

    // TODO: Rename and change types of parameters
    private String mParam1;
    private String mParam2;

    public ThongKeFragment() {
        // Required empty public constructor
    }

    /**
     * Use this factory method to create a new instance of
     * this fragment using the provided parameters.
     *
     * @param param1 Parameter 1.
     * @param param2 Parameter 2.
     * @return A new instance of fragment ThongKeFragment.
     */
    // TODO: Rename and change types and number of parameters
    public static ThongKeFragment newInstance(String param1, String param2) {
        ThongKeFragment fragment = new ThongKeFragment();
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
        calendar = Calendar.getInstance();
        selectedYear = calendar.get(Calendar.YEAR);
        selectedMonth = calendar.get(Calendar.MONTH);
        selectedDay = calendar.get(Calendar.DAY_OF_MONTH);
        chooseDay();


        Retrofit retrofit = new Retrofit.Builder()
                .baseUrl(APIService.base_URL)
                .addConverterFactory(GsonConverterFactory.create())
                .build();



        APIService service = retrofit.create(APIService.class);
        service.getThongke().enqueue(new Callback<ArrayList<ThongKe>>() {
            @Override
            public void onResponse(Call<ArrayList<ThongKe>> call, Response<ArrayList<ThongKe>> response) {
                ArrayList<ThongKe> list= response.body();
                int tongtien = 0;  // Khởi tạo giá trị tongtien
                for (ThongKe thongKe : list) {
                    if (thongKe.getTongTienThongKe() != null) {
                        tongtien += Integer.parseInt(thongKe.getTongTienThongKe());
                    }
                }
                RecyclerView.LayoutManager layoutManager= new LinearLayoutManager(
                        getContext(),
                        LinearLayoutManager.VERTICAL,false
                );
                rcvThongKeTopSell.setLayoutManager(layoutManager);
                adapter = new ThongKeAdapter(getContext(), list,tongtien); // Truyền tham chiếu TextView
                tvThongKeDoanhThu.setText(String.valueOf(tongtien));
                rcvThongKeTopSell.setAdapter(adapter);
                adapter.notifyDataSetChanged();
            }

            @Override
            public void onFailure(Call<ArrayList<ThongKe>> call, Throwable t) {

            }
        });
    }

    @Override
    public View onCreateView(LayoutInflater inflater, ViewGroup container,
                             Bundle savedInstanceState) {
        // Inflate the layout for this fragment
        return inflater.inflate(R.layout.fragment_thong_ke, container, false);
    }

    @Override
    public void onViewCreated(@NonNull View view, @Nullable Bundle savedInstanceState) {
        super.onViewCreated(view, savedInstanceState);
        rcvThongKeTopSell= view.findViewById(R.id.rcvThongKeTopSell);
        tvThongKeDoanhThu=view.findViewById(R.id.tvThongKeDoanhThu);
        barChart=view.findViewById(R.id.bcTkDoanhT);
        btnStartDate = view.findViewById(R.id.btnStartDate);
        btnEndDate = view.findViewById(R.id.btnEndDate);

        calendar = Calendar.getInstance();
        selectedYear = calendar.get(Calendar.YEAR);
        selectedMonth = calendar.get(Calendar.MONTH);
        selectedDay = calendar.get(Calendar.DAY_OF_MONTH);
       chooseDay();


        Retrofit retrofit = new Retrofit.Builder()
                .baseUrl(APIService.base_URL)
                .addConverterFactory(GsonConverterFactory.create())
                .build();



        APIService service = retrofit.create(APIService.class);
        service.getThongke().enqueue(new Callback<ArrayList<ThongKe>>() {
            @Override
            public void onResponse(Call<ArrayList<ThongKe>> call, Response<ArrayList<ThongKe>> response) {
                ArrayList<ThongKe> list= response.body();
                int tongtien = 0;  // Khởi tạo giá trị tongtien
                for (ThongKe thongKe : list) {
                    if (thongKe.getTongTienThongKe() != null) {
                        tongtien += Integer.parseInt(thongKe.getTongTienThongKe());
                    }
                }
                RecyclerView.LayoutManager layoutManager= new LinearLayoutManager(
                        getContext(),
                        LinearLayoutManager.VERTICAL,false
                );
                rcvThongKeTopSell.setLayoutManager(layoutManager);
                adapter = new ThongKeAdapter(getContext(), list,tongtien); // Truyền tham chiếu TextView
                tvThongKeDoanhThu.setText(String.valueOf(tongtien));
                rcvThongKeTopSell.setAdapter(adapter);
                adapter.notifyDataSetChanged();
            }

            @Override
            public void onFailure(Call<ArrayList<ThongKe>> call, Throwable t) {

            }
        });

    }

    private Calendar showDatePickerDialog(final Button button) {
        DatePickerDialog datePickerDialog = new DatePickerDialog(
                getContext(),
                new DatePickerDialog.OnDateSetListener() {
                    @Override
                    public void onDateSet(DatePicker datePicker, int year, int month, int dayOfMonth) {
                        selectedYear = year;
                        selectedMonth = month;
                        selectedDay = dayOfMonth;


                        button.setText(selectedDay + "-" + (selectedMonth) + "-" + selectedYear);
                    }
                },
                selectedYear, selectedMonth, selectedDay
        );


        calendar = Calendar.getInstance();
        selectedYear = calendar.get(Calendar.YEAR);
        selectedMonth = calendar.get(Calendar.MONTH);
        selectedDay = calendar.get(Calendar.DAY_OF_MONTH);
        datePickerDialog.show();
return  calendar;

    }
    private void chooseDay()
    {

        Retrofit retrofit = new Retrofit.Builder()
                .baseUrl(APIService.base_URL)
                .addConverterFactory(GsonConverterFactory.create())
                .build();
        APIService service = retrofit.create(APIService.class);
        barChart.getAxisRight().setDrawLabels(false);

        service.getDoanhThu("2020-11-29", "2024-11-29").enqueue(new Callback<ArrayList<ThongKe>>() {
            @Override
            public void onResponse(Call<ArrayList<ThongKe>> call, Response<ArrayList<ThongKe>> response) {
                ArrayList<ThongKe> tk = response.body();
                List<String> xValues= new ArrayList<>();
                Float doanhthucaoNhat=0.0f;
                if (tk != null && tk.size() > 0) {
                    ArrayList<BarEntry> entries = new ArrayList<>();


                    for (int i = 0; i < tk.size(); i++) {

                        xValues.add(tk.get(i).getNgayLapHD());

                        entries.add(new BarEntry(i, Float.parseFloat(tk.get(i).getDoanhThu())));
                    if(tk.get(i).getDoanhThu()!=null)
                    {
                        if (Float.parseFloat(tk.get(i).getDoanhThu()) > doanhthucaoNhat ) {
                            doanhthucaoNhat = Float.parseFloat(tk.get(i).getDoanhThu());

                        }
                    }
                    }

                    YAxis yAxis = barChart.getAxisLeft();

                    yAxis.setAxisMaximum(doanhthucaoNhat);
                    yAxis.setAxisLineWidth(2f);
                    yAxis.setZeroLineColor(Color.BLACK);
                    yAxis.setLabelCount(5);
                    BarDataSet dataSet = new BarDataSet(entries, "");
                    dataSet.setColors(Color.BLUE);

                    BarData barData = new BarData(dataSet);
                    barChart.setData(barData);
                    barChart.getDescription().setEnabled(false);
                    barChart.invalidate();

                    barChart.getXAxis().setValueFormatter(new IndexAxisValueFormatter(xValues));
                    barChart.getXAxis().setPosition(XAxis.XAxisPosition.BOTTOM);
                    barChart.getXAxis().setGranularity(1f);
                    barChart.getXAxis().setGranularityEnabled(true);

                    Legend legend = barChart.getLegend();
                    legend.setEnabled(false); // Tắt huy hiệu
                } else {
                    Toast.makeText(getContext(), ""+xValues.size(), Toast.LENGTH_SHORT).show();
                    // Xử lý khi không có dữ liệu trả về từ API

                }

            }

            @Override
            public void onFailure(Call<ArrayList<ThongKe>> call, Throwable t) {
                // Xử lý khi gọi API thất bại
                Toast.makeText(getContext(), "Lỗi khi lấy dữ liệu doanh thu", Toast.LENGTH_SHORT).show();
            }
        });
    }
}