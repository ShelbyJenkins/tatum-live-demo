---
---
```ts
// Define interfaces for the Tron API response
interface TronBlockHeaderRawData {
  number: number;
  txTrieRoot: string;
  witness_address: string;
  parentHash: string;
  version: number;
  timestamp: number;
}

interface TronBlockHeader {
  raw_data: TronBlockHeaderRawData;
  witness_signature: string;
}

interface TronBlockResponse {
  blockID: string;
  block_header: TronBlockHeader;
}

// Define the URL of the Tron node or service
const url = 'https://api.trongrid.io/wallet/getnowblock';

// Define the fetch request options
const options = {
  method: 'POST', // or 'GET', Tron might require POST for some endpoints
  headers: {
    'Content-Type': 'application/json',
  },
  // No body is needed for the getnowblock call
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
  .then((data: TronBlockResponse) => {
    // Handle the successful response here
    console.log('Latest Block Number:', data.block_header.raw_data.number);
  })
  .catch(error => {
    // Handle errors here
    console.error('There was a problem with your fetch operation:', error);
  });
```
```