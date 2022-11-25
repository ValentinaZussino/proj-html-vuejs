<template>
    <div class="position-relative overflow-hidden">
        <div class="carousel-container" ref="carousel" @mouseover="stop" @mouseleave="start">
            <div class="carousel-card" v-for="(slide, index) in slides" :key="slide.id" :style="{width : `calc(100% / ${numbImg})`}">
                <img :src="slide.img" alt="" class="h-100">
                <div class="vz_overlay" v-if="overlay">
                    <div class="add-details">
                        <span><i class="fa-solid fa-cart-shopping pe-2"></i>Add to cart</span>
                        <span><i class="fa-solid fa-bars pe-2"></i>Details</span>
                    </div>
                </div>
            </div>
        </div>
        <!-- arrows -->
        <div class="left-arrow" @click="scrollLeft()" @mouseover="stop" @mouseleave="start"><i class="fa-solid fa-chevron-left"></i></div>
        <div class="right-arrow" @click="scrollRight()" @mouseover="stop" @mouseleave="start"><i class="fa-solid fa-chevron-right"></i></div>
    </div>
</template>

<script>
    export default {
        name: 'CarouselComponent',
        data() {
            return {
                counter: 0,
                max: this.slides.length - this.numbImg,
                myInterval: null
            }
        },
        props: {
            slides: Array,
            numbImg: String,
            overlay: Boolean,
            auto: Boolean
        },
        methods: {
            scrollRight(){
                if(this.counter < this.max){
                    this.counter++ ;
                    this.$nextTick(()=>{
                        this.$refs.carousel.style.transform = `translateX(calc(-100% / ${this.numbImg} * ${this.counter}))`;
                    });
                } else {
                    this.counter = 0 ;
                    this.$nextTick(()=>{
                        this.$refs.carousel.style.transform = null;
                    });
                }
            },
            scrollLeft(){
                if(this.counter > 0){
                    this.counter-- ;
                    this.$nextTick(()=>{
                        this.$refs.carousel.style.transform = `translateX(calc(-100% / ${this.numbImg} * ${this.counter}))`;
                    });
                } else {
                    this.$nextTick(() => { 
                        this.$refs.carousel.style.transform = `translateX(80px)`; 
                        setTimeout(() => this.$refs.carousel.style.transform = null, 200);
                    });
                }
            },
            stop(){
                clearInterval(this.myInterval)
            },
            start(){
                if(this.auto){
                    this.myInterval = setInterval(() => this.scrollRight(), 3500);
                }
            }
        },
        mounted(){
            if(this.auto){
               this.myInterval = setInterval(() => this.scrollRight(), 3500);
            }
        }
    }
</script>

<style lang="scss" scoped>
@use '../assets/style/partials/variables' as *;
@use '../assets/style/partials/mixins' as *;
.carousel-container {
            width: 100%;
            display: flex;
            transition: 1s;

            .carousel-card {
                // width: calc(100% / 5);
                position: relative;
                flex-shrink: 0;

                .vz_overlay {
                position: absolute;
                bottom: 0;
                left: 0;
                height: 0;
                width: 100%;
                background: linear-gradient(rgba(82, 136, 211, 0.855), rgba(253, 148, 110, 0.855));
                opacity: 0;
                transition: opacity 0.5s, height 0.5s;
                transition-timing-function: ease-in-out;

                    .add-details{
                        position:absolute;
                        top: 50%;
                        left: 50%;
                        transform: translate(-50%, -50%);
                        color: $white;
                        text-align: center;
                        font-size: 13px;

                        span { display: block; margin-bottom: 15px;}
                    }
                }

                &:hover .vz_overlay {
                    height: 100%;
                    opacity: 1;
                }
            }

        }
        .left-arrow {
            width: 40px;
            height: 40px;
            background-color: rgba(0, 0, 0, 0.503);
            border-radius: 3px;
            color: white;
            text-align: center;
            line-height: 40px;
            position: absolute;
            top: 50%;
            left: 0;
            transform: translate(0, -50%);
            cursor: pointer;
        }
        .right-arrow {
            width: 40px;
            height: 40px;
            background-color: rgba(0, 0, 0, 0.503);
            border-radius: 3px;
            color: white;
            text-align: center;
            line-height: 40px;
            position: absolute;
            top: 50%;
            right: 0;
            transform: translate(0, -50%);
            cursor: pointer;
        }
</style>