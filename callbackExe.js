function getUserName(callback) {
    setTimeout(() => {
        const userName = `Evatar`
        callback(userName)
    }, 1000)
}
// getUserName((name)=>console.log(`User name is: ${name}`))

function loadScore(callback) {
    setTimeout(() => {
        const score = 85
        callback(score)
    }, 1500);
}
// loadScore((score) => console.log(`Loaded score: ${score}`))
// console.log("End of script")

function checkLogin(callback) {
    setTimeout(() => {
        const isLoggedIn = true
        callback(isLoggedIn)
    }, 2000);
}
// checkLogin((bool) => console.log(bool ? 'User is logged in' : 'User is NOT logged in'))

function getProductPrice(productId, callback) {
    setTimeout(() => {
        const price = 99.9
        callback(productId, price)
    }, 1200);
}
// getProductPrice(123, (productId, price) => console.log(`Price for product ${productId} is: ${price}`))

function loadConfig(callback) {
    setTimeout(() => {
        const config = {
            env: "dev",
            debug: true
        };
        callback(config)
    }, 500);
}
// loadConfig((obj) => console.log(` Config loaded: \n ${obj.env}, ${obj.debug}`))

function addAsync(a, b, callback) {
    setTimeout(() => {
        const sum = a + b
        callback(sum)
    }, 1000)
}
// addAsync(5, 7, (sum) => console.log(`Sum is: ${sum}`))

function getFirstAsync(array, callback) {
    setTimeout(() => {
        const element = array[0]
        callback(element)
    }, 700)
}
// getFirstAsync(["a", "b", "c"], (element) => console.log(`First: ${element}`))

function isEvenAsync(number, callback) {
    setTimeout(() => {
        if (number % 2 == 0) {
            callback(true)
        } else {
            callback(false)
        }
    }, 800)
}
// isEvenAsync(4, (even)=>console.log(`Number is even: ${even}`))
// isEvenAsync(5, (even)=>console.log(`Number is even: ${even}`))

function downloadFile(url, callback) {
    setTimeout(() => {
        console.log(`Downloading from: ${url}`);
        callback("Download finished")
    }, 1500);
}
// downloadFile(`http://example.com/file`,(message)=> console.log(message))

function doubleAsync(value, callback){
    setTimeout(() => {
        const result = value * 2
        callback(result)
    }, 300);
}
// doubleAsync(10, (sum)=> console.log(`Result: ${sum}`))