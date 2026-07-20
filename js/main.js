/* =============================================
   BAHRIA COLLEGE KARSAZ — MAIN JS
   ============================================= */

const TOUR_VIDEO_ID = 'bFrxx4GZCA0';

// News data for popup modals
const NEWS_DATA = [
    {
        tag:   'Achievement',
        title: 'Top 7 Positions in Science Group — Karachi Board 2025',
        date:  'January 2026',
        body:  `<p>Bahria College Karsaz students achieved outstanding results in the Karachi Board annual examinations, securing 7 top positions in the Science Group.</p>
                <p>This remarkable achievement is a testament to the dedication of our students and the unwavering commitment of our faculty. BCKz continues its proud tradition of academic excellence with consistent board-level results year after year.</p>
                <p>We congratulate all the achievers and their families on this milestone.</p>`
    },
    {
        tag:   'Academics',
        title: 'Annual Examination Results — HSC II Pre-Medical',
        date:  'January 2026',
        body:  `<p>The annual examination results for HSC II Pre-Medical have been announced. BCKz students have once again demonstrated exceptional performance across the board.</p>
                <p>Students may collect their detailed result sheets from the respective wing administration offices during office hours. For any queries regarding results, please contact the examination department.</p>
                <p>Congratulations to all students and the faculty of the Pre-Medical stream.</p>`
    },
    {
        tag:   'Admissions',
        title: 'Admissions Open — HSSC, O-Level & A-Level Session 2026',
        date:  'April 2026',
        body:  `<p>Admissions are now open for the academic session 2026 across all higher secondary programmes including HSSC (Pre-Medical, Pre-Engineering, Computer Science, Commerce, Humanities) as well as O-Level and A-Level under the Cambridge International curriculum.</p>
                <p><strong>Eligibility:</strong> Minimum 65% marks in Matric / 70% aggregate for O-Level stream.</p>
                <p><strong>Selection Criteria:</strong> 60% weightage for Class IX percentage + 40% for entrance test performance.</p>
                <p>Admissions are announced through national newspapers and our official social media channels. Limited seats are available — apply early to secure your place.</p>
                <p>Visit the Admissions page or contact the college reception for further information and application forms.</p>`
    },
    {
        tag:   'Achievement',
        title: 'Congratulations to our Board Position Holders 2025',
        date:  'January 2026',
        body:  `<p>Bahria College Karsaz proudly congratulates all students who secured board positions in the 2025 annual examinations across Federal Board and Karachi Board.</p>
                <p>This year's position holders have brought great honour to the institution, their families, and the Pakistan Navy. BCKz has been recognised as the Best Bahria College for 12 years — a legacy our students continue to uphold.</p>
                <p>We wish all our position holders continued success in their academic and professional journeys.</p>`
    },
    {
        tag:   'Sports',
        title: 'Annual Sports Gala 2026',
        date:  'March 2026',
        body:  `<p>Students showcased athletic excellence across cricket, football, basketball, badminton and more at the annual inter-wing Sports Gala.</p>
                <p>The event brought together students from every wing in a celebration of teamwork, fitness and competitive spirit, reflecting BCKz's commitment to holistic development beyond the classroom.</p>
                <p>Congratulations to all participants and winners across every category.</p>`
    }
];

