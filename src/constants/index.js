import {
  mobile,
  backend,
  creator,
  web,
  casion,
  javascript,
  powerbi,
  python,
  hadoop,
  sionna,
  cco,
  reactjs,
  gcp,
  tailwind,
  lexia,
  nodejs,
  mongodb,
  influx,
  figma,
  tensorflow,
  auav,
  pgn,
  bmw,
  bangkit,
  carrent,
  pollpal,
  cigritous,
  c,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "skills",
    title: "Skills",
  },
  {
    id: "projects",
    title: "Projects",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Machine Learning Scientist",
    icon: web,
    description: "With expertise in predictive analytics, I use TensorFlow and PyTorch to design models for optimization and signal localization tasks.",
  },
  {
    title: "IoT Engineer",
    icon: mobile,
    description: "I build IoT-enabled smart automation systems,  by integrating sensors and microcontrollers with cloud services for real-time monitoring and control.",
  },
  {
    title: "Data Analyst",
    icon: backend,
    description: "With hands-on experience in network event analysis, I utilize PowerBI and NVIDIA Sionna to deliver impactful insights for wireless network monitoring.",
  },
  {
    title: "Web Design and Developer",
    icon: creator,
    description: "I craft websites that are both user-friendly and performance-optimized with React, Node.js, Next.js and modern web frameworks.",
  }
];

const technologies = [
  {
    name: "Python",
    icon: python,
    rating: 5
  },
  {
    name: "TensorFlow",
    icon: tensorflow,
    rating: 4
  },
  {
    name: "JavaScript",
    icon: javascript,
    rating: 5
  },
  {
    name: "PowerBI",
    icon: powerbi,
    rating: 3
  },
  {
    name: "React",
    icon: reactjs,
    rating: 5
  },
  {
    name: "Google Cloud Platform",
    icon: gcp,
    rating: 4
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
    rating: 4
  },
  {
    name: "Node.js",
    icon: nodejs,
    rating: 5
  },
  {
    name: "MongoDB",
    icon: mongodb,
    rating: 5
  },
  {
    name: "C Programming",
    icon: c,
    rating: 5
  },
  {
    name: "InfluxDB",
    icon: influx,
    rating: 5
  },
  {
    name: "Figma",
    icon: figma,
    rating: 5
  },
  {
    name: "Hadoop",
    icon: hadoop,
    rating: 3
  }
];

const experiences = [
  {
    title: "ICT Infrasctructure Intern",
    company_name: "PT Perusahaan Gas Negara, Jakarta",
    icon: pgn,
    iconBg: "#E6DEDD",
    date: "September 2024 – December 2024",
    points: [
      "Implemented user indoor positioning technology and generated user frequency-based heatmaps within the Wi-Fi network.",
      "Demonstrated mobile indoor wayfinding use cases using directional vBLE arrays and unsupervised machine learning.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Utilized Power BI to create visualizations on service ticketing datasets to identify and resolve 500+ moderate and 12 critical issues and track the impact on mobile application users.",
    ],
  },
  {
    title: "AI WiFi Research Intern",
    company_name: "NTUST BMW Laboratory, Taiwan",
    icon: bmw,
    iconBg: "#E6DEDD",
    date: "December 2023 – August 2024",
    points: [
      "Developed regression models, achieving 98.7% accuracy in predicting the indoor relative position of unauthorized access points across 14 floors of the local dormitory.",
      "Researched and collaborated with NVIDIA to implement Sionna RT for WiFi data visualization, analyzing data from 100+ access points to identify potential enhancements.",

    ],
  },
  {
    title: "Cloud Computing Path Cohort",
    company_name: "Bangkit Academy 2024 (By Google, GoTo, Traveloka)",
    icon: bangkit,
    iconBg: "#E6DEDD",
    date: " Sep 2023 – July 2024",
    points: [
      "Achieved a high score of 93.4 for the product-based capstone project Chronic Disease Prevention and Mitigation as one of the Best 50 Product-track Capstone Projects out of 588 submissions.",
      "Specialized in advanced cloud computing expertise scoring 90.75 in the skills assessment, with hands-on experience deploying applications, architecting solutions, utilizing BigQuery for data analysis, and integrating CI/CD pipelines for automated application deployments on Google Cloud Platform (GCP).",
    ],
  },
  {
    title: "Electric Technical Director",
    company_name: "VTOL Tim Robotika Universitas Indonesia (Drone-focused competition team)",
    icon: auav,
    iconBg: "#E6DEDD",
    date: "May 2022 – May 2024",
    points: [
      "Engineered the drone's intricate electrical system, fostering a collaborative learning environment that empowered seven team members with critical R&D skills while ensuring seamless integration between hardware and software components.",
      "Successfully achieved runner-up of NXP Hovergames by creating an automated UAV spray response system.",
      "Successfully entered KRTI Finals by developing a web-based ground control station for UAV status monitoring.",
    ],
  },
];

