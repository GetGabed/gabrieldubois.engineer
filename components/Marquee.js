
const Marquee = ({ title, color }) => {

    return (
        <div className={`marquee border-b-2 border-t-2 ${color}`}>
            <div className="marquee-content scroll">
                <h1 className="unselectable">{title}</h1>
                <h1 className="unselectable">{title}</h1>
                <h1 className="unselectable">{title}</h1>
            </div>
            <div className="marquee-content scroll">
                <h1 className="unselectable">{title}</h1>
                <h1 className="unselectable">{title}</h1>
                <h1 className="unselectable">{title}</h1>
            </div>
        </div>
    )
}

export default Marquee;