// Alumni full-story data for the Alumni page "View Full Story" modal
const ALUMNI_DATA = [
    {
        name: 'Muhammad Ali Qasmi',
        batch: 'Batch of 2005–07',
        role: 'Senior AI Engineer, Qcells North America — San Francisco Bay Area, California, USA · MS in Computer Science, University of Bonn, Germany',
        photo: '../Images/Alumni/Muhammad Ali Qasmi.jpeg',
        body: `<p>Dear Students,</p>
               <p>I sat in the same classrooms you sit in now. I walked the same corridors, took the same exams, and had no clearer idea than you do about where any of it would lead. That is worth saying plainly, because the people whose names end up on alumni pages can seem like a different species. They are not. They were students at Karsaz, and then they kept going.</p>
               <p>Today I build autonomous AI systems that manage power for the massive data centers forming the backbone of AI infrastructure across the USA. Twenty years ago, I was writing my first lines of code, never imagining this field would exist in the form it does now. Almost everything I learned in those early years is obsolete — the languages have changed, the tools have changed. What did not change was the habit of learning: the willingness to sit with a problem I did not understand, to read something difficult twice, and to keep asking why until the answer was truly mine.</p>
               <p>That habit is the whole thing. It is what school quietly trains you in, underneath the syllabus.</p>
               <p>So here is what I would urge you toward: do not stop at the degree that gets you a job. Go further. Study something deeply enough that you reach the edge of what is known, and then push past it. Research is not an abstraction reserved for a special few — it is what happens when an ordinary person refuses to accept that a question has no answer. Some of you reading this will one day work on problems nobody has solved. That is not a fantasy. It is a decision, made early, to take your own mind seriously.</p>
               <p>The world does not need more people who can follow instructions — machines do that now, and I help build them. What it needs is people who can ask the right question, think honestly, and do careful work when nobody is watching. Those qualities are not distributed by luck. You build them, slowly, starting now.</p>
               <p>You are not behind. You are exactly where I was. Keep going.</p>`
    },
    {
        name: 'Afnan Javaid',
        batch: 'Batch of 2016',
        role: 'Vice President & Board Member, 3 Knots Digitals Pvt. Ltd.',
        photo: '../Images/Alumni/Afnan Javaid.jpeg',
        body: `<p>I completed my Matriculation from Bahria College Karsaz (Federal Board) and my Intermediate in Pre-Engineering from Bahria College Karsaz (Sindh Board). I later earned a Bachelor's degree in Software Engineering (Batch 2016) and a Master's degree in Project Management (Batch 2021) from Bahria University.</p>
               <p>My professional journey began in 2018 at Sleekhive Technologies as a Project Coordinator. Through consistent performance and leadership, I was promoted to Assistant Project Manager within a year. In 2021, I joined Technified Labs Pvt. Ltd. as a Project Manager, later transitioning into Pre-Sales, where I played a key role in driving revenue growth and expanding business opportunities across Thailand, Indonesia, Malaysia, and Singapore. My contributions led to my promotion as Head of Pre-Sales, where I spearheaded strategic initiatives, business development, and enterprise growth.</p>
               <p>In February 2025, I joined 3 Knots Digitals Pvt. Ltd. as Vice President and a member of the Board, contributing to corporate strategy, organizational leadership, and long-term business planning. Alongside my executive role, I also serve as a business consultant for U.S.-based organizations, Geneva B LLC and Marketing & Publishing Studio LLC, advising on strategic growth, project governance, operational excellence, and organizational development.</p>
               <p>Throughout my career, I have been honored with the Best Employee of the Year award twice at Technified Labs Pvt. Ltd. and once at 3 Knots Digitals Pvt. Ltd., recognizing my leadership, innovation, and business impact.</p>
               <p>Bahria College Karsaz laid the foundation for my discipline, resilience, and pursuit of excellence. From beginning my career in an entry-level role to serving as a Vice President, Board Member, and international business consultant, my journey stands as a testament to the power of perseverance, continuous learning, and purposeful leadership.</p>`
    },
    {
        name: 'Muhammad Ashhad Noor Khan',
        batch: 'Batch of 2016',
        role: 'Advocate, Sindh Bar Council',
        photo: '../Images/Alumni/Ashhad Noor Khan.jpeg',
        body: `<p>After completing my intermediate studies at Bahria College in 2016, I gained admission to the University of Karachi to pursue a law degree, as I had always been passionate about studying law and becoming a lawyer.</p>
               <p>I graduated from the University of Karachi in 2021 and, after passing the licensing examination in 2022, was enrolled as a licensed Advocate on the roll of the Sindh Bar Council.</p>
               <p>Since then, I have handled a wide range of criminal, civil, and banking matters. However, one of the most rewarding experiences of my career was working with an NGO, where I undertook pro bono cases to provide legal assistance to underprivileged members of the community.</p>
               <p>In 2023, I moved to England to pursue a Master's degree in Law, which I successfully completed in 2024. Alongside my studies, I was fortunate to gain valuable work experience at several solicitor firms, allowing me to develop a practical understanding of the English legal system while continuing my academic studies.</p>`
    },
    {
        name: 'Muazzam Ali',
        batch: 'Batch of 2018',
        role: 'AI/ML Professional, Kaizen Owner Association Management Services — Dubai, UAE · Bachelor’s in Computer Science',
        photo: '../Images/Alumni/Muazzam Ali.jpeg',
        body: `<p>Currently working as an AI/ML professional in Dubai, UAE at Kaizen Owner Association Management Services, with around 3 years of experience in the field.</p>
               <h4>My Journey</h4>
               <p>After finishing my Computer Science degree, I found myself drawn towards Artificial Intelligence, back when it wasn't as mainstream as it is today. Over the last three years, I've worked as an AI/ML professional, applying AI to solve real, everyday business problems rather than just working on theory.</p>
               <p>One of the projects I'm most proud of is a live CCTV analytics system I built using computer vision, which was deployed for a company in Saudi Arabia. The system analyzes live camera feeds in real time to detect human demographics, including gender distribution, estimated age groups, and even emotional expressions of people captured on camera. It gave the client valuable insights into footfall and audience behavior without needing any manual monitoring.</p>
               <p>I also built a RAG based AI application for a real estate platform in the UAE. The system helps end users get detailed rental information for different areas, including property rates, nearest metro stations, and nearby schools, allowing users to shortlist areas based on their own budget and preferences. Alongside this, I developed a multi agent system that handles customer queries automatically. If a customer's issue cannot be resolved directly, the system creates a support ticket on its own and routes it to the right team.</p>
               <p>What keeps me going in this field is that it never really stops moving. There's always something new to learn, whether it's a new model, a new technique, or just a better way of doing something you already know. I try to stay a student of AI even outside my job, that's really what this field demands.</p>
               <p>My advice to current students would be simple: don't wait to feel "ready" before starting. Pick something, build it, break it, fix it, that's how you actually learn AI, not just from books.</p>`
    },
    {
        name: 'Ahmer Sarfaraz',
        batch: 'Matriculated 2004',
        role: 'Regional Head Sales – South & Vice President, The Bank of Punjab',
        photo: '../Images/Alumni/Ahmer Sarfaraz.jpeg',
        body: `<p>My name is Ahmer Sarfaraz, and I am a proud alumni of Bahria College Karsaz. I completed my Matriculation from the college in 2004, and later earned an MBA with a specialization in Marketing and Advertising.</p>
               <p>I began my professional journey in 2012 as a Junior Officer at NIB Bank Ltd. Banking has been my passion since day one, and over the years I have gained extensive experience across the industry. I have had the opportunity to work with leading institutions including MCB Bank, HBL, Askari Bank, and Bank AL Habib.</p>
               <p>Currently, I serve as Regional Head Sales – South at The Bank of Punjab, holding the position of Vice President. With over 13 years of experience in banking, I have navigated numerous challenges throughout my career. Each challenge strengthened my resolve to work harder, stay focused, and achieve the goals I set for myself.</p>
               <p>I am grateful to have been recognized with awards for my performance and contributions toward financial growth. I believe that with dedication and a positive mindset, the possibilities are limitless. I remain committed to achieving greater milestones in the future, InshaAllah.</p>`
    },
    {
        name: 'Dr. Irum Shah',
        batch: 'Batch of 2014',
        role: 'General Surgery Resident (training in Pediatric Surgery) · Dow Medical College',
        photo: '../Images/Alumni/Dr. Irum Shah.jpeg',
        body: `<p>I completed my schooling at Bahria College Karsaz (Cambridge Wing) — where I developed a strong academic foundation and a passion for serving humanity. I was the high achiever of the year 2014. I graduated from Dow Medical College in 2022 and pursued a career in Surgery. Currently, I am a General Surgery Resident and am working towards specialization in Pediatric Surgery.</p>
               <p>Throughout my training, I have gained extensive experience in emergency and elective surgical care, assisted in and performed a wide range of surgical procedures, and remained committed to continuous learning and professional development. Alongside my demanding career, I am also a proud mother, striving to balance family life with the responsibilities of surgical training.</p>
               <h4>Success Story</h4>
               <p>My journey from the classrooms of Bahria College Karsaz to the operating theatre has been one of perseverance, discipline, and lifelong learning. Every stage of my education reinforced the values of hard work, integrity, and resilience.</p>
               <p>Surgery is a field that demands dedication, and the courage to face challenges every day. Despite the demands of residency, I have continued to pursue my dream of becoming a Pediatric Surgeon with determination and passion.</p>
               <p>I firmly believe that success is not defined by reaching a destination but by consistently striving to improve, embracing challenges as opportunities to grow, and never losing sight of one's purpose. I hope my journey encourages students to dream big, remain committed to their goals, and believe that persistence and hard work can turn aspirations into reality.</p>`
    },
    {
        name: 'Shaharyar Ahmed Khan',
        batch: 'Batch of 2013',
        role: 'Deputy General Manager – Corrective Maintenance, K-Electric · B.E. Electrical Engineering, NEDUET; MBA, University of Karachi',
        photo: '../Images/Alumni/Shaharyar Ahmed Khan.jpeg',
        body: `<p>Proud alumni of Bahria College Karsaz. Holding B.E. in Electrical Engineering from NED University of Engineering & Technology (NEDUET) and an MBA in Project & Industrial Management from the University of Karachi.</p>
               <p>Currently serving as Deputy General Manager – Corrective Maintenance at K-Electric, where he leads maintenance operations to ensure the reliability and sustainability of Karachi's power distribution network.</p>
               <h4>Key Milestones</h4>
               <ul>
                   <li>B.E. Electrical Engineering from NEDUET</li>
                   <li>MBA in Project & Industrial Management from the University of Karachi</li>
                   <li>Progressed through technical and leadership roles in the power utility sector</li>
                   <li>Appointed as Deputy General Manager – Corrective Maintenance at K-Electric</li>
               </ul>
               <h4>Professional Highlights</h4>
               <ul>
                   <li>Deputy General Manager – Corrective Maintenance</li>
                   <li>Expertise in maintenance operations, quality control, and project management</li>
                   <li>Leadership of large technical teams and critical operational projects</li>
                   <li>Strong focus on continuous improvement, compliance, and operational efficiency</li>
               </ul>
               <h4>Success Story</h4>
               <p>My professional journey reflects the values of discipline, dedication, and continuous learning instilled in me at Bahria College Karsaz. After graduating in Electrical Engineering from NEDUET, I embarked on a career in the power utility sector, where I continuously expanded my technical and managerial expertise. To strengthen my leadership and project management skills, I pursued an MBA from the University of Karachi.</p>
               <p>Through perseverance, hard work, and a commitment to excellence, I progressed into leadership positions and currently serve as Deputy General Manager – Corrective Maintenance at K-Electric. Leading teams responsible for critical maintenance operations has allowed me to contribute to improving service reliability for millions of customers. I believe that success comes from embracing challenges, continuously learning, and maintaining integrity in everything we do.</p>
               <h4>Message to Students</h4>
               <p>"Dream big, stay disciplined, and never stop learning. Every challenge is an opportunity to grow, and consistent effort will always lead you closer to your goals."</p>`
    },
    {
        name: 'Shaheer Iqbal',
        batch: 'Batch of 2007',
        role: 'Deputy Manager – Assembly, Ghandhara Automobiles Limited · MSc Mechanical Engineering, Universiti Malaysia Pahang',
        photo: '../Images/Alumni/Shaheer Iqbal.jpeg',
        body: `<p>I began my professional career in 2012, immediately after completing my fourth year of Bachelor's studies, by joining Pak Suzuki Motor Company Limited in Pakistan. During my tenure, I had the opportunity to contribute to the successful launch and production of the Suzuki Wagon R project. This experience provided me with a strong foundation in automotive manufacturing, assembly operations, quality systems, and new model implementation.</p>
               <p>Driven by a passion for continuous learning and professional growth, I pursued my Master's degree in Mechanical Engineering at Universiti Malaysia Pahang, Malaysia. Alongside my postgraduate studies, I gained valuable industrial exposure by working with Proton and Perodua, where I further strengthened my knowledge of modern automotive manufacturing practices and production systems.</p>
               <p>Following my time in Malaysia, I joined Nissan Middle East FZE in Dubai, United Arab Emirates, where I worked with the regional technical team supporting distributors across the Middle East, North America, and Mediterranean regions. During this period, I had the privilege of working on several globally renowned Nissan models, including the Nissan GT-R, Nissan 370Z, Patrol, Pathfinder, Altima, and various passenger and commercial vehicles. This international experience significantly enhanced my technical expertise, problem-solving abilities, and understanding of global automotive standards.</p>
               <p>After returning to Pakistan, I continued my journey in the automotive industry and currently serve as Deputy Manager – Assembly at Ghandhara Automobiles Limited (Car Plant). In this role, I have been leading assembly operations, new model launches, production improvement initiatives, localization projects, and manufacturing process optimization.</p>
               <p>Over the years, I have had the opportunity to lead and contribute to several major automotive projects, including:</p>
               <ul>
                   <li>Isuzu D-Max</li>
                   <li>Chery Tiggo 8 Pro</li>
                   <li>JAC T9 Hunter</li>
                   <li>JAC E30X (Electric Vehicle)</li>
                   <li>JAC T9 PHEV (Plug-in Hybrid Electric Vehicle)</li>
               </ul>
               <p>One of the most rewarding milestones in my career was recently representing Ghandhara Automobiles Limited during a technical visit and training program at JAC Motors, China, where I worked closely with Chinese engineering teams on hybrid vehicle technologies, advanced manufacturing processes, and future product development.</p>
               <h4>A Message to Future Engineers</h4>
               <p>My journey began in the classrooms of Bahria College Karsaz, where I learned the importance of discipline, dedication, and perseverance. Never limit your learning to textbooks. Continuously improve your technical skills, communication, and leadership abilities. Stay curious, embrace new technologies, and never hesitate to step outside your comfort zone. Success is achieved through consistency, hard work, integrity, and the courage to take on new challenges.</p>`
    },
    {
        name: 'Muhammad Umer Dar',
        batch: 'Batch of 2008',
        role: 'Lieutenant Commander (Ops)(S/M), Pakistan Navy — Advisor to the Royal Saudi Naval Forces',
        photo: '../Images/Alumni/Muhammad Umer Dar.jpeg',
        body: `<p>Following completion of intermediate education at Bahria College Karsaz, I joined Pakistan Navy in 2008 and established a progressive career.</p>
               <p>I am currently serving in Pakistan Navy as Lieutenant Commander (Ops)(S/M). I completed my MS (Defense Studies Maritime) from the National Defense University (NDU).</p>
               <h4>Professional Qualifications</h4>
               <ul>
                   <li>53rd Pakistan Navy Staff Course at PN War College</li>
                   <li>Submarine Qualification from PNS/M HAMZA</li>
                   <li>Specialized in Long Navigation and Direction from PN Navigation and Hydrography School (PNS BAHADUR) and Ship's Diver from PN Diving School at PNS HIMALAYA</li>
               </ul>
               <h4>Professional Experience</h4>
               <ul>
                   <li>7.5 years of active sea service onboard various PN Submarines and Ships on key appointments including Torpedo & Anti-Submarine Officer, Sonar Officer, Navigation Officer and Communication Officer</li>
                   <li>Served 4.5 combined years in training naval personnel, including Directing Staff at the Pakistan Navy Tactical School, Divisional Officer at the Pakistan Naval Academy, and Deputy Senior Instructor at the PN Submarine School</li>
               </ul>
               <p>I also served as Deputy Director, Ports and Shipping at Naval Headquarters (NHQ). I am presently appointed as advisor to the Royal Saudi Naval Forces in KSA.</p>`
    },
    {
        name: 'Ayyan Ali',
        batch: 'Batch of 2022',
        role: 'Full Stack Software Engineer, NovaSphere Sol',
        photo: '../Images/Alumni/Ayyan Ali.jpeg',
        body: `<p>Hi everyone, this is Ayyan Ali. Bahria College Karsaz was a major foundational stepping stone for me, and the discipline I built during my time there played a direct role in how I approached my professional goals.</p>
               <p>After passing out as a pre-engineering graduate in 2022, I chose to switch fields to pursue software engineering. The transition required intense focus, but it allowed me to break into the tech industry early. I have been working full-time as a Full Stack Software Engineer at NovaSphere Sol since November 2025, stepping into a complete professional role even before my formal university graduation.</p>
               <p>My journey taught me that your starting point doesn't strictly dictate your destination. My advice to current Bahrians is to build a strong work ethic early on and never hesitate to pivot when you recognize where your true focus lies.</p>`
    },
    {
        name: 'Bassam Ali',
        batch: 'Batch of 2021',
        role: 'Junior Frontend Developer, Auriga Solutions · BS Software Engineering, FAST NUCES',
        photo: '../Images/Alumni/Bassam Ali.jpeg',
        body: `<p>I am Bassam Ali. I completed my Intermediate in 2021 from Bahria College Karsaz and went on to earn my Bachelor's degree in Software Engineering from FAST NUCES. I am currently working as a Junior Frontend Developer at Auriga Solutions. Previously, I worked as a Full Stack Developer at Moosvi Dev Concepts and as a Part-Time Full Stack Engineer at Elite IT Team. I am passionate about web and app development, building scalable digital solutions, and continuously enhancing my technical expertise.</p>
               <p>Starting my career with full-stack development roles and progressing to my current position as a Junior Frontend Developer at Auriga Solutions has been a rewarding journey. Each opportunity has strengthened my technical skills and professional growth while allowing me to contribute to real-world software solutions. I remain committed to continuous learning, embracing new technologies, and building impactful digital experiences throughout my career.</p>`
    },
    {
        name: 'Dr. Tehreem Farooq',
        batch: 'Batch of 2017',
        role: 'BDS, Dow University of Health Sciences · Digital Creator',
        photo: '../Images/Alumni/Dr Tehreem Farooq.jpeg',
        body: `<p>Hi everyone, this is Dr. Tehreem Farooq.</p>
               <p>Bahria College Karsaz has been an integral part of my life. My school and college journey at BCKz was nothing less than a roller coaster ride, and it has taught me a lot about life in general. It would not be an exaggeration to say that it has played an important role in my grooming and personal development.</p>
               <p>After passing out as a pre-medical graduate in 2017, I enrolled in DUHS to pursue my BDS. At the same time, I started my journey as a digital creator on Instagram and YouTube. I recently completed my house job, and my digital content creation journey is going amazingly well.</p>
               <p>After all these years, I have come to the conclusion that hard work, determination, and focus always pay off. The environment you are brought up in plays an important role in your personal and professional growth, and that is how your institution contributes to your success.</p>
               <p>My advice to all Bahrians is to aim high and work hard toward your goals. Never lose hope, and always remain determined to achieve more in life. Your leadership qualities will definitely take you to greater heights.</p>`
    },
    {
        name: 'Hamza Abdul Rauf',
        batch: 'Batch of 2009',
        role: 'Proud BCKz Alumnus',
        photo: '../Images/Alumni/Hamza Abdul Rauf.jpeg',
        body: `<p>Well, where do I start?</p>
               <p>Words cannot fully express how I feel about Bahria College Karsaz. This institution served as a grooming center not only for me but for thousands of students who spent their academic lives here.</p>
               <p>This place taught me the three most important values: discipline, hard work, and composure. These qualities have helped me tremendously in both my professional and personal life over the years.</p>
               <p>I am proud to be part of an institution that has never compromised on the quality of education and its values. I am equally proud to be associated with Bahria as one of its alumni. No matter where I go or what I become, Bahria College Karsaz will always hold a very special place in my heart.</p>`
    },
    {
        name: 'Anz Azhar',
        batch: 'Batch of 2013',
        role: 'Basketball Player & Coach — Captain, Sindh (National Games)',
        photo: '../Images/Alumni/Anz Azhar.jpeg',
        body: `<p>Being the son of a naval officer, I completed all my schooling at Bahria College, but I spent my later years (Grade 8 to Grade 12) at Bahria College Karsaz. I graduated in 2013, and although I had a love-hate relationship with the college, I have come to respect and appreciate the environment it provided for our growth.</p>
               <p>I was never a top-ranking student, but Bahria introduced me to my true passion — basketball. During my senior years, I played for the college team and won the COMKAR Championship as well as the Intercollegiate Tournament. After graduation, I started pursuing CA, but I soon realized it wasn't for me. After several years, I left it behind to follow my passion.</p>
               <p>So far, I have represented Karachi at the National Games and captained Sindh twice. Alongside playing and winning several local tournaments, I have established two basketball academies and coached multiple Army unit teams. My biggest achievement has been being part of the League of Basketball, a player-run league and one of the best basketball initiatives in the country.</p>
               <p>My advice to all fellow Bahrians is: don't let grades define you, and don't be pressured by society's standards. Set your own standards, follow your dreams, and stay resilient.</p>`
    },
    {
        name: 'Urooj Raheel',
        batch: 'Batch of 2015',
        role: 'Sales Director & Property Consultant — Dubai',
        photo: '../Images/Alumni/Urooj Raheel.jpeg',
        body: `<p>Greetings folks, this is Urooj Raheel.</p>
               <p>I am working as a Sales Director at a marketing agency, and along with that, I am a property consultant in Dubai. Spending 15 years of my life in one school at the same place, I can proudly say that my time at Bahria College Karsaz has been nothing short of extraordinary, leaving an indelible mark on both my personal and academic growth. The college's emphasis on a well-rounded education enriched my overall experience and prepared me for the complexities of the real world.</p>
               <p>I was always the social butterfly, and BCK gave me the platform to grow socially by participating in various activities and talent shows. I eventually became the captain of the Table Tennis team and won several medals. Along with that, the college played a pivotal role in my holistic development. It was all because of the unwavering support of our teachers, who were more like mentors.</p>
               <p>I am grateful for the friendships, the victories, the lessons, the experiences, and the memories. Bahria College Karsaz is not just about quality education — it is about a transformative and enriching journey.</p>`
    }
];

