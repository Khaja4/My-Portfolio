import React from 'react'
import Icon from './Icon'
import { useTheme } from '../common/ThemeContext'

const SkillSection = ({skills}) => {
    const {theme}= useTheme()

  return (
    <div className="flex items-center justify-evenly max-w-[700px] gap-16 flex-wrap">
      {skills.map((skill, idx)=>{
        return (
            <div key={idx} className="shrink-0"><Icon skill={skill.text} img={skill.img?.[theme] || skill.img} /></div>
        )
      })}
    </div>
  )
}

export default SkillSection
