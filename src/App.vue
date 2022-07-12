<template>
  <div class="sticky top-0 drop-shadow-md rounded-none py-6 md:px-14 pl-6 bg-white dark:bg-dmElement text-lmText dark:text-white">
    <ul class="flex justify-between">
      <li class="mr-3">
        <p class="md:text-2xl text-lg font-extrabold">Where in the world?</p>
      </li>
      <li class="mr-3">
        <a class="px-4 text-16 font-semibold cursor-pointer" @click="darkMode = !darkMode">
          <i class='fa-solid fa-moon mt-2'></i>
          Dark Mode
        </a>
      </li>
    </ul>
  </div>
  <div class="bg-lmBackground dark:bg-dmBackground">
    <router-view :key="$route.path" />
  </div>
</template>

<script>
import { ref, watchEffect } from 'vue'

export default {
  name: 'App',
  setup() {
    const darkMode = ref(document.body.classList.contains('dark'));
    const applyDarkMode = () => document.body.classList[
      darkMode.value ? 'add' : 'remove'
    ]('dark');
    watchEffect(applyDarkMode);
    return { darkMode };
  }
  
}
</script>