/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close')

/*===== MENU SHOW =====*/
if(navToggle){
    navToggle.addEventListener('click', () =>{
        navMenu.classList.add('show-menu')
    })
}

/*===== MENU HIDDEN =====*/
if(navClose){
    navClose.addEventListener('click', () =>{
        navMenu.classList.remove('show-menu')
    })
}

/*=============== REMOVE MENU MOBILE ===============*/
const navLink = document.querySelectorAll('.nav__link')

const linkAction = () =>{
    const navMenu = document.getElementById('nav-menu')
   
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

/*=============== CHANGE BACKGROUND HEADER ===============*/
const scrollHeader = () =>{
    const header = document.getElementById('header')
    
    this.scrollY >= 50 ? header.classList.add('bg-header') 
                       : header.classList.remove('bg-header')
}
window.addEventListener('scroll', scrollHeader)

/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const sections = document.querySelectorAll('section[id]')
    
const scrollActive = () =>{
  	const scrollY = window.pageYOffset

	sections.forEach(current =>{
		const sectionHeight = current.offsetHeight,
			  sectionTop = current.offsetTop - 58,
			  sectionId = current.getAttribute('id'),
			  sectionsClass = document.querySelector('.nav__menu a[href*=' + sectionId + ']')

		if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
			sectionsClass.classList.add('active-link')
		}else{
			sectionsClass.classList.remove('active-link')
		}                                                    
	})
}
window.addEventListener('scroll', scrollActive)

/*=============== SHOW SCROLL UP ===============*/ 
const scrollUp = () =>{
	const scrollUp = document.getElementById('scroll-up')
   
	this.scrollY >= 350 ? scrollUp.classList.add('show-scroll')
						: scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp)


/*=============== SCROLL REVEAL ANIMATION ===============*/


/*=============== CALCULATE JS ===============*/
const calculateForm = document.getElementById('calculate-form'),
      calculateCm = document.getElementById('calculate-cm'),
      calculateKg=document.getElementById('calculate-kg'),
      calculateMessage=document.getElementById('calculate-message')

const calculateBmi = (e) =>{
    e.preventDefault()
    
    if(calculateCm.value === '' || calculateKg.value === ''){
        
        calculateMessage.classList.remove('color-green')
        calculateMessage.classList.add('color-red')

        
        calculateMessage.textContent = 'Unesite visinu i težinu'

        
        setTimeout(() => {
            calculateMessage.textContent = ''
        }, 3000)
    }  else{
        
        const cm = calculateCm.value / 100,
              kg = calculateKg.value,
              bmi = Math.round(kg / (cm*cm))
        
        
        if(bmi < 18.5){
         
            calculateMessage.classList.add('color-green')
            calculateMessage.textContent = `Tvoj BMI je ${bmi} i ti si mršav`
        }else if(bmi < 25){
            calculateMessage.classList.add('color-green')
            calculateMessage.textContent = `Tvoj BMI je ${bmi} i ti si zdrav`
        }else{
            calculateMessage.classList.add('color-green')
            calculateMessage.textContent = `Tvoj BMI je ${bmi} i imaš viška kilograma`
        }

       
        calculateCm.value = ''
        calculateKg.value = ''

        
        setTimeout(() => {
            calculateMessage.textContent = ''
        }, 4000)
    }   
}

calculateForm.addEventListener('submit', calculateBmi);

let popup = document.getElementById("popup");

function openPopup(){
    popup.classList.add("open-popup");
}
function closePopup(){
    popup.classList.remove("open-popup");
}


let popup1 = document.getElementById("popup1");

function openPopup1(){
    popup1.classList.add("open-popup1");
}
function closePopup1(){
    popup1.classList.remove("open-popup1");
}

let popup2 = document.getElementById("popup2");

function openPopup2(){
    popup2.classList.add("open-popup2");
}
function closePopup2(){
    popup2.classList.remove("open-popup2");
}

let popup3 = document.getElementById("popup3");

function openPopup3(){
    popup3.classList.add("open-popup3");
}
function closePopup3(){
    popup3.classList.remove("open-popup3");
}