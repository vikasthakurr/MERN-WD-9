//promise.all method
// // Waits for all promises to resolve and returns an array of their results.
// const promise1 = Promise.resolve("First");
// const promise2 = new Promise(resolve => setTimeout(() => resolve("Second"), 1000));
// const promise3 = Promise.reject("Third");

// Promise.all([promise1, promise2, promise3])
//   .then(values => {
//     console.log(values); // ["First", "Second", "Third"]
//   });

// Promise.race()
// Returns the first promise that resolves or rejects.
// const promise1 = new Promise(resolve => setTimeout(() => resolve("First"), 500));
// const promise2 = new Promise(reject => setTimeout(() => reject("Second"), 100));

// Promise.race([promise1, promise2])
//   .then(result => {
//     console.log("Fastest result:", result); // Fastest result: Second
//   });

//promises.allsettled
//Waits for all promises to settle (fulfilled or rejected) Method and returns an array of their outcomes.
// const promise1 = Promise.resolve("First");
// const promise2 = new Promise((resolve) =>
//   setTimeout(() => resolve("Second"), 1000)
// );
// const promise3 = Promise.reject("Third");

// Promise.allSettled([promise1, promise2, promise3]).then((values) => {
//   console.log(values); // ["First", "Second", "Third"]
// });

//promises.any
// Returns the first fulfilled promise, ignoring rejected ones.
// const promise1 = Promise.reject("First");
// const promise2 = Promise.reject("Second");
// const promise3 = Promise.reject("Third");

// Promise.any([promise1, promise2, promise3])
//   .then((values) => {
//     console.log(values);
//   })
//   .catch((error) => {
//     console.log(error);
//   });
fetch("https://api.github.com/users/kushvijay234")
  .then((response) => {
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    return response.json();
  })
  .then((data) => {
    console.log("data is being processed");
    return data;
  })
  .then((data) => {
    console.log("data is being filtered");
    return data;
  })
  .then((data) => {
    console.log("data is being mapped");
    return data;
  })
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.error("There was a problem with the fetch operation:", error);
  })
  .finally(() => {
    console.log("Fetch operation completed");
  });
