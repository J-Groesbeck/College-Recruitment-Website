let sectionTitle = document.getElementById('section-title')
let sectionPara = document.getElementById('section-paragraph')
let sectionImg = document.getElementById('section-image')
let currentSection = 'academics'

function editText(info) {
    if (currentSection != info && !(sectionTitle.classList.contains('fade-anim'))) {
        sectionTitle.classList.add('fade-anim')
        sectionPara.classList.add('fade-anim')
        sectionImg.classList.add('fade-anim')

        setTimeout(() => {
            if (info === 'academics') {
                currentSection = 'academics'
                sectionTitle.innerText = 'Academics'
                sectionPara.innerHTML = 'The Rutgers School of Arts and Sciences (SAS) offers a broad and dynamic academic experience, encompassing over 100 majors and minors across the humanities, social sciences, natural sciences, and mathematics. With a diverse range of programs, SAS fosters intellectual growth and interdisciplinary exploration, encouraging students to engage in critical thinking, research, and creative expression. The school is known for its rigorous academic standards, world-class faculty, and research opportunities that connect students with real-world challenges. Through a commitment to academic excellence and innovation, SAS prepares students for a wide array of careers and advanced study, cultivating leaders who contribute meaningfully to society. See list of all majors <a href="https://sasundergrad.rutgers.edu/major/list-of-majors-and-minors" target="_blank">here</a>'
                sectionImg.src = 'imgs/academics.jpg'
            } else if (info === 'life') {
                currentSection = 'life'
                sectionTitle.innerText = 'Student Life'
                sectionPara.innerText = 'Student life at SAS is vibrant and diverse, offering a rich array of opportunities for personal growth, community involvement, and extracurricular engagement. With hundreds of student organizations, clubs, and cultural groups, students can explore their passions, build leadership skills, and forge meaningful connections with peers. The campus is bustling with events ranging from academic conferences to social gatherings, fostering a strong sense of community and belonging. In addition, students benefit from access to state-of-the-art facilities, athletics, and wellness resources that support a balanced and active lifestyle. The dynamic campus environment allows students to pursue both academic and personal interests, creating a well-rounded college experience.'
                sectionImg.src = 'imgs/life.jpg'
            } else if (info === 'aid') {
                currentSection = 'aid'
                sectionTitle.innerText = 'BIG TITLE GOES HERE (aid)'
                sectionPara.innerHTML = 'For NJ residents, tuition is $17,250, and with Room & Board the total is $33,324. Out of state tuition is $36,762 and with Room & Board the total is $52,836. See <a href="https://scarlethub.rutgers.edu/financial-services/" target="_blank">this website<a> for any financial needs you may have.'
                sectionImg.src = 'imgs/aid.png'
            }
        }, 500);

        setTimeout(() => {
            sectionTitle.classList.remove('fade-anim')
            sectionPara.classList.remove('fade-anim')
            sectionImg.classList.remove('fade-anim')
        }, 1000);

        document.querySelectorAll('.btn-primary').forEach(element => element.classList.remove('enabled'))
        document.querySelectorAll('.btn-primary').forEach(element => element.classList.add('disabled'))
        setTimeout(() => {
            document.querySelectorAll('.btn-primary').forEach(element => element.classList.remove('disabled'))
            document.querySelectorAll('.btn-primary').forEach(element => element.classList.add('enabled'))
        }, 800);
    }
} 