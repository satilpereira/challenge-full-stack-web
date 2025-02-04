<script>
export default {
  data() {
    return {
      links: [
        { to: "/", text: "Home" },
        { to: "/about", text: "About" },
        { to: "/contact", text: "Contact" },
      ],
    };
  },
};
</script>

<template>
  <nav class="hidden md:block">
    <ul>
      <li v-for="link in links" :key="link.to">
        <NuxtLink :to="link.to">{{ link.text }}</NuxtLink>
      </li>
    </ul>
  </nav>
</template>

<style lang="scss"></style>
