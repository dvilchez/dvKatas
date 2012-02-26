package com.xuaps.android.sudoku;

import android.app.AlertDialog;
import android.test.suitebuilder.annotation.SmallTest;
import android.widget.Button;
import com.jayway.android.robotium.solo.Solo;
import android.test.ActivityInstrumentationTestCase2;


/**
 * Created by IntelliJ IDEA.
 * User: dvilchez
 * Date: 2/26/12
 * Time: 2:33 AM
 * To change this template use File | Settings | File Templates.
 */
public class MainTest extends ActivityInstrumentationTestCase2<Main>{

    private Solo solo;

    public MainTest() {
        super(Main.class);
    }

    @Override
    protected void setUp() throws Exception
    {
        solo = new Solo(getInstrumentation(),getActivity());
    }

    @SmallTest
    public void testNewGame(){
        solo.clickOnButton("new_button");
        solo.assertCurrentActivity("prueba", AlertDialog.class);

    }

    @Override
    public void tearDown() throws Exception {
        solo.finishOpenedActivities();
    }
}
