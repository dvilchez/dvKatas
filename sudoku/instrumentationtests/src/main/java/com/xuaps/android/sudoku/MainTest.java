package com.xuaps.android.sudoku;

import android.app.AlertDialog;
import android.test.suitebuilder.annotation.SmallTest;
import android.widget.Button;
import com.jayway.android.robotium.solo.Solo;
import android.test.ActivityInstrumentationTestCase2;


/**
*   Copyright 2012 David Vílchez Mendoza
*
*   Licensed under the Apache License, Version 2.0 (the "License");
*   you may not use this file except in compliance with the License.
*   You may obtain a copy of the License at
*
*       http://www.apache.org/licenses/LICENSE-2.0
*
*   Unless required by applicable law or agreed to in writing, software
*   distributed under the License is distributed on an "AS IS" BASIS,
*   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
*   See the License for the specific language governing permissions and
*   limitations under the License.
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
