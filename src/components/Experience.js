import React, { useRef } from 'react'
import {motion, useScroll} from "framer-motion"
import Lilcon from './Lilcon'

const Details = ({position, company, companyLink, time, address, work}) => {
    const ref = useRef(null);
    return (
        <li ref={ref} className='my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-center justify-between md:w-[80%]'>
            <Lilcon reference={ref} />
            <motion.div
            initial={{y: 50}}
            whileInView={{y:0}}
            transition={{duration: 0.5, type: "spring"}}
            >
                <h3 className='capitalize font-bold text-2xl sm:text-xl xs:text-lg'>
                    {position}&nbsp;<a href={companyLink}
                    target={"_blank"}
                    className='text-primary capitalize dark:text-primaryDark'
                    >@{company}</a>
                </h3>
                <span className='capitalize font-medium text-dark/75 dark:text-light/75 xs:text-sm'>
                    {time} | {address}
                </span>
                <p className='font-medium w-full md:text-sm'>
                    {work}
                </p>
            </motion.div>
        </li>
    )
}

const Experience = () => {
    const ref = useRef(null);
    const {scrollYProgress} = useScroll(
        {
            target: ref,
            offset: ["start end", "center start"]
        }
    )
  return (
    <div className='my-64'>
        <h2 className='font-bold text-8xl mb-32 w-full text-center md-text-6xl xs:text-4xl md:mb-16'>
            Experience
        </h2>
        <div ref={ref} className='w-[75%] mx-auto relative lg:w-[90%] md:w-full'>

            <motion.div 
            style={{scaleY: scrollYProgress}}
            className='absolute left-9 top-0 w-[4px] h-full bg-dark origin-top dark:bg-light
            md:w-[2px] md:left-[30px] xs:left-[20px]
            '/>

            <ul className='w-full flex flex-col items-start justify-between ml-4 xs:ml-2'>
                <Details 
                position="Fullstack Engineer" company="GDM Inc."
                companyLink="https://gdm-inc.com/"
                time="2023-Present" address="Calgary, AB"
                work="As a Developer at GDM Inc., I played a key role in the company's technological advancement 
                by introducing Redux and React Query, significantly improving software performance. My contributions 
                extended to the development of innovative features for Converge, where I excelled in both front-end 
                and back-end tasks, actively participating in various feature components. 
                Additionally, I implemented robust testing strategies, including API tests, Storybook tests, 
                and Unit tests, enhancing overall software reliability. 
                Throughout, I maintained a proactive approach, investigating and swiftly resolving test failures 
                and customer issues, ensuring the delivery of high-quality products."
                />
                <Details 
                position="Fullstack Engineer" company="Honest Empathy"
                companyLink="https://www.peersupport.io/"
                time="2022-2023" address="Vancouver, BC"
                work="Experienced in developing scalable, user-friendly web applications 
                with a strong focus on front-end using React JS and implementing responsive 
                design principles for optimal mobile compatibility. Skilled in utilizing 
                Node, Redux, Express, Sequelize, and Firebase as primary REST API frameworks 
                to build scalable, multi-tenant database endpoints with complex relational 
                models. Proficient in implementing real-time chat systems using Firebase's 
                real-time database features. Successfully introduced and implemented automated 
                end-to-end Cypress testing and unit testing using Jest to improve testing 
                efficiency and reduce manual testing time for applications."
                />
                <Details 
                position="Computer Science Teacher Assistance" company="University of Calgary"
                companyLink="https://www.ucalgary.ca/"
                time="2022-Present" address="Calgary, AB"
                work="Collaborated with professors to lead diverse teaching and assessment initiatives, including targeted
                tutorials on undergraduate-level design and analysis of algorithms.
                Covered fundamental concepts and methodologies such as greedy algorithms, divide and conquer, and
                dynamic programming."
                />
                <Details 
                position="Backend Engineer" company="University of Calgary"
                companyLink="https://www.ucalgary.ca/"
                time="2022-2022" address="Calgary, AB"
                work="Improved the University of Calgary's web-enabled scheduling system using PHP and C#, and optimized
                SQL query performance by implementing targeted modifications to data retrieval methods in MySQL,
                resulting in enhanced system functionality and faster query execution times."
                />
                <Details 
                position="Math and Science Tutor" company="Tutor Doctor"
                companyLink="https://www.tutordoctor.com/"
                time="2017-2018" address="Calgary, AB"
                work="Educated highschool students on strategies to improve performance on weaker subjects.
                Customized each lessons flexibly to fit the student's learning style."
                />
            </ul>
        </div>
    </div>
  )
}

export default Experience