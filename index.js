// Q 1>

import { object } from "prop-types";

// 2667. Create Hello World Function:
// Write a function createHelloWorld. It should return a new function that always returns "Hello World".

var createHelloWorld = function () {

    return function (...args) {
        return 'Hello World'

    }
};

// const f = createHelloWorld()
// console.log(f());






// Q 2>

// 2620. Counter
// Given an integer n, return a counter function. This counter function initially returns n and then returns 1 more than the previous value every subsequent time it is called (n, n + 1, n + 2, etc).


var createCounter = function (n) {

    return function () {
        return n++

    };
};


// const counter = createCounter(10)
// console.log(counter())
// console.log(counter())
// console.log(counter())



// Q 3>

// 2704. To Be Or Not To Be

// Write a function expect that helps developers test their code. It should take in any value val and return an object with the following two functions.

// toBe(val) accepts another value and returns true if the two values === each other. If they are not equal, it should throw an error "Not Equal".
// notToBe(val) accepts another value and returns true if the two values !== each other. If they are equal, it should throw an error "Equal".

var expect = function (val) {
    return {
        toBe: (value) => {
            if (value === val) {
                return true
            }
            else {
                throw 'Not Equal'
            }
        },
        notToBe: (value) => {
            if (value !== val) {
                return true
            }
            else {
                throw 'Equal'
            }
        }
    }

};

// console.log(expect(5).toBe(5));





// Q 4>

// 2665. Counter II

// Write a function createCounter. It should accept an initial integer init. It should return an object with three functions.

// The three functions are:

// increment() increases the current value by 1 and then returns it.
// decrement() reduces the current value by 1 and then returns it.
// reset() sets the current value to init and then returns it.


var createCounter = function (init) {
    let count = init
    return {
        increment: () => {
            return ++count
        },
        reset: () => {
            count = init
            return count
        },
        decrement: () => {
            return --count
        },

    }

};

// const counter = createCounter(5)
// console.log(counter.increment())
// console.log(counter.reset())
// console.log(counter.decrement())





// Q 5>

// 2635. Apply Transform Over Each Element in Array

// Given an integer array arr and a mapping function fn, return a new array with a transformation applied to each element.

// The returned array should be created such that returnedArray[i] = fn(arr[i], i).

// Please solve it without the built-in Array.map method.


var map = function (arr, fn) {
    let newArr = []
    arr.forEach((value, index) => {
        newArr.push(fn(value, index))

    });
    return newArr

};



// Q 6>

//  2634. Filter Elements from Array

// Given an integer array arr and a filtering function fn, return a filtered array filteredArr.

// The fn function takes one or two arguments:

// arr[i] - number from the arr
// i - index of arr[i]
// filteredArr should only contain the elements from the arr for which the expression fn(arr[i], i) evaluates to a truthy value. A truthy value is a value where Boolean(value) returns true.

// Please solve it without the built-in Array.filter method.


var filter = function (arr, fn) {
    let filteredArr = []

    arr.forEach((item, index) => {
        if (fn(item, index)) {
            filteredArr.push(item)
        }
    })
    return filteredArr

};






// Q 7 >

// 2626. Array Reduce Transformation

// Given an integer array nums, a reducer function fn, and an initial value init, return the final result obtained by executing the fn function on each element of the array, sequentially, passing in the return value from the calculation on the preceding element.

// This result is achieved through the following operations: val = fn(init, nums[0]), val = fn(val, nums[1]), val = fn(val, nums[2]), ... until every element in the array has been processed. The ultimate value of val is then returned.
// 
// If the length of the array is 0, the function should return init.
// 
// Please solve it without using the built-in Array.reduce method.


var reduce = function (nums, fn, init) {
    let val = init
    if (nums.length === 0) {
        return init
    }
    else {
        nums.forEach((num) => {
            val = fn(val, num)
        })
    }
    return val

};




//  Q 8 >


// 2629. Function Composition



// Given an array of functions [f1, f2, f3, ..., fn], return a new function fn that is the function composition of the array of functions.

// The function composition of [f(x), g(x), h(x)] is fn(x) = f(g(h(x))).
// 
// The function composition of an empty list of functions is the identity function f(x) = x.
// 
// You may assume each function in the array accepts one integer as input and returns one integer as output.
// 


