
import type { NextPage } from "next";
import { NFTStorage } from "nft.storage";
import { useState } from "react";

import { writeContract, waitForTransaction } from '@wagmi/core'


import Images from "~~/utils/scaffold-eth/Images";
import { useScaffoldContractWrite, useDeployedContractInfo } from "~~/hooks/scaffold-eth";
import ProfileActions from "~~/components/profile/ProfileActions";
import { useAccount } from "wagmi";
const CreateExpertProfile: NextPage = () => {
    // const [userImage, setUserImage] = useState(Images.EmtpyImage)
    const [file, setFile] = useState<File>();
    const [fileURL, setFileURL] = useState<any>(Images.EmtpyImage);
    const [name, setName] = useState("")
    const [twitter, setTwitter] = useState("")
    const [loading, setLoading] = useState(false)
    const [profileData, setProfileData] = useState("")
    const { data: pendulumContract } = useDeployedContractInfo("PendulumFactory")
    const account = useAccount()
    // const { writeAsync: createExpProfile } = useScaffoldContractWrite({
    //     contractName: "Pendulum",
    //     functionName: "createProfile",
    //     args: [profileData],
    //     onBlockConfirmation: txnReceipt => {
    //         console.log("Transaction blockHash", txnReceipt.blockHash);
    //     },
    // });

    const createExpertProfile = async () => {
        if (name === "" || twitter === "" || fileURL === Images.EmtpyImage) return
        setLoading(true)
        if (process.env.NEXT_PUBLIC_NFT_STORAGE_API === undefined) return
        const nftstorage = new NFTStorage({ token: process.env.NEXT_PUBLIC_NFT_STORAGE_API })
        const image = file!
        const data = await nftstorage.store({
            name,
            image,
            description: twitter,
        })

        const { hash } = await writeContract({
            address: pendulumContract?.address!,
            abi: pendulumContract?.abi!,
            functionName: "createProfile",
            args: [data.ipnft],
            account: account.address
        })
        console.log(hash)
        await waitForTransaction({
            hash: hash,
        })

        setLoading(false)
    }

    function handleChange(e: any) {
        setFileURL(window.URL.createObjectURL(e.target.files[0]));
        setFile(e.target.files[0]);
        console.log(e.target.files[0])
    }

    return (
        <>
            <ProfileActions
                name={name}
                setName={setName}
                twitter={twitter}
                setTwitter={setTwitter}
                handleChange={handleChange}
                fileURL={fileURL}
                action={createExpertProfile}
                actionText="Create Expert Profile"
                loading={loading}
            />
        </>
    );
};

export default CreateExpertProfile;
