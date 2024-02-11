import type { NextPage } from "next";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useAccount } from "wagmi";
import { writeContract, waitForTransaction } from '@wagmi/core'
import OrbABI from "../../../../foundry/out/PendulumOrb.sol/PendulumOrb.json";

const OrbUpdate: NextPage = () => {
    const router = useRouter()
    const orbData = router.query.orbData as string[]
    const contractAddress = orbData[0]
    // const [auctionTime, setAuctionTime] = useState(unixToDateString(Number(orbData[1])))
    const [startingBidUSD, setStartingBid] = useState(orbData[2])
    const [coolDownTime, setCoolDownTime] = useState(String(Number(orbData[3]) / (60 * 60 * 24)))
    const [taxRate, setTaxRate] = useState(orbData[4])
    const account = useAccount()
    function stringToUnixTime(dateString: string): number {
        const dateObject = new Date(dateString);
        return dateObject.getTime() / 1000; // Convert milliseconds to seconds
    }
    // const { data: pendulumFactory } = useDeployedContractInfo("PendulumFactory");
    const updateOrb = async () => {
        setLoading(true)

        const { hash } = await writeContract({
            address: contractAddress,
            abi: OrbABI.abi,
            functionName: 'updateOrb',
            args: [
                // BigInt(stringToUnixTime(auctionTime)),
                BigInt(startingBidUSD),
                BigInt(Number(coolDownTime) * 24 * 60 * 60),
                BigInt(taxRate)
            ],
            account: account.address

        })
        await waitForTransaction({
            hash: hash,
        })
        setLoading(false)


    }


    // useEffect(() => {
    //     const getOrbDetails = async () => {
    //         try {
    //             const orbData = await readContract({
    //                 address: router.query.orbAdd,
    //                 abi: OrbABI.abi,
    //                 functionName: 'getOrbDetails',
    //                 account: account.address
    //             })

    //         } catch (e) { console.log(e) }
    //     }
    //     getOrbDetails()
    // }, [

    // ])

    // function unixToDateString(unixTime: number): string {
    //     if (typeof unixTime !== 'number') {
    //         return ""
    //     }
    //     const date = new Date(unixTime * 1000);
    //     return date.toLocaleDateString  // Extract date portion from ISO string
    // }

    const [loading, setLoading] = useState(false)

    return (
        <>
            <div className="flex flex-col items-center mt-12  " >
                {/* <div>
                    <p className="info-header font-bold " >Auction Time</p>
                    <input
                        type="date"
                        value={auctionTime}
                        onChange={(e) => setAuctionTime(e.target.value)}
                        className='input-box '
                    />

                </div> */}
                <p className="font-bold text-2xl" >UPDATE YOUR ORB</p>
                <div>
                    <p className="info-header font-bold " >Price in USD</p>
                    <input
                        type="number"
                        value={startingBidUSD}
                        onChange={(e) => setStartingBid(e.target.value)}
                        className='input-box '
                    />

                </div>
                <div>
                    <p className="info-header font-bold " >Question CoolDown Time in Days</p>
                    <input
                        type="number"
                        value={coolDownTime}
                        onChange={(e) => setCoolDownTime(e.target.value)}
                        className='input-box '

                    />

                </div>
                <div>
                    <p className="info-header font-bold " >Tax Rate</p>
                    <input
                        type="number"
                        value={taxRate}
                        onChange={(e) => setTaxRate(e.target.value)}
                        className='input-box '

                    />

                </div>
                {loading ? <div className="loader "></div>
                    :
                    <button onClick={updateOrb} className='form-button w-[400px] ' >UPDATE ORB</button>
                }
            </div>
        </>
    );
};

export default OrbUpdate;
