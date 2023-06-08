package com.rntes; // replace your-apps-package-name with your app’s package name
import com.facebook.react.bridge.NativeModule;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
import java.util.Map;
import java.util.HashMap;
import android.util.Log;
import com.facebook.react.bridge.Arguments;
import com.facebook.react.bridge.Callback;
import com.facebook.react.bridge.ReactMethod;
import com.facebook.react.bridge.WritableArray;
import com.facebook.react.bridge.WritableMap;
import com.facebook.react.bridge.WritableNativeArray;
import com.facebook.react.bridge.WritableNativeMap;
import java.util.HashMap;
import java.util.Map;

public class MoviesModule extends ReactContextBaseJavaModule {
    MoviesModule(ReactApplicationContext context) {
        super(context);
    }


    // add to MoviesModule.java
    @Override
    public String getName() {
        return "MoviesModule";
    }

@ReactMethod
public void testArray(String name, String location, Callback callback) {
    String[] arrayData = {"Item 1", "Item 2", "Item 3"};

    WritableArray writableArray = new WritableNativeArray();
    for (String item : arrayData) {
        writableArray.pushString(item);
    }

    callback.invoke(null, writableArray);
}

@ReactMethod
public void createMoviesEvent(String name, String location, Callback callback) {
    Map<String, Object>[] arrayData = new Map[] {
        createMovie("Iron Man II", 2010),
        createMovie("Captain America", 2022),
        createMovie("Thor", 2011),
        createMovie("Avengers Infinity War", 2018),
        createMovie("SpiderMan 2", 2011)
    };

    WritableArray writableArray = new WritableNativeArray();
    for (Map<String, Object> item : arrayData) {
        WritableMap writableMap = new WritableNativeMap();
        for (Map.Entry<String, Object> entry : item.entrySet()) {
            writableMap.putString(entry.getKey(), String.valueOf(entry.getValue()));
        }
        writableArray.pushMap(writableMap);
    }

    callback.invoke(writableArray);
}

private Map<String, Object> createMovie(String title, int year) {
    Map<String, Object> movie = new HashMap<>();
    movie.put("title", title);
    movie.put("year", year);
    return movie;
}



}