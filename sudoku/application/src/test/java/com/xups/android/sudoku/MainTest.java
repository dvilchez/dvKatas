package com.xups.android.sudoku;

import com.xtremelabs.robolectric.RobolectricTestRunner;
import com.xuaps.android.sudoku.Main;
import com.xuaps.android.sudoku.R;
import org.junit.Test;
import org.junit.runner.RunWith;

import static org.hamcrest.CoreMatchers.equalTo;
import static org.junit.Assert.assertThat;
/**
 * Created by IntelliJ IDEA.
 * User: dvilchez
 * Date: 2/26/12
 * Time: 6:45 PM
 * To change this template use File | Settings | File Templates.
 */
@RunWith(RobolectricTestRunner.class)
public class MainTest {

    @Test
    public void shouldHaveHappySmiles() throws Exception {
        String appName = new Main().getResources().getString(R.string.app_name);
        assertThat(appName, equalTo("Sudoku"));
    }
}