document.addEventListener('DOMContentLoaded', () => {
    initNavbar();
    initLightbox();
    initNewsModal();
    initAlumniModal();
    initScrollAnimations();
    initDropdownMobile();
    initNewsSlider();
    initGalleryFilter();
    initVisitCounter();
});

/* ---------- NAVBAR ---------- */
function initNavbar() {
    const header = document.getElementById('header');
    const toggle = document.getElementById('navToggle');
    const menu   = document.getElementById('navMenu');
    if (!header || !toggle || !menu) return;

    window.addEventListener('scroll', () => {
        header.style.boxShadow = window.scrollY > 10
            ? '0 4px 30px rgba(0,0,128,0.18)'
            : '';
    }, { passive: true });

    toggle.addEventListener('click', () => {
        const isOpen = menu.classList.toggle('open');
        toggle.classList.toggle('open', isOpen);
        toggle.setAttribute('aria-expanded', String(isOpen));
        document.body.style.overflow = isOpen ? 'hidden' : '';
    });

    document.addEventListener('click', (e) => {
        if (!header.contains(e.target) && menu.classList.contains('open')) closeMobileMenu();
    });

    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && menu.classList.contains('open')) {
            closeMobileMenu();
            toggle.focus();
        }
    });

    function closeMobileMenu() {
        menu.classList.remove('open');
        toggle.classList.remove('open');
        toggle.setAttribute('aria-expanded', 'false');
        document.body.style.overflow = '';
    }
}

