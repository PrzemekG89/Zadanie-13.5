var os = require('os')

function getTime() {
    var uptime = os.uptime()
    var second = uptime.toFixed(0)
    var minutes = (uptime / 60).toFixed(0)
    var hours = (minutes / 60).toFixed(0)
    if (second < 60) {
        return second + ' sec'
    } else if (second >= 60 && minutes < 60) {
        second = (uptime % 60).toFixed(0)
        return minutes + ' min ' + second + ' sec'
    } else if (minutes >= 60) {
        minutes = ((uptime / 60) % 60).toFixed(0)
        second = (uptime % 60).toFixed(0)
        return hours + ' h ' + minutes + ' min ' + second + ' sec';
    }
}

exports.give = getTime