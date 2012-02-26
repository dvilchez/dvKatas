package com.xuaps.android.sudoku;

import android.os.Bundle;
import android.preference.PreferenceActivity;

/**
 * Created by IntelliJ IDEA.
 * User: dvilchez
 * Date: 2/19/12
 * Time: 5:32 PM
 * To change this template use File | Settings | File Templates.
 */
public class Prefs extends PreferenceActivity{
    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);    
        addPreferencesFromResource(R.xml.settings);
    }
}
