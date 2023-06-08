let arr = [1, 2, false, 'hello', 24, 'world', undefined, null, 'error', 22]

let bekzod = arr.filter(order => typeof (order) === 'number')
if (bekzod >= 5){
    console.log(
        'good'
    );
} else {
    console.log(
        'bad'
    );
}