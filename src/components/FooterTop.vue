<template>
    <section>
        <div class="vz_container">
            <!-- info -->
            <div class="avada-info">
                <div class="lg-foot">
                    <img src="/img/classic_shop_logo_footer.png" alt="" class="h-100">
                </div> 
                <!-- address -->
                <div class="info-addr">
                    <span>12345 North Main Street, New York, NY 55555</span>
                    <span>Phone:010101010</span>
                    <span>Email: info@mail.com</span>
                    <span>Web: Theme-Fusion.com</span>
                </div>
                <!-- icons -->
                <div>
                    <i class="fa-brands fa-facebook-f pe-3"></i>
                    <i class="fa-brands fa-twitter pe-3"></i>
                    <i class="fa-brands fa-instagram pe-3"></i>
                    <i class="fa-brands fa-youtube pe-3"></i>
                </div>
            </div>
            <!-- top rated -->
            <div class="top-rated">
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
            <!-- recent posts -->
            <div class="posts">
                <span class="title">recent posts</span>
                <div class="recent-post">&#8250; Aenean lobortis sapien enim viverra</div>
                <div class="recent-post">&#8250; Duis ac massa semper maximus</div>
                <div class="recent-post">&#8250; Nunc fermint nulla eu justo sem id</div>
                <div class="recent-post">&#8250; Aenean lobortis sapien enim viverra</div>
                <div class="recent-post">&#8250; Duis ac massa semper maximus</div>
                <div class="recent-post">&#8250; Nunc fermint nulla eu justo sem id</div>
            </div>
            <!-- tags -->
            <div class="tags">
                <span class="title">tags</span>
                <div class="wrap-tags">
                    <span class="tag-box">black</span>
                    <span class="tag-box">summer</span>
                    <span class="tag-box">boots</span>
                    <span class="tag-box">casual</span>
                    <span class="tag-box">outdoor</span>
                    <span class="tag-box">brown</span>
                    <span class="tag-box">flowers</span>
                    <span class="tag-box">gray</span>
                    <span class="tag-box">red</span>
                    <span class="tag-box">winter</span>
                    <span class="tag-box">hipster</span>
                    <span class="tag-box">hat</span>
                    <span class="tag-box">black</span>
                    <span class="tag-box">summer</span>
                    <span class="tag-box">boots</span>
                    <span class="tag-box">flowers</span>
                    <span class="tag-box">gray</span>
                    <span class="tag-box">red</span>
                    <span class="tag-box">winter</span>
                    <span class="tag-box">hipster</span>
                    <span class="tag-box">outdoor</span>
                    <span class="tag-box">brown</span>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
import {store} from '../store.js';
    export default {
        name: 'FooterTop',
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
    background-color: $midgray;
    color: $white;

    div.vz_container {
        height: 100%;
        margin: 0 auto;
        padding: 40px 0;
        display: flex;

        .avada-info {
            @include dflex-column;
            width: 23%;
            padding-right: 7%;
            height: 100px;

            .lg-foot {
                height: 40px;
            }
            .info-addr {
                font-size: 12px;
                line-height: 1.8;
                margin: 30px 0;

                span {display: inline-block;}
            }
            
            i {
                transition: 0.5s;
                cursor: pointer;

                &:hover {
                    transform: scale(1.2);
                }
            } 
        }

        .title {
                display: inline-block;
                text-transform: uppercase;
                font-size: 12px;
                letter-spacing: 1.1px;
                margin-bottom: 8px;
            }
        .top-rated {
            width: 23%;
            margin-right: 20px;
            
            .vz_block {
                display:flex;
                height: 90px;
                padding: 8px 0;
                border-bottom: 1px solid $textgraycolor;

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
                    }
                }
            }
        }
        .posts {
            width: 23%;
            margin-right: 20px;
            .recent-post{
                font-size: 12px;
                border-bottom: 1px solid $textgraycolor;
                padding: 10px 0;
                cursor: pointer;

                &:hover {
                    background-color: $gray;
                }
            }
        }
        .tags {
            width: 23%;
            .wrap-tags {
                display: flex;
                flex-wrap: wrap;
              .tag-box {
                    font-size: 12px;
                    text-transform: capitalize;
                    padding: 5px;
                    border-radius: 3px;
                    border: 1px solid $textgraycolor;
                    margin-bottom: 5px;
                    margin-right: 5px;
                    cursor: pointer;

                    &:hover {
                        background-color: $blue;
                    }
                }   
            }
           
        }
    }
}

</style>