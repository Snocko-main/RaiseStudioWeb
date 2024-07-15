<template>
  <div class="home">
    <ProjectMain />
    <GameAssetsMain />
    <HelloWorld msg="Welcome to Your Vue.js + TypeScript App"/>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import HelloWorld from '@/components/HelloWorld.vue';
import ProjectMain from '@/components/ProjectMain.vue';
import GameAssetsMain from '@/components/GameAssetsMain.vue';

@Options({
  components: {
    HelloWorld,
    ProjectMain,
    GameAssetsMain,
  },
})
export default class HomeView extends Vue {}
</script>
