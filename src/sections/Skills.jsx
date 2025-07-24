import React from 'react'
import Wrapper from '../components/Wrapper'
import Icon from '../components/Icon'
import HTML from '../assets/Skills Icons/html5.svg'
import Javascript from '../assets/Skills Icons/javascript.svg'
import Typescript from '../assets/Skills Icons/typescript.svg'
import C from '../assets/Skills Icons/c.svg'
import Python from '../assets/Skills Icons/python.svg'
import CSS from '../assets/Skills Icons/css_old.svg'
import Dart from '../assets/Skills Icons/dart.svg'
import ReactDark from '../assets/Skills Icons/React_dark.svg'
import ReactLight from '../assets/Skills Icons/React_light.svg'
import Next from '../assets/Skills Icons/nextjs_icon_dark.svg'
import Node from '../assets/Skills Icons/nodejs.svg'
import ExpressDark from '../assets/Skills Icons/Express.js_dark.svg'
import ExpressLight from '../assets/Skills Icons/Express.js_light.svg'
import FastApi from '../assets/Skills Icons/fastapi.svg'
import Flutter from '../assets/Skills Icons/flutter.svg'
import Tailwind from '../assets/Skills Icons/tailwindcss.svg'
import Vite from '../assets/Skills Icons/vitejs.svg'
import Vscode from '../assets/Skills Icons/vscode.svg'
import GithubDark from '../assets/Skills Icons/GitHub_dark.svg'
import GithubLight from '../assets/Skills Icons/GitHub_light.svg'
import Mongodb from '../assets/Skills Icons/mongodb.svg'
import Postgres from '../assets/Skills Icons/postgresql.svg'
import Mysql from '../assets/Skills Icons/mysql.svg'
import SkillSection from '../components/SkillSection'

const Skills = () => {
  const programmingLanguages = [
    {text:"C", img:C},
    {text:"Python", img:Python},
    {text:"Dart", img:Dart},
    {text:"HTML", img:HTML},
    {text:"CSS", img:CSS},
    {text:"JavaScript", img:Javascript},
    {text:"TypeScript", img:Typescript},
];

const frameworksAndLibraries = [
  {text:"React.js", img:{dark:ReactDark, light:ReactLight}},
  {text:"Next.js", img:Next},
  {text:"Node.js", img:Node},
  {text:"Express.js", img:{dark:ExpressDark, light:ExpressLight}},
  {text:"FastAPI", img:FastApi},
  {text:"Tailwind CSS", img:Tailwind},
  {text:"Flutter", img:Flutter}
];

const tools = [
  {text:"Vite", img:Vite},
  {text:"VS Code", img:Vscode},
  {text:"GitHub", img:{dark:GithubDark, light:GithubLight}}
];

const databases = [
  {text:"MongoDB", img:Mongodb},
  {text:"PostgreSQL", img:Postgres},
  {text:"MySQL", img:Mysql}
];

  return (
    <Wrapper id="skills">
      <div className="my-10 tracking-widest">
        <h1 className="text-4xl font-black font-stardom dark:text-white">Skills</h1>
        <div className="space-y-8 py-8">
        <h1 className="text-2xl font-bold font-stardom text-zinc-600 dark:text-zinc-300">Programming Languages</h1>
        <SkillSection skills={programmingLanguages}/>
      </div>
      <div className="space-y-8 py-8">
        <h1 className="text-2xl font-bold font-stardom text-zinc-600 dark:text-zinc-300">Frameworks / Libraries</h1>
        <SkillSection skills={frameworksAndLibraries}/></div>
      <div className="space-y-8 py-8">
        <h1 className="text-2xl font-bold font-stardom text-zinc-600 dark:text-zinc-300">Databases</h1>        
        <SkillSection skills={databases}/></div>
      <div className="space-y-8 py-8">
        <h1 className="text-2xl font-bold font-stardom text-zinc-600 dark:text-zinc-300">Development Tools & Platforms</h1>
        <SkillSection skills={tools}/></div>
      </div>
    </Wrapper>
  )
}

export default Skills
