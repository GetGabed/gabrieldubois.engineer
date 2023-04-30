import React, { useEffect, useState } from 'react'
import { SocialIcon } from 'react-social-icons'

type Props = {
    url?: string
    network?: string
    target?: string
    color?: string
}

function HoverSocialIcons({ url, network, target = "_blank", color }: Props) {
    const [hover, setHover] = useState(false)
    const [colorized, setColor] = useState('rgba(239, 68, 68)')

    useEffect(() => {

        switch (color) {
            case "yellow":
                setColor("#FBBF24")
                break;
            case "green":
                setColor("#10B981")
                break;
            case "blue":
                setColor("#3B82F6")
                break;
            case "red":
                setColor('rgba(239, 68, 68)')
                break;
            default:
                break;

        }
    });


    const hoverColor = hover ? colorized : 'gray'

    return (
        <SocialIcon url={url} bgColor='transparent'
            fgColor={hoverColor}
            network={network}
            className="cursor-pointer transition transition-colors hover:-rotate-6 transition transition-transform"
            target={target}
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)} />

    )
}

export default HoverSocialIcons