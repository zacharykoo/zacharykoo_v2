import AnimatedText from '@/components/AnimatedText'
import { GithubIcon } from '@/components/Icons'
import Layout from '@/components/Layout'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

import project1 from "../../public/images/projects/ecom.png"
import project2 from "../../public/images/projects/distributed.png"
import project3 from "../../public/images/projects/studentEnrollment.png"
import project4 from "../../public/images/projects/selfCheckout.png"
import project5 from "../../public/images/projects/draw.png"

const FeaturedProject = ({type, title, summary, img, link, github}) => {
    return (
        <article className='w-full flex items-center justify-between
        rounded-3xl border border-solid border-dark bg-light shadow-2xl p-12
        '>
            <Link href={link} target="_blank"
            className='w-1/2 cursor-pointer overflow-hidden rounded-lg'
            >
                <Image src={img} alt={title} className='w-full' style={{ height: "50vh" }}/>
            </Link>

            <div className='w-1/2 flex flex-col items-start justify-between pl-6'>
                <span className='text-primary font-medium text-xl'>{type}</span>
                <Link href={link} target="_blank" className='hover:underline underline-offset-2'>
                    <h2 className='my-2 w-full text-left text-4xl font-bold'>{title}</h2>
                </Link>

                <p className='my-2 font-medium text-dark '>{summary}</p>
                <div className='mt-2 flex items-center'>
                    <Link href={github} target="_blank" className='w-10'> <GithubIcon />{" "} </Link>
                    <Link href={link} target="_blank"
                    className='ml-4 rounded-lg bg-dark text-light p-2 px-6 text-lg font-semibold'
                    > Visit Project </Link>
                </div>
            </div>
        </article>
    )
}

const Project = ({title, type, img, link, github}) => {
    return (
        <article className='w-full flex flex-col items-center justify-center rounded-2xl
        border border-solid border-dark bg-light p-6 relative
        '>
            <Link href={link} target="_blank"
            className='w-full cursor-pointer overflow-hidden rounded-lg'
            >
                <Image src={img} alt={title} className='w-full h-auto' style={{ height: "40vh" }}/>
            </Link>

            <div className='w-full flex flex-col items-start justify-between mt-4'>
                <span className='text-primary font-medium text-xl'>{type}</span>
                <Link href={link} target="_blank" className='hover:underline underline-offset-2'>
                    <h2 className='my-2 w-full text-left text-3xl font-bold'>{title}</h2>
                </Link>

                <div className='w-full mt-2 flex items-center justify-between'>
                    <Link href={link} target="_blank"
                    className='text-lg font-semibold underline'
                    > Visit </Link>
                    <Link href={github} target="_blank" className='w-8'> <GithubIcon />{" "} </Link>
                </div>
            </div>
        </article>
    )
}

const projects = () => {
  return (
    <>
        <Head>
            <title>
                Projects Page
            </title>
            <meta name="description" content="This is the about page" />
        </Head>

        <main className='w-full mb-16 flex flex-col items-center justify-center'>
            <Layout className='pt-16'>
                <AnimatedText text="Imagination Trumps Knowledge!" 
                className='mb-16'
                />

                <div className='grid grid-cols-12 gap-24'>
                    <div className='col-span-12'>
                        <FeaturedProject 
                            title="Ecommerce Web Application"
                            img={project1}
                            summary="Developed an efficient backend database management 
                            system using GORM and SQLite for an E-commerce app, optimized 
                            SQL query performance by 33%, and implemented robust API handlers 
                            and services with Golang. Seamless connectivity between the 
                            frontend and API was built using Angular, allowing for optimal 
                            data retrieval and transfer via GET, SET, and POST requests."
                            link="https://github.com/zacharykoo/EcommerceWebApp"
                            github="https://github.com/zacharykoo/EcommerceWebApp"
                            type="Featured Project"
                        />
                    </div>
                    <div className='col-span-6'>
                        <Project 
                            title="Distributed System"
                            img={project2}
                            link="https://github.com/zacharykoo/EcommerceWebApp"
                            github="https://github.com/zacharykoo/EcommerceWebApp"
                            type="Featured Project"
                        />
                    </div>
                    <div className='col-span-6'>
                        <Project 
                            title="Student Enrollment Web Application"
                            img={project3}
                            link="https://github.com/zacharykoo/EcommerceWebApp"
                            github="https://github.com/zacharykoo/EcommerceWebApp"
                            type="Featured Project"
                        />
                    </div>

                    <div className='col-span-12'>
                        <FeaturedProject 
                            title="Self-checkout software"
                            img={project4}
                            summary="The Self-Checkout System was enhanced 
                            with advanced item-scanning and payment functionality utilizing 
                            PLU codes, barcode scanning, and corresponding observers to 
                            optimize database scanning efficiency. As the Backend Team Lead, 
                            13 students were effectively organized and delegated tasks, 
                            resulting in timely and high-quality project delivery. 
                            Additionally, 100% unit test coverage was achieved for each 
                            software component using Java to ensure functional integrity and 
                            optimal application performance."
                            link="https://github.com/zacharykoo/selfcheckoutProject"
                            github="https://github.com/zacharykoo/selfcheckoutProject"
                            type="Featured Project"
                        />
                    </div>
                    <div className='col-span-12'>
                        <FeaturedProject 
                            title="Nightowl-Studios: Real time drawing-guessing game"
                            img={project5}
                            summary="The development of a real-time drawing game involved the creation of a 
                            websocket connection and Gorilla API service in Golang. The game's unparalleled 
                            responsiveness and stability were achieved through the implementation of a canvas 
                            drawing tool with event handlers, establishing a new standard for real-time drawing 
                            experiences. In addition, the web client and UI communication were designed using VueJS, 
                            enhancing the user experience and streamlining frontend functionality."
                            link="https://github.com/zacharykoo/selfcheckoutProject"
                            github="https://github.com/zacharykoo/selfcheckoutProject"
                            type="Featured Project"
                        />
                    </div>
                </div>
            </Layout>
        </main>
    </>
  )
}

export default projects