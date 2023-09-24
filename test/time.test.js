const time = require("../src/time")

test("should return '0s' for 0 seconds", function () {
    // setup
    const seconds = 0;
  
    // execute
    const result = time(seconds);
  
    // expectation
    expect(result).toEqual("0s");
});

test("should return '1s' for 1 second", function () {
    // setup
    const seconds = 1;
  
    // execute
    const result = time(seconds);
  
    // expectation
    expect(result).toEqual("1s");
});

test("should return '2m' for 120 seconds", function () {
    // setup
    const seconds = 120;
  
    // execute
    const result = time(seconds);
  
    // expectation
    expect(result).toEqual("2m");
});

// test("0 seconds", () => {
//     expect(time(0)).toEqual("0s")
// })

// test("1 second", () => {
//     expect(time(1)).toEqual("1s")
// })

// test("2 seconds", () => {
//     expect(time(2)).toEqual("2s")
// })

// test("59 seconds", () => {
//     expect(time(59)).toEqual("59s")
// })

// test("1 minute", () => {
//     expect(time(60)).toEqual("1m")
// })

// test("2 minutes", () => {
//     expect(time(120)).toEqual("2m")
// })

// test("3 minutes", () => {
//     expect(time(180)).toEqual("3m")
// })

// test("59 minutes", () => {
//     expect(time(59 * 60)).toEqual("59m")
// })

// test("1 hour", () => {
//     expect(time(60 * 60)).toEqual("1h")
// })
// // ...
// test("1 hour 5 minutes", () => {
//     expect(time(65 * 60)).toEqual("1h 5m")
// })