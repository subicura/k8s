<template>
  <ul>
    <li v-for="tag in page.frontmatter.tags">
      <router-link class="page-link" :to="'/tag/' + tag + '/'">{{ tag }}</router-link>
    </li>
  </ul>
</template>

<script>
export default {
  props: ['page'],
};
</script>