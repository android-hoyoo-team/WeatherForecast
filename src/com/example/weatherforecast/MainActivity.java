package com.example.weatherforecast;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.ResultSet;

import android.app.Activity;
import android.os.Bundle;
import android.util.Log;
import android.view.animation.Animation;
import android.view.animation.RotateAnimation;

public class MainActivity extends Activity {

	@Override
	public void onCreate(Bundle savedInstanceState) {
		super.onCreate(savedInstanceState);
		setContentView(R.layout.activity_main);
		
		try {
			Connection conn = null;
			PreparedStatement ps = null;
			ResultSet rs = null;
			String url = "jdbc:sqlserver://61.164.175.158:8327";
			Class.forName("com.microsoft.sqlserver.jdbc.SQLServerDriver");
			conn = DriverManager.getConnection(url, "public@58560", "public@58560");
			ps = conn.prepareStatement("select count(*) as c from Fcst_Text_Local");
			rs = ps.executeQuery();
			while (rs.next()) {
				System.out.println("xxxxx");
				Log.i("TAG",rs.getObject(0).toString());
				//rs.getObject(0);
			}
		} catch (Exception e) {
			e.printStackTrace();
		}
		//ComboPooledDataSource d=new ComboPooledDataSource();
		//d.getAcquireIncrement();
		//super.loadUrl("file:///android_asset/www/phonegap.html");
		System.out.println("88888888");
		//String tableData1 = DBUtil.getData4QRListMap("com.microsoft.sqlserver.jdbc.SQLServerDriver", "jdbc:sqlserver://61.164.175.158:8327", "public@58560", "public@58560", "select count(*) as c from Fcst_Text_Local",0,0);
		//System.out.println(tableData1);
		//Log.i("TAG",tableData1);
		// super.loadUrl("file:///android_asset/www/weather.html");
		//super.loadUrl("file:///android_asset/www/index.html");
		//super.loadUrl("http://www.phonegap100.com/doc/cordova_file_file.md.html#File");
		//super.loadUrl(Config.getStartUrl());
	}
}
