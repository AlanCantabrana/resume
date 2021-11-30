import {
    FaEnvelope,
    FaFacebook,
    FaGithub,
    FaLinkedin,
    FaMapMarkerAlt,
    FaMobileAlt,
} from 'react-icons/fa'

const data = {
    /**
     * Full name
     */

    /**
     * Summary - short "about me" paragraph
     */
    summary: {
        fullname: 'Alan Cantabrana Mondragón',
        text: `Software engineer with experience in frontend development focused on web applications. During my career, I have been able to create and maintain complex web applications.  I am proficient with various JavaScript libraries and always looking to learn cutting-edge technologies. I learn and master quickly new technologies. Able to work in both team and self-directing settings.
        `,
    },

    /**
     * Contact details
     */
    contact: {
        title: 'Contact',
        list: [
            {
                field: 'Email',
                text: 'alancantabrana@gmail.com',
                icon: <FaEnvelope size={20} />,
            },
            {
                field: 'Mobile',
                text: '(+52) 3335 705678',
                icon: <FaMobileAlt size={20} />,
            },
            {
                field: 'Location',
                text: 'Guadalajara, Mexico',
                icon: <FaMapMarkerAlt size={20} />,
            },
        ],
        contactInfo: [
            {
                field: 'Github',
                url: 'https://github.com/AlanCantabrana',
                icon: <FaGithub size={20} />,
                text: 'Github',
            },
            {
                field: 'LinkedIn',
                url: 'https://www.linkedin.com/in/alan-cantabrana-mondragon-450a2392/',
                icon: <FaLinkedin size={20} />,
                text: 'LinkedIn',
            },
            {
                field: 'facebook',
                url: 'https://www.facebook.com/alan.cantabrana',
                icon: <FaFacebook size={20} />,
                text: 'LinkedIn',
            },
        ],
    },

    /**
     * Key skills
     */
    keySkills: {
        title: 'Skills',
        language: {
            text: 'Language',
            list: ['JavaScript (ES6)', 'TypeScript', 'HTML', 'CSS'],
        },
        libraries: {
            text: 'Libraries/API',
            list: [
                'React',
                'React-Redux',
                'Redux-Saga',
                'Preact',
                'Next.js',
                'Apollo Client',
                'Node.js',
                'Express.js',
                'Jest',
                'React Testing Library',
                'Mapbox GL',
                'Leaflet.js',
                'Node-postgres',
            ],
        },
        tools: {
            text: 'Tools',
            list: [
                'Moongose',
                'Git, Bitbucket',
                'Jira',
                'Ant Design, Materialize, Bootstrap',
                'Styled-Componets',
            ],
        },
    },

    /**
     * Work experience
     *
     * Acceptable date format: `YYYY-MM`
     */
    workExperience: {
        title: 'Work Experience',
        list: [
            {
                jobTitle: 'Front-End Developer',
                company: 'Rappi',
                date: {
                    start: 'July 2021',
                    end: 'Present',
                },
                url: 'https://www.rappi.com',
                description: [
                    `Building new features and maintaining existing ones under web components/microfrontends concepts using React, Preact, Next.js.
                `,
                    `Working closely with product team members to build the best possible solution for new features and existing ones.
                `,
                    `Helping to improve the team’s performance.
                `,
                    `Identifying, tracking and resolving of issues.
                `,
                    `Developing unit tests for new features and existing ones. 
                `,
                ],
            },
            {
                jobTitle: 'Front-End Developer',
                company: 'Sissa Monitoring Integral',
                date: {
                    start: 'Mar. 2020',
                    end: 'July 2021',
                },
                url: 'https://www.sissamx.com.mx/',
                description: [
                    `Developing 'client-side' web applications, translating the company and customer needs into functional and appealing interactive applications using React, React-Redux, Redux-Saga and Antd.
                `,
                    `Working closely with all parties to manage the development of activities and ensure the project is moving as per the defined schedule.
                `,
                    `Maintaining and improving existing client websites.
                `,
                    `Collaborating with back-end developers to enhance usability. 
                `,
                    `Getting feedback from, and building solutions for, users and customers.
                `,
                    `Contributing to internal training to achieve common goals. 
                `,
                ],
            },
            {
                jobTitle: 'GIS Analyst',
                company: 'Implemental Systems Panamericana',
                date: {
                    start: 'June 2016',
                    end: 'June 2019',
                },
                url: 'https://www.implementalsystems.com/',
                description: [
                    `Performing Spatial Analysis with different spatial databases using GE technology (Smallworld Geospatial Analysis).
                `,
                    `Installing and setting up Smallworld software on different clients (GSA Professional/GSA Server).
                `,
                    `Training end users on Smallworld products.
                `,
                    `Technical support on Smallworld products.
                `,
                    `Preparation of test reports.
                `,
                ],
            },
            // {
            //     jobTitle: 'Research Assistant ',
            //     company:
            //         'Instituto Tecnológico y de Estudios Superiores de Occidente (ITESO) ',
            //     date: {
            //         start: 'Jan 2014',
            //         end: 'June 2014',
            //     },
            //     url: 'https://www.iteso.mx/',
            //     description: [
            //         `Developing a GIS-oriented software application to carry out an exploration and point patterns analysis (Python).

            //     `,
            //     ],
            // },
        ],
    },

    /**
     * Education, school, etc
     */
    education: {
        title: 'Education',
        list: [
            {
                institution: 'Wizeline Academy',
                title: 'React Bootcamp',
                description: `Designing, developing, and testing React applications (Jest-React Testing Library).`,
                date: {
                    start: 'Mar. 2021',
                    end: 'May 2021',
                },
                url: 'https://academy.wizeline.com/',
            },
            {
                institution: 'Centraal Academy',
                title: 'Bootcamp FullStack JavaScript',
                description: `Developing applications under MERN stack technologies (MongoDB, Express, React, Node).`,
                date: {
                    start: 'Sept. 2019',
                    end: 'Dec. 2019',
                },
                url: 'https://www.instagram.com/centraalacademy/',
            },
            {
                institution:
                    'Instituto Tecnológico y de Estudios Superiores de Occidente (ITESO)',
                title: 'Bachelor of Science in Environmental Engineering ',
                description: `Environmental Impact Assessment, Environmental Risk Assessment, Water Quality Modeling, Spatial Analysis (GIS) and Research Methods.`,
                date: {
                    start: 'Aug. 2009',
                    end: 'May 2014',
                },
                url: 'https://www.iteso.mx/',
            },
        ],
    },

    /**
     * Certificates and courses
     */
    certificates: {
        title: 'Certifications',
        list: [
            {
                name: `Fullstack JavaScript (2019)`,
                provider: 'Centraal Academy',
            },
            {
                name: 'Smart Cities',
                provider: ' The Open University (2019)',
            },
            {
                name: 'Responsive Cities',
                provider: 'ETH Zurich (2019)',
            },
            {
                name: 'English IELTS (Speaking: C1, Reading: C1, Writing: B2, Listening: B2, 2018 )',
                provider: 'British Coucil',
            },
        ],
    },

    /**
     * Certificates and courses
     */

    personalSkills: {
        title: 'Personal Skills',
        list: [
            'Leadership',
            'Working well under pressure',
            'Flexibility',
            'Teamwork',
            'Ability to self-learn',
        ],
    },
}

export default data
