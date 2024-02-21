---
---
```ts
// Define the URL of the Ethereum node or service
const url = 'YOUR_ETHEREUM_NODE_URL';

// Define the request payload
const payload = {
  jsonrpc: "2.0",
  method: "eth_blockNumber",
  params: [],
  id: 83
};

// Define the fetch request options
const options = {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify(payload),
};

// Make the fetch request
fetch(url, options)
  .then(response => {
    // Check if the response is ok (status in the range 200-299)
    if (!response.ok) {
      throw new Error(`Network response was not ok: ${response.statusText}`);
    }
    return response.json();
  })
  .then(data => {
    // Handle the successful response here
    console.log('Block number:', parseInt(data.result, 16));
  })
  .catch(error => {
    // Handle errors here
    console.error('There was a problem with your fetch operation:', error);
});
```
```