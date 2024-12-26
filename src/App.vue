<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header class="mx-auto max-w-screen-xl mx-auto">
    <div class="md:col-span-3">
      <img
        class="rounded"
        alt="Loren and Hector Engagement Pic"
        src="./assets/engagement_photo.jpg"
      />
    </div>

    <nav class="flex flex-row">
      <RouterLink class="basis-auto hover:text-slate-900" to="/">Home</RouterLink>
      <RouterLink class="basis-auto hover:text-slate-900" to="/schedule">Schedule</RouterLink>
      <RouterLink class="basis-auto hover:text-slate-900" to="/us">Us</RouterLink>
      <RouterLink class="basis-auto hover:text-slate-900" to="/registry">Registry</RouterLink>
      <RouterLink class="basis-auto hover:text-slate-900" to="/qa">Q&A</RouterLink>
    </nav>
  </header>

  <main class="container mx-auto relative pl-2 lg:pl-6 lg:pt-12">
    <RouterView />
  </main>

  <footer class="mx-auto max-w-screen-xl space-y-8 px-4 py-16 sm:px-6 lg:space-y-16 lg:px-8">
    <p class="text-xs text-gray-500">Made with love by Loren & Hector</p>
  </footer>
</template>

<style scoped>
header {
  line-height: 1.5;
  max-height: 100vh;
}

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

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  nav {
    text-align: left;
    margin-left: -1rem;
    padding: 1rem 0;
    margin-top: 1rem;
  }
}
</style>
