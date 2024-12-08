import ReactLogo from './img/react.svg'
import AngularLogo from './img/angular.svg'
import VueLogo from './img/vue.svg'
import JavaLogo from './img/java.svg'
import SpringLogo from './img/spring.svg'
import PythonLogo from './img/python.svg'
import DjangoLogo from './img/django.svg'
import HtmlLogo from './img/html.svg'
import CssLogo from './img/css.svg'
import PhotoshopLogo from './img/photoshop.svg'
import IllustratorLogo from './img/illustrator.svg'

import HackerRankLogo from './img/HackerRankLogo.png'
import Leetcode from './img/leetcode.jpg'
import Github from './img/githubCat.jpg'

export const data = {
    stats: [
        {
            iconClass: 'lnr lnr-star',
            number: 5,
            text: 'Stars on Hackerrank',
            url: 'https://www.hackerrank.com/profile/saxena1975sanje1',
            img: HackerRankLogo
        },
        {
            iconClass: 'lnr lnr-code',
            number: 450,
            additional: '+',
            text: 'Problems Solved on LeetCode',
            url: 'https://leetcode.com/u/SilverCyber/',
            img: Leetcode
        },
        {
            iconClass: 'lnr lnr-book',
            number: 30,
            additional: '+',
            text: 'Projects',
            url: 'https://github.com/Rajat26599/',
            img: Github
        },
        {
            iconClass: 'lnr lnr-license',
            number: 20,
            additional: '+',
            text: 'Cirtifications'
        }
    ],
    skills: [
        {
            techName: [
                {
                    name: 'React',
                    icon: ReactLogo,
                },
                {
                    name: 'Angular',
                    icon: AngularLogo,
                },
                {
                    name: 'Vue',
                    icon: VueLogo,
                }
            ],
            width: 90
        },
        {
            techName: [
                {
                    name: 'Java',
                    icon: JavaLogo,                
                },
                {
                    name: 'Spring boot',
                    icon: SpringLogo,                
                }
            ],
            width: 80
        },
        {
            techName: [
                {
                    name: 'Python',
                    icon: PythonLogo,                
                },
                {
                    name: 'Django',
                    icon: DjangoLogo,                
                }
            ],
            width: 70
        },
        {
            techName: [
                {
                    name: 'HTML',
                    icon: HtmlLogo,
                },
                {
                    name: 'CSS',
                    icon: CssLogo,
                }
            ],
            width: 85
        },
        {
            techName: [
                {
                    name: 'Adobe Photoshop',
                    icon: PhotoshopLogo,
                },
                {
                    name: 'Illustrator',
                    icon: IllustratorLogo,
                }
            ],
            width: 95
        },
    ]
}