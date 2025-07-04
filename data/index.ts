export const navItems = [
    { name: "About", link: "#about" },
    { name: "Experience", link: "#experience" },
    { name: "Projects", link: "#projects" },
    { name: "Gallery", link: "#gallery" },
    { name: "Contact", link: "#contact" },
    { name: "↑", link: "" },
  ];
  
  export const gridItems = [
    {
      id: 1,
      title: "Prioritizing Extensive Preparation and Constant Communication",
      description: "I am best known ",
      className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
      imgClassName: "w-full h-full",
      titleClassName: "justify-end",
      img: "/b1.svg",
      spareImg: "",
    },
    {
      id: 2,
      title: "Open to Travel to My Next Destination",
      description: "For my future I am",
      className: "lg:col-span-2 md:col-span-3 md:row-span-2",
      imgClassName: "",
      titleClassName: "justify-start",
      img: "",
      spareImg: "",
    },
    {
      id: 3,
      title: "Includes Important and Modern Technologies",
      description: "My tech stack",
      className: "lg:col-span-2 md:col-span-3 md:row-span-2",
      imgClassName: "",
      titleClassName: "justify-center",
      img: "",
      spareImg: "",
    },
    {
      id: 4,
      title: "Tech Enthusiast with a Passion for Development.",
      description: "",
      className: "lg:col-span-2 md:col-span-3 md:row-span-1",
      imgClassName: "",
      titleClassName: "justify-start",
      img: "/grid.svg",
      spareImg: "/b4.svg",
    },
  
    {
      id: 5,
      title: "Building New Applications and Expanding My Repertoire",
      description: "I am consistently",
      className: "md:col-span-3 md:row-span-2",
      imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
      titleClassName: "justify-center md:justify-start lg:justify-center",
      img: "/b5.svg",
      spareImg: "/grid.svg",
    },
    {
      id: 6,
      title: "Please View My Resume Below",
      description: "",
      className: "lg:col-span-2 md:col-span-3 md:row-span-1",
      imgClassName: "",
      titleClassName: "justify-center md:max-w-full max-w-60 text-center",
      img: "",
      spareImg: "",
    },
  ];
  
  export const projects = [
    {
      id: 7,
      title: "Cocktail Animated",
      des: "A customizable landing page built with React, Tailwind, and GSAP animations featuring drinks and advertising an imaginary cocktail bar.",
      img: "/gallery/cocktail-ss.png",
      iconLists: ["/re.svg", "/tail.svg"],
      link: "https://otbeynat-cocktails-gsap.vercel.app/",
    },
    {
      id: 7,
      title: "Spotify LITE",
      des: "Spotify Lite is a full stack MERN application and lightweight version of the popular music streaming service using the latest web development features and Spotify's Web API.",
      img: "/gallery/spotify-lite.png",
      iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "mongodb.svg", "/c.svg"],
      link: "https://github.com/OtbeyNat/spotify-lite",
    },
    {
      id: 6,
      title: "Zentry Clone",
      des: "Zentry Clone is a React + Vite Single Page Application replicating some of the visually stunning features of the award winning website Zentry.com",
      img: "/gallery/zentry.png",
      iconLists: ["/re.svg", "/tail.svg"],
      link: "https://zentry-clone-theta.vercel.app/",
    },
    {
      id: 5,
      title: "Evently - Event Organization Platform",
      des: "A platform to explore, host, and join events featuring user authentication and payment systems using the latest tech stack.",
      img: "/gallery/evently-cover.png",
      iconLists: ["/re.svg", "next.svg", "/tail.svg", "/ts.svg", "mongodb.svg", "/c.svg", "/stripe.svg"],
      link: "https://event-platform-steel-nine.vercel.app/",
    },
    {
      id: 4,
      title: "Carepulse - Healthcare Appointment Platform",
      des: "A platform to for patients and healthcare workers to create, schedule, manage, and cancel appointments built in NextJS.",
      img: "/gallery/carepulse-landing.png",
      iconLists: ["/re.svg", "next.svg", "/tail.svg", "/ts.svg", "appwrite.svg", "sentry.svg"],
      link: "https://healthcare-platform-smoky.vercel.app/",
    },
    {
      id: 3,
      title: "Ryde",
      des: "A react native mobile app that simulates the process of requesting a ride on Uber. Incorporated NeonDB for postgres database, Stripe for payment processing, Clerk for user authentication with Google, and Zustand for state management",
      img: "/gallery/ryde-cover.jpg",
      iconLists: ["/re.svg", "expo.svg", "neon.svg", "c.svg", "stripe.svg"],
      link: "https://github.com/OtbeyNat/uber_clone",
    },
    {
      id: 2,
      title: "Expense Tracker",
      des: "A simple full-stack expense tracker application with modern technologies such as React for front-end,Express and Apollo for back-end, Passport for user authentication, MongoDB for database, and GraphQL for queries and mutations",
      img: "/gallery/expense.png",
      iconLists: ["/re.svg", "mongodb.svg", "graphql.svg","express-js.svg", "apollo.svg"],
      link: "https://github.com/OtbeyNat/graphql_expense_mern",
    },
    {
      id: 1,
      title: "Python Games Library",
      des: "Created modified versions of classic two-dimensional games such as snake, flappybird, street fighter and other platformers with Python library Pygame",
      img: "/gallery/fight_screenshot.png",
      iconLists: ["python.svg", "pygame.svg"],
      link: "https://github.com/OtbeyNat/pythonapps",
    },
  ];
  
  export const gallery = [
    {
      title: "Invite RSVP - Master List",
      img: "/gallery/cst-admin.png",
    },    
    {
      title: "Invite RSVP - Event Information",
      img: "/gallery/cst-event-details.png",
    },    
    {
      title: "Invite RSVP - Create Event",
      img: "/gallery/cst-create-event.png",
    },    
    {
      title: "Invite RSVP - Profile",
      img: "/gallery/cst-profile.png",
    },    
    {
      title: "Cocktail - Menu + Video Background",
      img: "/gallery/cocktail-ss.png",
    },    
    {
      title: "Cocktail - Image Mask",
      img: "/gallery/cocktail-image-mask.png",
    },    
    {
      title: "Cocktail - Gallery",
      img: "/gallery/cocktail-gallery.png",
    },  
    {
      title: "Zentry Clone - Landing",
      img: "/gallery/zentry.png",
    },    
    {
      title: "Zentry - Video Playback",
      img: "/gallery/zentry-video.png",
    },    
    {
      title: "Evently - Home Page",
      img: "/gallery/evently-cover.png",
    },
    {
      title: "Evently - View Tickets",
      img: "/gallery/evently-1.png",
    },
    {
      title: "Evently - Event Details",
      img: "/gallery/evently-4.png",
    },
    {
      title: "2D Fighter - Action Screenshot",
      img: "/gallery/fight_screenshot.png",
    },
    {
      title: "Flappybird - Start",
      img: "/gallery/flappy_screenshot_2.png",
    },
    {
      title: "Flappybird - Game Over",
      img: "/gallery/flappy_screenshot_1.png",
    },
    {
      title: "Platform Shooter - Action Screenshot",
      img: "/gallery/shooter_screenshot.png",
    },    
    {
      title: "J&J - Whatfix Data Visualization Screenshot",
      img: "/gallery/whatfix.png",
    },       
    {
      title: "CarePulse - Patient Registration Form",
      img: "/gallery/carepulse-register.png",
    },    
    {
      title: "CarePulse - Create Appointment Form",
      img: "/gallery/carepulse-appointment.png",
    },       
    {
      title: "CarePulse - OTP Admin Verification",
      img: "/gallery/carepulse-otp.png",
    },    
    {
      title: "CarePulse - Admin Appointment Dashboard",
      img: "/gallery/carepulse-admin.png",
    },    
    {
      title: "Ryde - Onboarding",
      img: "/gallery/ryde-1.jpg",
    },    
    {
      title: "Ryde - Sign In",
      img: "/gallery/ryde-2.jpg",
    },    
    {
      title: "Ryde - Home",
      img: "/gallery/ryde-3.jpg",
    },    
    {
      title: "Ryde - Choose Driver",
      img: "/gallery/ryde-4.jpg",
    },    
    {
      title: "Ryde - Details Confirmation",
      img: "/gallery/ryde-5.jpg",
    },    
    {
      title: "Ryde - Rides History",
      img: "/gallery/ryde-6.jpg",
    },      
  ];
    
  export const workExperience = [
    {
      id: 1,
      title: "Whatfix Data Analytics Team Lead - Johnson & Johnson",
      desc: "Oversaw a team of RPI graduate students and enhanced the value of J&J's adoption of Whatfix by developing a React application and over 20 data visualizations in Jupyter Notebook.",
      className: "md:col-span-2",
      thumbnail: "/exp2.svg",
    },
    {
      id: 2,
      title: "Freelance Web Applcation Developer - Agoro",
      desc: "Developed a discussion forum to facilitate communication between 100+ students and their professors, creating training data for their artificial intelligent teaching assistant using React and Go",
      className: "md:col-span-2",
      thumbnail: "/exp1.svg",
    },
    {
      id: 3,
      title: "Software Developer Intern - MoleQ, Inc.",
      desc: "Implemented an interactive, customizable user interface used to display over 100 associated products and functions on Point-of-Sale (POS) Android software.",
      className: "md:col-span-2",
      thumbnail: "/exp4.svg",
    },
    {
      id: 4,
      title: "Computer Science Mentor - Rensselaer Polytechnic Institute",
      desc: "Supported RPI students in their learning of Introduction to Computer Science and Data Structures by analyzing code and teaching fundamental programming concepts",
      className: "md:col-span-2",
      thumbnail: "/exp3.svg",
    },
  ];
  
  export const socialMedia = [
    {
      id: 1,
      img: "/git.svg",
      link: "https://github.com/OtbeyNat?tab=repositories"
    },
    {
      id: 3,
      img: "/link.svg",
      link: "https://www.linkedin.com/in/tobey-tan3",
    },
  ];

  export const companies = [
    {
      id: 1,
      name: "cloudinary",
      img: "/cloud.svg",
      nameImg: "/cloudName.svg",
    },
    {
      id: 2,
      name: "appwrite",
      img: "/app.svg",
      nameImg: "/appName.svg",
    },
    {
      id: 3,
      name: "HOSTINGER",
      img: "/host.svg",
      nameImg: "/hostName.svg",
    },
    {
      id: 4,
      name: "stream",
      img: "/s.svg",
      nameImg: "/streamName.svg",
    },
    {
      id: 5,
      name: "docker.",
      img: "/dock.svg",
      nameImg: "/dockerName.svg",
    },
  ];