var compose = function (functions) {

    return function (x) {
        let value = x
        if (functions.length === 0) {
            return value
        }
        else {
            for (let i = functions.length - 1; i >= 0; i--) {
                value = functions[i](value)
            }

        }
        return value

    }
};

// const fn = compose([x => x + 1, x => 2 * x])
// console.log((fn(4)));
// 9









//  Q 9 >

// 2703. Return Length of Arguments Passed

// Write a function argumentsLength that returns the count of arguments passed to it.


var argumentsLength = function (...args) {
    return args.length

};

// console.log(argumentsLength(1, 2, 3));







//  Q 10>

// 2666. Allow One Function Call

// Given a function fn, return a new function that is identical to the original function except that it ensures fn is called at most once.

// The first time the returned function is called, it should return the same result as fn.
// Every subsequent time it is called, it should return undefined.


var once = function (fn) {
    let flag = false
    return function (...args) {
        if (flag === false) {
            flag = true
            return fn(...args)
        }
        else {
            return undefined
        }

    }
};






//  Q 11 >

// 2623. Memoize

// Given a function fn, return a memoized version of that function.

// A memoized function is a function that will never be called twice with the same inputs. Instead it will return a cached value.
// 
// You can assume there are 3 possible input functions: sum, fib, and factorial.
// 
// sum accepts two integers a and b and returns a + b. Assume that if a value has already been cached for the arguments (b, a) where a != b, it cannot be used for the arguments (a, b). For example, if the arguments are (3, 2) and (2, 3), two separate calls should be made.
// fib accepts a single integer n and returns 1 if n <= 1 or fib(n - 1) + fib(n - 2) otherwise.
// factorial accepts a single integer n and returns 1 if n <= 1 or factorial(n - 1) * n otherwise.



function memoize(fn) {
    let cachedValue = {}
    return function (...args) {
        const val = args
        if (val in cachedValue) {
            return cachedValue[val]
        }
        else {
            const result = fn(...args)
            cachedValue[val] = result

            return result
        }


    }
}





//  Q 12 >

// 2723. Add Two Promises


// Given two promises promise1 and promise2, return a new promise. promise1 and promise2 will both resolve with a number. The returned promise should resolve with the sum of the two numbers.


var addTwoPromises = async function (promise1, promise2) {
    let val1 = await promise1
    let val2 = await promise2

    return val1 + val2

};




//  Q 13 >

// 2621. Sleep


// Given a positive integer millis, write an asynchronous function that sleeps for millis milliseconds. It can resolve any value.


async function sleep(millis) {
    await new Promise((res) => {
        setTimeout(() => {
            res()

        }, millis)
    })

}



//  Q 14 >

// 2715. Timeout Cancellation

// Given a function fn, an array of arguments args, and a timeout t in milliseconds, return a cancel function cancelFn.

// After a delay of cancelTimeMs, the returned cancel function cancelFn will be invoked.
// 
// setTimeout(cancelFn, cancelTimeMs)
// Initially, the execution of the function fn should be delayed by t milliseconds.
// 
// If, before the delay of t milliseconds, the function cancelFn is invoked, it should cancel the delayed execution of fn. Otherwise, if cancelFn is not invoked within the specified delay t, fn should be executed with the provided args as arguments.



var cancellable = function (fn, args, t) {
    const timerId = setTimeout(() => {
        fn(...args)
    }, t)

    const cancelFn = () => {
        clearTimeout(timerId)
    }

};









// Q 15 >

//  2725. Interval Cancellation

// Given a function fn, an array of arguments args, and an interval time t, return a cancel function cancelFn.

// After a delay of cancelTimeMs, the returned cancel function cancelFn will be invoked.
// 
// setTimeout(cancelFn, cancelTimeMs)
// The function fn should be called with args immediately and then called again every t milliseconds until cancelFn is called at cancelTimeMs ms.



var cancellable = function (fn, args, t) {
    fn(...args)
    let intervalId = setInterval(() => {
        fn(...args)
    }, t)

    const canclefn = () => {
        clearInterval(intervalId)
    }
    return canclefn

};







// Q 16 >

// 2637. Promise Time Limit

// Given an asynchronous function fn and a time t in milliseconds, return a new time limited version of the input function. fn takes arguments provided to the time limited function.

