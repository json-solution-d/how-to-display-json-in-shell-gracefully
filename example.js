const test = {
    "a": 1,
    "b": 2,
    "c": [
        3, 
        4, 
        {
            "d": {
                "e": 5
            },
            "f": {
                "e": 8
            }
        }
    ],
    "d": 7
}

const testJsonStr = JSON.stringify(test);

console.log(testJsonStr);