/* ---------- MOBILE DROPDOWNS ---------- */
function initDropdownMobile() {
    document.querySelectorAll('.has-dropdown').forEach(item => {
        item.querySelector('.navbar__link').addEventListener('click', (e) => {
            if (window.innerWidth > 860) return;
            e.preventDefault();
            const isOpen = item.classList.toggle('open');
            item.closest('ul').querySelectorAll('.has-dropdown').forEach(sib => {
                if (sib !== item) sib.classList.remove('open');
            });
        });
    });

    document.querySelectorAll('.has-submenu').forEach(item => {
        item.querySelector(':scope > a').addEventListener('click', (e) => {
            if (window.innerWidth > 860) return;
            e.preventDefault();
            const isOpen = item.classList.toggle('open');
            item.closest('.dropdown').querySelectorAll('.has-submenu').forEach(sib => {
                if (sib !== item) sib.classList.remove('open');
            });
        });
    });
}

/* ---------- NEWS MODAL ---------- */
function initNewsModal() {
    const modal    = document.getElementById('newsModal');
    const backdrop = document.getElementById('modalBackdrop');
    const closeBtn = document.getElementById('modalClose');
    const tagEl    = document.getElementById('modalTag');
    const titleEl  = document.getElementById('modalTitle');
    const dateEl   = document.getElementById('modalDate');
    const bodyEl   = document.getElementById('modalBody');

    if (!modal) return;

    function openModal(index) {
        const item = NEWS_DATA[index];
        if (!item) return;
        tagEl.textContent   = item.tag;
        titleEl.textContent = item.title;
        dateEl.textContent  = item.date;
        bodyEl.innerHTML    = item.body;
        modal.hidden        = false;
        document.body.style.overflow = 'hidden';
        closeBtn.focus();
    }

    function closeModal() {
        modal.hidden = true;
        document.body.style.overflow = '';
    }

    // Ticker buttons on hero
    document.querySelectorAll('.hero__ticker-item').forEach(btn => {
        btn.addEventListener('click', () => openModal(Number(btn.dataset.news)));
    });

    // News card "Read More" buttons
    document.querySelectorAll('.news-card__link[data-news]').forEach(btn => {
        btn.addEventListener('click', () => openModal(Number(btn.dataset.news)));
    });

    backdrop.addEventListener('click', closeModal);
    closeBtn.addEventListener('click', closeModal);
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && !modal.hidden) closeModal();
    });
}

