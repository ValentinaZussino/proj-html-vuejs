<template>
    <section>
        <!-- central container -->
        <div class="new-collection-jumbo" v-if="counter == 0">
            <h1>brand new arrivals</h1>
            <p>new collection from newyork</p>
            <div>
                <button class="transp-btn-jumbo">view all</button>
                <button class="transp-btn-jumbo">lookbook</button>
            </div>
        </div>
        <div class="new-collection-jumbo" v-if="counter == 1">
            <h1>hole</h1>
            <p>new collection from newyork</p>
            <div>
                <button class="transp-btn-jumbo">view all</button>
                <button class="transp-btn-jumbo">lookbook</button>
            </div>
        </div>
        <!-- little squares -->
        <div class="little-squares-jumbo">
            <div><i class="fa-solid fa-images"></i><span>Demos</span></div>
            <div><span><sup>&#36;</sup>39</span><span>On Sale</span></div>
        </div>
        <!-- arrows -->
        <div class="left-arrow" @click="scrollLeft()"><i class="fa-solid fa-chevron-left"></i></div>
        <div class="right-arrow" @click="scrollRight()"><i class="fa-solid fa-chevron-right"></i></div>
    </section>
</template>

<script>
    export default {
        name: 'JumboComponent',
        data() {
            return {
                counter: 0
            }
        },
        methods: {
            scrollRight(){
                this.counter ++
            },
            scrollLeft(){
                this.counter --
            },
        },
    }
</script>

<style lang="scss" scoped>
@use '../assets/style/partials/variables' as *;

section {
    height: 420px;
    width: 100%;
    background-image: url('/img/home1_slide_three_bg_2.jpg');
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    color: $white;
    position: relative;

    .new-collection-jumbo {
        width: 50%;
        height: 100%;
        margin: 0 auto;
        text-align: center;
        display: flex;
        flex-direction: column;
        justify-content: center;

        h1 {font-weight: bold; text-transform: capitalize; font-size: 45px;}

        p {font-size: 14px; text-transform: uppercase; letter-spacing: 1px;padding: 10px 0;}

        div {
            button {margin: 0 10px;}
        }
    }
    .little-squares-jumbo {
        position: absolute;
        right: 10px;
        top: -10px;
        width: 50px;
        height: 150px;

        div {
            width: 50px;
            height: 50px;
            text-align: center;
            font-size: 10px;
            color: $gray;
            background-color: $white;
            border-radius: 5px;
            margin-bottom: 5px;

            &:first-of-type {    
                padding: 10px 5px;
                box-shadow: 0px -3px 10px rgb(175, 175, 175);

                i {
                    font-size: 20px;
                }
            }

            &:last-of-type {
                padding: 5px;

                span {
                    display: inline-block;

                    &:first-of-type {
                        color: $green;
                        font-size: 15px;
                        font-weight: bold;
                    }
                }
            }
        }

    }
    .left-arrow {
        width: 45px;
        height: 45px;
        background-color: rgba(0, 0, 0, 0.503);
        border-radius: 5px;
        color: white;
        text-align: center;
        line-height: 45px;
        position: absolute;
        top: 50%;
        left: 0;
        transform: translate(0, -50%);
        cursor: pointer;
        display: none;
    }
    .right-arrow {
        width: 45px;
        height: 45px;
        background-color: rgba(0, 0, 0, 0.503);
        border-radius: 5px;
        color: white;
        text-align: center;
        line-height: 45px;
        position: absolute;
        top: 50%;
        right: 0;
        transform: translate(0, -50%);
        cursor: pointer;
        display: none;
    }

    &:hover .right-arrow, &:hover .left-arrow {
        display: block;
    }
}

</style>