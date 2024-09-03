# Getting Started

> **Note**: Before proceeding, ensure you have completed the [React Native - Environment Setup](https://reactnative.dev/docs/environment-setup) instructions up to the "Creating a new application" step.

## Step 1: Install dependencies

First, install all required dependencies by running:

```bash
yarn install
```

## Step 2: Start the Application

Let Metro Bundler run in its own terminal. Open a new terminal from the root of your React Native project and execute the command to start your app on either Android or iOS:

### For Android

```bash
yarn android
```

### For iOS

```bash
yarn ios
```

If everything is set up correctly, you should see the app running in your Android Emulator or iOS Simulator shortly, assuming that the emulator/simulator has been configured properly.

This is just one way to run your app; you can also launch it directly from within Android Studio or Xcode, respectively.

## Step 3: Create Builds

This section describes how to build applications for testing on both Android and iOS platforms.

### Android APK

To create an APK file for deployment on Android devices, run the following command:

```bash
yarn android-apk
```

The generated APK file can be found at:  
`android/app/build/outputs/apk/release/app-release.apk`.

### Building an IPA File in Xcode

Follow these steps to build an IPA file for iOS:

1. **Open the Project in Xcode**:

   - Launch Xcode and open **CommentsTestProject.xcodeproj**.

2. **Configure the Target**:

   - Navigate to the target settings and select the **CommentsTestProject** target.

3. **Create the Archive**:

   - From the top menu, select **Product** > **Archive**. This will initiate the archiving process for your application.
   - Once the archiving process is complete, Xcode will open the Organizer window displaying the archive.

4. **Export the IPA File**:

   - Select the archived application and click the **Distribute App** button.
   - Choose the distribution method: **Ad Hoc**, **App Store**, or **Development** (based on your needs).
   - Follow the on-screen instructions to complete the process, ensuring you select the necessary provisioning profiles, certificates, and settings.

5. **Save the IPA File**:
   - After completing the process, you will find the IPA file saved on your computer at the specified location.
