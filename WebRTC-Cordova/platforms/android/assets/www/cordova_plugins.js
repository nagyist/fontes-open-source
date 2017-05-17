cordova.define('cordova/plugin_list', function(require, exports, module) {
module.exports = [
    {
        "id": "cordova-plugin-chrome-apps-power.power",
        "file": "plugins/cordova-plugin-chrome-apps-power/power.js",
        "pluginId": "cordova-plugin-chrome-apps-power",
        "clobbers": [
            "chrome.power"
        ]
    },
    {
        "id": "cordova-plugin-dialogs.notification",
        "file": "plugins/cordova-plugin-dialogs/www/notification.js",
        "pluginId": "cordova-plugin-dialogs",
        "merges": [
            "navigator.notification"
        ]
    },
    {
        "id": "cordova-plugin-dialogs.notification_android",
        "file": "plugins/cordova-plugin-dialogs/www/android/notification.js",
        "pluginId": "cordova-plugin-dialogs",
        "merges": [
            "navigator.notification"
        ]
    },
    {
        "id": "cordova-plugin-device.device",
        "file": "plugins/cordova-plugin-device/www/device.js",
        "pluginId": "cordova-plugin-device",
        "clobbers": [
            "device"
        ]
    }
];
module.exports.metadata = 
// TOP OF METADATA
{
    "cordova-plugin-chrome-apps-power": "1.0.4",
    "cordova-plugin-dialogs": "1.3.2",
    "cordova-plugin-crosswalk-webview": "2.3.0",
    "cordova-plugin-device": "1.1.5",
    "cordova-plugin-iosrtc": "4.0.0",
    "cordova-plugin-whitelist": "1.3.2"
};
// BOTTOM OF METADATA
});