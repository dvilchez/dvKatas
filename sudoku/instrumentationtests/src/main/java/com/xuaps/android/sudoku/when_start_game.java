package com.xuaps.android.sudoku;

import android.graphics.Bitmap;
import android.graphics.Canvas;
import android.test.ActivityInstrumentationTestCase2;
import android.test.suitebuilder.annotation.LargeTest;
import com.jayway.android.robotium.solo.Solo;

import java.io.ByteArrayOutputStream;
import java.security.MessageDigest;
import java.security.NoSuchAlgorithmException;

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
public class when_start_game extends ActivityInstrumentationTestCase2<Game>{
    private Solo solo;

    public when_start_game()
    {
        super(Game.class);
    }

    @Override
    protected void setUp() throws Exception{
        solo=new Solo(getInstrumentation(), getActivity());
    }

    @LargeTest
    public void test_it_should_have_one_puzzle_fill_with_easy_values(){
        String res="";
        PuzzleView puzzle=(PuzzleView)solo.getView(PuzzleView.class, 0);
        Bitmap bitmap=Bitmap.createBitmap(puzzle.getWidth(), puzzle.getHeight(), Bitmap.Config.RGB_565);
        puzzle.draw(new Canvas(bitmap));

        ByteArrayOutputStream bos = new ByteArrayOutputStream();
        bitmap.compress(Bitmap.CompressFormat.PNG,0,bos);
        byte[] data=bos.toByteArray();
        try{
            MessageDigest md=MessageDigest.getInstance("MD5");
            md.update(data);
            byte[] md5=md.digest();
            String tmp = "";
            for (int i = 0; i < md5.length; i++) {
                tmp = (Integer.toHexString(0xFF & md5[i]));
                if (tmp.length() == 1) {
                    res += "0" + tmp;
                } else {
                    res += tmp;
                }
            }
        }catch(NoSuchAlgorithmException ex){}
                                 
        assertEquals("0b38405b5e44e4df696917aa5e7c8efc", res);
    }

    public void test_it_should_be_able_to_change_selected_tail()
    {

    }

    public void test_it_should_be_able_to_change_value_in_selected_tail(){

    }

    public void test_it_should_show_keypad_by_touching_the_tail(){

    }

    public void test_it_should_change_value_by_selecting_on_keypad(){

    }

    @Override
    public void tearDown() throws Exception{
        solo.finishOpenedActivities();
    }
}
