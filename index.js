var os = require('os');
var colors = require('colors');
var OSinfo = require('./modules/OSinfo');

process.stdin.setEncoding('utf-8');
process.stdin.on('readable', function() {
    var input = process.stdin.read();
    if (input !== null) {
        var instruction = input.toString().trim();
        switch (instruction) {
            case 'exit':
                process.stdout.write('Quitting app!\n');
                process.exit();
                break
            case 'version':
                process.stdout.write(process.version + '\n');
                break
            case 'system':
                process.stdout.write(process.env + '\n');
                break
            case 'sayhello':
                process.stdout.write('hello!\n');
                break;
            case 'getOSinfo':
                OSinfo.print();
                break
            default:
                process.stderr.write('Wrong instruction!\n');
                break
        };
    }
});