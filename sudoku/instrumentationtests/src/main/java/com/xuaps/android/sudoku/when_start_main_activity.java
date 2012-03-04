package com.xuaps.android.sudoku;

import android.test.ActivityInstrumentationTestCase2;
import android.test.suitebuilder.annotation.LargeTest;
import com.jayway.android.robotium.solo.Solo;


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
public class when_start_main_activity extends ActivityInstrumentationTestCase2<Main>{

    private Solo solo;

    public when_start_main_activity() {
        super(Main.class);
    }

    @Override
    protected void setUp() throws Exception
    {
        solo = new Solo(getInstrumentation(),getActivity());
    }

    @LargeTest
    public void test_it_should_can_start_new_easy_game(){
        solo.clickOnButton(solo.getString(R.string.new_game_label));
        solo.clickOnText(solo.getString(R.string.easy_label));
        solo.assertCurrentActivity("Puzzle", Game.class);
        Game game=(Game)solo.getCurrentActivity();
        int difficulty=game.getIntent().getIntExtra(Game.KEY_DIFFICULTY, Game.DIFFICULTY_EASY);
        assertEquals(Game.DIFFICULTY_EASY, difficulty);
    }

    @Override
    public void tearDown() throws Exception {
        solo.finishOpenedActivities();
    }
}
