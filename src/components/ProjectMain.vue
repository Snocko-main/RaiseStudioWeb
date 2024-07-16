<template>
    <div class="mx-auto max-w-[1600px] pt-14">
        <div class="main header text-header-blue dark:text-highllght-blue">Projects</div>
        <div class="project_group grid grid-flow-row grid-cols-1 gap-6">
            <div class="project col-span-1">
                <div class="project_banner_group relative">
                    <div class="project_banner">
                        <img  src="../assets/images/project1.png" alt="">
                    </div>
                    <div class="project_prop">
                        <img src="../assets/images/project1_prop.png" alt="">
                    </div>
                </div>
                <div class="project_info flex flex-col justify-evenly items-center h-full">
                    <div class="project_detail">
                        <div class="project_title text-project-head text-3xl font-bold">SPACE RIOT</div>
                        <div class="project_type text-project-type text-lg">Digital Asset Development</div>
                        <div class="project_discription text-white text-base pt-4">“In the endless space.<br/>There is still an endless war.”</div>
                    </div>
                    <div class="project_leanmore">
                        <button class="project_button text-project-head border-project-head box-border text-base hover:border-white hover:text-white">Breakdown</button>
                    </div>
                </div>
            </div>
            <div class="project col-span-1">
                <div class="project_banner_group relative">
                    <div class="project_banner">
                        <img  src="../assets/images/project2.png" alt="">
                    </div>
                    <div class="project_prop">
                        <img src="../assets/images/project2_prop.png" alt="">
                    </div>
                </div>
                <div class="project_info flex flex-col justify-evenly items-center h-full">
                    <div class="project_detail">
                        <div class="project_title text-project-head text-3xl font-bold">ROMA LEGACY</div>
                        <div class="project_type text-project-type text-lg">Digital Asset Development</div>
                        <div class="project_discription text-white text-base pt-4">Find the legacy treasures of The roman empire.</div>
                    </div>
                    <div class="project_leanmore">
                        <button class="project_button text-project-head border-project-head box-border text-base hover:border-white hover:text-white">Breakdown</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss">
@import '../function.scss';

.main{
    &.header{
        position: relative;
        font-size: rem(32);
        font-weight: 600;
        letter-spacing: rem(2);
        text-transform: uppercase;
        padding-bottom: rem(98);
        &:before{
            content: "";
            width: rem(140);
            height: rem(8);
            background-color: rgb(var(--color-text-white));
            position: absolute;
            left: 50%;
            top: rem(61);
            transform: translate(-50%,0);
        }
    }
}
.project{
    position: relative;
    max-height: rem(365);
    max-width: rem(1600);
    overflow-x: clip;
    &_title{
        letter-spacing: rem(10);
    }
    &_banner{
        height: 100%;
        &_group{
        }
        img{
            max-width: unset;
            height: 100%;
        }
    }
    &_prop{
        position: absolute;
        left: 50%;
        transform: translateX(-45%);
        bottom: 0;
        width: rem(950);
        max-height: 100%;
        display: flex;
        align-items: flex-end;
        @media screen and (min-width: '1024px') {
            left: 0%;
            transform: translateX(0);
        }
        img{
            max-width: unset;
            width: 100%;
            height: 100%;
            pointer-events: none;
        }
    }
    &_info{
        position: absolute;
        max-height: rem(365);
        right: 0;
        bottom: 0;
        background-color: rgba($color: #101532, $alpha: 0.7);
        -webkit-backdrop-filter: blur(5px);
        backdrop-filter: blur(5px);
        opacity: 0;
        transition: opacity 0.3s ease-in-out;
        width: 100%;
        display: flex;
        &:hover,&:active{
            opacity: 1;
        }
        @media screen and (min-width: '1024px') {
            width: rem(450);
            opacity: 1;
            display: none;
        }
    }
    &_button{
        width: rem(174);
        height: rem(47);
        border-width: rem(1.67);
        text-transform: uppercase;
        letter-spacing: rem(3);
    }
}
</style>

<script lang="ts">
import { Vue } from 'vue-class-component';
export default class ProjectMain extends Vue {}

</script>