import Logo from './../../assets/img/logo.png';
import { data } from './data';
import { upper } from '../../util/common/helperFunctions';
import { Breadcrums, BreadcrumsWrapper, NameLogo, NavList, NavListItem, NavbarWrapper } from './styles';
import { globalStylingSpecs } from '../../util/global/stylingSpecs';
import { useEffect, useState } from 'react';

export const Navbar = () => {

    const [ screenWidth, setScreenWidth ] = useState(window.innerWidth)

    useEffect(() => {
        setScreenWidth(window.innerWidth)
    }, [window.innerWidth])

    return (
        <NavbarWrapper id='navbar'>
            <NameLogo src={Logo} alt="name logo"></NameLogo>
            {
                screenWidth < parseInt(globalStylingSpecs.device.small) ? 
                    <BreadcrumsWrapper>
                        {
                            [...Array(3)].map((item, index) => (
                                <Breadcrums key={index}></Breadcrums>
                            ))
                        }
                    </BreadcrumsWrapper>
                    :
                    <NavList>
                        {
                            data.navItems.map((item, index) => (
                                <NavListItem key={index}>
                                    <a href={item.link}>{upper(item.label)}</a>
                                </NavListItem>
                                // <li className='nav-list-item' key={index}>{upper(item.label)}</li>
                            ))
                        }
                        {/* <li className="nav-item active"><a className="nav-link" href="index.html">Home</a></li>
                        <li className="nav-item"><a className="nav-link" href="#experience_area">Experience</a></li>
                        <li className="nav-item"><a className="nav-link" href="#welcome_area">About</a></li>
                        <li className="nav-item"><a className="nav-link" href="#project_area">Projects</a></li>
                        <li className="nav-item"><a className="nav-link" href="https://silvercyberblog.pythonanywhere.com">Blog</a></li>
                        <li className="nav-item"><a className="nav-link" href="#contact_area">Contact</a></li> */}
                    </NavList>
            }
        </NavbarWrapper>
    )
}