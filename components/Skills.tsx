import React from 'react';
import {
    IconBrandReact as ReactIcon,
    IconBrandTypescript as TypescriptIcon,
    IconBrandJavascript as JavascriptIcon,
    IconBrandHtml5 as Html5Icon,
    IconBrandNodejs as NodejsIcon,
    IconBrandRust as RustIcon,
    IconBrandPython as PythonIcon,
    IconSql as SqlIcon,
    IconBrandAzure as AzureIcon,
    IconBrandDocker as DockerIcon,
    IconBrandCSharp as CSharpIcon,
    IconBrandAws as AwsIcon,
    IconBrandGit as GitIcon,
    IconBrandNextjs as NextjsIcon,
    IconDiamond as RailsIcon,
} from '@tabler/icons-react';
import Marquee from "react-fast-marquee";

const frontendSkills = [
    { icon: ReactIcon, name: 'React' },
    { icon: Html5Icon, name: 'HTML5' },
    { icon: NextjsIcon, name: 'NextJS' },
    { icon: TypescriptIcon, name: 'TypeScript' },
    { icon: JavascriptIcon, name: 'JavaScript' },
    { icon: GitIcon, name: 'Git' },
    { icon: SqlIcon, name: 'SQL' },
];


const backendSkills = [
    { icon: AwsIcon, name: 'AWS' },
    { icon: NodejsIcon, name: 'Node.js' },
    { icon: RustIcon, name: 'Rust' },
    { icon: PythonIcon, name: 'Python' },
    { icon: AzureIcon, name: 'Azure' },
    { icon: DockerIcon, name: 'Docker' },
    { icon: CSharpIcon, name: 'C#' },
    { icon: RailsIcon, name: 'Ruby on Rails' },
];


function Skills() {
  return (
    <div className='mt-12'>
        <h1 className='text-2xl mb-4'>What&#39;s the tech mate?</h1>
        <Marquee autoFill gradient gradientColor='#0a0a0a' gradientWidth={20} pauseOnHover>
            {frontendSkills.map((skill, index) => (
                <div key={index} className="flex gap-2 mr-6">
                    <skill.icon size={40} className='text-primary glow' />
                    <p className='text-xl self-center'>{skill.name}</p>
                </div>
            ))}
        </Marquee>
        <Marquee autoFill gradient gradientColor='#0a0a0a' gradientWidth={20} pauseOnHover speed={60}>
            {backendSkills.map((skill, index) => (
                <div key={index} className="flex gap-2 mr-6">
                    <skill.icon size={40} className='text-primary glow' />
                    <p className='text-xl self-center'>{skill.name}</p>
                </div>
            ))}
        </Marquee>
    </div>
  )
}

export default Skills;
