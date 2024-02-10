import { type Metadata } from 'next'
import { Container } from '@/components/Container'
import { FadeIn } from '@/components/FadeIn'

export const metadata: Metadata = {
  description:
    'We are providing a web3 solution for connecting industry experts and their audiences through personalized interactions, and minimizing the cost of the middleman.',
}

export default async function Home() {

  return (
    <>
      <Container className="mt-24 sm:mt-32 md:mt-56">
        <FadeIn className="max-w-3xl">
          <h1 className="font-display text-5xl font-medium tracking-tight text-neutral-950 [text-wrap:balance] sm:text-7xl">
          Spread the highest quality expert knowledge and insights
          </h1>
          <p className="mt-6 text-xl text-neutral-600">
            This Platform enables experts to dedicate their time to answering the most important questions in their fields of expertise.
          </p>
        </FadeIn>
      </Container>
    </>
  )
}
