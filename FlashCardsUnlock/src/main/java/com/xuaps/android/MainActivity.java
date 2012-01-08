package com.xuaps.android;

import android.app.Activity;
import android.os.Bundle;
import android.widget.Button;
import android.widget.TextView;
import com.google.inject.Inject;
import roboguice.activity.RoboActivity;
import roboguice.inject.InjectView;

import java.lang.annotation.Inherited;
import java.util.Date;

public class MainActivity extends RoboActivity
{
    @InjectView(R.id.boton) Button helloButton;
    @InjectView(R.id.texto) TextView helloWorld;
    @Inject Date date;
    
    /** Called when the activity is first created. */
    @Override
    public void onCreate(Bundle savedInstanceState)
    {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.main);
        String text = helloWorld.getText().toString();
        text += "  " +date.toString();
        helloWorld.setText(text);

    }
}
