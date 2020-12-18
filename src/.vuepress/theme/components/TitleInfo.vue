<template>
  <div class="title-info">
    {{ toDateString(page.frontmatter.date) }} / {{ page.frontmatter.category }} / 
    <ul class="title-tag" >
      <li v-for="tag in page.frontmatter.tags">
        <router-link class="page-link" :to="'/tag/' + tag + '/'">{{ tag }}</router-link>
        <span v-if="tag !== page.frontmatter.tags[page.frontmatter.tags.length -1]">,</span>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: ['page'],
  methods: {
		toDateString(d) {
			var date = new Date(d);
			var mm = date.getMonth() + 1;
			var dd = date.getDate();

			return [
				date.getFullYear(),
				(mm>9 ? '' : '0') + mm,
				(dd>9 ? '' : '0') + dd
			].join('-');
		}
	}
};
</script>

<style lang="stylus">
.title-info
  margin-top 5px
  font-size 13px
.title-tag
  list-style none
  display inline-block
  padddin 0
  padding-left 0
  margin 0
  li
    list-style none
    display inline-block
    padding 0
    padding-left 0
    margin-right 5px
    a
      color #2c3e50

.yuu-theme-dark
  .title-tag li a
    color: #f3f3f3;
</style>