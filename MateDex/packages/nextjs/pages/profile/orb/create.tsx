
import type { NextPage } from "next";
import { useState } from "react";
import { useScaffoldContractWrite, useDeployedContractInfo } from "~~/hooks/scaffold-eth";
import { writeContract, waitForTransaction } from '@wagmi/core'
import { useAccount } from "wagmi";


const CreateOrb: NextPage = () => {
    const [auctionTime, setAuctionTime] = useState("")
    const [startingBidUSD, setStartingBid] = useState("")
    const [coolDownTime, setCoolDownTime] = useState("")
    const [taxRate, setTaxRate] = useState("")
    const account = useAccount()
    function stringToUnixTime(dateString: string): number {
        const dateObject = new Date(dateString);
        return dateObject.getTime() / 1000; // Convert milliseconds to seconds
    }
    const { data: pendulumFactory } = useDeployedContractInfo("PendulumFactory");

    console.log(stringToUnixTime(auctionTime))

    const [loading, setLoading] = useState(false)
    // const { writeAsync: CreateOrbFunc } = useScaffoldContractWrite({
    //     contractName: "PendulumFactory",
    //     functionName: "createOrb",
    //     args: [BigInt(stringToUnixTime(auctionTime)), BigInt(startingBidUSD), BigInt(Number(coolDownTime) * 24 * 60 * 60), BigInt(taxRate)],

    // });
    const createOrb = async () => {
        if (startingBidUSD === "" || coolDownTime === "" || taxRate === "") return
        try {
            setLoading(true)
            console.log("sending")

            const { hash } = await writeContract({
                address: pendulumFactory?.address!,
                abi: pendulumFactory?.abi!,
                functionName: 'createOrb',
                args: [
                    // BigInt(stringToUnixTime(auctionTime)),
                    BigInt(startingBidUSD),
                    BigInt(Number(coolDownTime) * 24 * 60 * 60),
                    BigInt(taxRate)
                ],
                account: account.address
            })
            console.log("sent")
            await waitForTransaction({
                hash: hash,
            })

            console.log("completed")
            setAuctionTime("")
            setCoolDownTime("")
            setTaxRate("")
            setStartingBid("")
            setLoading(false)

        } catch (e) { console.log(e) }

    }
    return (
        <>
            <div className="flex flex-col items-center mt-12  " >
                {/* <div>
                    <p className="info-header font-bold " >Auction Time</p>
                    <input
                        type="datetime-local"
                        value={auctionTime}
                        onChange={(e) => setAuctionTime(e.target.value)}
                        className='input-box '
                    />

                </div> */}
                <p className=" font-bold text-2xl " >CREATE NEW ORB</p>
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
                    <button onClick={createOrb} className='form-button w-[400px] ' >Create New ORB</button>
                }
            </div>
        </>
    );
};

export default CreateOrb;
