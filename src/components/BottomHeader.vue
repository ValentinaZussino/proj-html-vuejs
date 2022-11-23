<template>
    <div class="vz_container bottom-header">
        <!-- header bottom left -->
        <div class="logo-header"><img src="/img/classic_shop_logo1x.png" alt="logo avada shop"></div>
        <!-- header bottom right -->
        <div class="nav-bottom-header">
            <nav>
                <ul class="main-ul">
                    <li class="main-li" v-for="(link, index) in store.navLink" :key="index" @mouseover="link.hover = true"
                        @mouseleave="link.hover = false"><a href="#">{{link.title}}</a><i class="fa-solid fa-chevron-down ps-2" v-if="link.title != 'News'"></i>
                        <div class="dropd" v-if="link.hover">
                            <ul class="child-ul">
                                <li class="child-li" v-for="(item, index) in link.links" :key="index"><a href="">{{item}}</a></li>
                            </ul>
                        </div>
                    </li>
                </ul>
            </nav>
            <button class="blue-btn">shop now&#x21;</button>
            <button class="search-btn"><i class="fa-solid fa-magnifying-glass"></i></button>
        </div>
    </div>
</template>

<script>
import {store} from '../store'
    export default {
        name: 'BottomHeader',
        data(){
            return {
                store,
                hover: false
            }
        }
    }
</script>

<style lang="scss" scoped>
@use '../assets/style/partials/variables' as *;
@use '../assets/style/partials/mixins' as *;

.bottom-header {
    @include dflex('between');
    height: 100%;
    margin: 0 auto;
    .logo-header {
        height: 100%;
        width: 130px;
        @include dflex-base;
    }

    .nav-bottom-header {
        height: 100%;
        @include dflex-base;

        nav {
            height: 100%;
            line-height: 100px;

            .main-ul {
                height: 100%;
                @include dflex('center');

                .main-li {
                    height: 100%;
                    margin: 0 17px;
                    position: relative;

                    a {
                        color: $textgraycolor;
                        font-size: 13px;
                    }

                    i { font-size: 11px;}

                    &:hover a, &:hover i {
                        color: $blue
                    }

                    &:first-of-type {
                        border-top: 3px solid $blue;
                        color: $blue;

                        a { color: $blue}
                    }

                    div.dropd {
                        position: absolute;
                        top: 75px;
                        left: 0;
                        width: 130px;
                        line-height: 1;
                        z-index: 999;
                        border-radius: 5px;
                        background-color: $white;
                        overflow: hidden;

                        ul {
                            padding: 0;
                            
                           .child-li{
                                padding: 10px 12px;

                                &:hover {
                                    background-color: $softgray;
                                }
                                
                                a {
                                    text-transform: capitalize;
                                    color: $textgraycolor;
                                    font-size: 13px;
                                }
                           } 
                        }
                    }
                }
            }
        }

        button.blue-btn {
            margin: 0 12px;
        }
        .search-btn {
            background-color: transparent;
            font-size: 13px;
            padding-left: 10px;
            border: none;
        }
    }
}

</style>