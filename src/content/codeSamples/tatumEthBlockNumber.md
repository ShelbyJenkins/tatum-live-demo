---
---
```ts
// Init the SDK
const tatum = await TatumSDK.init<Ethereum>({network: Network.ETHEREUM});
// Call the `blockNumber` functions
const latestBlockResponse = await tatum.rpc.blockNumber();
// Check and output result
if (latestBlockResponse  === undefined || latestBlockResponse.result === undefined) {
  throw new Error("Unexpected response structure");
  } else {
    console.log(`Latest block number: ${latestBlockResponse.result} on ethereum-mainnet`)
  }
```