import Logo from './../../assets/img/logo.png';
import { data } from './data';
import { upper } from '../../util/common/helperFunctions';
import { NameLogo, NavList, NavListItem, NavbarWrapper } from './styles';

export const Navbar = () => {
    return (
        <NavbarWrapper>
            <NameLogo src={Logo} alt="name logo"></NameLogo>
            <NavList>
                {
                    data.navItems.map((item, index) => (
                        <NavListItem key={index}>{upper(item.label)}</NavListItem>
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
        </NavbarWrapper>
    )
}