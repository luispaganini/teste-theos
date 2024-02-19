package com.testetheos.deviceInfo

import android.os.Build
import com.facebook.react.bridge.Promise
import com.facebook.react.bridge.ReactApplicationContext
import com.facebook.react.bridge.ReactContextBaseJavaModule
import com.facebook.react.bridge.ReactMethod
import com.jaredrummler.android.device.DeviceName
import com.testetheos.BuildConfig
import java.util.Locale


class DeviceInfoModule(reactContext: ReactApplicationContext) : ReactContextBaseJavaModule(reactContext) {
    override fun getName(): String {
        return "DeviceInfoModule"
    }
    
    @ReactMethod
    fun getAppVersion(promise: Promise) {
        val appVersion = BuildConfig.VERSION_NAME
        promise.resolve(appVersion)
    }

    @ReactMethod
    fun getAndroidVersion(promise: Promise) {
        val androidVersion = Build.VERSION.RELEASE
        promise.resolve("Android $androidVersion")
    }

    @ReactMethod
    fun getDeviceModel(promise: Promise) {
        val deviceName = DeviceName.getDeviceName(Build.MODEL, Build.MANUFACTURER)
        promise.resolve(deviceName)
    }
}