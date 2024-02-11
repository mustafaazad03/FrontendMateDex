import React from 'react'
import Image from 'next/image'
import Link from 'next/link';
import { FaTwitter } from 'react-icons/fa';
import OrbCard from '~~/components/OrbCard';
import { useRouter } from 'next/router';

const Index = () => {
  const router = useRouter()
  const contractAddress = router.query.orb as string
  return (
    <div className='p-10'>
      <div>
        <OrbCard orbAddress={contractAddress} />
      </div>
    </div>
  )
}

export default Index
