package com.xuaps.android.sudoku;

import android.content.Intent;
import android.widget.Button;
import com.xtremelabs.robolectric.RobolectricTestRunner;
import com.xtremelabs.robolectric.shadows.ShadowActivity;
import com.xtremelabs.robolectric.shadows.ShadowAlertDialog;
import com.xtremelabs.robolectric.shadows.ShadowIntent;
import org.junit.Before;
import org.junit.Test;
import org.junit.runner.RunWith;

import static com.xtremelabs.robolectric.Robolectric.shadowOf;
import static org.hamcrest.CoreMatchers.equalTo;
import static org.hamcrest.CoreMatchers.not;
import static org.hamcrest.CoreMatchers.nullValue;
import static org.junit.Assert.assertThat;

/**
 * Copyright 2012 David Vílchez Mendoza
 * <p/>
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 * <p/>
 * http://www.apache.org/licenses/LICENSE-2.0
 * <p/>
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
@RunWith(RobolectricTestRunner.class)
public class whenStartMainActivityTest {
    private Main mainActivity;
    private Button newGameButton;
    private ShadowAlertDialog difficultyDialog;
    private ShadowActivity shadowMainActivity;

    @Before
    public void setUp(){
        mainActivity=new Main();
        mainActivity.onCreate(null);
        newGameButton=(Button)mainActivity.findViewById(R.id.new_button);
        shadowMainActivity=shadowOf(mainActivity);
    }
    
    @Test
    public void shouldCanStartEasyGame() throws Exception{
        newGameButton.performClick();
        difficultyDialog=ShadowAlertDialog.getLatestAlertDialog();

        assertThat(difficultyDialog, not(nullValue()));
        difficultyDialog.clickOnItem(0);

        Intent startedIntent = shadowMainActivity.getNextStartedActivity();
        ShadowIntent shadowIntent = shadowOf(startedIntent);
        int difficulty = shadowIntent.getIntExtra(Game.KEY_DIFFICULTY, Game.DIFFICULTY_EASY);

        assertThat(shadowIntent.getComponent().getClassName(), equalTo(Game.class.getName()));
        assertThat(difficulty, equalTo(Game.DIFFICULTY_EASY));
    }
}
