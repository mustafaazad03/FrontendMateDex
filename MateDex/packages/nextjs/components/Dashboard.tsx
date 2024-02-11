import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { FaArrowRight, FaTwitter } from "react-icons/fa";
import { CiTwitter } from 'react-icons/ci'
import { useScaffoldContractRead, useDeployedContractInfo } from "~~/hooks/scaffold-eth";
import { useAccount } from "wagmi";
import OrbABI from "~~/utils/abi/OrbAbi.json";
import { readContract } from '@wagmi/core'
import { useRouter } from "next/router";
 

type OrbWithExpert = {
  expertDetails: {
    name: string
    desc: string
    image: string
  }
  orbsDetails: any
}

const Dashboard = () => {
  const ORBdetails = {
    imgURL: "",
    Slot: "",
    transactionrRate: "",
    biddingPrice: "",
  };
  const router = useRouter()
  const account = useAccount()
  const { data: pendulumFactory } = useDeployedContractInfo("PendulumFactory")

  const { data: orbsArray } = useScaffoldContractRead({
    contractName: "PendulumFactory",
    functionName: "getAliveUpcomingOrbs",
    account: account.address
  });

  const [orbDetails, setOrbDetails] = useState<OrbWithExpert[]>([])

  useEffect(() => {
    // get orb and expert details 
    const getOrbAndExpertData = async () => {
      try {
        if (orbsArray === undefined) return
        const _orbWithExpert: OrbWithExpert[] = []
        for (let i = 0; i < orbsArray.length; i++) {
          const orbData: any = await readContract({
            address: orbsArray[i],
            abi: OrbABI.abi,
            functionName: 'getOrbDetails',
            account: account.address
          })
          const expertDetails = await readContract({
            address: pendulumFactory?.address!,
            abi: pendulumFactory?.abi!,
            functionName: "getExpertProfile",
            args: [orbData.createBy],
            account: account.address
          })
          console.log(orbData)
          console.log(expertDetails)
          const url = "https://nftstorage.link/ipfs/" + expertDetails.detailsCID + "/metadata.json"
          await fetch(url).then(response => response.json())
            .then((jsonData) => {
              // console.log(JSON.stringify(jsonData))
              // setName(jsonData.name)
              // setTwitter(jsonData.description)
              // setFileURL(jsonData.image.replace("ipfs://", "https://nftstorage.link/ipfs/"))
              const _data: OrbWithExpert = {
                expertDetails: {
                  name: jsonData.name,
                  desc: jsonData.description,
                  image: jsonData.image.replace("ipfs://", "https://nftstorage.link/ipfs/")
                },
                orbsDetails: orbData
              }
              _orbWithExpert.push(_data)
            })
            .catch((error) => {
              // handle your errors here
              console.error(error)

            })

        }
        setOrbDetails(_orbWithExpert)
      } catch (e) { console.log(e) }
    }
    getOrbAndExpertData()

  }, [orbsArray])

  function unixToDateString(unixTime: number): string {
    if (typeof unixTime !== 'number') {
      return ""
    }
    const date = new Date(unixTime * 1000);
    return date.toLocaleString() // Extract date portion from ISO string
  }

  if (orbDetails.length === 0) {
    return (
      <div className="flex flex-col items-center" >
        <p className="font-bold text-6xl mt-12 " >No ORB for sale yet</p>
      </div>
    )
  }

  return (
    <div className="">

      <div className="grid grid-cols-3  px-40 py-10 ">
        {
          orbDetails.map((value, index) => {
            return (
              <>
                <div className="shadow-lg bg-white rounded-xl p-4 w-[350px]" key={index} >
                  <div className=" w-full flex items-center justify-between">
                    <div className="flex items-center gap-2 ">
                      <h1 className="text-[24px] text-center">{`${value.expertDetails.name}'s ORB`}</h1>
                      <Link className="hover:text-blue-600" href={value.expertDetails.desc} target="_blank" >
                        <CiTwitter className="text-xl" width={150} height={150} />
                      </Link>
                    </div>
                    <div>
                      <img
                        className="rounded-full m-auto"
                        width={80}
                        height={80}
                        src={value.expertDetails.image}
                        alt="avatar-img"
                      />
                    </div>
                  </div>
                  <div className="text-[14px] text-gray-400 ">
                    <div className="flex justify-between">
                      <p>Question Slot</p>
                      <p> {Math.floor(365 / (Number(value.orbsDetails.coolDownTime) / (60 * 60 * 24)))} </p>
                    </div>
                    <div className="flex justify-between">
                      <p>Harberger Tax</p>
                      <p> {`${value.orbsDetails.taxRate}%`} </p>
                    </div>
                    {/* <div className="flex justify-between">
                      <p>Auction Base Price</p>
                      <p> {`${value.orbsDetails.priceInUSD} USD`} </p>
                    </div> */}
                    <div className="flex justify-between">
                      <p>Created At</p>
                      <p> {unixToDateString(value.orbsDetails.createdAt)} </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="flex flex-col    text-center w-4/5 bg-blue-500 font-bold text-lg  text-white justify-center   rounded-xl ">
                      {/* <p className=" text-sm  font-normal " >Auction Date & Time</p> */}
                      <p>{`$ ${value.orbsDetails.priceInUSD}`} </p>
                    </div>

                    <div className="border-2 border-blue-500 rounded-xl hover:bg-blue-500 text-white">
                      {
                        orbsArray !== undefined && <Link href={`/orbs/${orbsArray[index]}`} className="text-blue-500 text-lg  w-full">
                          <div className="p-4 hover:text-white">
                            <FaArrowRight />
                          </div>
                        </Link>
                      }
                    </div>
                  </div>
                </div>
              </>
            )
          })
        }
      </div>
    </div>
  );
};

export default Dashboard;
