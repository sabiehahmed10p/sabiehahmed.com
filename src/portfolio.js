// Website related settings
const settings = {
  isSplash: false, // Change this to true if you want to use the splash screen.
  useCustomCursor: false, // Change this to false if you want the good'ol cursor
  googleTrackingID: "G-KPMQKQPCJG",
};

//Home Page
const greeting = {
  title: "Hello.",
  title2: "Sabieh",
  logo_name: "sabieh.ahmed()",
  nickname: "sabieh / ahmed",
  full_name: "Sabieh Ahmed",
  subTitle: "Lead Software Engineer @ 10Pearls",
  resumeLink:
    "https://docs.google.com/document/d/e/2PACX-1vT4zIRtwotXouz-G3OffIPMekrYR3uA1WejuqdaoDTERT8GHJ_CW0fdjVKV33McSDXbukVx437xGdEe/pub",
  mail: "mailto:sabieh.ahmed@gmail.com",
};

const socialMediaLinks = {
  /* Your Social Media Link */
  github: "https://github.com/sabiehahmed10p",
  linkedin: "https://www.linkedin.com/in/sabiehahmed/",
  gmail: "sabieh.ahmed@gmail.com",
  gitlab: " ",
  facebook: " ",
  twitter: "https://twitter.com/sabiehahmed",
  instagram: "https://www.instagram.com/sabiehahmed/",
};

const skills = {
  data: [
    {
      title: "Full Stack Development",
      fileName: "FullStackImg",
      skills: [
        "⚡ Building webapps fronted using ReactJS and NextJs framework.",
        "⚡ Backend development using NodeJS, NestJs, Laravel",
      ],
      softwareSkills: [
        {
          skillName: "JavaScript",
          fontAwesomeClassname: "simple-icons:javascript",
          style: {
            backgroundColor: "#FFFFFF",
            color: "#F7DF1E",
          },
        },
        {
          skillName: "PHP",
          fontAwesomeClassname: "simple-icons:php",
          style: {
            color: "#7377AD",
          },
        },
        {
          skillName: "NestJs",
          fontAwesomeClassname: "simple-icons:nestjs",
          style: {
            color: "#E94E32",
          },
        },
        {
          skillName: "ReactJS",
          fontAwesomeClassname: "simple-icons:react",
          style: {
            color: "#61DAFB",
          },
        },
        {
          skillName: "NextJS",
          fontAwesomeClassname: "simple-icons:nextdotjs",
          style: {
            color: "#FFFFFF",
            backgroundColor: "#1D1D1D",
            borderRadius: "50%",
          },
        },
        {
          skillName: "NodeJS",
          fontAwesomeClassname: "simple-icons:nodedotjs",
          style: {
            color: "#339933",
          },
        },
        {
          skillName: "MongoDB",
          fontAwesomeClassname: "simple-icons:mongodb",
          style: {
            color: "#439743",
          },
        },
        {
          skillName: "GraphQL",
          fontAwesomeClassname: "simple-icons:graphql",
          style: {
            color: "#DE33A6",
          },
        },
        {
          skillName: "Android App Development",
          fontAwesomeClassname: "simple-icons:android",
          style: {
            color: "#3DDC84",
          },
        },
        {
          skillName: "Laravel",
          fontAwesomeClassname: "simple-icons:laravel",
          style: {
            color: "#d21616",
          },
        },
        {
          skillName: "MySQL",
          fontAwesomeClassname: "simple-icons:mysql",
          style: {
            color: "#4479A1",
          },
        },
        {
          skillName: "Git",
          fontAwesomeClassname: "simple-icons:git",
          style: {
            color: "#E94E32",
          },
        },
      ],
    },

    {
      title: "Cloud Infra-Architecture",
      fileName: "CloudInfraImg",
      skills: [
        "⚡ Experience working on multiple cloud platforms",
        "⚡ Experience hosting and managing web apps on Azure and AWS",
      ],
      softwareSkills: [
        {
          skillName: "GCP",
          fontAwesomeClassname: "simple-icons:googlecloud",
          style: {
            color: "#4285F4",
          },
        },
        {
          skillName: "AWS",
          fontAwesomeClassname: "simple-icons:amazonaws",
          style: {
            color: "#FF9900",
          },
        },
        {
          skillName: "Netlify",
          fontAwesomeClassname: "simple-icons:netlify",
          style: {
            color: "#38AFBB",
          },
        },
        {
          skillName: "Heroku",
          fontAwesomeClassname: "simple-icons:heroku",
          style: {
            color: "#6863A6",
          },
        },
        {
          skillName: "Firebase",
          fontAwesomeClassname: "simple-icons:firebase",
          style: {
            color: "#FFCA28",
          },
        },
        {
          skillName: "Azure",
          fontAwesomeClassname: "simple-icons:microsoftazure",
          style: {
            color: "#4788A2FF",
          },
        },
        {
          skillName: "Docker",
          fontAwesomeClassname: "simple-icons:docker",
          style: {
            color: "#1488C6",
          },
        },
      ],
    },
  ],
};

