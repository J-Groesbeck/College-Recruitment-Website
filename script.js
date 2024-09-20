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
                sectionTitle.innerText = 'BIG TITLE GOES HERE (academics)'
                sectionPara.innerText = 'academic Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse repellendus nulla nisi quos undeeaque, omnis delectus, suscipit iste voluptatibus facere maiores perspiciatis, similique minimamagni debitis aperiam iure odit.'
                sectionImg.src = 'imgs/academics.jpg'
            } else if (info === 'life') {
                currentSection = 'life'
                sectionTitle.innerText = 'BIG TITLE GOES HERE (life)'
                sectionPara.innerText = 'student life Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse repellendus nulla nisi quos undeeaque, omnis delectus, suscipit iste voluptatibus facere maiores perspiciatis, similique minimamagni debitis aperiam iure odit.'
                sectionImg.src = 'imgs/life.jpg'
            } else if (info === 'aid') {
                currentSection = 'aid'
                sectionTitle.innerText = 'BIG TITLE GOES HERE (aid)'
                sectionPara.innerText = 'financial aid Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse repellendus nulla nisi quos undeeaque, omnis delectus, suscipit iste voluptatibus facere maiores perspiciatis, similique minimamagni debitis aperiam iure odit.'
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