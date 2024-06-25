// src/CryptoTable.js
import React, { useEffect } from "react";
import Loader from "./Loader";

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
