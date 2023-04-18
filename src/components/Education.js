import React, { useRef } from 'react'
import {motion, useScroll} from "framer-motion"
import Lilcon from './Lilcon'

const Details = ({ type, time, place, info}) => {
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
                    {type}
                </h3>
                <span className='capitalize font-medium text-dark/75 dark:text-light/75 xs:text-sm'>
                    {time} | {place}
                </span>
                <p className='font-medium w-full md:text-sm'>
                    {info}
                </p>
            </motion.div>
        </li>
    )
}

const Education = () => {
    const ref = useRef(null);
    const {scrollYProgress} = useScroll(
        {
            target: ref,
            offset: ["start end", "center center"]
        }
    )
  return (
    <div className='my-64'>
        <h2 className='font-bold text-8xl mb-32 w-full text-center md-text-6xl xs:text-4xl md:mb-16'>
            Education
        </h2>
        <div ref={ref} className='w-[75%] mx-auto relative lg:w-[90%] md:w-full'>

            <motion.div 
            style={{scaleY: scrollYProgress}}
            className='absolute left-9 top-0 w-[4px] h-full bg-dark dark:bg-light origin-top
            md:w-[2px] md:left-[30px] xs:left-[20px]
            '/>

            <ul className='w-full flex flex-col items-start justify-between ml-4 xs:ml-2'>
                <Details 
                type="Bachelor of Science in Computer Science"
                time="2019-2022" 
                place="Univsersity of Calgary"
                info="Relevant coursework includes Data Structures and Algorithms, 
                Computer Systems Engineering, and Artificial Intelligence. 
                These courses provided me with a strong foundation in organizing and processing 
                data efficiently, an understanding of computer hardware and software systems, 
                and knowledge in the design and implementation of intelligent agents and expert systems."
                />
                <Details 
                type="Japanese Language Exchange Program"
                time="2018-2019" 
                place="Senshu University"
                info="As part of the International Exchange Program at Senshu University, 
                I had the opportunity to take regular university classes, 
                including courses in Computer Science and Japanese Language. 
                While most of the classes were taught in Japanese, some courses 
                in the Department of English were taught in English. This experience 
                allowed me to further develop my skills in both fields while immersing myself 
                in a different academic and cultural environment."
                />
                <Details 
                type="Bachelor of Science in Biology"
                time="2013-2018" 
                place="Univsersity of Calgary"
                info="As a Bachelor of Science in Biology graduate, I have a strong foundation in fundamental biological principles, 
                practical laboratory experience, writing/presentations skills and critical thinking skills."
                />
            </ul>
        </div>
    </div>
  )
}

export default Education