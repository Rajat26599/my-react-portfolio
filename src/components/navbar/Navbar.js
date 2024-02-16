import Logo from './../../assets/img/logo.png';
import { data } from './data';
import { upper } from '../../util/common/helperFunctions';
import { Breadcrums, BreadcrumsWrapper, MainNavbar, NameLogo, NavExpansion, NavList, NavListItem, NavbarWrapper } from './styles';
import { globalStylingSpecs } from '../../util/global/stylingSpecs';
import { useWindowSize } from '../../util/hooks/useWindowSize';
import { useState, useEffect } from 'react';
import { Button } from '../common/Button/Button';

export const Navbar = () => {

    const screenWidth = useWindowSize()
    const [ showCross, setShowCross ] = useState(false);

    useEffect(() => {}, [screenWidth])

    const handleBreadcrums = () => { 
        setShowCross(!showCross)
    }

    const getNavItems = () => {
        return (
            <>
                {                
                    data.navItems.map((item, index) => (
                        <NavListItem 
                            key={index} 
                            expanded={showCross} 
                            onClick={() => {
                                if(screenWidth <= parseInt(globalStylingSpecs.device.medium)) handleBreadcrums()
                            }}
                            >
                            <a href={item.link}>{upper(item.label)}</a>
                        </NavListItem>
                    ))
                }
                <a href='https://drive.google.com/file/d/19pesyNXeKUGFgzLjNcOHtbU5uxtPNung/view?usp=sharing' target='_blank' rel="noreferrer"><Button>Get Resume</Button></a>
            </>
        )
    }

    return (
        <NavbarWrapper id='navbar'>
            <MainNavbar>
                <NameLogo src={Logo} alt="name logo"></NameLogo>
                {
                    screenWidth <= parseInt(globalStylingSpecs.device.medium) ? 
                        <BreadcrumsWrapper onClick={() => handleBreadcrums()}>
                            {
                                [...Array(3)].map((item, index) => (
                                    <Breadcrums showCross={showCross} key={index}></Breadcrums>
                                ))
                            }
                        </BreadcrumsWrapper>
                        :
                        <NavList>
                            {
                                getNavItems()
                            }
                            {/* <li className="nav-item active"><a className="nav-link" href="index.html">Home</a></li>
                            <li className="nav-item"><a className="nav-link" href="#experience_area">Experience</a></li>
                            <li className="nav-item"><a className="nav-link" href="#welcome_area">About</a></li>
                            <li className="nav-item"><a className="nav-link" href="#project_area">Projects</a></li>
                            <li className="nav-item"><a className="nav-link" href="https://silvercyberblog.pythonanywhere.com">Blog</a></li>
                            <li className="nav-item"><a className="nav-link" href="#contact_area">Contact</a></li> */}
                        </NavList>
                }
            </MainNavbar>

        
            <NavExpansion visible={showCross}>
                {
                    getNavItems()
                }
            </NavExpansion>
  
        </NavbarWrapper>
    )
}