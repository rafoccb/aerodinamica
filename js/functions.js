window.addEventListener('scroll', onScroll)

onScroll()

function onScroll() {
  showNavOnScroll()
  showButtonOnScroll()

  activateMenuAtCurrentSection(home)
  activateMenuAtCurrentSection(classes)
  activateMenuAtCurrentSection(planes)
  activateMenuAtCurrentSection(links)
  activateMenuAtCurrentSection(testimonials)
  activateMenuAtCurrentSection(contact)
}

function activateMenuAtCurrentSection(section) {
  const targetLine = scrollY + innerHeight / 2

  const sectionTop = section.offsetTop
  const sectionHeight = section.offsetHeight

  const sectionTopReachOrPassedTargetLine = targetLine >= sectionTop


  const sectionEndsAt = sectionTop + sectionHeight

  const sectionEndPassedTargetLine = sectionEndsAt <= targetLine



  const sectionBoudaries =
    sectionTopReachOrPassedTargetLine && !sectionEndPassedTargetLine

  const sectionId = section.getAttribute('id')

  const menuElement = document.querySelector(`.menu a[href*=${sectionId}]`)

  menuElement.classList.remove('active')
  if (sectionBoudaries) {
    menuElement.classList.add('active')
  }
}

function showNavOnScroll() {
  if (scrollY > 0) {
    navigation.classList.add('scroll')
  } else {
    navigation.classList.remove('scroll')
  }
}

function showButtonOnScroll() {
  if (scrollY > 500) {
    backToTopButton.classList.add('show')
  } else {
    backToTopButton.classList.remove('show')
  }
}

function openMenu() {
  document.body.classList.add('menu-expanded')
}

function closeMenu() {
  document.body.classList.remove('menu-expanded')
}

ScrollReveal({
  reset: true,
  origin: 'bottom',
  distance: '30px',
  duration: 900
}).reveal(`
#home,
#home .home__image,
#home .home__us,
#classes,
#classes .classes__cards,
#classes .graduation,
#planes,
#planes .our__planes,
#links .links__cards,
#about img,
#testimonials,
#testimonials .slider,
#contact,
`)


/** 
 **** CAROUSEL ****
*/
const buttons = document.querySelectorAll("[data-carousel-button]")

buttons.forEach(button => {
  	button.addEventListener("click", () => {
    	const offset = button.dataset.carouselButton === "next" ? 1 : -1
    	const slides = button
    		.closest("[data-carousel]")
      		.querySelector("[data-slides]")

    	const activeSlide = slides.querySelector("[data-active]")
    	let newIndex = [...slides.children].indexOf(activeSlide) + offset
    	if (newIndex < 0) newIndex = slides.children.length - 1
    	if (newIndex >= slides.children.length) newIndex = 0

    	slides.children[newIndex].dataset.active = true
    	delete activeSlide.dataset.active
  	})
})

