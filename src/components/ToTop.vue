<template>
    <div class="to-top" @click="scrollToTop()">
        <i class="fa-sharp fa-solid fa-chevron-up"></i>
    </div>
</template>

<script>
    export default {
        name: 'ToTop',
        data (){
            return {
                isTop: false
            }
        },
        methods: {
            scrollToTop() {
                window.scrollTo(0, 0);
            },
        },
        mounted(){
            window.addEventListener('scroll', () => {
                let scrollPos = window.scrollY
                if(scrollPos >= 100){
                    this.isTop = true
                } else {
                    this.isTop = false
                }
            })
        }
    }
</script>

<style lang="scss" scoped>
@use '../assets/style/partials/variables' as *;
.to-top {
    position: fixed;
    bottom: -10px;
    right: 15px;
    width: 40px;
    height: 40px;
    border-radius: 5px;
    color: $textgraycolor;
    text-align: center;
    line-height: 35px;
    background-color: rgba(0, 0, 0, 0.503);
    cursor: pointer;

    &:hover {
        transform: scale(1.1);
    }
}
</style>