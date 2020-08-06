/**
 * 1. You need to make a GET request for the resource: https://jsonplaceholder.typicode.com/posts using fetch method
 * 2. Save the response to response.json file
 * 3. Save only those items, where id < 20
 * DOCS: https://www.npmjs.com/package/node-fetch
 */

// const fetch = require('node-fetch');

// const fs = require('fs');
// const path = require('path');
// const filePath = path.join(__dirname, 'response.json');

// fetch('https://jsonplaceholder.typicode.com/posts')
//     .then(res => res.json())
//     .then(data => {
//         const refined = data.filter(item => item.id < 20);
//         const stringified = JSON.stringify(refined);
//         fs.appendFile(filePath, stringified, err => {
//             if (err) {
//                 throw err;
//             }
//         });
//     });

const fetch = require("node-fetch");

const fs = require("fs");
const path = require("path");
const filePath = path.join(__dirname, "response.json");

async function fetchPostsID() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await res.json();

  const refined = data.filter((item) => item.id < 20);
  const stringified = JSON.stringify(refined);

  fs.appendFile(filePath, stringified, (err) => {
    if (err) {
      throw err;
    }
  });
}

fetchPostsID();
