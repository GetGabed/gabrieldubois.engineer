const Hero = ({ title, color }) => {
    return (
        <>
            <div className="flex items-center">
                <h1 className="hero-p text-5xl mr-2 unselectable text-white txt-border">and I'm a</h1>
                <h1 className={`${color} unselectable hero-txt`}>{`${title}.`}</h1>
            </div>
        </>
    )
}

export default Hero;