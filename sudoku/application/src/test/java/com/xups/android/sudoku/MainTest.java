package com.xups.android.sudoku;

import com.xtremelabs.robolectric.RobolectricTestRunner;
import com.xuaps.android.sudoku.Main;
import com.xuaps.android.sudoku.R;
import org.junit.Test;
import org.junit.runner.RunWith;

import static org.hamcrest.CoreMatchers.equalTo;
import static org.junit.Assert.assertThat;
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
@RunWith(RobolectricTestRunner.class)
public class MainTest {

    @Test
    public void shouldHaveHappySmiles() throws Exception {
        String appName = new Main().getResources().getString(R.string.app_name);
        assertThat(appName, equalTo("Sudoku"));
    }
}
