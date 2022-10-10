export default class Slider {
    constructor(id){
        this.slider = document.querySelector(`.${id}`);
        this.sliderContainer = document.querySelector(`.${id}_container`); 
        this.ImagesLength = this.sliderContainer.children.length;
        this.currentImage = 0;
        this.dots = document.querySelector(`.${id}_dots_list`).children;
        this.next = document.querySelector(`.${id} .chevron_right`)
        this.prev = document.querySelector(`.${id} .chevron_left`)

        this.listeners();

        this.autoSlider(3000);
    }

    moveSlides() {
        this.sliderContainer.style.transform = `translateX(-${this.currentImage * this.slider.offsetWidth}px)`;
        Array.from(this.dots).forEach(dot => dot.classList.remove('active'));
        this.dots[this.currentImage].classList.add('active');
    }

    nextImage() {
        this.currentImage = this.currentImage >= this.ImagesLength - 1 ? 0 : this.currentImage + 1;
        this.moveSlides();
    }

    prevImage() {
        this.currentImage = this.currentImage <= 0 ? this.ImagesLength - 1 : this.currentImage - 1;
        this.moveSlides();
    }

    listeners(){
        this.next.addEventListener('click', this.nextImage.bind(this))
        this.prev.addEventListener('click', this.prevImage.bind(this))
    }
    
    autoSlider(transition){
        setInterval(this.nextImage.bind(this), transition);
    }
}