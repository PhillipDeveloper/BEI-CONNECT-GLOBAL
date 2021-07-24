<?xml version="1.0" encoding="utf-8"?>
<manifest xmlns:android="http://schemas.android.com/apk/res/android" android:versionCode="101005" android:versionName="1.1.5" android:installLocation="auto" android:compileSdkVersion="29" android:compileSdkVersionCodename="10" package="com.nandbox.appu3n6q00m12617860" platformBuildVersionCode="29" platformBuildVersionName="10">
    <uses-sdk android:minSdkVersion="19" android:targetSdkVersion="29"/>
    <uses-feature android:glEsVersion="20000" android:required="true"/>
    <uses-feature android:name="android.hardware.location" android:required="false"/>
    <uses-feature android:name="android.hardware.location.gps" android:required="false"/>
    <uses-feature android:name="android.hardware.location.network" android:required="false"/>
    <uses-feature android:name="android.hardware.telephony" android:required="false"/>
    <uses-feature android:name="android.hardware.camera" android:required="false"/>
    <uses-feature android:name="android.hardware.camera.autofocus" android:required="false"/>
    <uses-feature android:name="android.hardware.camera.flash" android:required="false"/>
    <uses-feature android:name="android.hardware.camera.front" android:required="false"/>
    <uses-feature android:name="android.hardware.camera.any" android:required="false"/>
    <uses-feature android:name="android.hardware.camera.external" android:required="false"/>
    <uses-feature android:name="android.hardware.wifi" android:required="false"/>
    <uses-feature android:name="android.hardware.screen.PORTRAIT" android:required="false"/>
    <uses-feature android:name="android.hardware.microphone" android:required="false"/>
    <uses-feature android:name="android.hardware.bluetooth" android:required="false"/>
    <uses-permission android:name="android.permission.RECEIVE_BOOT_COMPLETED"/>
    <uses-permission android:name="com.google.android.providers.gsf.permission.READ_GSERVICES"/>
    <uses-permission android:name="android.permission.ACCESS_COARSE_LOCATION"/>
    <uses-permission android:name="android.permission.ACCESS_FINE_LOCATION"/>
    <uses-permission android:name="android.permission.INTERNET"/>
    <uses-permission android:name="android.permission.WAKE_LOCK"/>
    <uses-permission android:name="android.permission.ACCESS_WIFI_STATE"/>
    <uses-permission android:name="android.permission.CHANGE_WIFI_STATE"/>
    <uses-permission android:name="android.permission.ACCESS_NETWORK_STATE"/>
    <uses-permission android:name="android.permission.CHANGE_NETWORK_STATE"/>
    <uses-permission android:name="android.permission.READ_PHONE_STATE"/>
    <uses-permission android:name="android.permission.CALL_PHONE"/>
    <uses-permission android:name="android.permission.VIBRATE"/>
    <uses-permission android:name="android.permission.READ_EXTERNAL_STORAGE"/>
    <uses-permission android:name="android.permission.WRITE_EXTERNAL_STORAGE"/>
    <uses-permission android:name="android.permission.READ_CONTACTS"/>
    <uses-permission android:name="android.permission.RECORD_AUDIO"/>
    <uses-permission android:name="android.permission.CHANGE_CONFIGURATION"/>
    <uses-permission android:name="android.permission.CAMERA"/>
    <uses-permission android:name="android.permission.MODIFY_AUDIO_SETTINGS"/>
    <uses-permission android:name="android.permission.BLUETOOTH" android:required="false"/>
    <uses-permission android:name="android.permission.BROADCAST_STICKY"/>
    <uses-permission android:name="com.android.vending.BILLING"/>
    <uses-permission android:name="android.permission.FOREGROUND_SERVICE"/>
    <uses-permission android:name="android.permission.READ_CALENDAR"/>
    <uses-permission android:name="android.permission.WRITE_CALENDAR"/>
    <uses-permission android:name="com.android.launcher.permission.INSTALL_SHORTCUT"/>
    <uses-permission android:name="android.permission.USE_FULL_SCREEN_INTENT"/>
    <uses-feature android:name="android.hardware.screen.landscape" android:required="false"/>
    <uses-permission android:name="com.google.android.c2dm.permission.RECEIVE"/>
    <uses-permission android:name="com.google.android.finsky.permission.BIND_GET_INSTALL_REFERRER_SERVICE"/>
    <uses-permission android:name="com.sec.android.provider.badge.permission.READ"/>
    <uses-permission android:name="com.sec.android.provider.badge.permission.WRITE"/>
    <uses-permission android:name="com.htc.launcher.permission.READ_SETTINGS"/>
    <uses-permission android:name="com.htc.launcher.permission.UPDATE_SHORTCUT"/>
    <uses-permission android:name="com.sonyericsson.home.permission.BROADCAST_BADGE"/>
    <uses-permission android:name="com.sonymobile.home.permission.PROVIDER_INSERT_BADGE"/>
    <uses-permission android:name="com.anddoes.launcher.permission.UPDATE_COUNT"/>
    <uses-permission android:name="com.majeur.launcher.permission.UPDATE_BADGE"/>
    <uses-permission android:name="com.huawei.android.launcher.permission.CHANGE_BADGE"/>
    <uses-permission android:name="com.huawei.android.launcher.permission.READ_SETTINGS"/>
    <uses-permission android:name="com.huawei.android.launcher.permission.WRITE_SETTINGS"/>
    <uses-permission android:name="android.permission.READ_APP_BADGE"/>
    <uses-permission android:name="com.oppo.launcher.permission.READ_SETTINGS"/>
    <uses-permission android:name="com.oppo.launcher.permission.WRITE_SETTINGS"/>
    <uses-permission android:name="me.everything.badger.permission.BADGE_COUNT_READ"/>
    <uses-permission android:name="me.everything.badger.permission.BADGE_COUNT_WRITE"/>
    <application android:theme="@style/WeAcceptTheme" android:label="@string/app_name" android:icon="@mipmap/ic_launcher" android:name="com.nandbox.model.helper.AppHelper" android:launchMode="singleInstance" android:screenOrientation="portrait" android:alwaysRetainTaskState="true" android:allowBackup="false" android:hardwareAccelerated="@bool/useHardwareAcceleration" android:largeHeap="true" android:supportsRtl="true" android:extractNativeLibs="false" android:usesCleartextTraffic="true" android:roundIcon="@mipmap/ic_launcher_round" android:appComponentFactory="androidx.core.app.CoreComponentFactory" android:isSplitRequired="true" android:requestLegacyExternalStorage="true">
        <provider android:name="androidx.core.content.FileProvider" android:exported="false" android:authorities="@string/file_provider" android:grantUriPermissions="true">
            <meta-data android:name="android.support.FILE_PROVIDER_PATHS" android:resource="@xml/file_paths"/>
        </provider>
        <activity android:theme="@style/AppTheme" android:name="com.nandbox.payment.PayActivity" android:screenOrientation="portrait"/>
        <activity android:theme="@style/AppTheme" android:label="@string/app_name" android:name="com.nandbox.view.EvaluationControllerActivity" android:launchMode="singleTask" android:screenOrientation="portrait" android:configChanges="locale|keyboardHidden|orientation|screenSize|layoutDirection" android:alwaysRetainTaskState="true" android:windowSoftInputMode="stateHidden">
            <intent-filter>
                <action android:name="android.intent.action.MAIN"/>
                <category android:name="android.intent.category.LAUNCHER"/>
            </intent-filter>
            <intent-filter>
                <action android:name="android.intent.action.SEND_MULTIPLE"/>
                <category android:name="android.intent.category.DEFAULT"/>
                <data android:mimeType="*/*"/>
            </intent-filter>
            <intent-filter>
                <action android:name="android.intent.action.SEND"/>
                <category android:name="android.intent.category.DEFAULT"/>
                <data android:mimeType="*/*"/>
            </intent-filter>
            <intent-filter>
                <action android:name="android.intent.action.VIEW"/>
                <category android:name="android.intent.category.DEFAULT"/>
                <category android:name="android.intent.category.BROWSABLE"/>
                <data android:scheme="@string/deep_link_schema" android:host="join_group"/>
            </intent-filter>
            <intent-filter>
                <action android:name="android.intent.action.VIEW"/>
                <category android:name="android.intent.category.DEFAULT"/>
                <category android:name="android.intent.category.BROWSABLE"/>
                <data android:scheme="@string/deep_link_schema" android:host="join_booking"/>
            </intent-filter>
            <intent-filter>
                <action android:name="android.intent.action.VIEW"/>
                <category android:name="android.intent.category.DEFAULT"/>
                <category android:name="android.intent.category.BROWSABLE"/>
                <data android:scheme="@string/deep_link_schema" android:host="join_event"/>
            </intent-filter>
            <intent-filter>
                <action android:name="android.intent.action.VIEW"/>
                <category android:name="android.intent.category.DEFAULT"/>
                <category android:name="android.intent.category.BROWSABLE"/>
                <data android:scheme="https" android:host="@string/share_link_host"/>
            </intent-filter>
            <intent-filter>
                <action android:name="android.intent.action.VIEW"/>
                <category android:name="android.intent.category.DEFAULT"/>
                <category android:name="android.intent.category.BROWSABLE"/>
                <data android:scheme="https" android:host="@string/alternative_share_link_host"/>
            </intent-filter>
            <intent-filter>
                <action android:name="android.intent.action.VIEW"/>
                <category android:name="android.intent.category.DEFAULT"/>
                <category android:name="android.intent.category.BROWSABLE"/>
                <data android:scheme="@string/deep_link_schema" android:host="open_app"/>
            </intent-filter>
        </activity>
        <uses-library android:name="com.google.android.maps" android:required="false"/>
        <activity android:theme="@style/AppTheme" android:name="com.nandbox.view.SplashActivity" android:screenOrientation="portrait" android:configChanges="locale|keyboardHidden|orientation|screenSize|layoutDirection"/>
        <meta-data android:name="com.google.android.gms.version" android:value="@integer/google_play_services_version"/>
        <activity android:theme="@style/AppTheme" android:label="@string/title_activity_my_profile" android:name="com.nandbox.view.myprofile.MyProfileActivity" android:launchMode="singleTask" android:screenOrientation="portrait" android:configChanges="locale|keyboardHidden|orientation|screenSize|layoutDirection"/>
        <activity android:theme="@style/AppTheme" android:label="@string/title_activity_profile_picture" android:name="com.nandbox.view.util.picture_select.SelectPictureActivity" android:screenOrientation="portrait" android:configChanges="locale|keyboardHidden|orientation|layoutDirection"/>
        <activity android:theme="@style/AppTheme" android:label="@string/remove_image_tag" android:icon="@drawable/remove_image_ic" android:name="com.nandbox.view.util.picture_select.SelectPictureActivity$RemoveImageActivity" android:screenOrientation="portrait" android:configChanges="locale|keyboardHidden|orientation|screenSize|layoutDirection">
            <intent-filter android:label="@string/remove_image_tag" android:icon="@drawable/remove_image_ic" android:logo="@drawable/remove_image_ic">
                <action android:name="com.nandbox.profilePicture.imageRemove"/>
                <category android:name="android.intent.category.DEFAULT"/>
            </intent-filter>
        </activity>
        <activity android:theme="@style/AppTheme" android:label="@string/quick_edit_profile" android:name="com.nandbox.view.myprofile.MyProfileDefinitionActivity" android:screenOrientation="portrait" android:configChanges="locale|keyboardHidden|orientation|screenSize|layoutDirection"/>
        <activity android:theme="@style/AppTheme" android:label="@string/title_activity_country_list" android:name="com.nandbox.view.register.CountryListActivity" android:screenOrientation="portrait" android:configChanges="locale|keyboardHidden|orientation|screenSize|layoutDirection" android:windowSoftInputMode="adjustUnspecified|stateHidden|adjustPan"/>
        <activity android:theme="@style/AppTheme" android:name="com.nandbox.model.helper.NotificationReceiver" android:configChanges="locale|layoutDirection"/>
        <activity android:theme="@style/AppTheme" android:label="@string/app_name" android:name="com.nandbox.view.navigation.SliderMenuActivity" android:launchMode="singleTop" android:screenOrientation="portrait" android:configChanges="locale|keyboardHidden|orientation|screenSize|layoutDirection" android:windowSoftInputMode="adjustUnspecified|stateUnchanged|stateHidden|stateAlwaysHidden|adjustResize"/>
        <activity android:theme="@style/AppTheme" android:label="@string/title_activity_contact_details_main" android:name="com.nandbox.view.contacts.details.ContactDetailsMainActivity" android:screenOrientation="portrait" android:configChanges="locale|keyboardHidden|orientation|screenSize|layoutDirection" android:windowSoftInputMode="adjustUnspecified|stateHidden|adjustPan"/>
        <activity android:theme="@style/AppTheme" android:label="" android:name="com.nandbox.view.groups.details.GroupDetailsActivity" android:screenOrientation="portrait" android:configChanges="locale|keyboardHidden|orientation|screenSize|layoutDirection"/>
        <activity android:theme="@style/AppTheme" android:name="com.nandbox.view.message.MessagePictureActivity" android:configChanges="locale|keyboardHidden|orientation|screenSize|layoutDirection"/>
        <activity android:theme="@style/AppTheme" android:label="@string/video_editor_activity_title" android:name="com.nandbox.view.util.videoEdit.VideoEditorActivity" android:screenOrientation="portrait" android:configChanges="locale|keyboardHidden|orientation|screenSize|layoutDirection"/>
        <receiver android:name="com.nandbox.model.remote.listener.BootListener">
            <intent-filter>
                <action android:name="android.intent.action.BOOT_COMPLETED"/>
            </intent-filter>
        </receiver>
        <service android:name="com.nandbox.model.remote.googlePushNotification.AppFirebaseMessagingService">
            <intent-filter>
                <action android:name="com.google.firebase.MESSAGING_EVENT"/>
            </intent-filter>
        </service>
        <service android:name="com.nandbox.model.remote.eventBus.FJDataHandler" android:exported="false"/>
        <activity android:theme="@style/AppTheme" android:label="Store Activity" android:name="com.nandbox.view.store.StickerStoreActivity" android:screenOrientation="portrait" android:configChanges="locale|layoutDirection"/>
        <activity android:theme="@style/AppTheme" android:name="com.nandbox.view.store.MyStickersActivity" android:screenOrientation="portrait" android:configChanges="locale|keyboardHidden|orientation|screenSize|layoutDirection"/>
        <activity android:theme="@style/AppTheme" android:label="Store Activity" android:name="com.nandbox.view.store.StickerStorePageActivity" android:screenOrientation="portrait" android:configChanges="locale|layoutDirection"/>
        <activity android:theme="@style/AppTheme" android:label="@string/title_activity_crop_image" android:name="com.nandbox.view.util.picture_select.CropImageActivity" android:screenOrientation="portrait" android:configChanges="locale|orientation|screenSize|layoutDirection" android:parentActivityName="com.nandbox.view.util.picture_select.SelectPictureActivity">
            <meta-data android:name="android.support.PARENT_ACTIVITY" android:value=".view.util.picture_select.SelectPictureActivity"/>
        </activity>
        <activity android:theme="@style/AppTheme" android:name="com.nandbox.view.message.MediaChooserActivity" android:screenOrientation="portrait" android:configChanges="locale|orientation|screenSize|layoutDirection"/>
        <activity android:theme="@style/AppTheme" android:label="@string/location_attach_title" android:name="com.nandbox.view.util.location.MapsActivity" android:configChanges="locale|orientation|screenSize|layoutDirection"/>
        <meta-data android:name="com.google.android.geo.API_KEY" android:value="@string/google_maps_key"/>
        <activity android:theme="@style/AppTheme" android:name="com.nandbox.view.util.EditTextActivity" android:configChanges="locale|layoutDirection" android:windowSoftInputMode="adjustUnspecified|stateUnchanged|stateVisible|stateAlwaysVisible|adjustResize|adjustPan|adjustNothing"/>
        <activity android:theme="@style/AppTheme.Settings" android:name="com.nandbox.view.settings.SettingsActivity" android:screenOrientation="portrait" android:configChanges="locale|layoutDirection"/>
        <activity android:theme="@style/AppTheme" android:label="@string/title_activity_change_number" android:name="com.nandbox.view.settings.ChangeNumberActivity" android:screenOrientation="portrait" android:configChanges="locale|layoutDirection"/>
        <activity android:theme="@style/AppTheme" android:label="@string/change_email" android:name="com.nandbox.view.settings.ChangeEmailActivity" android:screenOrientation="portrait" android:configChanges="locale|layoutDirection"/>
        <activity android:theme="@style/AppTheme" android:name="com.nandbox.view.settings.DeleteMyAccountActivity" android:configChanges="locale|layoutDirection"/>
        <activity android:theme="@style/AppTheme" android:label="@string/title_activity_clear_all_chats" android:name="com.nandbox.view.settings.ClearAllChatsActivity" android:configChanges="locale|layoutDirection"/>
        <activity android:theme="@style/AppTheme" android:label="@string/title_activity_create_new_group" android:name="com.nandbox.view.groups.create.NewGroupCreateActivity" android:screenOrientation="portrait" android:configChanges="locale|keyboardHidden|orientation|screenSize|layoutDirection"/>
        <activity android:theme="@style/AppTheme" android:label="@string/title_activity_create_new_group" android:name="com.nandbox.view.groups.create.NewGroupSettingsActivity" android:screenOrientation="portrait" android:configChanges="locale|keyboardHidden|orientation|screenSize|layoutDirection"/>
        <activity android:theme="@style/AppTheme" android:label="@string/participants" android:name="com.nandbox.view.groups.details.GroupParticipantsActivity" android:screenOrientation="portrait" android:configChanges="locale|keyboardHidden|orientation|layoutDirection"/>
        <activity android:theme="@style/AppTheme" android:name="com.nandbox.view.settings.AboutAppActivity"/>
        <activity android:theme="@style/AppTheme" android:label="@string/landing_page_title" android:name="com.nandbox.view.register.LandingPageActivity" android:screenOrientation="portrait"/>
        <activity android:theme="@style/AppTheme" android:label="@string/send_photo_title" android:name="com.learnncode.mediachooser.activity.PhotoViewerActivity" android:screenOrientation="portrait" android:windowSoftInputMode="adjustUnspecified|stateUnchanged|stateHidden|stateAlwaysHidden|adjustResize"/>
        <activity android:theme="@style/AppTheme" android:label="" android:name="com.learnncode.mediachooser.activity.CropRotateImageActivity"/>
        <activity android:theme="@style/AppTheme" android:name="com.nandbox.view.multiselect.ShareForwardActivity" android:screenOrientation="portrait" android:configChanges="locale|keyboardHidden|orientation|screenSize|layoutDirection" android:windowSoftInputMode="adjustUnspecified|stateUnchanged|stateHidden|stateAlwaysHidden|adjustResize"/>
        <activity android:theme="@style/AppTheme" android:name="com.nandbox.view.multiselect.InviteMembersActivity" android:screenOrientation="portrait" android:configChanges="locale|keyboardHidden|orientation|screenSize|layoutDirection" android:windowSoftInputMode="adjustUnspecified|stateUnchanged|stateHidden|stateAlwaysHidden|adjustResize"/>
        <activity android:theme="@style/AppTheme" android:name="com.nandbox.view.settings.calls.CallSettingsActivity" android:screenOrientation="portrait" android:configChanges="locale|keyboardHidden|orientation|screenSize|layoutDirection" android:windowSoftInputMode="adjustUnspecified|stateUnchanged|stateHidden|stateAlwaysHidden|adjustResize"/>
        <activity android:theme="@style/AppTheme" android:name="com.nandbox.view.myprofile.AddContactsToMyProfileActivity" android:screenOrientation="portrait" android:configChanges="locale|orientation|screenSize|layoutDirection" android:windowSoftInputMode="adjustUnspecified|stateUnchanged|stateHidden|stateAlwaysHidden|adjustResize"/>
        <activity android:theme="@style/AppTheme" android:name="com.nandbox.view.message.AudioChooserActivity" android:screenOrientation="portrait" android:windowSoftInputMode="stateAlwaysHidden"/>
        <activity android:theme="@style/AppTheme" android:name="com.nandbox.view.util.materialfilepicker.ui.FilePickerActivity" android:screenOrientation="portrait" android:windowSoftInputMode="stateAlwaysHidden"/>
        <activity android:theme="@style/AppTheme" android:label="@string/create_bot" android:name="com.nandbox.view.bots.ManageBotActivity" android:screenOrientation="portrait" android:configChanges="locale|orientation|screenSize|layoutDirection" android:windowSoftInputMode="adjustUnspecified|stateHidden|adjustResize"/>
        <activity android:theme="@style/AppTheme" android:label="@string/booking_details" android:name="com.nandbox.view.booking.details.BookingDetailsActivity" android:screenOrientation="portrait" android:configChanges="locale|orientation|screenSize|layoutDirection" android:windowSoftInputMode="adjustUnspecified|stateHidden|adjustResize"/>
        <activity android:theme="@style/AppTheme" android:name="com.nandbox.view.booking.availableDay.BookingAvailableEditActivity" android:screenOrientation="portrait" android:configChanges="locale|orientation|screenSize|layoutDirection" android:windowSoftInputMode="adjustUnspecified|stateHidden|adjustResize"/>
        <activity android:theme="@style/AppTheme" android:label="@string/shared_content" android:name="com.nandbox.view.mediaViewer.MediaViewerActivity" android:screenOrientation="portrait" android:configChanges="locale|orientation|screenSize|layoutDirection"/>
        <service android:name="com.nandbox.webrtc.WebRTCCallingService"/>
        <provider android:name="com.nandbox.model.util.GenericFileProvider" android:exported="false" android:authorities="com.nandbox.appu3n6q00m12617860.FileProvider" android:grantUriPermissions="true">
            <meta-data android:name="android.support.FILE_PROVIDER_PATHS" android:resource="@xml/provider_paths"/>
        </provider>
        <activity android:theme="@style/AppTheme" android:name="com.nandbox.view.voip.CallActivity" android:screenOrientation="portrait"/>
        <activity android:theme="@style/AppTheme" android:label="Barcode Reader" android:name="com.nandbox.view.barcode.BarcodeReaderActivity"/>
        <activity android:theme="@style/AppTheme" android:name="com.nandbox.view.contacts.details.BotJoinActivity" android:screenOrientation="portrait"/>
        <meta-data android:name="com.google.firebase.messaging.default_notification_channel_id" android:value="@string/default_notification_channel_id"/>
        <activity android:theme="@style/AppTheme" android:label="@string/admin_settings" android:name="com.nandbox.view.groups.details.adminSettings.GroupAdminActivity" android:screenOrientation="portrait"/>
        <activity android:theme="@style/AppTheme" android:name="com.nandbox.view.events.details.EventDetailsActivity" android:screenOrientation="portrait"/>
        <receiver android:name="com.nandbox.model.remote.listener.SMSListener" android:exported="true">
            <intent-filter>
                <action android:name="com.google.android.gms.auth.api.phone.SMS_RETRIEVED"/>
            </intent-filter>
        </receiver>
        <service android:name="com.nandbox.view.mapsTracking.LocationMonitoringService"/>
        <uses-library android:name="org.apache.http.legacy" android:required="false"/>
        <meta-data android:name="com.facebook.sdk.ApplicationId" android:value="@string/facebook_app_id"/>
        <activity android:theme="@style/AppTheme" android:label="@string/app_name" android:name="com.facebook.FacebookActivity" android:configChanges="keyboard|keyboardHidden|orientation|screenLayout|screenSize"/>
        <activity android:theme="@style/AppTheme" android:name="com.facebook.CustomTabActivity" android:exported="true">
            <intent-filter>
                <action android:name="android.intent.action.VIEW"/>
                <category android:name="android.intent.category.DEFAULT"/>
                <category android:name="android.intent.category.BROWSABLE"/>
                <data android:scheme="@string/fb_login_protocol_scheme"/>
            </intent-filter>
            <intent-filter>
                <action android:name="android.intent.action.VIEW"/>
                <category android:name="android.intent.category.DEFAULT"/>
                <category android:name="android.intent.category.BROWSABLE"/>
                <data android:scheme="fbconnect" android:host="cct.com.nandbox.appu3n6q00m12617860"/>
            </intent-filter>
        </activity>
        <activity android:theme="@style/AppTheme" android:name="com.nandbox.view.search.SelectSearchActivity" android:screenOrientation="portrait" android:windowSoftInputMode="stateAlwaysHidden"/>
        <activity android:theme="@style/AppTheme" android:name="com.nandbox.view.ScanDemoActivity" android:screenOrientation="portrait" android:windowSoftInputMode="stateAlwaysHidden"/>
        <activity android:theme="@style/AppTheme" android:label="" android:name="com.nandbox.view.mapsTracking.activity.MarkerDetailsActivity" android:screenOrientation="portrait" android:configChanges="locale|keyboardHidden|orientation|screenSize|layoutDirection"/>
        <activity android:theme="@style/AppTheme" android:label="@string/search" android:name="com.nandbox.view.search.SearchMarkerDetailsActivity" android:screenOrientation="portrait" android:configChanges="locale|keyboardHidden|orientation|screenSize|layoutDirection"/>
        <activity android:theme="@style/AppTheme" android:label="@string/balance" android:name="com.nandbox.view.balance.BalanceListActivity" android:screenOrientation="portrait" android:configChanges="locale|keyboardHidden|orientation|screenSize|layoutDirection"/>
        <activity android:theme="@style/AppTheme" android:label="@string/search" android:name="com.nandbox.view.search.SelectDateSearchActivity" android:screenOrientation="portrait" android:configChanges="locale|keyboardHidden|orientation|screenSize|layoutDirection"/>
        <activity android:theme="@style/AppTheme" android:name="com.nandbox.view.dynamicField.DynamicFieldListActivity" android:screenOrientation="portrait" android:configChanges="locale|keyboardHidden|orientation|screenSize|layoutDirection"/>
        <activity android:theme="@style/AppTheme" android:name="com.nandbox.view.dynamicField.DynamicFieldsFormActivity" android:screenOrientation="portrait" android:configChanges="locale|keyboardHidden|orientation|screenSize|layoutDirection"/>
        <meta-data android:name="com.google.android.gms.ads.APPLICATION_ID" android:value="@string/ad_google_key"/>
        <activity android:theme="@style/MediaSelectorTheme" android:name="com.learnncode.mediachooser.activity.HomeFragmentActivity" android:screenOrientation="portrait" android:configChanges="orientation|screenSize"/>
        <activity android:theme="@style/MediaSelectorTheme" android:name="com.learnncode.mediachooser.activity.BucketHomeFragmentActivity" android:screenOrientation="portrait" android:configChanges="orientation|screenSize"/>
        <activity android:theme="@style/zxing_CaptureTheme" android:name="com.journeyapps.barcodescanner.CaptureActivity" android:clearTaskOnLaunch="true" android:stateNotNeeded="true" android:screenOrientation="sensorLandscape" android:windowSoftInputMode="stateAlwaysHidden"/>
        <activity android:name="com.facebook.CustomTabMainActivity"/>
        <meta-data android:name="com.bumptech.glide.integration.okhttp3.OkHttpGlideModule" android:value="GlideModule"/>
        <service android:name="com.google.firebase.components.ComponentDiscoveryService" android:exported="false">
            <meta-data android:name="com.google.firebase.components:com.google.firebase.database.DatabaseRegistrar" android:value="com.google.firebase.components.ComponentRegistrar"/>
            <meta-data android:name="com.google.firebase.components:com.google.firebase.analytics.connector.internal.AnalyticsConnectorRegistrar" android:value="com.google.firebase.components.ComponentRegistrar"/>
            <meta-data android:name="com.google.firebase.components:com.google.firebase.iid.Registrar" android:value="com.google.firebase.components.ComponentRegistrar"/>
        </service>
        <activity android:theme="@style/Theme.Translucent.NoTitleBar" android:name="com.google.android.gms.auth.api.signin.internal.SignInHubActivity" android:exported="false" android:excludeFromRecents="true"/>
        <service android:name="com.google.android.gms.auth.api.signin.RevocationBoundService" android:permission="com.google.android.gms.auth.api.signin.permission.REVOCATION_NOTIFICATION" android:exported="true"/>
        <service android:name="com.google.firebase.messaging.FirebaseMessagingService" android:exported="false">
            <intent-filter android:priority="-500">
                <action android:name="com.google.firebase.MESSAGING_EVENT"/>
            </intent-filter>
        </service>
        <receiver android:name="com.google.firebase.iid.FirebaseInstanceIdReceiver" android:permission="com.google.android.c2dm.permission.SEND" android:exported="true">
            <intent-filter>
                <action android:name="com.google.android.c2dm.intent.RECEIVE"/>
            </intent-filter>
        </receiver>
        <activity android:theme="@style/Theme.Translucent.NoTitleBar" android:name="com.google.android.gms.common.api.GoogleApiActivity" android:exported="false"/>
        <provider android:name="com.google.firebase.provider.FirebaseInitProvider" android:exported="false" android:authorities="com.nandbox.appu3n6q00m12617860.firebaseinitprovider" android:initOrder="100"/>
        <receiver android:name="com.google.android.gms.measurement.AppMeasurementReceiver" android:enabled="true" android:exported="false"/>
        <receiver android:name="com.google.android.gms.measurement.AppMeasurementInstallReferrerReceiver" android:permission="android.permission.INSTALL_PACKAGES" android:enabled="true" android:exported="true">
            <intent-filter>
                <action android:name="com.android.vending.INSTALL_REFERRER"/>
            </intent-filter>
        </receiver>
        <service android:name="com.google.android.gms.measurement.AppMeasurementService" android:enabled="true" android:exported="false"/>
        <service android:name="com.google.android.gms.measurement.AppMeasurementJobService" android:permission="android.permission.BIND_JOB_SERVICE" android:enabled="true" android:exported="false"/>
        <activity android:theme="@style/Theme.Translucent" android:name="com.google.android.gms.ads.AdActivity" android:exported="false" android:configChanges="keyboard|keyboardHidden|orientation|screenLayout|uiMode|screenSize|smallestScreenSize"/>
        <provider android:name="com.google.android.gms.ads.MobileAdsInitProvider" android:exported="false" android:authorities="com.nandbox.appu3n6q00m12617860.mobileadsinitprovider" android:initOrder="100"/>
        <provider android:name="com.facebook.internal.FacebookInitProvider" android:exported="false" android:authorities="com.nandbox.appu3n6q00m12617860.FacebookInitProvider"/>
        <receiver android:name="com.facebook.CurrentAccessTokenExpirationBroadcastReceiver" android:exported="false">
            <intent-filter>
                <action android:name="com.facebook.sdk.ACTION_CURRENT_ACCESS_TOKEN_CHANGED"/>
            </intent-filter>
        </receiver>
        <provider android:name="androidx.lifecycle.ProcessLifecycleOwnerInitializer" android:exported="false" android:multiprocess="true" android:authorities="com.nandbox.appu3n6q00m12617860.lifecycle-process"/>
        <meta-data android:name="com.google.android.play.billingclient.version" android:value="2.2.1"/>
        <activity android:theme="@style/Theme.Translucent.NoTitleBar" android:name="com.android.billingclient.api.ProxyBillingActivity" android:configChanges="keyboard|keyboardHidden|orientation|screenLayout|screenSize"/>
        <meta-data android:name="com.android.vending.splits.required" android:value="true"/>
        <meta-data android:name="com.android.stamp.source" android:value="https://play.google.com/store"/>
        {/*<meta-data android:name="com.android.stamp.type" android:value="STAMP_TYPE_DISTRIBUTION_APK"/>*/}
        <meta-data android:name="com.android.vending.splits" android:value="@xml/splits0"/>
        <meta-data android:name="com.android.vending.derived.apk.id" android:value="30"/>
    </application>
    </manifest>




