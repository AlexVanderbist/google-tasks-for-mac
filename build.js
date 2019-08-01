var nativefier = require('nativefier').default;
const path = require('path');
const fs = require('fs');

var options = {
    name: 'Google Tasks',
    targetUrl: 'https://tasks.google.com/embed/?origin=https://calendar.google.com&fullWidth=1',
    version: '0.0.1',
    out: '.',
    overwrite: true,
    width: 720,
    height: 900,
    singleInstance: true,
    icon: path.join(__dirname, 'icon.png'),
    inject: [path.join(__dirname, 'preload.js')],
    tray: true,
    fastQuit: false,
};

nativefier(options, function (error, appPath) {
    if (error) {
        console.error(error);

        return;
    }

    fs.copyFile('./icon-sm.png', './Google Tasks-darwin-x64/Google Tasks.app/Contents/Resources/app/icon.png', (err) => {
        if (err) throw err;

        console.log('`icon-sm.png` was copied to `Google Tasks-darwin-x64/Google Tasks.app/Contents/Resources/app/icon.png`');
    });

    console.log('App has been nativefied to', appPath);
});