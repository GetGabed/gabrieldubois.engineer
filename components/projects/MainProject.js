
const MainProject = ({image, title, description, github, link, techs, color}) => {

    const showAllTechs = () => {
        return techs.map((t, i) => (
            <li className="mr-2" key={i}>
                {t}
            </li>
        ));
    };

    return (
        <div className="flex justify-center">
        <div className="clash-display mx-36 grid grid-cols-12 z-10">
            <div className="">
                <h1 className={`w-max text-2xl font-medium ${color}`}>{title}</h1>
                <ul className={`flex w-max mb-4  font-normal`}>
                    {showAllTechs()}
                </ul>
                <p className="bg-black-100 dark:bg-gray-900 text-white rounded-xl p-4 w-max">{description}</p>
            </div>
        </div>
        <img src={image} className="w-1/2"/>
        </div>
    )
}

export default MainProject;