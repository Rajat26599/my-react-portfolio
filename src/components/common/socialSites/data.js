import { faFacebookF, faLinkedin, faGithub, faBehance } from "@fortawesome/free-brands-svg-icons"

export const data = {
    socialSites: [
        {
            platform: 'facebook',
            onHoverColor: '#316FF6',
            icon: faFacebookF,
            url: 'https://www.facebook.com/rajat.saxena.90410/'
        },
        // {
        //     platform: 'twitter',
        //     onHoverColor: '',
        //     icon: faTwitter,
        //     url: 'https://google.com'
        // },
        {
            platform: 'linkedin',
            onHoverColor: '#0077b5',
            icon: faLinkedin,
            url: 'https://www.linkedin.com/in/rajat-saxena-54509a15b/'
        },
        {
            platform: 'github',
            onHoverColor: 'black',
            icon: faGithub,
            url: 'https://github.com/Rajat26599/'
        },
        {
            platform: 'behance',
            onHoverColor: '#053eff',
            icon: faBehance,
            url: 'https://www.behance.net/rajatsaxena3'
        }
    ]
}