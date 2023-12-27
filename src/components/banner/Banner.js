import { BannerButton, BannerWrapper, IconList, IconListItem, MyPic, MyPicWrapper, MyName } from "./styles"
import myFormalPic from './../../assets/img/home-left-1.png'
import '../../../node_modules/linearicons/dist/web-font/style.css'

// FONTAWESOME ICON
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { data } from "./data"
import { upper } from "../../util/common/helperFunctions"

export const Banner = () => {
    return (
        <BannerWrapper>
            <MyPicWrapper>
                <MyPic src={myFormalPic}></MyPic>
            </MyPicWrapper>
            <div>
                <h5>This is me</h5>
                <MyName>{upper('Rajat Saxena')}</MyName>
                <p><i className="lnr lnr-bug"></i> &nbsp;&nbsp;&nbsp;&nbsp; Full-stack Developer &nbsp;&nbsp;&nbsp;&nbsp; <i className="lnr lnr-pie-chart"></i> &nbsp;&nbsp;&nbsp;&nbsp; Graphic Designer &nbsp;&nbsp;&nbsp;&nbsp; <i className="lnr lnr-code"></i> &nbsp;&nbsp;&nbsp;&nbsp; Software Enthusiast</p>
                <p><i className="lnr lnr-star"></i> &nbsp;&nbsp;&nbsp;&nbsp; Founder of CODE &nbsp;&nbsp;&nbsp;&nbsp; <i className="lnr lnr-briefcase"></i> &nbsp;&nbsp;&nbsp;&nbsp; ABA (UI Developer) at Infosys</p>
                <BannerButton>Discover Now</BannerButton>
                <div>
                  <IconList>
                    {
                        data.socialSites.map((item, index) => (
                            <IconListItem key={index}>
                                <a href={item.url}>
                                    <FontAwesomeIcon icon={item.icon} color="black" size="1x" />
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
                </div>
              </div>
        </BannerWrapper>
    )
}