import infosysLogo from './img/infosysLogo.png';
import tcsLogo from './img/tcsLogo.png';
import codeLogo from './img/codeLogo.png';
import ksyLogo from './img/ksyLogo.png';
import cetpaLogo from './img/cetpaLogo.png';

export const data = {
    workExperiences: [
        {
          logo: {url: infosysLogo, width: 80},
          alt: "Infosys logo",
          profileName: "Associate Business Analyst (UI Developer)",
          companyName: "Infosys",
          duration: "Nov-2022 to Present",
          responsibilities: [
            "Creating UI screens using React.js, React-Native, Bootstrap, Styled Comp & Android Studio.",
            "Managing state using Redux and APIs using Axios.",
            "Version Control using git and bitbucket.",
            "Writing unit test cases using Jest and React Testing Library.",
            "Following Agile methodology and project management using Jira."
          ]
        },
        {
          logo: {url: tcsLogo, width: 100},
          alt: "TCS logo",
          profileName: "Assistant System Engineer",
          companyName: "TCS",
          duration: "Jul-2021 to Nov-2022",
          responsibilities: [
            "Web development using React & Javascript.",
            "Creating web UI pages using HTML, CSS, Bootstrap, JQuery, Adobe Photoshop.",
            "Creating APIs using Java/Spring Boot.",
            "Writing and updating SQL queries.",
            "Research and Analysis on Microservices."
          ]
        }
      ],
    
      otherExperiences: [
        {
          logo: {url: codeLogo, width: 60},
          alt: "CODE logo",
          profileName: "Founder",
          companyName: "CODE (Club Of DEvelopers)",
          duration: "Oct-2020 to Present",
          responsibilities: [
            "Define and communicate the company's vision and goals.",
            "Make key strategic decisions to drive the forum's success.",
            "Assemble and lead a talented team, fostering a positive and innovative work culture.",
            "Efficiently manage financial and human resources to meet objectives."
          ]
        },
        {
          logo: {url: ksyLogo, width: 100},
          alt: "KSY logo",
          profileName: "Web-Developer Intern",
          companyName: "Khushi Se Yoga, Navi Mumbai",
          duration: "Apr-2020 to Jun-2020",
          responsibilities: [
            "Actively contribute to coding and development tasks, working on both the front-end and back-end of web applications.",
            "Engage in continuous learning, staying updated with the latest web development technologies and frameworks to enhance skills.",
            "Work closely with experienced developers and cross-functional teams, participating in collaborative efforts to meet project goals."
          ]
        },
        {
          logo: {url: cetpaLogo, width: 100},
          alt: "CETPA logo",
          profileName: "Python Programmer Trainee",
          companyName: "Cetpa InfoTech Pvt Ltd, Lucknow",
          duration: "Apr-2019 to May-2019",
          responsibilities: [
            "Write and maintain efficient Python code for software applications, ensuring functionality and adherence to coding standards.",
            "Conduct unit testing and debugging to identify and resolve errors, ensuring the reliability of the software.",
            "Continuously enhance Python programming skills and stay updated on industry best practices and emerging technologies."
          ]
        }
      ]
}