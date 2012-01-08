package com.xuaps.android;

import android.widget.Button;
import com.xtremelabs.robolectric.RobolectricTestRunner;
import org.junit.Before;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.junit.Assert;

@RunWith(InjectedTestRunner.class)
public class MainActivityTest {

    private Button pressMeButton;
    private MainActivity activity;

    @Before
    public void setUp() throws Exception {
        activity = new MainActivity();
        activity.onCreate(null);
        pressMeButton = (Button) activity.findViewById(R.id.boton);
    }

    @Test
    public void shouldHaveAButtonThatSaysPressMe() throws Exception {
        Assert.assertEquals("Hola", pressMeButton.getText().toString());
    }
}
