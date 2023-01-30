import Image from "next/image";
import Link from "next/link";
import { ArrowUpRightIcon } from "@heroicons/react/24/outline";

const MainProject = ({ image, title, description, github, link = "work", techs, color, reversed = false }) => {

    const showAllTechs = () => {
        return techs.map((t, i) => (
            <li className="mr-2" key={i}>
                {t}
            </li>
        ));
    };

    return (
        <><div className="mt-12 flex justify-center items-center">
            {reversed ? (
                <>
                    <div className="flex justify-center -ml-8">
                        <Link href={link} className={link == 'work' ? "cursor-default z-0 " : 'z-0'}>
                            <Image src={image} width={700} height={700} className="object-contain projpic duration-500 -mr-12 rounded-2xl " />
                        </Link>
                    </div>
                    <div className="clash-display -ml-12 z-10">
                        <div>
                            <h1 className={` text-2xl font-medium text-right ${color}`}>{title}</h1>
                            <ul className={`flex justify-end -mr-2 mb-4 font-normal`}>
                                {showAllTechs()}
                            </ul>
                            <div className="bg-black-100 dark:bg-gray-900 w-96 pt-4 px-4 pb-2 rounded-xl shadow-xl">
                                <p className="text-white mb-4 leading-relaxed">{description} </p>
                                <div className="flex flex-1 justify-end items-center ">
                                    {github ? (
                                        <Link href={github} className="hover:mr-1 duration-500" >
                                            <i className={`devicon-github-original text-3xl hover:text-white  transition-colors ml-4 ${color}`} />
                                        </Link>
                                    ) : ""}
                                    {link ? (
                                        <Link href={link} className="hover:-mt-2 duration-500" target="_blank">
                                            <ArrowUpRightIcon className={`border-b border-solid hover:text-white hover:border-white transition-colors ml-4 w-7 ${color}`} />
                                        </Link>
                                    ) : ""}
                                </div>
                            </div>
                        </div>
                    </div></>) :
                (<>
                    <div className="clash-display ml-36 z-10">
                        <div>
                            <h1 className={`w-max text-2xl font-medium ${color}`}>{title}</h1>
                            <ul className={`flex w-max mb-4 font-normal`}>
                                {showAllTechs()}
                            </ul>
                            <div className="bg-black-100 dark:bg-gray-900 w-96 pt-4 px-4 pb-2 rounded-xl shadow-xl">
                                <p className="text-white mb-4 leading-relaxed">{description} </p>
                                <div className="flex flex-1 justify-start items-center">
                                    {github ? (
                                        <Link href={github} className="hover:ml-1 duration-500" >
                                            <i className={`devicon-github-original text-3xl hover:text-white  transition-colors ml-4 ${color}`} />
                                        </Link>
                                    ) : ""}
                                    {link != "work" ? (
                                        <Link href={link} className="hover:-mt-2 duration-500" target="_blank">
                                            <ArrowUpRightIcon className={`border-b border-solid hover:text-white hover:border-white transition-colors ml-4 w-7 ${color}`} />
                                        </Link>
                                    ) : ""}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex justify-center z-0 -ml-8">
                        <Link href={link} className={link == 'work' ? "cursor-default" : ''}>
                            <Image src={image} width={700} height={700} className="object-contain mr-12 rounded-2xl " />
                        </Link>

                    </div>
                </>)}
        </div></>
    )
}

export default MainProject;