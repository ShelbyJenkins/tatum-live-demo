import { ApiVersion, Network, TatumSDK } from "../service";
import { Ethereum } from "../dto";

describe("Rates", () => {
  let tatum: TatumSDK<Ethereum>
  beforeAll(async () => {
    tatum = await TatumSDK.init<Ethereum>({
      network: Network.ETHEREUM_SEPOLIA,
      verbose: true,
      retryDelay: 1000,
      retryCount: 2,
      version: ApiVersion.V2,
    })
  })
  it("get ETH/EUR", async () => {
    const res = await tatum.rates.getCurrentRate("BTC","EUR");
    expect(res.data.value).toBeDefined();
  });
  it("get batch", async () => {
    const res = await tatum.rates.getCurrentRateBatch([{currency: "BTC", basePair: "EUR"}, {currency: "ETH", basePair: "EUR"}]);
    expect(res.data[1].value).toBeDefined();
  });
});
