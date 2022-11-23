<template>
    <section>
        <div class="vz_container ">
            <div class="section-title">
                <h3>From our blog</h3>
                <p>The latest Classic Shop news</p>
            </div>
            <div class="w-100 d-flex">
                <div class="blog-card" v-for="(post, index) in store.blogPosts" :key="index">
                    <!-- img -->
                    <div class="w-100 blog-img"><img :src="post.img" :alt="post.title" class="w-100"></div>
                    <!-- description -->
                    <div class="blog-description">
                        <span class="blog-title">{{post.title}}</span>
                        <div class="date-comments">    
                            <span>{{post.date}} | </span><span>{{post.comments}}</span>
                        </div>
                        <p class="blog-intro">{{post.intro}}</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
import {store} from '../store'
    export default {
        name: 'OurBlog',
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

    div.vz_container {
        border-top: 2px solid $lightgray;
        margin: 70px auto;
        padding-top:  100px;
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
        .blog-card {
            padding: 0 7px;
            width: calc(100% / 3);
            .blog-img{
                overflow: hidden;
                
                img {
                transition: 1s ease-in-out;

                    &:hover {
                        transform: scale(1.2);
                        opacity: 0.95;
                    }
                }
            }
            .blog-description {
                padding-top: 10px;

                .blog-title {font-size: 13px; font-weight: bold;}
                .date-comments {font-size: 11px; color: $textgraycolor; margin-bottom: 10px;}
                .blog-intro {font-size: 12px; color: $textgraycolor;}
            }
        }
    }
}
</style>