import React, { useState } from 'react'
import { SocialIcon } from 'react-social-icons'

type Props = {
    url?: string
    network?: string
    target?: string
}

function HoverSocialIcons({ url, network, target = "_blank" }: Props) {
    const [hover, setHover] = useState(false)
    const hoverColor = hover ? 'rgba(239, 68, 68)' : 'gray'

    return (
        <SocialIcon url={url} bgColor='transparent'
            fgColor={hoverColor}
            network={network}
            className="cursor-pointer transition transition-colors hover:-rotate-6 transition transition-transform"
            target={target}
            onMouseEnter={() => setHover(true)
            }
            onMouseLeave={() => setHover(false)} />

    )
}

export default HoverSocialIcons