/* ---------- ALUMNI FULL STORY MODAL ---------- */
function initAlumniModal() {
    const modal    = document.getElementById('alumniModal');
    const backdrop = document.getElementById('alumniModalBackdrop');
    const closeBtn = document.getElementById('alumniModalClose');
    const nameEl    = document.getElementById('alumniModalName');
    const batchEl   = document.getElementById('alumniModalBatch');
    const roleEl    = document.getElementById('alumniModalRole');
    const bodyEl    = document.getElementById('alumniModalBody');
    const photoEl   = document.getElementById('alumniModalPhoto');

    if (!modal) return;

    function openModal(index) {
        const item = ALUMNI_DATA[index];
        if (!item) return;
        nameEl.textContent  = item.name;
        batchEl.textContent = item.batch;
        roleEl.textContent  = item.role;
        bodyEl.innerHTML    = item.body;
        photoEl.src         = item.photo;
        photoEl.alt         = item.name;
        modal.hidden        = false;
        document.body.style.overflow = 'hidden';
        closeBtn.focus();
    }

    function closeModal() {
        modal.hidden = true;
        document.body.style.overflow = '';
    }

    document.querySelectorAll('.alumni-card__btn[data-alumni]').forEach(btn => {
        btn.addEventListener('click', () => openModal(Number(btn.dataset.alumni)));
    });

    backdrop.addEventListener('click', closeModal);
    closeBtn.addEventListener('click', closeModal);
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && !modal.hidden) closeModal();
    });
}

