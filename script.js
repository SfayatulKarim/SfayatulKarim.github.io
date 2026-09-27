// To add a new certificate: put its PDF into the certificates folder, then copy one line below and change the title, issuer, and filename.
const certificates=[
 {title:'Google Data Analytics',issuer:'Coursera',file:'Coursera%201.pdf'},
 {title:'Professional Certificate',issuer:'Coursera',file:'Coursera%202.pdf'},
 {title:'Professional Certificate',issuer:'Coursera',file:'Coursera%203.pdf'},
 {title:'Professional Certificate',issuer:'Coursera',file:'Coursera%204.pdf'},
 {title:'Professional Certificate',issuer:'Coursera',file:'Coursera%205.pdf'},
 {title:'Professional Certificate',issuer:'Coursera',file:'Coursera%206.pdf'},
 {title:'Professional Certificate',issuer:'Coursera',file:'coursera%207.pdf'},
 {title:'Writing in the Sciences',issuer:'Stanford University',file:'stanford%208.pdf'}
];
// To add an achievement: copy one item below and update its title and detail.
const achievements=[
 {title:'Final-year CSE student',detail:'KIIT University · Building a foundation in data, AI, and software engineering.'},
 {title:'Data & AI learner',detail:'Continuously developing practical skills through projects, research, and professional courses.'}
];
document.querySelector('#year').textContent=new Date().getFullYear();document.querySelector('#certificate-count').textContent=`${certificates.length} earned`;
document.querySelector('#certificate-list').innerHTML=certificates.map((c,i)=>`<li><a href="certificates/${c.file}" target="_blank" rel="noopener noreferrer"><span>${String(i+1).padStart(2,'0')}</span><div><strong>${c.title}</strong><small>${c.issuer}</small></div><b>↗</b></a></li>`).join('');
document.querySelector('#achievement-list').innerHTML=achievements.map((a,i)=>`<article><span>0${i+1}</span><div><h3>${a.title}</h3><p>${a.detail}</p></div></article>`).join('');
