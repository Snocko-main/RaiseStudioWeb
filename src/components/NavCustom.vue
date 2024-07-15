<template>
    <div class="mx-auto max-w-[1600px]">
        <div class="relative flex items-end justify-between gap-20">
            <div class="relative logo flex-none">
                <img class="dark:white-when-dark" alt="Vue logo" src="../assets/logo.svg">
            </div>
            <div class="inset-y-0 right-0 flex items-center md:flex lg:hidden">
                <button class="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                    <span class="absolute -inset-0.5" />
                    <span class="sr-only">Open main menu</span>
                    Menu
                </button>
            </div>
            <div class="hidden flex-auto h-full justify-between w-cus md:hidden lg:flex">
                <router-link v-for="item in Urllib" :key="item.title" class="text-light-grey tracking-wide hover:text-highllght-blue dark:text-grey-darkmode" :to="item.href">{{item.title}}</router-link>
            </div>
        </div>
    </div>
    <button @click="switchDarkmode()" class="btn darkmode">
        <SunIcon class="size-6 block dark:hidden" />
        <MoonIcon class="size-6 hidden dark:block text-grey-darkmode" />
    </button>
</template>

<script setup lang="ts">
import { SunIcon,MoonIcon } from '@heroicons/vue/24/outline'
const Urllib = [
    {title: "Home",href: "/"},
    {title: "Services",href: "/services"},
    {title: "Project",href: "/project"},
    {title: "Career",href: "/career"},
    {title: "Contact",href: "/about"},
]
</script>

<style lang="scss">
@import '../function.scss';

nav {
    padding-top: rem(60);
    padding-bottom: rem(30);
    position: relative;
    .w-cus{
        font-size: rem(24);
        text-transform: uppercase;
        max-width: rem(803);
        a{
            letter-spacing: rem(2);
            &.active{
                font-weight: normal;
                color: rgb(var(--color-highllght-blue));
            }
        }
    }
    .logo{
        img{
            width: rem(276);
        }
    }
}
.dark\:white-when-dark:where(.dark, .dark *) {
    filter: invert(91%) sepia(0%) saturate(22%) hue-rotate(178deg) brightness(81%) contrast(86%);
}
.btn{
    &.darkmode{
        position: absolute;
        top: rem(10);
        right: rem(10);
        padding: rem(10);
        border-radius: rem(50);
        cursor: pointer;
    }
}
</style>

<script lang="ts">
import { Vue } from 'vue-class-component';
export default class NavCustom extends Vue {}
function switchDarkmode() {
    if(document.documentElement.classList.contains('dark')){
        document.documentElement.classList.remove('dark')
    }else{
        document.documentElement.classList.add('dark')
    }
}
</script>
