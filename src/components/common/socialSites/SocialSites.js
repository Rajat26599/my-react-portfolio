import { IconList, IconListItem } from './styles'

// FONTAWESOME ICON
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { data } from './data'

export const SocialSites = (props) => {
    return (
        <IconList justifyIcons={props.justifyIcons}>
            {
                data.socialSites.map((item, index) => (
                    <IconListItem key={index}>
                        <a href={item.url}>
                            <FontAwesomeIcon icon={item.icon} color={props.iconColor} size="1x" />
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