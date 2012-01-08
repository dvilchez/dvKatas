package com.xuaps.android;

import com.google.inject.Module;
import roboguice.application.RoboApplication;

import java.util.List;

public class MyApplication extends RoboApplication {

    private Module module = new MyModule();

    @Override
    protected void addApplicationModules(List modules) {
        modules.add(module);
    }

    public void setModule(Module module) {
        this.module = module;
    }
}

