package com.xuaps.spikes.android;

import android.app.Activity;
import android.app.ListActivity;
import android.database.Cursor;
import android.os.Bundle;
import android.provider.Contacts.People;
import android.widget.SimpleCursorAdapter;

public class Result extends ListActivity  {
	private SimpleCursorAdapter adapter;
	
	@Override
	public void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.result);
        
        Cursor c = getContentResolver().query(People.CONTENT_URI,
        		null, null, null, null);
		startManagingCursor(c);
		String[] cols = new String[]{People.NAME};
		int[] names = new int[]{R.id.textView1};
		adapter = new SimpleCursorAdapter(this,R.layout.result,c,cols,names);
		this.setListAdapter(adapter);
    }
}
