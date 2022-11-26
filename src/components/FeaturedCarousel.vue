<template>
    <div class="featured">
        <!-- categories -->
        <div class="tabs-categories">
            <div v-for="(card, index) in featured" :key="index" @click="show = card.section" :class="{'bgr-white' : card.section == show}">
                {{card.section}}
            </div>
        </div>
        <!-- preview -->
        <div v-for="(cards, i) in featured" :key="i" >
            <div class="w-100 d-flex" v-if="show == cards.section">
                <!-- MEN -->
                <div class="preview-card col-lg-3 " v-for="(card,j) in cards.previewCards" :key="j">
                    <!-- img -->
                    <div class="preview-img">
                        <img :src="card.img" :alt="card.product">
                        <div class="vz_overlay">
                            <div class="add-details">
                                <span><i class="fa-solid fa-cart-shopping pe-2"></i>Add to cart</span>
                                <span><i class="fa-solid fa-bars pe-2"></i>Details</span>
                            </div>
                        </div>
                    </div>
                    <!-- description -->
                    <div class="preview-description">
                        <span class="prod-name">{{card.product}}</span>
                        <br>
                        <span class="prod-categ">{{card.categories}}</span>
                        <br>
                        <span class="prod-cost"><span class="oldcost" v-if="card.oldcost">&#36;{{card.oldcost}}</span> &#36;{{card.cost}}</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'FeaturedCarousel',
        data() {
            return {
                show: 'Men'
            }
        },
        props: {
            featured: Array
        }
    }
</script>

<style lang="scss" scoped>
@use '../assets/style/partials/variables' as *;
@use '../assets/style/partials/mixins' as *;
.featured {
    width: 100%;

    .tabs-categories {
        width: 35%;
        height: 40px;
        margin: 0 auto;
        @include dflex('center');
        border-top: 1px solid $lightgray;
        border-bottom: 1px solid $lightgray;
        border-left: 1px solid $lightgray;

        div {
            flex-grow: 1;
            height: 100%;
            text-align: center;
            font-size: 13px;
            font-weight: bold;
            line-height: 35px;
            background-color: $softgray;
            border-right: 1px solid $lightgray;
            cursor: pointer;

            &:hover {background-color: $white;}
        }
        .bgr-white {
            background-color: $white;
        }
    }
    .preview-card {
        padding-right: 20px;
        margin-top: 30px;
        
        .preview-img {
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
        .preview-description {
            padding-top: 10px;
            .prod-name {font-size: 13px; font-weight: bold; text-transform: capitalize;}
            .prod-categ {font-size: 11px;}
            .oldcost {font-size: 11px; text-decoration: line-through;}
            .prod-cost {font-size: 13px; color:$blue}
        }
    }
}
</style>