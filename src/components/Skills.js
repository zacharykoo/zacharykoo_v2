import React from 'react'
import {motion} from 'framer-motion'

const Skill = ({name, x, y}) => {
    return(
        <motion.div className='flex items-center justify-center rounded-full font-semibold bg-dark text-light 
        py-3 px-6 shadow-dark cursor-pointer absolute'
        whileHover={{scale: 1.05}}
        initial={{x: 0, y: 0}}
        whileInView={{x: x, y: y}}
        transition={{duration: 1.5}}
        viewport={{once: true}}
        >
            {name}
        </motion.div> 
    )
}

const Skills = () => {
  return (
    <>
        <h2 className='font-bold text-8xl mt-64 w-full text-center'>
            Skills
        </h2>
        <div className='w-full h-screen relative flex items-center justify-center rounded-full bg-circularLight'>
            <motion.div className='flex items-center justify-center rounded-full font-semibold bg-dark text-light 
            p-8 shadow-dark'
            whileHover={{scale: 1.05}}
            >
                Skills
            </motion.div>

            <Skill name="CSS" x="-5vw" y="-10vw" />
            <Skill name="HTML" x="-13vw" y="2vw" />
            <Skill name="JavaScript" x="20vw" y="6vw" />
            <Skill name="Vue" x="12vw" y="-3vw" />
            <Skill name="ReactJS" x="0vw" y="12vw" />
            <Skill name="C/C++" x="-20vw" y="-15vw" />
            <Skill name="Firebase" x="15vw" y="-12vw" />
            <Skill name="Python" x="32vw" y="-5vw" />
            <Skill name="Java" x="0vw" y="-20vw" />
            <Skill name="Golang" x="-25vw" y="18vw" />
            <Skill name="AWS" x="18vw" y="18vw" />
            <Skill name="C#" x="-27vw" y="-2vw" />
            <Skill name="Angular" x="-18vw" y="9vw" />
            <Skill name="MySQL" x="30vw" y="12vw" />
            <Skill name="Jira" x="-30vw" y="10vw" />
            <Skill name="Confluence" x="-32vw" y="-12vw" />
            <Skill name="Figma" x="32vw" y="-12vw" />
        </div>
    </>
  )
}

export default Skills