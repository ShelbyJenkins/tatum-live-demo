---
---
```ts
// Init the SDK Using any support network
const tatum = await TatumSDK.init({network: Network.TRON});
// Call the `blockNumber` functions
const latestBlockResponse = await tatum.rpc.blockNumber();
// Check and output result
if (latestBlockResponse  === undefined || latestBlockResponse.result === undefined) {
  throw new Error("Unexpected response structure");
  } else {
    console.log(`Latest block number: ${latestBlockResponse.result} on ${Network.TRON}`)
  }
```