// The time limited function should follow these rules:
//
// If the fn completes within the time limit of t milliseconds, the time limited function should resolve with the result.
// If the execution of the fn exceeds the time limit, the time limited function should reject with the string "Time Limit Exceeded".



var timeLimit = function (fn, t) {

    return async function (...args) {
        const onSuccess = fn(...args)

        const result = new Promise((res, rej) => {
            setTimeout(() => {
                rej('Time Limit Exceeded')

            }, t)
        })
        return Promise.race([onSuccess, result])


    }
};





//  Q 17 >

// 2622. Cache With Time Limit

// Write a class that allows getting and setting key-value pairs, however a time until expiration is associated with each key.
// 
// The class has three public methods:
// 
// set(key, value, duration): accepts an integer key, an integer value, and a duration in milliseconds. Once the duration has elapsed, the key should be inaccessible. The method should return true if the same un-expired key already exists and false otherwise. Both the value and duration should be overwritten if the key already exists.
// 
// get(key): if an un-expired key exists, it should return the associated value. Otherwise it should return -1.
// 
// count(): returns the count of un-expired keys.


var TimeLimitedCache = function () {
    this.cache = {};
};

TimeLimitedCache.prototype.set = function (key, value, duration) {
    let result = false;

    // If the key exists and hasn't expired, return true
    if (this.cache.hasOwnProperty(key)) {
        result = true;
        // Clear the old timeout if the key exists to reset the duration
        clearTimeout(this.cache[key].timer);
    }

    // Set the new key-value pair with a timeout
    let ref = this;
    let timeoutId = setTimeout(() => {
        delete ref.cache[key];
    }, duration);

    // Store the value and the timeout ID in the cache
    this.cache[key] = { val: value, timer: timeoutId };

    return result;
};

TimeLimitedCache.prototype.get = function (key) {
    // If the key doesn't exist, return -1
    if (!this.cache.hasOwnProperty(key)) {
        return -1;
    }
    // Return the value of the key if it exists and hasn't expired
    return this.cache[key].val;
};

TimeLimitedCache.prototype.count = function () {
    // Return the count of all active keys
    return Object.keys(this.cache).length;
};









// Q 18 >

// 2627. Debounce

// Given a function fn and a time in milliseconds t, return a debounced version of that function.

// A debounced function is a function whose execution is delayed by t milliseconds and whose execution is cancelled if it is called again within that window of time. The debounced function should also receive the passed parameters.
// 
// For example, let's say t = 50ms, and the function was called at 30ms, 60ms, and 100ms.
// 
// The first 2 function calls would be cancelled, and the 3rd function call would be executed at 150ms.
// 
// If instead t = 35ms, The 1st call would be cancelled, the 2nd would be executed at 95ms, and the 3rd would be executed at 135ms.
// 
// Debounce Schematic
// 
// The above diagram shows how debounce will transform events. Each rectangle represents 100ms and the debounce time is 400ms. Each color represents a different set of inputs.
// 
// Please solve it without using lodash's _.debounce() function.



var debounce = function (fn, t) {
    let timerId = undefined

    return function (...args) {
        clearTimeout(timerId)
        timerId = setTimeout(() => {
            fn(...args)
        }, t)
    }
};



//  Q 19 >

// 2721. Execute Asynchronous Functions in Parallel

// Given an array of asynchronous functions functions, return a new promise promise. Each function in the array accepts no arguments and returns a promise. All the promises should be executed in parallel.
//
// promise resolves:
//
// When all the promises returned from functions were resolved successfully in parallel. The resolved value of promise should be an array of all the resolved values of promises in the same order as they were in the functions. The promise should resolve when all the asynchronous functions in the array have completed execution in parallel.
// promise rejects:
//
// When any of the promises returned from functions were rejected. promise should also reject with the reason of the first rejection.
// Please solve it without using the built-in Promise.all function.



var promiseAll = function (functions) {
    return new Promise((res, rej) => {
        const result = [];
        let remaining = functions.length;

        if (remaining === 0) {
            return res(result);  // Resolve immediately if there are no functions
        }

        functions.forEach((fn, index) => {
            fn()
                .then((response) => {
                    result[index] = response;
                    remaining--;

                    if (remaining === 0) {
                        res(result);  // Resolve the main promise when all promises resolve
                    }
                })
                .catch((error) => {
                    rej(error);  // Reject immediately if any promise fails
                });
        });
    });
};








