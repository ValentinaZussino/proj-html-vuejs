<template>
    <section>
        <div class="vz_container ">
            <div class="section-title">
                <h3>From our blog</h3>
                <p>The latest Classic Shop news</p>
            </div>
            <div class="w-100 d-flex">
                <div class="blog-card ">
                    <!-- img -->
                    <div class="w-100"><img src="/img/post_img_12-320x202.jpg" alt="" class="w-100"></div>
                    <!-- description -->
                    <div class="blog-description">
                        <span class="blog-title">hahah</span>
                        <div class="date-comments">    
                            <span>hohoh |</span><span> hihih</span>
                        </div>
                        <p class="blog-intro">eheheh</p>
                    </div>
                </div>
                <div class="blog-card middle-card">
                    <!-- img -->
                    <div class="w-100"><img src="/img/post_img_11-320x202.jpg" alt="" class="w-100"></div>
                    <!-- description -->
                    <div class="blog-description">
                        <span class="blog-title">hahah</span>
                        <div class="date-comments">    
                            <span>hohoh |</span><span> hihih</span>
                        </div>
                        <p class="blog-intro">eheheh</p>
                    </div>
                </div>
                <div class="blog-card ">
                    <!-- img -->
                    <div class="w-100"><img src="/img/post_img_10-320x202.jpg" alt="" class="w-100"></div>
                    <!-- description -->
                    <div class="blog-description">
                        <span class="blog-title">hahah</span>
                        <div class="date-comments">    
                            <span>hohoh |</span><span> hihih</span>
                        </div>
                        <p class="blog-intro">eheheh</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
    export default {
        name: 'OurBlog',
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
        border: 1px solid red;

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
        .blog-card {
            width: calc(100% / 3);
            border: 1px solid green;
            
            .blog-description {
                padding-top: 10px;

                .blog-title {font-size: 13px; font-weight: bold; text-transform: capitalize;}
                .date-comments {font-size: 11px; color: $textgraycolor; margin-bottom: 10px;}
                .blog-intro {font-size: 13px; color: $textgraycolor;}
            }
        }
        .middle-card {
            margin: 0 10px;
        }
    }
}
</style>