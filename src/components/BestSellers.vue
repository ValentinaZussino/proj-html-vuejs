<template>
    <section>
        <div class="vz_container ">
            <div class="section-title">
                <h3>Best Sellers</h3>
                <p>Must have products from our top sellers</p>
            </div>
            <!-- carousel -->
            <CarouselComponent :slides="store.slideBestsellers" numb-img="5"/>
        </div>
    </section>
</template>

<script>
import { nextTick } from 'vue';
import {store} from '../store';
import CarouselComponent from './CarouselComponent.vue';
    export default {
    name: "BestSellers",
    data() {
        return {
            store,
            // counter: 0
        };
    },
    // methods: {
    //     scrollRight(){
    //         if(this.counter < 5){
    //             this.counter++ ;
    //             this.$nextTick(()=>{
    //                 this.$refs.carousel.style.transform = `translateX(calc(-20% * ${this.counter}))`;
    //             });
    //         } else {
    //             this.counter = 0 ;
    //             this.$nextTick(()=>{
    //                 this.$refs.carousel.style.transform = null;
    //             });
    //         }
    //     },
    //     scrollLeft(){
    //         if(this.counter > 0){
    //             this.counter-- ;
    //             this.$nextTick(()=>{
    //                 this.$refs.carousel.style.transform = `translateX(calc(-20% * ${this.counter}))`;
    //             });
    //         } else {
    //             this.$nextTick(() => { 
    //                 this.$refs.carousel.style.transform = `translateX(80px)`; 
    //                 setTimeout(() => this.$refs.carousel.style.transform = null, 200);
    //             });
    //         }
    //     }
    // },
    mounted() {
    },
    components: { CarouselComponent }
}
</script>

<style lang="scss" scoped>
@use '../assets/style/partials/variables' as *;
@use '../assets/style/partials/mixins' as *;

section {
    width: 100%;

    div.vz_container {
        border-top: 2px solid $lightgray;
        padding-top: 100px;
        margin: 100px auto;
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

        // .carousel-container {
        //     width: 100%;
        //     display: flex;
        //     transition: 1s;

        //     .carousel-card {
        //         width: calc(100% / 5);
        //         flex-shrink: 0;
        //     }
        // }
        // .left-arrow {
        //     width: 40px;
        //     height: 40px;
        //     background-color: rgba(0, 0, 0, 0.503);
        //     border-radius: 3px;
        //     color: white;
        //     text-align: center;
        //     line-height: 40px;
        //     position: absolute;
        //     top: 50%;
        //     left: 0;
        //     transform: translate(0, -50%);
        //     cursor: pointer;
        // }
        // .right-arrow {
        //     width: 40px;
        //     height: 40px;
        //     background-color: rgba(0, 0, 0, 0.503);
        //     border-radius: 3px;
        //     color: white;
        //     text-align: center;
        //     line-height: 40px;
        //     position: absolute;
        //     top: 50%;
        //     right: 0;
        //     transform: translate(0, -50%);
        //     cursor: pointer;
        // }
    }
}
</style>