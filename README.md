# Getting Started

> **Note**: Make sure you have completed the [React Native - Environment Setup](https://reactnative.dev/docs/environment-setup) instructions till "Creating a new application" step, before proceeding.

## Step 1: Install dependencies

First, you will need to install all dependencies:

```bash
yarn install
```

## Step 2: Start Application

Let Metro Bundler run in its _own_ terminal. Open a _new_ terminal from the _root_ of your React Native project. Run the following command to start your _Android_ or _iOS_ app:

### For Android

```bash
yarn android
```

### For iOS

```bash
yarn ios
```

If everything is set up _correctly_, you should see app running in your _Android Emulator_ or _iOS Simulator_ shortly provided you have set up your emulator/simulator correctly.

This is one way to run your app — you can also run it directly from within Android Studio and Xcode respectively.

## Step 3: Create builds

This section will outline the methods for building applications for testing on both Android and iOS platforms.

### Android APK

This script enables the creation of an APK file for deployment on Android devices.

```bash
yarn android-apk
```

The file can be found at `android/app/build/outputs/apk/release/app-release.apk`.
