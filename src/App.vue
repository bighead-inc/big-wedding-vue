<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <div class="w-max max-w-full flex flex-col md:grid md:grid-flow-col md:grid-rows-3 md:flex-row md:flex-wrap md:max-h-svh md:contents">
    <div class="max-w-screen-xl flex flex-col md:flex-row md:flex-wrap md:sticky md:row-span-2 md:self-start">
      <div class="flex flex-col md:flex-row md:box-border md:object-contain">
        <img
          alt="Loren and Hector Engagement Pic"
          src="./assets/engagement_photo.jpg"
        />
      </div>

      <header class="flex flex-col basis-full md:flex-row justify-center md:max-w-screen-xl">
        <nav class="flex flex-row justify-center divide-x">
          <RouterLink class="basis-1/5 flex-auto hover:text-slate-900" to="/">Home</RouterLink>
          <RouterLink class="basis-1/5 flex-auto hover:text-slate-900" to="/schedule"
            >Schedule</RouterLink
          >
          <RouterLink class="basis-1/5 flex-auto hover:text-slate-900" to="/us">Us</RouterLink>
          <RouterLink class="basis-1/5 flex-auto hover:text-slate-900" to="/registry"
            >Registry</RouterLink
          >
          <RouterLink class="basis-1/5 flex-auto hover:text-slate-900" to="/faq">FAQ</RouterLink>
        </nav>
      </header>

      <footer class="flex flex-col md:flex-row md:content-left mx-auto max-w-screen-xl md:space-y-8 md:px-4 md:py-16 px-6 lg:space-y-16 lg:px-8 md:grid-rows-1 md:row-start-3 md:row-end-3">
        <p class="text-xs text-gray-500">Made with love by Loren & Hector</p>
      </footer>
    </div>

    <div class="overflow-auto flex-col md:flex-row">
      <main class="container mx-auto relative pl-2 lg:pl-6 lg:pt-12 md:mx-auto md:overflow-scroll-y md:self-center grow">
        <RouterView />
      </main>
    </div>

  </div>
</template>

<style scoped>
nav {
  width: 100%;
  text-align: center;
  margin-top: 2rem;
  margin-bottom: 2rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}
</style>
