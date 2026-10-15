/* ============ EDIT THIS FILE to change your content ============ */

const SITE = {
  name: 'Harsh Bahuguna',
  title: 'Junior 3D Artist / 3D Modeler',
  headline: 'Building Worlds, One Model at a Time.',
  intro: 'I am a Junior 3D Artist and 3D Modeler looking for my first studio role. I am focused on creating clean, production-ready 3D assets.',
  email: 'harshbahuguna7248@gmail.com',
  location: 'Dehradun, Uttarakhand, India',
  links: { LinkedIn: 'https://www.linkedin.com/in/harsh-bahuguna269' },
  about: [
    'I recently completed a B.Sc. in Animation and Gaming at Graphic Era Hill University, where I built my foundation in 3D modeling and digital art.',
    'I worked as a 3D Designer Intern at Heldon Secure Solutions Pvt. Ltd., which gave me hands-on exposure to 3D design work.',
    'I am especially interested in developing production-ready 3D assets, and I am looking to grow as a Junior 3D Artist or 3D Modeler.'
  ],
  skills: [
    { group: 'Software', items: ['Blender', 'Autodesk Maya', 'Autodesk 3ds Max'] }
    // Baad me aur skills add karne ke liye: { group: 'Techniques', items: ['Hard Surface Modeling'] }
  ],
  experience: [{
    role: '3D Designer Intern',
    org: 'Heldon Secure Solutions Pvt. Ltd.',
    period: '7 January 2026 – 7 July 2026',
    summary: 'Internship focused on 3D design exposure.',
    points: [] // Apni asli responsibilities yahan likhein, e.g. 'Modeled props in Blender'
  }],
  education: [{
    degree: 'B.Sc. Animation and Gaming',
    org: 'Graphic Era Hill University',
    period: '2023–2026',
    status: '' // e.g. 'Graduated 2026'. Khali chhodne par hide hoga.
  }]
};

/* ====== PROJECTS: naya project add karne ke liye ek block copy karke neeche paste karein ======
   Images: images/projects/<slug>/ folder me rakhein.
   3 DEMO projects placeholder hain. Apna kaam add karne ke baad inhe delete karein.
   Real kaam ke liye `placeholder: true` line hata dein.
   VIDEO ADD KARNA (optional): project block me ye line daalein:
     videos: [
       { title: 'Turntable', src: 'images/projects/my-new-project/turntable.mp4' },        // apni file
       { title: 'Showreel', embed: 'https://www.youtube.com/watch?v=XXXXXXXXXXX' }          // YouTube/Vimeo link
     ],
   category options: 'Hard Surface', 'Props', 'Environment', 'Characters', 'Product Visualization' */
const CATEGORY_ORDER = ['Hard Surface', 'Props', 'Environment', 'Characters', 'Product Visualization'];

const PROJECTS = [
  {
    slug: 'dusk-cabin',
    title: 'Dusk Cabin',
    description: 'A stone and timber cabin at dusk with a figure sitting on the roof, set against distant mountains.',
    category: 'Environment', type: 'Personal', role: 'Modeling and rendering', software: ['Blender'],
    thumbnail: 'images/projects/dusk-cabin/render-01.jpg',
    gallery: ['images/projects/dusk-cabin/render-01.jpg'],
    featured: true
  },
  {
    slug: 'gaming-desk-setup',
    title: 'Gaming Desk Setup',
    description: 'A dark gaming room scene with a desk, monitor, PC tower, keyboard and mouse. Stills are frames from the video.',
    category: 'Environment', type: 'Personal', role: 'Modeling and rendering', software: ['Blender'],
    thumbnail: 'images/projects/gaming-desk-setup/frame-01.jpg',
    gallery: ['images/projects/gaming-desk-setup/frame-01.jpg', 'images/projects/gaming-desk-setup/frame-02.jpg', 'images/projects/gaming-desk-setup/frame-03.jpg'],
    videos: [{ title: 'Scene walkthrough', src: 'images/projects/gaming-desk-setup/walkthrough.mp4', poster: 'images/projects/gaming-desk-setup/frame-01.jpg' }]
  },
  {
    slug: 'ps2-shelf-scene',
    title: 'Retro Console Shelf Scene',
    description: 'A moody shelf scene with a PlayStation 2 console, controllers, books and a small figure.',
    category: 'Props', type: 'Personal', role: 'Modeling and rendering', software: ['Blender'],
    thumbnail: 'images/projects/ps2-shelf-scene/render-01.jpg',
    gallery: ['images/projects/ps2-shelf-scene/render-01.jpg'],
    breakdown: [{ label: 'Viewport view', image: 'images/projects/ps2-shelf-scene/viewport-colors.jpg', note: 'Each object shown in a different color.' }]
  }
];
