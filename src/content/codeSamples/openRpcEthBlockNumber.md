---
---
```ts
// Init the SDK
const tatum = await TatumSDK.init<Ethereum>({
  network: Network.ETHEREUM,
  // Custom RPC node
  rpc: {
    nodes: [
        {
        url: rpc1.value,
        type: RpcNodeType.NORMAL,
        },
    ],
  },
});
// Call the `blockNumber` functions
const latestBlockResponse = await tatum.rpc.blockNumber();
// Check and output result
if (latestBlockResponse  === undefined || latestBlockResponse.result === undefined) {
  throw new Error("Unexpected response structure");
  } else {
    console.log(`Latest block number: ${latestBlockResponse.result} on ethereum-mainnet`)
  }
```