/* ---------- VIDEO LIGHTBOX ---------- */
function initLightbox() {
    const tourBtn  = document.getElementById('tourBtn');
    const lightbox = document.getElementById('lightbox');
    const backdrop = document.getElementById('lightboxBackdrop');
    const closeBtn = document.getElementById('lightboxClose');
    const iframe   = document.getElementById('lightboxIframe');
    if (!tourBtn || !lightbox) return;

    const src = `https://www.youtube.com/embed/${TOUR_VIDEO_ID}?autoplay=1&rel=0&modestbranding=1`;

    tourBtn.addEventListener('click', () => {
        iframe.src = src;
        lightbox.hidden = false;
        document.body.style.overflow = 'hidden';
        closeBtn.focus();
    });

    function close() {
        lightbox.hidden = true;
        iframe.src = '';
        document.body.style.overflow = '';
        tourBtn.focus();
    }

    backdrop.addEventListener('click', close);
    closeBtn.addEventListener('click', close);
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && !lightbox.hidden) close();
    });
}

/* ---------- NEWS SLIDER ---------- */
function initNewsSlider() {
    const track = document.getElementById('newsSlider');
    const prev  = document.getElementById('newsPrev');
    const next  = document.getElementById('newsNext');
    if (!track || !prev || !next) return;

    function scrollByCard(direction) {
        const card = track.querySelector('.news-card');
        if (!card) return;
        const gap = parseFloat(getComputedStyle(track).columnGap || getComputedStyle(track).gap || 0);
        track.scrollBy({ left: direction * (card.offsetWidth + gap), behavior: 'smooth' });
    }

    prev.addEventListener('click', () => scrollByCard(-1));
    next.addEventListener('click', () => scrollByCard(1));
}

