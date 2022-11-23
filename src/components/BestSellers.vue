<template>
    <section>
        <div class="vz_container ">
            <div class="section-title">
                <h3>Best Sellers</h3>
                <p>Must have products from our top sellers</p>
            </div>
            <!-- carousel -->
            <div class="carousel-container">
                <div class="carousel-card" v-for="(slide, index) in store.previewWomenCards">
                    <img :src="slide.img" alt="" class="h-100">
                </div>
                <!-- arrows -->
                <div class="left-arrow">a</div>
                <div class="right-arrow">a</div>
            </div>
        </div>
    </section>
</template>

<script>
import {store} from '../store';
    export default {
        name: 'BestSellers',
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
    height: 420px;

    div.vz_container {
        border-top: 2px solid $lightgray;
        padding-top: 100px;
        margin: 70px auto;
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
            border: 1px solid green;

            p {
                font-size: 13px;
            }
        }

        .carousel-container {
            width: 100%;
            // height: 80%;
            display: flex;
            position: relative;
            border: 1px solid red;

            .carousel-card {
                width: calc(100% / 5);
                border: 1px solid blue;
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
}
</style>