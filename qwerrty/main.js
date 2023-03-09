const slider = document.querySelector('.slider')
const scrollOne = document.querySelector('.scroll-1')
const scrollTwo = document.querySelector('.scroll-2')
const scrollThree = document.querySelector('.scroll-3')


scrollTwo.addEventListener('click', ()=> {
    slider.classList.add('active');
    console.log("hiwhiiooo")
    slider.classList.remove('show')
})

scrollThree.addEventListener('click', ()=> {
    console.log("hgfghfghfgh")
    slider.classList.add('active','show');
})

scrollOne.addEventListener('click', ()=> {
    console.log("hgfghffgh")
    slider.classList.remove('active', 'show');
})

////////////////////////////////////////////// SLIDER-2



const tesslider = document.querySelector('.testomonial-slider')
const scroll1 = document.querySelector('.scroll-one')
const scroll2 = document.querySelector('.scroll-two')
const scroll3 = document.querySelector('.scroll-three')


scroll2.addEventListener('click', ()=> {
    tesslider.classList.add('active2');
    console.log("hiwhiiooqqo")
    tesslider.classList.remove('show2')
})

scroll3.addEventListener('click', ()=> {
    console.log("hgfghqqfghfgh")
    tesslider.classList.add('active2','show2');
})

scroll1.addEventListener('click', ()=> {
    console.log("hgfghfqqfgh")
    tesslider.classList.remove('active2', 'show2');
})
