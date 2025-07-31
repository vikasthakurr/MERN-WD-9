function debounce(fun, delay) {
  let timer;
  return function (...args) {
    clearTimeout(timer);
    timer = setTimeout(() => {
      fun(...args);
    }, delay);
  };
}
function search(query) {
  console.log(`Searching for: ${query}`);
}

let searchwithDebounce = debounce(search, 2000);
searchwithDebounce("vikas");
searchwithDebounce("vikas kumar");
searchwithDebounce("vikas kumar singh");

// function throttle(fun, delay) {
//   let lastCall = 0;
//   return function (...args) {
//     let currentTime = Date.now();
//     if (currentTime - lastCall >= delay) {
//       lastCall = currentTime;
//       fun(...args);
//     }
//   };
// }
// function search(query) {
//   console.log(`Searching for: ${query}`);
// }

// let searchWithThrottle = throttle(search, 2000);
// searchWithThrottle("vikas");
// searchWithThrottle("vikas kumar");
// searchWithThrottle("vikas kumar singh");
