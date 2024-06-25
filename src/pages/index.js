import { Inter } from "next/font/google";
import Image from "next/image";
import React from "react";
import Logo from "../assets/logo.png";
import CryptoTable from "@/components/CryptoTable";
import SettingIcon from "../assets/settings.png";
import BitCoinIcon from "../assets/bitcoin.png";
import BNBIcon from "../assets/bnb.png";
import SwapIcon from "../assets/swap.png";

const inter = Inter({ subsets: ["latin"] });
const menuItems = [
  {
    name: "Exchange",
  },
  {
    name: "Last Transactions",
  },
  {
    name: "Invite Friend",
  },
  {
    name: "Notification",
  },
];

export default function Home() {
  return (
    <>
      <div className="container pb-5">
        <nav className="flex items-center justify-between flex-wrap text-white py-2">
          <div className="logo">
            <Image src={Logo} alt="logo" width={193} height={25} />
          </div>
          <div id="menu">
            <ul className="flex">
              {menuItems.map((item, index) => (
                <li key={index} className="mr-6">
                  <a href="#" className="hover:text-gray-400">
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div id="auth">
            <button
              className=" text-white px-2 py-1  mr-4 border-primary border-2 rounded-tl-lg rounded-br-lg
          hover:bg-primary hover:text-black font text-sm
          "
            >
              LOG IN
            </button>
            <button
              className="bg-primary text-white px-2 py-1  mr-4 border-primary border-2 rounded-tl-lg rounded-br-lg
            hover:bg-white hover:text-black text-sm
          "
            >
              SIGN UP
            </button>
          </div>
        </nav>

        <div id="hero-section" className="max-w-3xl m-auto text-center mt-14">
          <h1 className="text-6xl">Easy send and Request Crypto.</h1>
        </div>
        <div
          id="hero-sub-section"
          className="max-w-[440px] m-auto text-center mt-14"
        >
          <p className="text-left">
            Bring blockchain to the people. Solana supports experiences for
            power users, new consumers, and everyone in between.
          </p>
        </div>
        <CryptoTable />

        <div
          id="swap-token-section"
          className="mt-16 border border-[#464646] p-5 rounded-[10px] mb-32"
        >
          <section className="flex flex-row justify-between">
            <span className="text-xl uppercase font-semibold">Swap Tokens</span>
            <Image src={SettingIcon} alt="settings" width={32} height={32} />
          </section>
          <section class="relative cursor-hover flex space-x-1 flex justify-between items-center mt-8 mb-7">
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-black rounded-full w-10 h-10">
              <Image
                className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 "
                src={SwapIcon}
                alt="BTC"
                width={32}
                height={32}
              />
            </div>
            <div class="w-1/2  bg-[#1E1E1E] rounded-lg shadow-lg cursor-hover flex flex-row justify-between py-4 px-11 font-semibold items-center">
              <div className="flex flex-col ">
                <p className="text-[50px]">0.00</p>
                <p className="text-[#666666]">$0.00</p>
              </div>
              <div className="flex flex-col items-center">
                <div className="flex items-center space-x-2 bg-black py-1.5 px-4 mb-1">
                  <Image src={BitCoinIcon} alt="BTC" className="h-8 w-5" />{" "}
                  {/* Replace with the appropriate image */}
                  <span className="text-[#666666] text-[20px]">BTC {">"}</span>
                </div>
                <p className="text-sm font-normal">
                  Balance: <span className="text-[#3980FF]">24,240</span>
                </p>
              </div>
            </div>
            <div class="w-1/2  bg-[#1E1E1E] rounded-lg shadow-lg cursor-hover flex flex-row justify-between py-4 px-11 font-semibold items-center">
              <div className="flex flex-col ">
                <p className="text-[50px]">0.00</p>
                <p className="text-[#666666]">$0.00</p>
              </div>
              <div className="flex flex-col items-center">
                <div className="flex items-center space-x-2 bg-black py-1.5 px-4 mb-1">
                  <Image src={BNBIcon} alt="BTC" className="h-8 w-7" />{" "}
                  {/* Replace with the appropriate image */}
                  <span className="text-[#666666] text-[20px]">BTC {">"}</span>
                </div>
                <p className="text-sm font-normal">
                  Balance: <span className="text-[#3980FF]">24,240</span>
                </p>
              </div>
            </div>
          </section>
          <section className="flex justify-center items-center">
            <button
              className="bg-primary text-white px-2 py-2  mr-4 border-primary border-2 rounded-tl-lg rounded-br-lg
            hover:bg-white hover:text-black text-sm w-56 font-medium
          "
            >
              SWOP TOKENS
            </button>
          </section>
          <section className="flex flex-row justify-between items-center mt-3">
            <div className="left-sub-sec text-sm">
              <p>1 BTC = 32.4039 ETH</p>
              <p className="text-[#3980FF] text-sm">Free exchange</p>
            </div>
            <div className="right-sub-sec text-[#666666] text-sm">
              Updates in 4s
            </div>
          </section>
        </div>
      </div>
    </>
  );
}
