import Image from 'next/image'
import React from 'react'
import Images from '~~/utils/scaffold-eth/Images'
Image

const ProfileActions = ({ handleChange, fileURL, name, setName, twitter, setTwitter, loading, action, actionText }
    : {
        handleChange: (e: any) => void,
        fileURL: any,
        name: string,
        setName: (value: string) => void
        twitter: string,
        setTwitter: (value: string) => void
        loading: boolean,
        action: () => void,
        actionText: string
    }) => {


    return (

        <div className='flex flex-col items-center justify-center' >
            <div className="mt-8 flex flex-row  mx-32   " >
                <div className="flex flex-col items-center" >

                    {fileURL === Images.EmtpyImage ? <Image alt="user-image" src={fileURL} className=" rounded-md w-[420px] h-[500px]   " />
                        : <img alt="user-image" src={fileURL} className=" rounded-md w-[420px] h-[500px]   " />
                    }
                    <input type="file" onChange={handleChange} className=" outline-none mt-2 " />

                </div>
                <div className="flex flex-col justify-between pl-12  py-12 "  >
                    <div className='flex flex-col' >
                        <input
                            type="text"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            placeholder='Enter Your Name'
                            className='input-box'

                        />
                        <input
                            type="text"
                            value={twitter}
                            onChange={(e) => setTwitter(e.target.value)}
                            placeholder='Enter Your Twitter Profile'
                            className='input-box mt-12 '

                        />

                    </div>

                    <div className="flex flex-col w-[400px] items-center justify-center " >
                        {loading ? <div className="loader     	 "></div>
                            : <button onClick={action} className='form-button w-[400px] ' >{actionText}</button>
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProfileActions