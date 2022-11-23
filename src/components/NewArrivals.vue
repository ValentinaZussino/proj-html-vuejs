<template>
    <section>
        <div class="vz_container ">
            <div class="section-title">
                <h3>New Arrivals</h3>
                <p>Brand new products from top designers</p>
            </div>
        </div>
        <!-- carousel -->
        <div class="position-relative overflow-hidden">
            <div class="carousel-container" ref="carousel">
                <div class="carousel-card" v-for="(slide, index) in store.slideBestsellers">
                    <img :src="slide.img" alt="" class="h-100">
                    <div class="vz_overlay">
                        <div class="add-details">
                            <span><i class="fa-solid fa-cart-shopping pe-2"></i>Add to cart</span>
                            <span><i class="fa-solid fa-bars pe-2"></i>Details</span>
                        </div>
                    </div>
                </div>
            </div>
            <!-- arrows -->
            <div class="left-arrow" @click="scrollLeft()"><i class="fa-solid fa-chevron-left"></i></div>
            <div class="right-arrow" @click="scrollRight()"><i class="fa-solid fa-chevron-right"></i></div>
        </div>
    </section>
</template>

<script>
import {store} from '../store';
    export default {
        name: 'NewArrivals',
        data() {
            return {
                store,
                counter: 0
            }
        },
        methods: {
            scrollRight(){
                if(this.counter < 5){
                    this.counter++ ;
                    this.$nextTick(()=>{
                        this.$refs.carousel.style.transform = `translateX(calc(-20% * ${this.counter}))`;
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
                        this.$refs.carousel.style.transform = `translateX(calc(-20% * ${this.counter}))`;
                    });
                } else {
                    this.$nextTick(() => { 
                        this.$refs.carousel.style.transform = `translateX(80px)`; 
                        setTimeout(() => this.$refs.carousel.style.transform = null, 200);
                    });
                }
            }
        },
        mounted(){
            setInterval(()=> this.scrollRight(), 3500)
        }
    }
</script>

<style lang="scss" scoped>
@use '../assets/style/partials/variables' as *;
@use '../assets/style/partials/mixins' as *;

section {
    width: 100%;
    padding: 100px 0;

    div.vz_container {
        border-top: 2px solid $lightgray;
        padding-top: 100px;
        margin: 10px auto 25px auto;
        position: relative;

        .section-title {
            width: 35%;
            margin: 0 auto;
            text-align: center;
            background-color: $white;
            position: absolute;
            top: -20px;
            left: 50%;
            transform: translate(-50%);

            p {
                font-size: 13px;
            }
        }
    }
    .carousel-container {
        width: 100%;
        display: flex;
        transition: 1s;

        .carousel-card {
            width: calc(100% / 5);
            flex-shrink: 0;
            position: relative;
            cursor: pointer;

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
        width: 45px;
        height: 45px;
        background-color: rgba(0, 0, 0, 0.503);
        border-radius: 5px;
        color: white;
        text-align: center;
        line-height: 45px;
        position: absolute;
        top: 50%;
        left: 0;
        transform: translate(0, -50%);
        cursor: pointer;
    }
    .right-arrow {
        width: 45px;
        height: 45px;
        background-color: rgba(0, 0, 0, 0.503);
        border-radius: 5px;
        color: white;
        text-align: center;
        line-height: 45px;
        position: absolute;
        top: 50%;
        right: 0;
        transform: translate(0, -50%);
        cursor: pointer;
    }
}
</style>