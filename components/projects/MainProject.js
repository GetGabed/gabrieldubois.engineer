import Image from "next/image";
const MainProject = ({image, title, description, github, link, techs, color}) => {

    const showAllTechs = () => {
        return techs.map((t, i) => (
            <li className="mr-2" key={i}>
                {t}
            </li>
        ));
    };

    return (
        <><div className="flex justify-center items-center">
            <div className="clash-display ml-36 z-10">
                <div className="">
                    <h1 className={`w-max text-2xl font-medium ${color}`}>{title}</h1>
                    <ul className={`flex w-max mb-4  font-normal`}>
                        {showAllTechs()}
                    </ul>
                    <p className="bg-black-100 dark:bg-gray-900 text-white rounded-xl  p-4 w-96">{description}</p>
                </div>
                
            </div>
            <div className="flex justify-center z-0 -ml-8">
                <Image src={image} width={500} height={500} className="object-contain mr-12 rounded-2xl " />
            </div>
        </div></>
    )
}

export default MainProject;