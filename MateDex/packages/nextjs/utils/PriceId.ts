// const PriceIds = {
//     80001: "matic-network",
//     scroll: "scroll-doge"
// }


const PriceIds = new Map<number, string>();
PriceIds.set(80001, "matic-network")
PriceIds.set(534351, "bridged-binance-peg-ethereum-opbnb")
PriceIds.set(84531, "coinbase-wrapped-staked-eth")
export default PriceIds;
