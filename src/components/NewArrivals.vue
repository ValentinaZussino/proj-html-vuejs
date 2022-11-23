<template>
    <section>
        <div class="vz_container ">
            <div class="section-title">
                <h3>New Arrivals</h3>
                <p>Brand new products from top designers</p>
            </div>
        </div>
        <!-- carousel -->
        <div class="carousel-container">
            <div class="carousel-card" v-for="(slide, index) in store.slideBestsellers">
                <img :src="slide.img" alt="" class="h-100">
            </div>
            <!-- arrows -->
            <div class="left-arrow">a</div>
            <div class="right-arrow">a</div>
        </div>
    </section>
</template>

<script>
import {store} from '../store';
    export default {
        name: 'NewArrivals',
        data() {
            return {
                store
            }
        },
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
            position: relative;

            .carousel-card {
                width: calc(100% / 5);
            }

            .left-arrow {
                width: 50px;
                height: 50px;
                background-color: rgba(0, 0, 0, 0.503);
                color: white;
                text-align: center;
                line-height: 50px;
                position: absolute;
                top: 50%;
                left: 0;
                transform: translate(0, -50%);
            }
            .right-arrow {
                width: 50px;
                height: 50px;
                background-color: rgba(0, 0, 0, 0.503);
                color: white;
                text-align: center;
                line-height: 50px;
                position: absolute;
                top: 50%;
                right: 0;
                transform: translate(0, -50%);
            }
        }
}
</style>