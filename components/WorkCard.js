import Link from "next/link";
import { ArrowUpRightIcon } from "@heroicons/react/24/outline";


const WorkCard = ({color, title, subtitle, description, startDate, location, link = null }) => {
    return (
        <div>
            <div className="flex justify-between">
                <h1 className={`clash-display text-2xl mt-4 font-bold ${color}`}>{title}</h1>
                <h1 className={`clash-display text-xl mt-4 font-medium ${color}`}>{startDate}</h1>
            </div>
            <div className="flex justify-between">
                <h1 className="clash-display font-medium text-lg">{subtitle}</h1>
                <h1 className="clash-display text-lg font-normal">{location}</h1>
            </div>
            <p className="clash-display text-sm mt-4">{description}</p>
            {link ? (
            <div className="flex justify-end">
                <Link className="mb-4 flex clash-display menu-link" href={link} target="_blank">
                <ArrowUpRightIcon className="w-4 mr-2"/> 
                Link
                </Link>
            </div>
               ) : ('')
            }
            <hr className={`${color}`} />
        </div>
    )
}

export default WorkCard;