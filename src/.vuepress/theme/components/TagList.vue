<template>
  <div>
    <span v-for="tag in $tag.list" style="margin-right: 5px;">
      <router-link class="page-link" :to="tag.path">
        {{ tag.name }} ({{ tag.pages.length }})
      </router-link>
    </span>
  </div>
</template>