const degrees = {
  degrees: [
    {
      title: "Virtual University",
      subtitle: "Bachelors In Computer Science",
      logo_path: "sal.png",
      alt_name: "VU",
      duration: "2017 - 2021",
      descriptions: [
        "⚡ I have studied core subjects like Web Engineer, AI/ML, Computer Vision.",
        "⚡ I have also completed various online courses for ML/DL, Web Development, Mobile App Development, etc.",
        "⚡ I have implemented several projects based on what I've learnt under my Computer Engineering course. ",
      ],
      website_link: "https://www.vu.edu.pk/",
    },
  ],
};

const certifications = {
  certifications: [],
};

// Experience Page
const experience = {
  title: "Experience",
  subtitle: "",
  description:
    "I'm an experienced Professional with over 8+ Years of experience designing, implementing and architecting Robust and scalable solutions serving millions of users.",
  header_image_path: "experience.svg",
  sections: [
    {
      title: "Work",
      experiences: [
        {
          title: "Principal Software Engineer",
          company: "10Pearls LLC",
          company_url: "https://10pearls.com",
          logo_path:
            "https://10pearls.com/wp-content/uploads/2020/06/10P-Logo.svg",
          duration: "January 2022 - Ongoing",
          location: "Karachi, Pakistan",
          description:
            "- Worked on scalable architecture and design as well as worked on system optimizations to enhance the performance.\n" +
            "- Implemented best code practices \n" +
            "- Became code-owner of several client project repositories.\n" +
            "- Initiated Pair code reviews in teams.\n" +
            "- Conducted multiple code reviews to ensure the good code quality.\n" +
            "- Implemented DDD Design pattern in php applications.\n" +
            "- Added automated build pipelines using jenkins.\n" +
            "- Added end to end integrations tests and unit tests in different projects.\n" +
            "- Implemented proper branching strategy for better quality and deliverables.\n" +
            "- Followed Agile practices and used Jira for sprints.\n" +
            "- Managed servers and monitoring all services by using different tools.\n" +
            "- Worked on an enterprise software for one of the most popular ride hailing services (under NDA) serving \n" +
            "millions of users at a time.\n" +
            "- Worked on renowned US based School career counseling application based on symfony, zend and micro apps.\n" +
            "- Worked on setting up antivirus service for career counseling application for their file uploads.",
          color: "#2962FF",
        },
        {
          title: "Lead Software Engineer",
          company: "10Pearls LLC",
          company_url: "https://10pearls.com",
          logo_path:
            "https://10pearls.com/wp-content/uploads/2020/06/10P-Logo.svg",
          duration: "January 2020 - January 2022",
          location: "Karachi, Pakistan",
          description: "",
          color: "#f10000",
        },
        {
          title: "Senior Software Engineer",
          company: "10Pearls LLC",
          company_url: "https://10pearls.com",
          logo_path:
            "https://10pearls.com/wp-content/uploads/2020/06/10P-Logo.svg",
          duration: "February 2018 - January 2020",
          location: "Karachi, Pakistan",
          description: "",
          color: "#f10000",
        },
        {
          title: "Software Engineer",
          company: "10Pearls LLC",
          company_url: "https://10pearls.com",
          logo_path:
            "https://10pearls.com/wp-content/uploads/2020/06/10P-Logo.svg",
          duration: "March 2017 - February 2018",
          location: "Karachi, Pakistan",
          description: "",
          color: "#f10000",
        },
        {
          title: "Full Stack Developer",
          company: "Invision Custom Solutions Inc.",
          company_url: "https://www.invisionsolutions.ca/",
          logo_path:
            "https://invisionsolutions.ca/wp-content/uploads/2023/02/inv-logo.png",
          duration: "March 2016 - March 2017",
          location: "Karachi, Pakistan",
          description:
            "Specialize in building customized enterprise-grade solutions that align with your business objectives, integrate seamlessly with your existing systems, and provide robust security, scalability and flexibility for your business’s long-term success",
          color: "#f10000",
        },
      ],
    },
  ],
};

// Projects Page
const projectsHeader = {
  title: "Projects",
  description:
    "My projects makes use of vast variety of latest technology tools. My best experience is frontend heavy using ReactJs/NextJs. Below are some of my projects. Note that not all of the mentioned projects are on GitHub yet due to NDA Signed between companies I've worked with.",
  avatar_image_path: "projects_image.svg",
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "sabieh.jpg",
    description:
      "You can contact me at the places mentioned below. I will try to get back to you as fast as I can. ",
  },
  blogSection: {
    title: "Blogs",
    subtitle:
      "I don't blog frequently but when I do something awesome, I do try my best to write a blog about it.",
    link: "https://medium.com/@sabieh.ahmed",
    avatar_image_path: "blogs_image.svg",
  },
};

