import { timeAgoUnix } from "./time";
import { CoinGeckoClient } from "coingecko-api-v3";

const client = new CoinGeckoClient({
  timeout: 10000,
  autoRetry: true,
});

export const getTokenData = async (token: string, currency: string) => {
  try {
    const tokenData = await client.simplePrice({
      vs_currencies: currency,
      ids: token,
      include_market_cap: true,
      include_24hr_vol: true,
      include_24hr_change: true,
      include_last_updated_at: true,
    });


    const priceData = tokenData[token];

    let { usd, usd_market_cap, usd_24h_vol, usd_24h_change, last_updated_at } = priceData;

    usd_24h_change = Number(
      usd_24h_change.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 }),
    );
    usd_24h_vol = Number(usd_24h_vol.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 }));
    const last_updated = timeAgoUnix(last_updated_at);
    return {
      usd,
      usd_market_cap,
      usd_24h_vol,
      usd_24h_change,
      last_updated,
    };
  } catch (e) {
    console.log("Failed to fetch price data", e);
  }
};
