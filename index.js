setTimeout(() => {
 const name = "Kenneth Okwuchukwu Ugwu"
 console.log(`My name is ${name}`);
}, 1000);

// Task 1: Iterating with Async/Await: Write an async function iterateWithAsyncAwait that takes an array of values and logs each value with a delay of 1 second between logs.

async function iterateWithAsyncAwait(values) {
  // No need to redefine the values array inside the function
  try {
    for (const value of values) {
    await new Promise(resolve => setTimeout(() => {
      console.log(value);
      resolve(); // Resolve the promise after logging the value
    }, 1000));
  }
  } catch (error) {
    console.log(error);
  }
}
const values = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
iterateWithAsyncAwait(values);

// Task 2: Awaiting a Call: Create an async function awaitCall that simulates fetching data from an API. Use await to wait for the API response and then log the data.

async function awaitCall() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    
    //parsing response
    const data = await response.json();
    console.log("Result:", data);
    
  } catch(error) {
    console.log("Failed to fetch data:", error.message);
  }
}
// calling the function
awaitCall();

// Task 3: Awaiting Concurrent Requests: Create an async function concurrentRequests that makes two API calls concurrently using Promise.all(). Log the combined results after both requests have resolved.

async function concurrentRequests() {
  try {
    const [commentsResponse, usersResponse] = await Promise.all([fetch("https://jsonplaceholder.typicode.com/comments"), fetch("https://jsonplaceholder.typicode.com/users")]);

    // parsing both responses
    const comments = await commentsResponse.json();
    const users = await usersResponse.json();

    // console logging both results
    console.log("Comments:", comments);
    console.log("Users:", users);
    
    
  } catch(error) {
    console.log("Error occured during concurrent requests:", error.message);
  }
}
// calling the function
concurrentRequests();