// src/CryptoTable.js
import React, { useEffect } from "react";
import Loader from "./Loader";

const data = [
  {
    asset: "BTC/USD",
    lastTrade: "$63,000.00",
    change24h: "-2.21%",
    change24hAmount: "-$1,426.18",
    tradeLink: "#",
    logoLink: "https://cryptologos.cc/logos/bitcoin-btc-logo.png",
  },
  {
    asset: "ETH/USD",
    lastTrade: "$3,408.90",
    change24h: "-0.33%",
    change24hAmount: "-$11.20",
    tradeLink: "#",
    logoLink: "https://cryptologos.cc/logos/ethereum-eth-logo.png",
  },
  {
    asset: "DOGE/USD",
    lastTrade: "$0.15",
    change24h: "+15.75%",
    change24hAmount: "+$0.02",
    tradeLink: "#",
    logoLink: "https://cryptologos.cc/logos/dogecoin-doge-logo.png",
  },
  {
    asset: "ALGO/USD",
    lastTrade: "$0.15",
    change24h: "+0.00%",
    change24hAmount: "$0.00",
    tradeLink: "#",
    logoLink: "https://cryptologos.cc/logos/algorand-algo-logo.png",
  },
  {
    asset: "DOT/USD",
    lastTrade: "$5.64",
    change24h: "+0.00%",
    change24hAmount: "$0.00",
    tradeLink: "#",
    logoLink: "https://cryptologos.cc/logos/polkadot-new-dot-logo.png",
  },
  {
    asset: "UNI/USD",
    lastTrade: "$9.79",
    change24h: "+0.00%",
    change24hAmount: "$0.00",
    tradeLink: "#",
    logoLink: "https://cryptologos.cc/logos/uniswap-uni-logo.png",
  },
  {
    asset: "COMP/USD",
    lastTrade: "$45.67",
    change24h: "-0.95%",
    change24hAmount: "-$0.44",
    tradeLink: "#",
    logoLink: "https://cryptologos.cc/logos/compound-comp-logo.png",
  },
];

const CryptoTable = () => {
  const [tableData, setTableData] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(false);
  useEffect(() => {
    async function callAPI() {
      try {
        setIsLoading(true);
        const jsonData = await fetch("/api/crypto-info");
        const data = await jsonData.json();
        setTableData(data);
        setIsLoading(false);
      } catch (error) {
        console.log("error", error);
        setIsLoading(false);
      }
    }
    callAPI();
  }, []);

  return (
    <div className="mt-10 bg-black bg-opacity-90 backdrop-blur-sm text-white   border border-[#464646] p-5 rounded-[10px]">
      <table className="min-w-full min-h-96">
        <thead className="uppercase">
          <tr className="text-left border-b border-gray-700">
            <th className="px-4 py-2">Assets</th>
            <th className="px-4 py-2">Last Trade</th>
            <th className="px-4 py-2">24H %</th>
            <th className="px-4 py-2">24H Change</th>
            <th className="px-4 py-2 text-[#3980FF]">{"More >"}</th>
          </tr>
        </thead>
        {isLoading ? <Loader /> : null}
        <tbody>
          {tableData.map((item, index) => (
            <tr key={index} className="">
              <td className="px-4 py-3 flex items-center">
                <img
                  src={item.logoLink}
                  alt="logo"
                  className="w-12 h-12 mr-2"
                />
                {item.asset}
              </td>

              <td className="px-4 py-3">{item.lastTrade}</td>
              <td
                className={`px-4 py-3 ${
                  item.change24h.includes("-")
                    ? "text-[#FF5454]"
                    : item.change24h === "+0.00%"
                    ? "text-[#666666]"
                    : "text-[#6DFFDC]"
                }`}
              >
                {item.change24h}
              </td>
              <td
                className={`"px-4 py-3" ${
                  item.change24hAmount.includes("-")
                    ? "text-[#FF5454]"
                    : item.change24hAmount === "$0.00"
                    ? "text-[#666666]"
                    : "text-[#6DFFDC]"
                }`}
              >
                {item.change24hAmount}
              </td>
              <td className="px-4 py-3">
                <a
                  href={item.tradeLink}
                  className="bg-[#6DFF8B] text-black px-4 py-2 rounded text-[#00554B] hover:bg-[#00554B] hover:text-white"
                >
                  Trade
                </a>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CryptoTable;
