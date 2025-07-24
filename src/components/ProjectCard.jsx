import { Link } from 'lucide-react'
import React from 'react'

const ProjectCard = ({src, title, tags, link}) => {
  return (
    <div className="flex flex-row-reverse flex-wrap justify-between items-center py-5 border-t-2 border-zinc-600 dark:text-white">
      <div className="shrink-0">
        <img className="w-[380px] h-[180px] rounded-2xl" src={src} alt={title}/>
      </div>
      {/* Desription */}
      <div className="space-y-5">
        <div className="flex items-center gap-3">
          <h1 className="text-5xl font-bold font-stardom">{title}</h1>
          <a href={link}><Link className="text-zinc-700" size={30}/></a>
        </div>
        <div className="space-x-2">{tags.map((tag, idx)=>(
          <span className="rounded-full py-1 px-2.5 bg-amber-600 border border-neutral-400" key={idx}>{tag}</span>
        ))}
        </div>
      </div>
    </div>
  )
}

export default ProjectCard
