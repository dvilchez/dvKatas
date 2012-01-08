package com.xuaps.android;

import android.app.Application;
import com.google.inject.Injector;
import com.xtremelabs.robolectric.Robolectric;
import org.junit.runners.model.InitializationError;
import roboguice.inject.ContextScope;
import com.xtremelabs.robolectric.RobolectricTestRunner;



public class InjectedTestRunner extends RobolectricTestRunner {

    public InjectedTestRunner(Class<?> testClass) throws InitializationError {
        super(testClass);
    }

    @Override
    protected Application createApplication() {
        MyApplication application = (MyApplication)super.createApplication();
        application.setModule(new MyTestModule());
        return application;
    }

    @Override
    public void prepareTest(Object test) {
        MyApplication application = (MyApplication) Robolectric.application;

        Injector injector = application.getInjector();
        ContextScope scope = injector.getInstance(ContextScope.class);
        scope.enter(application);

        injector.injectMembers(test);
    }
}
