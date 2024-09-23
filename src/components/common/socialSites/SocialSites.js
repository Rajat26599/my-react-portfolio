import { IconList, IconListItem } from './styles'

// FONTAWESOME ICON
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { data } from './data'
import { useState } from 'react'

export const SocialSites = (props) => {
    const [ mouseOver, setMouseOver ] = useState(false)
    return (
        <IconList justifyIcons={props.justifyIcons}>
            {
                data.socialSites.map((item, index) => (
                    <IconListItem key={index}>
                        <a href={item.url}>
                            <FontAwesomeIcon 
                                title={item.platform}
                                key={index}
                                icon={item.icon} 
                                color={ index === mouseOver ? item.onHoverColor : props.iconColor} 
                                size="1x" 
                                onMouseOver={() => setMouseOver(index)}
                                onMouseLeave={() => setMouseOver(false)}
                                />
                        </a>
                    </IconListItem>
                ))
            }
            {/* <li><a href="https://www.facebook.com/rajat.saxena.90410/"><i className="fa fa-facebook"></i></a></li>
            <li><a href="https://google.com"><i className="fa fa-twitter"></i></a></li>
            <li><a href="https://www.linkedin.com/in/rajat-saxena-54509a15b/"><i className="fa fa-linkedin"></i></a></li>
            <li><a href="https://github.com/Rajat26599/"><i className="fa fa-github"></i></a></li>
            <li><a href="https://www.behance.net/rajatsaxena3"><i className="fa fa-behance"></i></a></li> */}
        </IconList>
    )
}