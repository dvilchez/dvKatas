package com.xuaps.android;

import android.util.Log;
import roboguice.config.AbstractAndroidModule;
import roboguice.util.Ln;
import org.mockito.Mockito;

import java.util.Date;

public class MyTestModule extends AbstractAndroidModule {

    @Override protected void configure() {
        Date date = Mockito.mock(Date.class);
        Mockito.when(date.toString()).thenReturn("Mock!!!");
        bind(Date.class).toInstance(date);
        bind(Ln.BaseConfig.class).toInstance(new MyAppliactionLoggerConfig());
    }

    static class MyAppliactionLoggerConfig extends Ln.BaseConfig {
        public MyAppliactionLoggerConfig() {
            super();
            this.packageName = "MyApplication";
            this.minimumLogLevel = Log.VERBOSE;
            this.scope = "APP";
        }
    }
}