const projects = [
  {
    name: "Rogue Access Point Detection",
    description:
      "Illegal access point detection using regression, featuring deployment on NVIDIA Sionna for digital twin visualization.",
    tags: [
      {
        name: "python",
        color: "blue-text-gradient",
      },
      {
        name: "regression",
        color: "green-text-gradient",
      },
      {
        name: "sionna",
        color: "pink-text-gradient",
      },
    ],
    image: sionna,
    source_code_link: "https://github.com/laurenchristyt/WiFi-Coverage-and-Capacity-Optimization-Access-Point-Localization-and-RSSI-Prediction-/blob/main/location_data_prediction_xgb.ipynb",
  },
  {
    name: "CASION",
    description:
      "A mobile app for chronic disease management, using chatbot technology and machine learning to provide pre-diagnostic insights and personalized advice.",
    tags: [
      {
        name: "GCP",
        color: "blue-text-gradient",
      },
      {
        name: "nodejs",
        color: "green-text-gradient",
      },
      {
        name: "tensorflow",
        color: "pink-text-gradient",
      }
    ],
    image: casion,
    source_code_link: "https://github.com/laurenchristyt/CASION",
  },
  {
    name: "PollPal",
    description:
      "A transparent and secure e-voting platform leveraging blockchain technology, PollPal ensures the integrity of votes while providing a decentralized and immutable voting experience.",
    tags: [
      {
        name: "blockchain",
        color: "blue-text-gradient",
      },
      {
        name: "reactjs",
        color: "green-text-gradient",
      },
      {
        name: "python",
        color: "pink-text-gradient",
      },
    ],
    image: pollpal,
    source_code_link: "https://github.com/PollPal",
  },
  {
    name: "WiFi Coverage and Capacity Optimization",
    description:
      "Transmit power optimization system with regression and genetic algorithm to maximize coverage and capacity.",
    tags: [
      {
        name: "optimization",
        color: "blue-text-gradient",
      },
      {
        name: "regression",
        color: "green-text-gradient",
      },
      {
        name: "CCO",
        color: "pink-text-gradient",
      },
    ],
    image: cco,
    source_code_link: "https://github.com/laurenchristyt/WiFi-Coverage-and-Capacity-Optimization-Access-Point-Localization-and-RSSI-Prediction-/blob/main/rssi_prediction_xgb.ipynb",
  },
  {
    name: "Lexia",
    description:
      "Lexia is a web-based app that helps dyslexic users improve reading and writing with features like word segmentation and talkback, offering cross-platform accessibility and engaging gameplay.",
    tags: [
      {
        name: "node.js",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "react",
        color: "pink-text-gradient",
      },
    ],
    image: lexia,
    source_code_link: "https://github.com/laurenchristyt/Lexia",
  },
  {
    name: "Cigritous",
    description:
      "An autonomous drone system that monitors crops, sends data to a webserver, and follows commands to release substances or observe pests using machine learning—all without harming animals.",
    tags: [
      {
        name: "opencv",
        color: "blue-text-gradient",
      },
      {
        name: "NAVQ+",
        color: "green-text-gradient",
      },
      {
        name: "quadcopter",
        color: "pink-text-gradient",
      },
    ],
    image: cigritous,
    source_code_link: "https://www.hackster.io/vishwakarma/cigritous-crop-monitoring-with-automated-uav-spray-response-473d80",
  }
];

export { services, technologies, experiences, projects };
