package com.xuaps.android.sudoku;

import android.test.suitebuilder.annotation.SmallTest;
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

    public MainTest(Class<Main> activityClass) {
        super(activityClass);
    }

    @Override
    protected void setUp() throws Exception
    {
        solo = new Solo(getInstrumentation(),getActivity());
    }

    @SmallTest
    public void testNewGame(){
        assertTrue(false);
    }

    @Override
    public void tearDown() throws Exception {
        solo.finishOpenedActivities();
    }
}
