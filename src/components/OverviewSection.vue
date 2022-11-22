<template>
    <section>
        <div class="vz_container">
            <div class="overview-col">
                <!-- featured -->
                <span class="title">featured</span>
                <div class="vz_block" v-for="(feature, index) in store.featuredOverview" :key="index">
                    <!-- description -->
                    <div class="block-descrip">
                        <span class="block-prod">{{feature.product}} </span>
                        <div v-if="feature.rate">
                            <span class="block-stars fa-star fa-solid" v-for="n in 5"></span>
                        </div>
                        <span class="block-oldcost" v-if="feature.oldcost"> &#36;{{feature.oldcost}} </span>
                        <span class="block-cost"> &#36;{{feature.cost}}</span>
                    </div>
                    <!-- img -->
                    <div class="block-img">
                        <img :src="feature.img" alt="" class="h-100">
                    </div>
                </div>
            </div>
            <div class="overview-col">
                <!-- on sale -->
                <span class="title">on sale</span>
                <div class="vz_block" v-for="(sale, index) in store.onsaleOverview" :key="index">
                    <!-- description -->
                    <div class="block-descrip">
                        <span class="block-prod">{{sale.product}} </span>
                        <div v-if="sale.rate">
                            <span class="block-stars fa-star fa-solid" v-for="n in 5"></span>
                        </div>
                        <span class="block-oldcost" v-if="sale.oldcost"> &#36;{{sale.oldcost}} </span>
                        <span class="block-cost"> &#36;{{sale.cost}}</span>
                    </div>
                    <!-- img -->
                    <div class="block-img">
                        <img :src="sale.img" alt="" class="h-100">
                    </div>
                </div>
            </div>
            <div class="overview-col">
                <!-- top rated -->
                <span class="title">top rated</span>
                <div class="vz_block" v-for="(rated, index) in store.ratedOverview" :key="index">
                    <!-- description -->
                    <div class="block-descrip">
                        <span class="block-prod">{{rated.product}} </span>
                        <div v-if="rated.rate">
                            <span class="block-stars fa-star fa-solid" v-for="n in 5"></span>
                        </div>
                        <span class="block-oldcost" v-if="rated.oldcost"> &#36;{{rated.oldcost}} </span>
                        <span class="block-cost"> &#36;{{rated.cost}}</span>
                    </div>
                    <!-- img -->
                    <div class="block-img">
                        <img :src="rated.img" alt="" class="h-100">
                    </div>
                </div>
            </div>
            <div class="overview-col">
                <!-- latest reviews -->
                <span class="title">latest reviews</span>
                <div class="vz_block" v-for="(review, index) in store.reviewsOverview" :key="index">
                    <!-- description -->
                    <div class="block-descrip">
                        <span class="block-prod">{{review.product}} </span>
                        <div v-if="review.rate">
                            <span class="block-stars fa-star fa-solid" v-for="n in 5"></span>
                        </div>
                        <span class="block-oldcost" v-if="review.oldcost"> &#36;{{review.oldcost}} </span>
                        <span class="block-cost"> &#36;{{review.cost}}</span>
                    </div>
                    <!-- img -->
                    <div class="block-img">
                        <img :src="review.img" alt="" class="h-100">
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
import {store} from '../store';
    export default {
        name: 'OverviewSection',
        data() {
            return {
                store
            }
        }
    }
</script>

<style lang="scss" scoped>
@use '../assets/style/partials/variables' as *;
@use '../assets/style/partials/mixins' as *;

section{
    width: 100%;
    border-top: 2px solid $lightgray;

    div.vz_container {
        margin: 0 auto;
        padding: 40px 0 50px 0;
        display: flex;

        .overview-col {
            margin-right: 20px;
            width: calc((100% / 4) - 20px);

            &:last-of-type {
                margin-right: 0;
            }

            span.title {
                display: inline-block;
                text-transform: uppercase;
                font-size: 12px;
                color: $textgraycolor;
                letter-spacing: 1.1px;
                margin-bottom: 8px;
            }

            .vz_block {
                display:flex;
                height: 80px;
                padding: 5px 0;
                border-bottom: 2px solid $lightgray;

                .block-descrip {
                    width: 70%;

                    .block-prod{
                        font-size: 12px;
                        text-transform: capitalize;
                    }
                    .block-stars {
                        font-size: 12px;
                        color: $blue;
                    }
                    .block-oldcost {
                        font-size: 11px;
                        text-decoration: line-through;
                    }
                    .block-cost {
                        font-size: 12px;
                        font-weight: bold;
                        text-decoration: underline;
                    }
                }
            }
        }
    }
}

</style>