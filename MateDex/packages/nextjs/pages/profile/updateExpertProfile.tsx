
import type { NextPage } from "next";
import { NFTStorage } from "nft.storage";
import { useEffect, useState } from "react";
import { readContract, writeContract, waitForTransaction } from '@wagmi/core'

useScaffoldContractRead

import Images from "~~/utils/scaffold-eth/Images";
import { useScaffoldContractRead, useDeployedContractInfo } from "~~/hooks/scaffold-eth";
import ProfileActions from "~~/components/profile/ProfileActions";
import { useAccount } from "wagmi";
const UpdateExpertProfile: NextPage = () => {


    const [file, setFile] = useState<File>();
    const [fileURL, setFileURL] = useState<any>(Images.EmtpyImage);
    const [name, setName] = useState("")
    const [twitter, setTwitter] = useState("")
    const [loading, setLoading] = useState(false)
    const { data: pendulumContract } = useDeployedContractInfo("PendulumFactory")

    function handleChange(e: any) {
        setFileURL(window.URL.createObjectURL(e.target.files[0]));
        setFile(e.target.files[0]);
        console.log(e.target.files[0])
    }

    async function convertHttpUrlToFile(httpUrl: string, fileName: string): Promise<File | null> {
        try {
            // Fetch the content of the HTTP URL
            const response = await fetch(httpUrl);

            // Check if the request was successful (status code 200)
            if (!response.ok) {
                throw new Error(`Failed to fetch data from ${httpUrl}`);
            }

            // Convert the response body to a Blob
            const blob = await response.blob();

            // Create a File object with the Blob and the specified fileName
            const file = new File([blob], fileName, { type: blob.type });

            return file;
        } catch (error) {
            console.error(error);
            return null;
        }
    }

    const updateExpertProfile = async () => {

        if (name === "" || twitter === "" || fileURL === Images.EmtpyImage) return
        setLoading(true)
        if (process.env.NEXT_PUBLIC_NFT_STORAGE_API === undefined) return
        const nftstorage = new NFTStorage({ token: process.env.NEXT_PUBLIC_NFT_STORAGE_API })
        const image = await convertHttpUrlToFile(fileURL, "profile_picture.png")
        if (image === null) return
        const data = await nftstorage.store({
            name,
            image,
            description: twitter,
        })

        const { hash } = await writeContract({
            address: pendulumContract?.address!,
            abi: pendulumContract?.abi!,
            functionName: "updateProfile",
            args: [data.ipnft],
            account: account.address
        })
        console.log(hash)
        await waitForTransaction({
            hash: hash,
        })

        setLoading(false)

    }

    const account = useAccount()
    const { data: expertProfile } = useScaffoldContractRead({
        contractName: "PendulumFactory",
        functionName: "getExpertProfile",
        args: [account.address],
        account: account.address
    });

    // console.log(JSON.stringify(expertProfile))
    useEffect(() => {
        const getProfile = async () => {
            try {
                if (expertProfile === undefined) return
                console.log("got the profile")

                // first get the data from contract 
                const url = "https://nftstorage.link/ipfs/" + expertProfile.detailsCID + "/metadata.json"
                await fetch(url).then(response => response.json())
                    .then((jsonData) => {
                        console.log(JSON.stringify(jsonData))
                        setName(jsonData.name)
                        setTwitter(jsonData.description)
                        setFileURL(jsonData.image.replace("ipfs://", "https://nftstorage.link/ipfs/"))
                    })
                    .catch((error) => {
                        // handle your errors here
                        console.error(error)

                    })


            } catch (e) { console.log(e) }
        }
        getProfile()
    }, [expertProfile])

    return (
        <>
            <ProfileActions
                name={name}
                setName={setName}
                twitter={twitter}
                setTwitter={setTwitter}
                handleChange={handleChange}
                fileURL={fileURL}
                action={updateExpertProfile}
                actionText="Update Expert Profile"
                loading={loading}
            />
        </>
    );
};

export default UpdateExpertProfile;
