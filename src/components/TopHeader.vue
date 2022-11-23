<template>
    <div class="vz_container top-header">
        <!-- header top left -->
        <div class="header-icons">
            <i class="fa-brands fa-facebook-f pe-3"></i>
            <i class="fa-brands fa-twitter pe-3"></i>
            <i class="fa-brands fa-instagram pe-3"></i>
            <i class="fa-brands fa-youtube pe-3"></i>
        </div>

        <!-- header top right -->
        <nav>
            <div class="text-capitalize"><a href="#">shopping cart</a></div>
            <div class="text-capitalize">my account<i class="fa-solid fa-chevron-down ps-2"></i></div>
            <div class="text-uppercase"><i class="fa-solid fa-cart-shopping pe-2"></i>cart<i class="fa-solid fa-chevron-down ps-2"></i></div>
        </nav>
    </div>
</template>

<script>
    export default {
        name: 'TopHeader'
    }
</script>

<style lang="scss" scoped>
@use '../assets/style/partials/variables' as *;
@use '../assets/style/partials/mixins' as *;
.top-header{
    @include dflex('between');
    height: 100%;
    margin: 0 auto;
    // border: 1px solid red;

    .header-icons, nav {
        @include dflex('center');
        height: 100%;
    }
    .header-icons {
        color: $textgraycolor;
        font-size: 14px;

        i {
            transition: 0.5s;
            cursor: pointer;

            &:hover {
                transform: scale(1.2);
            }
        }
    }
    nav {
        color: rgb(144, 146, 141);
        font-size: 10px;

        div {
            height: 100%;
            @include dflex('center');
            padding: 13px 10px;
            border-right: 1px solid $lightgray;

            a {color:rgb(144, 146, 141)}

            i {font-size: 10px;}
        }

        div:last-of-type {
            color: $black;
            background-color: $softgray;
            padding-left: 45px;
            padding-right: 45px;
            border:none;
        }
    }
}
</style>