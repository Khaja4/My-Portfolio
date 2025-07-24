import React from 'react'

const Icon = ({skill, img}) => {
  return (
    <div className="flex flex-col items-center justify-center gap-1 ">
      <img className="size-12" src={img} alt={`skill-{skill}`} />
      <span className="font-semibold text-zinc-600 dark:text-zinc-300">
        {skill}
      </span>
    </div>
  )
}

export default Icon
