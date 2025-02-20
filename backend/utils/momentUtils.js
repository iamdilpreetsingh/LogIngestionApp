function TimeStringToMillis(timeString) {
    const date = Date.parse(timeString);
    return date;
}

module.exports = {
    TimeStringToMillis
}