const projects = {
  data: [
    {
      name: "Billing and Forecast Planning Application",
      url: "https://github.com/sabiehahmed10p",
      description:
        "Unified platform for managing finances and forecasting of budget, bill payments and accounting integrations",
      languages: [
        {
          name: "React.js",
          iconifyClass: "logos-react",
        },
        {
          name: "Cypress",
          iconifyClass: "devicon-cypressio-wordmark",
        },
        {
          name: "TypeScript",
          iconifyClass: "devicon-typescript",
        },
        {
          name: "AWS",
          iconifyClass: "devicon-amazonwebservices-wordmark",
        },
        {
          name: "Graphql",
          iconifyClass: "devicon-pulsar",
        },
        {
          name: "Spring Boot",
          iconifyClass: "devicon-spring-wordmark",
        },
      ],
    },
    {
      name: "Career Planning and Student Success Platform",
      url: "https://github.com/sabiehahmed10p",
      description:
        "The Idea behind the Application was to help ensure that all paths students take after high school lead to fulfilling and meaningful careers.",
      languages: [
        {
          name: "TypeScript",
          iconifyClass: "devicon-typescript",
        },
        {
          name: "AWS",
          iconifyClass: "devicon-amazonwebservices-wordmark",
        },
        {
          name: "NodeJs",
          iconifyClass: "devicon-nodejs-wordmark",
        },
        {
          name: "DynamoDB",
          iconifyClass: "devicon-dynamodb",
        },
        {
          name: "React.js",
          iconifyClass: "logos-react",
        },
      ],
    },
    {
      name: "Careem’s Captain Onboarding System",
      url: "https://drive.careem.com",
      description:
        "Learn all about the driver requirements to drive with Careem. Earn money and be your own boss. Sign up and become a Captain today!",
      languages: [
        {
          name: "Laravel",
          iconifyClass: "logos-laravel",
        },
        {
          name: "JavaScript",
          iconifyClass: "logos-javascript",
        },
        {
          name: "AWS",
          iconifyClass: "devicon-amazonwebservices-wordmark",
        },
        {
          name: "AngularJs",
          iconifyClass: "devicon-angular",
        },
      ],
    },
    {
      name: "Car Retail Pricing Management System ",
      url: "https://github.com/sabiehahmed10p",
      description:
        "Helps you accurately price an insurance policy, safely issue a loan,  fairly set import duties and confidently buy and sell cars.",
      languages: [
        {
          name: "Laravel",
          iconifyClass: "logos-laravel",
        },
        {
          name: "AWS",
          iconifyClass: "devicon-amazonwebservices-wordmark",
        },
      ],
    },
    {
      name: "Leaveon",
      url: "https://github.com/sabiehahmed10p",
      description:
        "A Social Media Application that captures the latest trends.\n" +
        "With an innovation in addition to gamifications, My contribution was mainly on Backend and Infrastructure.",
      languages: [
        {
          name: "Laravel",
          iconifyClass: "logos-laravel",
        },
        {
          name: "AWS",
          iconifyClass: "devicon-amazonwebservices-wordmark",
        },
      ],
    },
    {
      name: "Sports Social",
      url: "https://github.com/sabiehahmed10p",
      description:
        "A social media application dedicated to Sports, with gamifications, I contributed in Development of Backend",
      languages: [
        {
          name: "Laravel",
          iconifyClass: "logos-laravel",
        },
        {
          name: "AWS",
          iconifyClass: "devicon-amazonwebservices-wordmark",
        },
      ],
    },
    {
      name: "Hotworks",
      url: "https://github.com/sabiehahmed10p",
      description:
        "A complete hotel management solution mobile app, I contributed on Backend and Infrastructure",
      languages: [
        {
          name: "Laravel",
          iconifyClass: "logos-laravel",
        },
        {
          name: "AWS",
          iconifyClass: "devicon-amazonwebservices-wordmark",
        },
      ],
    },
    {
      name: "SimpleMed",
      url: "https://github.com/sabiehahmed10p",
      description:
        "A Medical Prescription tracking application. I contributed in both frontend and Backend",
      languages: [
        {
          name: "Laravel",
          iconifyClass: "logos-laravel",
        },
        {
          name: "AWS",
          iconifyClass: "devicon-amazonwebservices-wordmark",
        },
        {
          name: "JavaScript",
          iconifyClass: "logos-javascript",
        },
      ],
    },
  ],
};

export {
  settings,
  greeting,
  socialMediaLinks,
  skills,
  degrees,
  certifications,
  experience,
  projectsHeader,
  contactPageData,
  projects,
};
