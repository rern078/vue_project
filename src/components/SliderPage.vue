<template>
    <div class="main_slider">
        <div class="slider">
            <div class="slide" :style="{ transform: `translateX(${currentIndex * -100}%)` }">
                <img v-for="(slide, index) in slides" :key="index" :src="slide" class="slide-item" alt="slide">
            </div>
            <button @click="prev" class="prev-btn btn_animate"><i class="fas fa-chevron-left"></i></button>
            <button @click="next" class="next-btn btn_animate"><i class="fas fa-chevron-right"></i></button>
        </div>
    </div>
    <div class="main text_run">
        <div class="main_w text_animation ">
            <marquee class="textrun" onmouseout="this.start()" onmouseover="this.stop()" behavior="scroll" loop=""
                scrollamount="5">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis ipsum architecto incidunt animi quis mollitia debitis. Quod fuga numquam fugit corrupti sequi odit aliquam, pariatur, distinctio similique autem accusamus velit!</p>
            </marquee>
        </div>
    </div>
</template>

<script>
export default {
    name: 'SliderPage',
    data() {
        return {
            slides: [
                "https://855tech-desktop.s3.ap-east-1.amazonaws.com/content/design1/images/light/4.jpg",
                "https://855tech-desktop.s3.ap-east-1.amazonaws.com/content/design1/images/light/1.jpg",
                "https://855tech-desktop.s3.ap-east-1.amazonaws.com/content/design1/images/light/2.jpg",
                "https://855tech-desktop.s3.ap-east-1.amazonaws.com/content/design1/images/light/3.jpg"
            ],
            currentIndex: 0,
            intervalId: null,
            intervalTime: 2000 // Interval time in milliseconds
        };
    },
    created() {
        this.startAutoSlide();
    },
    // destroyed() {
    //     this.stopAutoSlide();
    // },
    methods: {
        next() {
            this.currentIndex = (this.currentIndex + 1) % this.slides.length;
        },
        prev() {
            this.currentIndex = (this.currentIndex - 1 + this.slides.length) % this.slides.length;
        },
        startAutoSlide() {
            this.intervalId = setInterval(() => {
                this.next();
            }, this.intervalTime);
        },
        stopAutoSlide() {
            clearInterval(this.intervalId);
        }
    }
};
</script>