//  Q 20 >



// 2727. Is Object Empty

// Given an object or an array, return if it is empty.
//
// An empty object contains no key-value pairs.
// An empty array contains no elements.
// You may assume the object or array is the output of JSON.parse.


var isEmpty = function (obj) {
    if (Object.keys(obj).length === 0) {
        return true
    }
    else {
        return false
    }

};



//  Q 21 >

// 2677. Chunk Array

// Given an array arr and a chunk size size, return a chunked array.

// A chunked array contains the original elements in arr, but consists of subarrays each of length size. The length of the last subarray may be less than size if arr.length is not evenly divisible by size.
//
// You may assume the array is the output of JSON.parse. In other words, it is valid JSON.
//
// Please solve it without using lodash's _.chunk function.
// 

var chunk = function (arr, size) {
    let result = [];

    for (let i = 0; i < arr.length; i += size) {
        result.push(arr.slice(i, i + size));
    }

    return result;
};




//  Q 22 >


// 2619. Array Prototype Last

// Write code that enhances all arrays such that you can call the array.last() method on any array and it will return the last element. If there are no elements in the array, it should return -1.

// You may assume the array is the output of JSON.parse.


Array.prototype.last = function () {
    if (this.length === 0) {
        return -1;  // Return -1 if the array is empty
    } else {
        return this[this.length - 1];  // Return the last element of the array
    }
};




//  Q 23 >

// 2631. Group By

// Write code that enhances all arrays such that you can call the array.groupBy(fn) method on any array and it will return a grouped version of the array.

// A grouped array is an object where each key is the output of fn(arr[i]) and each value is an array containing all items in the original array which generate that key.
// 
// The provided callback fn will accept an item in the array and return a string key.
// 
// The order of each value list should be the order the items appear in the array. Any order of keys is acceptable.
// 
// Please solve it without lodash's _.groupBy function.

Array.prototype.groupBy = function (fn) {
    const grouped = {};  // Initialize an empty object to hold the groups

    for (let item of this) {  // Iterate over the array
        const key = fn(item);  // Get the key by applying the callback function

        // If the key doesn't exist in the grouped object, create an empty array
        if (!grouped[key]) {
            grouped[key] = [];
        }

        // Push the current item to the corresponding array in the grouped object
        grouped[key].push(item);
    }

    return grouped;  // Return the grouped object
};







//  Q 24 >

//  2724. Sort By

// Given an array arr and a function fn, return a sorted array sortedArr. You can assume fn only returns numbers and those numbers determine the sort order of sortedArr. sortedArr must be sorted in ascending order by fn output.

// You may assume that fn will never duplicate numbers for a given array.


var sortBy = function (arr, fn) {
    return arr.sort((a, b) => fn(a) - fn(b));
};





//  Q 25 >

// 2722. Join Two Arrays by ID


//  Given two arrays arr1 and arr2, return a new array joinedArray. All the objects in each of the two inputs arrays will contain an id field that has an integer value.

// joinedArray is an array formed by merging arr1 and arr2 based on their id key. The length of joinedArray should be the length of unique values of id. The returned array should be sorted in ascending order based on the id key.
//
// If a given id exists in one array but not the other, the single object with that id should be included in the result array without modification.
//
// If two objects share an id, their properties should be merged into a single object:
//
// If a key only exists in one object, that single key-value pair should be included in the object.
// If a key is included in both objects, the value in the object from arr2 should override the value from arr1. 


var join = function (arr1, arr2) {
    // Create a map to store the merged objects by their 'id'
    const map = new Map();

    // Function to add/merge objects into the map
    function addOrUpdateMap(arr) {
        for (const obj of arr) {
            const id = obj.id;
            if (map.has(id)) {
                // If the id already exists, merge the objects (arr2 overrides arr1)
                const existingObj = map.get(id);
                map.set(id, { ...existingObj, ...obj });
            } else {
                // If id doesn't exist, simply add it
                map.set(id, obj);
            }
        }
    }

    // Process arr1 and arr2
    addOrUpdateMap(arr1);
    addOrUpdateMap(arr2);

    // Convert the map values to an array and sort by 'id'
    return Array.from(map.values()).sort((a, b) => a.id - b.id);
};