/* ---------- GALLERY FILTER ---------- */
function initGalleryFilter() {
    const buttons = document.querySelectorAll('.gallery-filter__btn');
    const items   = document.querySelectorAll('.gallery-item');
    if (!buttons.length || !items.length) return;

    buttons.forEach(btn => {
        btn.addEventListener('click', () => {
            buttons.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            const category = btn.dataset.filter;

            items.forEach(item => {
                const show = category === 'all' || item.dataset.category === category;
                item.style.display = show ? '' : 'none';
            });
        });
    });
}

/* ---------- SCROLL ANIMATIONS ---------- */
function initScrollAnimations() {
    const aosElements = document.querySelectorAll('[data-aos]');
    aosElements.forEach(el => {
        el.style.opacity   = '0';
        el.style.transform = 'translateY(22px)';
        el.style.transition = 'opacity 0.55s ease, transform 0.55s ease';
    });

    const revealElements = document.querySelectorAll('.animate-on-scroll');
    const elements = [...aosElements, ...revealElements];
    if (!elements.length) return;

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (!entry.isIntersecting) return;
            const siblings = [...entry.target.parentElement.children].filter(
                el => el.hasAttribute('data-aos') || el.classList.contains('animate-on-scroll')
            );
            const delay = Math.min(siblings.indexOf(entry.target) * 80, 480);
            setTimeout(() => {
                if (entry.target.hasAttribute('data-aos')) {
                    entry.target.style.opacity   = '1';
                    entry.target.style.transform = 'translateY(0)';
                } else {
                    entry.target.classList.add('is-visible');
                }
            }, delay);
            observer.unobserve(entry.target);
        });
    }, { threshold: 0.12 });

    elements.forEach(el => observer.observe(el));
}

/* ---------- VISIT COUNTER ---------- */
function initVisitCounter() {
    const el = document.getElementById('visitCounter');
    if (!el) return;

    const BASE_COUNT = 227477;
    fetch('https://api.countapi.xyz/hit/bckz-website-karsaz/visits')
        .then(res => res.json())
        .then(data => {
            const total = BASE_COUNT + (data.value || 0);
            el.textContent = total.toLocaleString('en-US');
        })
        .catch(() => {
            // API unreachable — leave the static fallback count in place
        });
}
