package com.example.weatherforecast;

import android.os.Bundle;
import org.apache.cordova.*;

public class MainActivity extends DroidGap {

	@Override
	public void onCreate(Bundle savedInstanceState) {
		super.onCreate(savedInstanceState);
		//super.loadUrl("file:///android_asset/www/index.html");
		//super.loadUrl("http://www.phonegap100.com/doc/cordova_file_file.md.html#File");
		//super.loadUrl(Config.getStartUrl());
		super.loadUrl("file:///android_asset/www/weather.html");
	}
}
