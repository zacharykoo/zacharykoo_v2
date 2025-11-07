import AnimatedText from '@/components/AnimatedText'
import Layout from '@/components/Layout'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import React, { useRef } from 'react'
import { motion, useMotionValue } from 'framer-motion'


import articleImage1 from "../../public/images/articles/interviewSucks.jpg"
import TransitionEffect from '@/components/TransitionEffect'


const FramerImage = motion(Image);

const MovingImage = ({img, title, link}) => {

    const x = useMotionValue(0);
    const y = useMotionValue(0);
    const imgRef = useRef(null)

    function handleMouse(event) {
        imgRef.current.style.display = 'inline-block';
        x.set(event.pageX);
        y.set(-10);
    }

    function handleMouseLeave(event) {
        imgRef.current.style.display = 'none';
        x.set(0);
        y.set(0);
    }

    return (
        <Link href={link} target='_blank'
        onMouseMove={handleMouse}
        onMouseLeave={handleMouseLeave}
        >
            <h2 className='capitalize text-xl font-semibold hover:underline'>
                {title}
            </h2>
            <FramerImage ref={imgRef} src={img} alt={title} 
            className='z-10 w-96 h-auto hidden absolute rounded-lg md:!hidden' 
            style={{ x, y }}
            initial = {{opacity: 0}}
            whileInView={{opacity: 1, transform:{duration: 0.2}}}
            priority={true}
            sizes='(max-width: 768px) 100vw, 
            (max-width: 1200px) 50vw,
            50vw'
            />
        </Link>
    )
}

const Article = ({img, title, date, link}) => {
    return (
        <motion.li 
        initial={{y: 200}}
        whileInView={{y: 0, transition:{duration: 0.5}, ease: 'easeInOut'}}
        viewport={{once: true}}
        className='relative w-full p-4 py-6 my-4 rounded-xl flex items-center
        justify-between border border-solid border-dark bg-light text-dark dark:border-light dark:bg-dark dark:text-light
        first:my-0 border-r-4 border-b-4 sm:flex-col
        '>
            <MovingImage
                img={img}
                title={title}
                link={link}
            />
            <span className='text-primary font-semibold pl-4 dark:text-primaryDark 
            sm:self-start sm:pl-0 xs:text-sm'>{date}</span>
        </motion.li>
    )
}


const FeaturedArticle = ({title, summary, img, link, time}) => {
    return (
        <li className='relative col-span-1 w-full p-4 bg-light border border-solid border-dark rounded-2xl dark:border-light dark:bg-dark '>
            <div className='absolute top-0 -right-3 -z-10 w-[101%] h-[102%] rounded-[2rem] bg-dark dark:bg-light
            rounded-br-3xl
            '/>
            <Link href={link} target="_blank"
            className='w-full inline-block cursor-pointer overflow-hidden rounded-lg'
            >
                <FramerImage src={img} alt={title} className='w-full h-auto'
                whileHover={{scale: 1.03}}
                transition={{duration: 0.2}}
                />
            </Link>

            <Link href={link} target="_blank" className='hover:underline underline-offset-2'>
                <h2 className='capitalize text-2xl font-bold my-2 mt-4 hover:underline
                xs:text-lg
                '>{title}</h2>
            </Link>
            <p className='text-sm mb-2'>{summary}</p>
            <span className='text-primary font-semibold dark:text-primaryDark'>
                {time}
            </span>
        </li>
    )
}

const articles = () => {
  return (
    <div>
        <Head>
            <title>
                Article Page
            </title>
            <meta name="description" content="This is the about page" />
        </Head>

        <TransitionEffect />

        <main className='w-full mb-16 flex flex-col items-center justify-center overflow-hidden dark:text-light'>
            <Layout className='pt-16'>
                <AnimatedText text="Words Can Change The World!" className='mb-16 lg:!text-7xl sm:mb-8 sm:!text-6xl xs:!text-4xl' />

                <ul className='grid grid-cols-2 gap-16 lg:gap-8 md:grid-cols-1 md:gap-y-16'>
                    {/* <FeaturedArticle
                        title="Why Software Interviews Suck (And How We Can Make Them Better!)"
                        summary="Traditional software developer interviews can be inadequate in providing a complete picture of a candidate's skills and abilities. 
                        Algorithm problems, in particular, can be limiting in their assessment of a candidate's potential fit within a company's culture or their ability to work collaboratively. 
                        I propose a more flexible approach that involves real-world problem-solving challenges, 
                        which can provide a better assessment of a candidate's ability to innovate and find effective solutions."
                        img={articleImage1}
                        link="https://zmhkoo.wordpress.com/2023/04/24/why-software-interviews-suck-and-how-we-can-make-them-better/"
                        time="5 min read"
                    /> */}
                    {/* <FeaturedArticle
                        title="How to create a custom Next.js app"
                        summary="Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Quisquam, quod."
                        img={articleImage2}
                        link="/"
                        time="2 min read"
                    /> */}
                </ul>
                <h2 className='font-bold text-4xl w-full text-center my-16 mt-32'>All Articles</h2>
                <ul>
                    <Article
                    title="TBA"
                    date="TBA"
                    link="/"
                    img={articleImage1}
                    />
                    {/* <Article
                        title="Form Validation In Reactjs: Build A Reusable Custom Hook For Inputs And Error Handling"
                        date="March 22, 2023"
                        link="/"
                        img={articleImage3}
                    /> */}
                </ul>
            </Layout>
        </main>
    </div>
  )
}

export default articles