module.exports = (fetch) => {
    fetch.get('/generate', this.generate);
}

exports.generate = (req, res) => {
    function getRandomInt(min, max) {
        min = Math.ceil(min); // Round up the minimum value
        max = Math.floor(max); // Round down the maximum value
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    const randomNumber = getRandomInt(1, 100);
    console.log(randomNumber);
}