//  Q  26 >


//  2625. Flatten Deeply Nested Array

// Given a multi-dimensional array arr and a depth n, return a flattened version of that array.

// A multi-dimensional array is a recursive data structure that contains integers or other multi-dimensional arrays.
// 
// A flattened array is a version of that array with some or all of the sub-arrays removed and replaced with the actual elements in that sub-array. This flattening operation should only be done if the current depth of nesting is less than n. The depth of the elements in the first array are considered to be 0.
// 
// Please solve it without the built-in Array.flat method.



var flat = function (arr, n) {
    // Helper function to recursively flatten the array
    function flattenHelper(array, depth) {
        if (depth === 0) {
            // If depth is 0, return the array as is (no more flattening)
            return array;
        }

        // Result array to hold flattened values
        let result = [];

        for (let item of array) {
            if (Array.isArray(item)) {
                // If item is an array, flatten it recursively, reducing depth by 1
                result.push(...flattenHelper(item, depth - 1));
            } else {
                // If item is not an array, simply add it to the result
                result.push(item);
            }
        }

        return result;
    }

    // Start recursion with the given array and depth n
    return flattenHelper(arr, n);
};





//  Q 27 >


// 2705. Compact Object

// Given an object or array obj, return a compact object.

// A compact object is the same as the original object, except with keys containing falsy values removed. This operation applies to the object and any nested objects. Arrays are considered objects where the indices are keys. A value is considered falsy when Boolean(value) returns false.
// 
// You may assume the obj is the output of JSON.parse. In other words, it is valid JSON.


var compactObject = function (obj) {
    // Base case: If obj is not an object or array, return it directly if it's truthy, otherwise return undefined
    if (typeof obj !== 'object' || obj === null) {
        return obj ? obj : undefined;
    }

    // If obj is an array, filter out falsy values and apply recursion to nested elements
    if (Array.isArray(obj)) {
        let compactedArray = [];
        for (let item of obj) {
            let compactedItem = compactObject(item);
            if (compactedItem !== undefined) {
                compactedArray.push(compactedItem);
            }
        }
        return compactedArray;
    }

    // If obj is an object, remove falsy key-value pairs and apply recursion to nested objects
    let compactedObject = {};
    for (let key in obj) {
        let compactedValue = compactObject(obj[key]);
        if (compactedValue !== undefined) {
            compactedObject[key] = compactedValue;
        }
    }
    return compactedObject;
};







//  Q 28 >

//  2694. Event Emitter


//  Design an EventEmitter class. This interface is similar (but with some differences) to the one found in Node.js or the Event Target interface of the DOM. The EventEmitter should allow for subscribing to events and emitting them.

// Your EventEmitter class should have the following two methods:
// 
// subscribe - This method takes in two arguments: the name of an event as a string and a callback function. This callback function will later be called when the event is emitted.
// An event should be able to have multiple listeners for the same event. When emitting an event with multiple callbacks, each should be called in the order in which they were subscribed. An array of results should be returned. You can assume no callbacks passed to subscribe are referentially identical.
// The subscribe method should also return an object with an unsubscribe method that enables the user to unsubscribe. When it is called, the callback should be removed from the list of subscriptions and undefined should be returned.
// emit - This method takes in two arguments: the name of an event as a string and an optional array of arguments that will be passed to the callback(s). If there are no callbacks subscribed to the given event, return an empty array. Otherwise, return an array of the results of all callback calls in the order they were subscribed.



class EventEmitter {
    constructor() {
        this.events = {}; // This will store all event listeners.
    }

    /**
     * Subscribes a callback function to a specific event.
     * @param {string} eventName - The name of the event to subscribe to.
     * @param {Function} callback - The callback function to execute when the event is emitted.
     * @return {Object} - An object with an unsubscribe method to remove the callback.
     */
    subscribe(eventName, callback) {
        // If the eventName doesn't exist, initialize it with an empty array
        if (!this.events[eventName]) {
            this.events[eventName] = [];
        }

        // Add the callback to the event's listeners
        this.events[eventName].push(callback);

        // Return an unsubscribe method
        return {
            unsubscribe: () => {
                // Remove the callback from the array of callbacks
                this.events[eventName] = this.events[eventName].filter(cb => cb !== callback);

                // If no more listeners remain for this event, delete the event from the object
                if (this.events[eventName].length === 0) {
                    delete this.events[eventName];
                }
            }
        };
    }

