var os = require('os');
var colors = require('colors');
var time = require('./time');

function getOSinfo() {
    var type = os.type();
    if (type === 'Darwin') {
        type = 'OSX';
    } else if (type === 'Windows_NT') {
        type = 'Windows';
    }
    var release = os.release();
    var cpu = os.cpus()[0].model;
    var userInfo = os.userInfo();
    console.log('System:'.yellow, type.bgYellow);
    console.log('Release:'.magenta, release.bgMagenta);
    console.log('CPU model:'.red, cpu.bgRed);
    console.log('Uptime: '.gray, time.give().bgBlack);
    console.log('User name:'.cyan, userInfo.username.bgCyan);
    console.log('Home dir:'.green, userInfo.homedir.bgGreen);
};

exports.print = getOSinfo;