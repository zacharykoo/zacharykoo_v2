import Layout from '@/components/Layout'
import main2 from '../../public/images/profile/profileOutline2.png'
import Image from 'next/image'
import AnimatedText from '@/components/AnimatedText'
import Link from 'next/link'
import { LinkArrow } from '@/components/Icons'
import HireMe from '@/components/HireMe'
import lightbolt from '../../public/images/svgs/miscellaneous_icons_1.svg'

export default function Home() {
  return (
    <>
      <main className='flex items-center text-dark w-full min-h-screen'>
        <Layout className='pt-0'>
          <div className='flex items-center justify-between w-full'>
            <div className='w-1/2 flex flex-col items-center self-center'>
              <Image src={main2} className="w-4/5"/>
            </div>
            <div className='w-1/2'>
              <AnimatedText text="Turning Vision Into Reality With Code And Design." 
              className='text-6xl text-left'
              />
              <p className='my-4 text-base font-medium'>
                As a skilled full-stack developer, I am dedicated to turning ideas into innovative web applications. 
                Explore my latest projects and articles, showcasing my expertise in React.js and web development.
              </p>
              <div class="flex items-center self-start mt-2">
                <Link href='/Resume for Software.pdf' target={"_blank"}
                className='flex items-center justify-center bg-dark text-light p-2.5 px-6
                rounded-lg text-lg font-semibold hover:bg-light hover:text-dark
                border-2 border-solid border-transparent hover:border-dark'
                download={true}
                > Resume <LinkArrow className={"w-6 ml-1"}/>
                
                </Link>
                <Link href="mailto:zmhkooseng@gmail.com" target={"_blank"}
                className="ml-4 text-lg font-medium capitalize text-dark underline"
                >Contact</Link>
              </div>
            </div>
          </div>
        </Layout>
      
        <HireMe />
        <div className='absolute right-8 bottom-8 inline-block w-24'>
          <Image src={lightbolt} alt='ZacharyKoo' className='w-full h-auto' />
        </div>
      </main>
    </>
  )
}