    /**
     * Emits an event, calling all subscribed callbacks in order.
     * @param {string} eventName - The name of the event to emit.
     * @param {Array} [args=[]] - The arguments to pass to the callback functions.
     * @return {Array} - The results of all the callback function calls.
     */
    emit(eventName, args = []) {
        // If no callbacks are subscribed to this event, return an empty array
        if (!this.events[eventName]) {
            return [];
        }

        // Call each callback with the provided arguments and return an array of the results
        return this.events[eventName].map(callback => callback(...args));
    }
}









//  Q 29 >

//  2695. Array Wrapper

// Create a class ArrayWrapper that accepts an array of integers in its constructor. This class should have two features:

// When two instances of this class are added together with the + operator, the resulting value is the sum of all the elements in both arrays.
// When the String() function is called on the instance, it will return a comma separated string surrounded by brackets. For example, [1,2,3].
//  


class ArrayWrapper {
    constructor(nums) {
        this.nums = nums; // Store the array of integers
    }

    /**
     * Override the valueOf method to define how to convert the object to a primitive value.
     * This is used to handle the addition (+) operation.
     * @return {number} The sum of all elements in the array.
     */
    valueOf() {
        return this.nums.reduce((sum, num) => sum + num, 0);
    }

    /**
     * Override the toString method to define how to convert the object to a string.
     * This is used when converting to a string explicitly (e.g., using String() or when the object is used in a string context).
     * @return {string} The string representation of the array, formatted as [element1,element2,...]
     */
    toString() {
        return `[${this.nums.join(',')}]`;
    }
}

// Example Usage

const obj1 = new ArrayWrapper([1, 2]);
const obj2 = new ArrayWrapper([3, 4]);

console.log(obj1 + obj2); // 10 (1 + 2 + 3 + 4)

const obj3 = new ArrayWrapper([23, 98, 42, 70]);
console.log(String(obj3)); // "[23,98,42,70]"

const obj4 = new ArrayWrapper([]);
const obj5 = new ArrayWrapper([]);
console.log(obj4 + obj5); // 0






//  Q 30 >

// 2726. Calculator with Method Chaining
class Calculator {
    /** 
     * @param {number} value - Initial value of the result
     */
    constructor(value) {
        this.result = value; // Initialize with the given value
    }

    /** 
     * Adds the given value to the result and returns the updated Calculator.
     * @param {number} value
     * @return {Calculator}
     */
    add(value) {
        this.result += value;
        return this;
    }

    /** 
     * Subtracts the given value from the result and returns the updated Calculator.
     * @param {number} value
     * @return {Calculator}
     */
    subtract(value) {
        this.result -= value;
        return this;
    }

    /** 
     * Multiplies the result by the given value and returns the updated Calculator.
     * @param {number} value
     * @return {Calculator}
     */
    multiply(value) {
        this.result *= value;
        return this;
    }

    /** 
     * Divides the result by the given value and returns the updated Calculator.
     * Throws an error if the divisor is zero.
     * @param {number} value
     * @return {Calculator}
     */
    divide(value) {
        if (value === 0) {
            throw new Error("Division by zero is not allowed");
        }
        this.result /= value;
        return this;
    }

    /** 
     * Raises the result to the power of the given value and returns the updated Calculator.
     * @param {number} value
     * @return {Calculator}
     */
    power(value) {
        this.result **= value;
        return this;
    }

    /** 
     * Returns the current result.
     * @return {number}
     */
    getResult() {
        return this.result;
    }
}

// Example usage
const calc1 = new Calculator(10);
console.log(calc1.add(5).subtract(7).getResult()); // 8

const calc2 = new Calculator(2);
console.log(calc2.multiply(5).power(2).getResult()); // 100

const calc3 = new Calculator(20);
try {
    console.log(calc3.divide(0).getResult()); // Should throw an error
} catch (e) {
    console.log(e.message); // "Division by zero is not allowed"
}

