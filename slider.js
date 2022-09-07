class Slider extends HTMLElement{
    constructor(){
        super()
    }

    connectedCallback() {
        this.prevBtn = this.querySelector(".prev")
        this.prevBtn.addEventListener("click", this.prevBtnFunc.bind(this, -1))
        this.nextBtn = this.querySelector(".next")
        this.nextBtn.addEventListener("click", this.prevBtnFunc.bind(this, 1))


        this.slider = this.querySelector(".rh-slider")
        this.slides = this.querySelectorAll(".rh-slide")

        this.config = {
            active: 0,
            previous: this.slides.length-1 || 0,
            length: this.slides.length-1 || 0
        }
    }

    prevBtnFunc(value, event) {
        this.config.active += value
        this.config.active > this.config.length ? this.config.active = 0 : this.config.active < 0 ? this.config.active = this.config.length : this.config.active
        this.sliderFunc()
    }

    sliderFunc(){
        this.slides.forEach((slide, index, arr) => {
            let prev = slide.classList.contains("active-rh") && slide.classList.add("previous-active-rh")
    
            // if(this.config.active === index){
            //     slide.classList.add("active-rh")
            //     // slide.classList.remove("previous-active-rh")
            // } 
            // else {
            //     slide.classList.remove("active-rh")
            //     slide.classList.remove("previous-active-rh")
            // }
        })
    }

}

customElements.define("rh-slider-content", Slider)