package com.xuaps.spikes.android;

import android.app.Activity;
import android.content.Intent;
import android.os.Bundle;
import android.view.View;
import android.widget.AutoCompleteTextView;
import android.speech.tts.*;
import android.text.Editable;

public class Main extends Activity {
	private static final int REQ_TTS_STATUS_CHECK = 0;
	private TextToSpeech tts;
    /** Called when the activity is first created. */
    @Override
    public void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);        
        setContentView(R.layout.main);
        
     // Check to be sure that TTS exists and is okay to use
        Intent checkIntent = new Intent();
        checkIntent.setAction(TextToSpeech.Engine.ACTION_CHECK_TTS_DATA);
        startActivityForResult(checkIntent, REQ_TTS_STATUS_CHECK);
    }
    
    protected void onActivityResult(int requestCode, int resultCode, Intent data) {
    	tts=new TextToSpeech(this, new TextToSpeech.OnInitListener(){
			@Override
			public void onInit(int status) {
				// TODO Auto-generated method stub
				
			}});
    }
    
    public void traducir(View view){
    	Editable text=((AutoCompleteTextView)findViewById(R.id.autoCompleteTextView1)).getText();
    	tts.speak(text.toString(), TextToSpeech.QUEUE_ADD, null);
    }
    
    public void next(View view){
    	Intent intent = new Intent(this, Result.class);
    	startActivity(intent);
    }
}