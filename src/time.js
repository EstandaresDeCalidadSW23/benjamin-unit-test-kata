function time(seconds) {
    // here is where you write your code...

    if (seconds >= 60) {
        const minutes = seconds / 60
        return minutes + "m"
    }

    return seconds + "s"
 }
 
 module.exports = time