HARSH BAHUGUNA - 3D PORTFOLIO (HTML + CSS + JS)
Koi install ya build ki zarurat nahi hai.

CHALANE KE LIYE
index.html par double-click karein. Browser me site khul jayegi.

FILES
index.html  - page ka structure
style.css   - design / colors (accent color: --accent)
data.js     - ALL content: projects, about, skills, experience, links  <-- yahi edit karein
script.js   - gallery, filters, popup (ise chhedne ki zarurat nahi)
images/projects/<project-name>/  - aapki images

NAYA PROJECT ADD KARNA
1. images/projects/my-new-project/ naam ka folder banayein.
2. Usme images daalein (thumb.jpg, render-01.jpg, render-02.jpg, wireframe.jpg).
3. data.js me PROJECTS ke andar ek poora { ... } block copy karke neeche paste karein aur badlein:
   slug, title, description, category, type, role, software, thumbnail, gallery, breakdown (optional).
4. Asli kaam ke liye "placeholder: true" line delete karein.
5. index.html browser me refresh karke dekhein.
VIDEO ADD KARNA
Option A (apni file): video ko images/projects/my-new-project/turntable.mp4 me rakhein (MP4, H.264, 1080p, 20 MB se chhota best),
  phir block me: videos: [ { title: 'Turntable', src: 'images/projects/my-new-project/turntable.mp4' } ],
Option B (bade video ke liye best): YouTube ya Vimeo par upload karein (Unlisted bhi chalega), phir link paste karein:
  videos: [ { title: 'Showreel', embed: 'https://www.youtube.com/watch?v=XXXXXXXXXXX' } ],
Card par "Video" badge aur popup me Videos section apne aap dikhega. Ek project me kai videos ho sakte hain.
Note: GitHub par 100 MB se bada file nahi chalta, isliye bade video YouTube/Vimeo par rakhein.
EDIT: block me text badlein.  REMOVE: pura block delete karein.
REORDER: blocks upar-neeche karein.  HERO IMAGE: jis project par "featured: true" ho wahi hero me aati hai.
ABOUT / SKILLS / EXPERIENCE / EDUCATION / LINKS: data.js ke SITE me badlein.
Demo projects (demo-...) delete kar dein jab apne projects add ho jayein.

IMAGE SIZES (JPG ya WebP, https://squoosh.app se chhota karein)
Thumbnail 1200x900 (4:3), under 200 KB
Final render 1920x1080 (16:9), under 400 KB
Detail image 1600x900, under 300 KB
Wireframe 1600x900 (PNG/WebP), under 400 KB

ONLINE PUBLISH (FREE)
Netlify Drop: https://app.netlify.com/drop  -> poora folder drag-and-drop karein, link mil jayega.
Update karne ke liye naya folder wapas drop karein.
Ya GitHub Pages / Vercel use kar sakte hain. Custom domain baad me Netlify/Vercel ki Domains setting se jod sakte hain.

PUBLISH SE PEHLE CHECK
[ ] Demo projects hataye, asli images lagayi    [ ] Sab images load ho rahi hain
[ ] Filters aur popup chal rahe hain             [ ] Email link kaam kar raha hai
[ ] LinkedIn/ArtStation/Behance links daale      [ ] Mobile par check kiya
