<template>
  <div>
    <span v-for="tag in $tag.list.sort((a,b) => a.pages.length < b.pages.length ? 1 : -1)">
      <router-link class="tag-link" :to="tag.path">
        {{ tag.name }} ({{ tag.pages.length }})
      </router-link>
    </span>
  </div>
</template>

<style lang="stylus">
.tag-link
  background-color rgba(200, 200, 200, .3)
  border-radius 5px
  font-size 14px;
  padding 5px 7px
  display inline-block
  margin-right 7px
  margin-bottom 5px
</style>