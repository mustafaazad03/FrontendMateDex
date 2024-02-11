"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import OrbABI from "../../foundry/out/PendulumOrb.sol/PendulumOrb.json";
import Timer from "./Timer";
import { readContract, waitForTransaction, writeContract } from "@wagmi/core";
import { watchNetwork } from "@wagmi/core";
import { FaTwitter } from "react-icons/fa6";
import { parseEther } from "viem";
import { useAccount } from "wagmi";
import { useNetwork } from "wagmi";
import { useDeployedContractInfo } from "~~/hooks/scaffold-eth";
import PriceIds from "~~/utils/PriceId";
import { getTokenData } from "~~/utils/coingeckoPrices";

type OrbWithExpert = {
  expertDetails: {
    name: string;
    desc: string;
    image: string;
  };
  orbsDetails: any;
};

const OrbCard = ({ orbAddress }: { orbAddress: string }) => {
  const [bid, setBid] = useState();
  const account = useAccount();
  const handleBid = (e: any) => {
    setBid(e.target.value);
    console.log(bid);
  };

  const { chain, chains } = useNetwork();

  const [resellingPrice, setResellingPrice] = useState(0);
  const [loading, setLoading] = useState(false);
  const [orbTotalDetails, setOrbDetails] = useState<OrbWithExpert>();
  const [timeForAuction, setTimeForAuction] = useState(0);
  const { data: pendulumFactory } = useDeployedContractInfo("PendulumFactory");
  function unixToDateString(unixTime: number): string {
    if (typeof unixTime !== "number") {
      return "";
    }
    const date = new Date(unixTime * 1000);
    return date.toLocaleString(); // Extract date portion from ISO string
  }
  const [dataFetch, setDataFetch] = useState(false);
  const [price, setPrice] = useState(0);

  useEffect(() => {
    const getData = async () => {
      try {
        const orbData: any = await readContract({
          address: orbAddress,
          abi: OrbABI.abi,
          functionName: "getOrbDetails",
          account: account.address,
        });
        console.log(orbData.createBy);
        if (orbData === undefined) return;

        console.log("fetching expert");
        const expertDetails = await readContract({
          address: pendulumFactory?.address!,
          abi: pendulumFactory?.abi!,
          functionName: "getExpertProfile",
          args: [orbData.createBy],
          account: account.address,
        });
        console.log(expertDetails);

        const url = "https://nftstorage.link/ipfs/" + expertDetails?.detailsCID + "/metadata.json";
        await fetch(url)
          .then(response => response.json())
          .then(jsonData => {
            // console.log(JSON.stringify(jsonData))
            // setName(jsonData.name)
            // setTwitter(jsonData.description)
            // setFileURL(jsonData.image.replace("ipfs://", "https://nftstorage.link/ipfs/"))
            const _data: OrbWithExpert = {
              expertDetails: {
                name: jsonData.name,
                desc: jsonData.description,
                image: jsonData.image.replace("ipfs://", "https://nftstorage.link/ipfs/"),
              },
              orbsDetails: orbData,
            };
            setOrbDetails(_data);
            const unix = Date.now() / 1000;
            setTimeForAuction(Number(_data.orbsDetails.auctionTime) - unix);
            setDataFetch(true);
          })
          .catch(error => {
            // handle your errors here
            console.error(error);
          });
      } catch (e) {
        console.log(e);
      }
    };
    getData();
  }, [price]);

  useEffect(() => {
    if (!dataFetch) return;
    if (timeForAuction === 0) return;
    setTimeout(() => {
      setTimeForAuction(timeForAuction - 1);
    }, 1000);
  }, [dataFetch, timeForAuction]);

  function formatTimeDisplay(time: number): string {
    const hours = Math.floor(time / 3600);
    const minutes = Math.floor((time % 3600) / 60);
    const seconds = Math.floor(time % 60);
    return `${hours.toString().padStart(2, "0")}:${minutes.toString().padStart(2, "0")}:${seconds
      .toString()
      .padStart(2, "0")}`;
  }

  const buyOrg = async () => {
    if (resellingPrice === undefined || resellingPrice < orbTotalDetails?.orbsDetails?.priceInUSD) return;
    setLoading(true);
    console.log(parseEther(String(Number(orbTotalDetails?.orbsDetails?.priceInUSD) / price)));
    try {
      const { hash } = await writeContract({
        address: orbAddress,
        abi: OrbABI.abi,
        functionName: "buyOrb",
        args: [BigInt(Number(resellingPrice))],
        account: account.address,
        // buffer of 1 dollar
        value: parseEther(String((Number(orbTotalDetails?.orbsDetails.priceInUSD) + 1) / price)),
      });
      await waitForTransaction({
        hash: hash,
      });
    } catch (e) {
      console.log(e);
    }
    setLoading(false);
  };

  useEffect(() => {
    const getData = async () => {
      const id = chain?.id;
      if (id === undefined) return;
      const name = PriceIds.get(id);
      if (name === undefined) return;
      const data = await getTokenData(name, "USD");
      console.log(data);
      if (data === undefined) return;
      setPrice(data?.usd);
    };
    getData();
  }, []);

  // const placeBidFunction = () => { };
  return (
    <div className="p-10 bg-white shadow-lg rounded-lg">
      <div className="flex items-center justify-start gap-10">
        <img
          className="rounded-full"
          width={150}
          height={150}
          src={orbTotalDetails?.expertDetails.image}
          alt="avatar-img"
        />
        <h1 className="font-bold text-[32px]"> {`${orbTotalDetails?.expertDetails.name}'s ORB`} </h1>
        <Link
          className="hover:text-blue-600"
          href={orbTotalDetails?.expertDetails.desc === undefined ? "/" : orbTotalDetails.expertDetails.desc}
        >
          <FaTwitter className="text-[28px]" />
        </Link>
      </div>
      <div className="flex justify-evenly">
        <div className="">
          <h3 className=" font-bold text-[28px]">ORB Details</h3>
          <div className="text-gray-400 w-[400px]">
            <div className="flex justify-between">
              <p>Current Price</p>
              <p>{`${orbTotalDetails?.orbsDetails.priceInUSD} USD`} </p>
            </div>
            <div className="flex justify-between">
              <p>Created At</p>
              <p> {unixToDateString(orbTotalDetails?.orbsDetails.createdAt)} </p>
            </div>
            <div className="flex justify-between">
              <p>Slot</p>
              <p>
                {`${Math.floor(365 / (Number(orbTotalDetails?.orbsDetails.coolDownTime) / (60 * 60 * 24)))}/month`}{" "}
              </p>
            </div>
            <div className="flex justify-between">
              <p>Harberger Tax</p>
              <p>{`${orbTotalDetails?.orbsDetails.taxRate}%`}</p>
            </div>
          </div>
        </div>
        <div className=" flex flex-col">
          {/* <div className="flex flex-col items-center   text-lg     ">
            <p className=" font-bol  text-6xl " >
              {
                dataFetch ? formatTimeDisplay(timeForAuction) : "-"
              }
            </p>
            <p className="font-semibold " >AUCTION STARTS IN</p>
          </div>
          {
            timeForAuction === 0 &&
            <div>

              <input type="number" onChange={handleBid} className="input-box p-0" placeholder="Enter you bid"></input>
              <button onClick={placeBidFunction} className="form-button px-3 mx-2">
                Place Bid
              </button>
              <div className="text-gray-400 p-1 flex justify-start gap-2">
                <p className="text-[20px]">Current Bid ~</p>
                <p className="text-[20px]"> 0.4 USD</p>
              </div>
            </div>
          } */}
          <input
            type="number"
            value={resellingPrice}
            onChange={e => setResellingPrice(Number(e.target.value))}
            className="input-box "
            placeholder="Set Reselling Price"
          />
          <div className=" flex flex-col items-center ">
            {loading ? (
              <div className="loader "></div>
            ) : (
              <button className="form-button w-[400px] " onClick={buyOrg}>
                {`Buy ORB @ $${orbTotalDetails?.orbsDetails.priceInUSD}`}
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrbCard;
