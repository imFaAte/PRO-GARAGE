const dots = document.querySelectorAll('.slider-dots');

const DOT_ARRAY = [];

for(const element of Array.from(dots[0].children)) {
   DOT_ARRAY.push(element);
}

const toggleDot = (index) => {
    for(let i = 0; i < DOT_ARRAY.length; i++) {
        if(i === index) {
            DOT_ARRAY[i].classList.add('active');
        } else {
            DOT_ARRAY[i].classList.remove('active');
        }
    }
}

toggleDot(0);

const TOTAL_TESTIMONIAL_COUNT = 6;
let currentTestimonialIndex = 1;

const buttonPrev = document.getElementById('dot-button-prev');
const buttonNext = document.getElementById('dot-button-next');

const grid = document.getElementById('testimonial-grid');

buttonPrev.addEventListener('click', () => {
    if(currentTestimonialIndex > 1) {
        grid.scrollBy({
            left: -360,
            behavior: 'smooth'
        });

        --currentTestimonialIndex;
        toggleDot(currentTestimonialIndex - 1);
    }
});

buttonNext.addEventListener('click', () => {
    if(currentTestimonialIndex + 1 < TOTAL_TESTIMONIAL_COUNT - 1) {
        grid.scrollBy({
            left: 360,
            behavior: 'smooth'
        });
    
        toggleDot(currentTestimonialIndex);
        ++currentTestimonialIndex;
    }
});