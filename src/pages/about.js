import AnimatedText from '@/components/AnimatedText'
import Layout from '@/components/Layout'
import Head from 'next/head'
import React, { useEffect, useRef } from 'react'

import profileImage from '../../public/images/profile/zach.jpg'
import Image from 'next/image'
import { useInView, useMotionValue, useSpring } from 'framer-motion'
import Skills from '@/components/Skills'
import Experience from '@/components/Experience'
import Education from '@/components/Education'

const AnimaatedNumbers = ({value}) => {
    const ref = useRef(null);

    const motionValue = useMotionValue(0);
    const springValue = useSpring(motionValue, {duration: 3000});
    const isInView = useInView(ref, {once: true});

    useEffect(() => {
        if (isInView) {
            motionValue.set(value);
        }
    }, [isInView, value, motionValue])

    useEffect(() => {
        springValue.on("change", (latest) => {
            if(ref.current && latest.toFixed(0) <= value) {
                ref.current.textContent = latest.toFixed(0);
            }
        })
    }, [springValue, value])

    return <span ref={ref}></span>
}

const about = () => {
  return (
    <div>
        <Head>
            <title>
                About Page
            </title>
            <meta name="description" content="This is the about page" />
        </Head>
        <main className='flex w-full flex-col items-center justify-center'>
            <Layout className='pt-16'>
                <AnimatedText text="Passion Fuels Purpose!" className='mb-16'/>
                <div className='grid w-full grid-cols-8 gap-16'>
                    <div className='col-span-3 flex flex-col items-start justify-start'>
                        <h2 className='mb-4 text-lg font-bold uppercase text-dark/75'>
                            Biography
                        </h2>
                        <p className='font-medium'>
                        As a firm believer in personal growth, I am constantly seeking out new ways to 
                        expand my skill set and make a positive impact on the world. Whether it's learning 
                        a new programming language, mastering a new tool or technology, or taking on a 
                        challenging project, I am always looking for ways to push myself to new heights. 
                        With a passion for growth and development, I am excited to see where my journey 
                        in the world of software development will take me next.
                        </p>
                        <p className='font-medium my-4'>
                        Design is my passion! I believe that it's not just about making things 
                        look pretty, it's about creating problem-solving masterpieces that 
                        provide intuitive and enjoyable experiences for users.
                        </p>
                        <p className='font-medium'>
                        Whether I'm working on a website, mobile app, or any other digital product, 
                        I always bring my commitment to design excellence and user-centered thinking to the table. 
                        I love nothing more than crafting designs that are both functional and visually stunning, 
                        helping businesses and individuals stand out from the crowd. 
                        So let's get creative and make something amazing together! 
                        Give me a shout and let's bring your next project to life!
                        </p>
                    </div>
                    <div className='col-span-3 relative h-max rounded-2xl border-2 border-solid border-dark
                    bg-light p-8'>
                        <div className='absolute top-0 -right-3 -z-10 w-[102%] h-[103%] rounded-[2rem] bg-dark'/>
                        <Image src={profileImage} className="w-full h-auto rounded-2xl"/>
                    </div>

                    <div className='cql-span-2 flex flex-col items-end justify-between'>
                        <div className='flex flex-col items-end justify-center'>
                            <span className='inline-block text-7xl font-bold'>
                                <AnimaatedNumbers value={40} />+
                            </span>
                            <h2 className='text-xl font-medium capitalize text-dark/75'>
                                satisfied clients
                            </h2>
                        </div>
                        <div className='flex flex-col items-end justify-center'>
                            <span className='inline-block text-7xl font-bold'>
                                <AnimaatedNumbers value={15} />+
                            </span>
                            <h2 className='text-xl font-medium capitalize text-dark/75'>
                                projects completed
                            </h2>
                        </div>
                        <div className='flex flex-col items-end justify-center'>
                            <span className='inline-block text-7xl font-bold'>
                                <AnimaatedNumbers value={4} />+
                            </span>
                            <h2 className='text-xl font-medium capitalize text-dark/75'>
                                years of experience
                            </h2>
                        </div>
                    </div>
                </div>
            <Skills />
            <Experience />
            <Education />
            </Layout>
        </main>
    </div>
  )
}

export default about