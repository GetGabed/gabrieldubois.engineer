const Logo = ({name, css, border, b_bool, color}) => {
    return (
        <>
        <div>
            <div className={`p-4 rounded-full ${color} transition duration-500 mx-1 border-2 hover:border-transparent hover:bg-gray-50 hover:bg-opacity-5`}>
            {b_bool ? (<i style={{ 'borderColor': `${border}`, 'boxShadow': `inset 0 0 0 4px ${border}` }} className={`${css} text-5xl rounded-md border-2`} />) : (<i className={`${css} text-5xl rounded-md`} />)}
        </div>
            <h3 style={{'color': border}} className="font-medium text-center clash-display">{name}</h3>
        </div>
        </>
    )
}

export default Logo;