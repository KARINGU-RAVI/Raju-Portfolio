// Freelance Images
import freelance1 from './freelance-images/freelance_1.jpg';
import freelance2 from './freelance-images/freelance_2.jpg';
import freelance3 from './freelance-images/freelance_3.jpg';
import freelance4 from './freelance-images/freelance_4.jpg';
import freelance5 from './freelance-images/freelance_5.jpg';
import freelance6 from './freelance-images/freelance_6.jpg';
import freelance7 from './freelance-images/freelance_7.jpg';

// Brand Identity Images
import brand2 from './brand-identity-images/brand_2.png';
import brand3 from './brand-identity-images/brand_3.png';
import brand4 from './brand-identity-images/brand_4.png';
import brand5 from './brand-identity-images/brand_5.png';
import profile from './brand-identity-images/portfolio-profile.png';
import brand6 from './brand-identity-images/brand_6.jpg';
import brand7 from './brand-identity-images/brand_7.jpg';
import brand8 from './brand-identity-images/brand_8.jpg';

// Motion Graphics Videos
// import motion1 from './Motion-Graphics-Projects/motion_1.mp4';
const motion1 = "https://drive.google.com/file/d/1o2kskwWBzL5Ne-blkaXaGR02rl1wzbHX/view?usp=sharing"; // Replace with actual direct video link or smaller file
import motion2 from './Motion-Graphics-Projects/motion_2.mp4';
import motion3 from './Motion-Graphics-Projects/motion_3.mp4';
import motion4 from './Motion-Graphics-Projects/motion_4.mp4';
import motion5 from './Motion-Graphics-Projects/motion_5.mp4';
import motion6 from './Motion-Graphics-Projects/motion_6.mp4';
import motion7 from './Motion-Graphics-Projects/motion_7.mp4';

// Social Media Images
import social1 from './Social-Media-Content-Creation/social_1.jpg';
import social2 from './Social-Media-Content-Creation/social_2.jpg';
import social3 from './Social-Media-Content-Creation/social_3.jpg';
import social4 from './Social-Media-Content-Creation/social_4.jpg';
import social5 from './Social-Media-Content-Creation/social_5.jpg';

export const personalData = {
    name: "KARINGU RAJU",
    title: "Motion Graphics & Video Editor",
    location: "Hyderabad, Telangana",
    phone: "70XXXXXX80",
    email: "karinguraj001@gmail.com",
    languages: ["English", "Telugu"],
    availability: {
        freelancing: true,
        fullTime: true,
        partTime: true
    },
    social: {
        linkedin: "#",
        github: "#",
        instagram: "#",
        twitter: "#"
    },
    resume: "https://drive.google.com/file/d/1o2kskwWBzL5Ne-blkaXaGR02rl1wzbHX/view?usp=sharing"
};

export const contactConfig = {
    emailService: "formspree", // Options: 'formspree', 'emailjs', etc.
    formspreeId: "xojnyjzy" // The user will need to replace this with their own ID
};

export const aboutData = {
    summary: "An enthusiastic Motion Graphics Artist and Video Editor with a strong foundation in Adobe After Effects, Premiere Pro, and Photoshop. Passionate about crafting engaging visuals, animations, and storytelling experiences that resonate with audiences. As a dedicated professional eager to learn from industry experts, I bring fresh perspectives and creative energy to every project. My goal is to collaborate with innovative teams and contribute meaningfully to impactful visual narratives that inspire and captivate.",
    image: profile // Using one of the high quality images
};


export const experienceData = [{
    id: 1,
    title: "Freelance Projects",
    period: "2023 - Present",
    description: "Delivered creative solutions for various clients including brand identity design, social media content, and promotional videos.",
    type: "freelance",
    images: [freelance1, freelance2, freelance3, freelance4, freelance5, freelance6, freelance7]
},
{
    id: 2,
    title: "Brand Identity Design",
    period: "2023",
    description: "Conceptualized and executed complete brand suites including logos, packaging, and corporate stationery for local businesses.",
    type: "project",
    images: [brand2, brand3, brand4, brand5, brand6, brand7, brand8]
},
{
    id: 3,
    title: "Motion Graphics Projects",
    period: "2022 - 2023",
    description: "Created engaging motion graphics for social media campaigns, title sequences, and promotional content.",
    type: "project",
    images: [motion1, motion2, motion3, motion4, motion5, motion6, motion7]
},
{
    id: 4,
    title: "Social Media Content Creation",
    period: "2022 - Present",
    description: "Designed and animated social media content for various brands, focusing on engagement and visual storytelling.",
    type: "content",
    images: [social1, social2, social3, social4, social5]
}
];

export const skillsData = {
    videoEditing: [{
        name: "Adobe Premiere Pro",
        level: 85
    },
    {
        name: "Color Correction & Grading",
        level: 80
    },
    {
        name: "Storyboarding",
        level: 75
    },
    {
        name: "Title & Lyrical Animation",
        level: 85
    }
    ],
    motionGraphics: [{
        name: "Adobe After Effects",
        level: 90
    },
    {
        name: "Logo Animation",
        level: 85
    },
    {
        name: "Typography Animations",
        level: 80
    },
    {
        name: "Green Screen & Rotoscoping",
        level: 75
    },
    {
        name: "Hologram Effects",
        level: 70
    }
    ],
    graphicDesign: [{
        name: "Adobe Photoshop",
        level: 85
    },
    {
        name: "Adobe Illustrator",
        level: 80
    },
    {
        name: "Social Media Banners",
        level: 90
    },
    {
        name: "Print Designs",
        level: 75
    }
    ],
    advanced: [{
        name: "3D Product Animations",
        level: 70
    },
    {
        name: "3D Documentaries",
        level: 65
    },
    {
        name: "Product Advertisements",
        level: 80
    }
    ]
};

export const projectsData = [{
    id: 1,
    title: "Creative Minds Veda Oil Co. Brand Identity",
    description: "Participated in a competitive design challenge where I conceptualized and executed a complete visual solution under time constraints, demonstrating strong creative thinking, branding skills, and technical expertise.",
    skills: ["Adobe Illustrator", "InDesign", "Brand Design"],
    link: "https://drive.google.com/file/d/1kLzntkEDtGEd1QKnpHYmNFJr_aU8HRu7/view",
    image: brand6,
    color: "#FFE5B4"
},
{
    id: 2,
    title: "Eco-Friendly Packaging Solution",
    description: "Designed sustainable packaging for a premium wellness brand, focusing on minimalistic aesthetics and earth-friendly materials.",
    skills: ["Adobe Illustrator", "Packaging Design", "Visualization"],
    link: "https://drive.google.com/file/d/1kLzntkEDtGEd1QKnpHYmNFJr_aU8HRu7/view",
    image: brand2,
    color: "#D1F2EB"
}];

export const educationData = [{
    id: 1,
    degree: "Bachelor of Commerce",
    institution: "Mahatma Gandhi University",
    location: "Nalgonda",
    period: "2020 - 2023"
}];

export const coursesData = [
    "Motion Graphics",
    "Adobe Premiere Pro",
    "Adobe After Effects",
    "Adobe Photoshop"
];

export const achievementsData = [{
    id: 1,
    title: "Brand Identity Excellence",
    description: "Successfully delivered complete brand identity for Creative Minds Veda Oil Co.",
    year: "2023"
},
{
    id: 2,
    title: "Creative Portfolio Development",
    description: "Built a diverse portfolio showcasing motion graphics and video editing skills.",
    year: "2023"
}
];