<template>
  <div class="blog-title-info">
    <span class="blog-title-info-value calendar-dates-value"><i class="gg-calendar-dates"></i> {{ toDateString(page.frontmatter.date) }}</span>
    <span class="blog-title-info-value folder-value"><i class="gg-folder"></i>  {{ page.frontmatter.category }}</span>
    <span class="blog-title-info-value tag-value">
      <ul class="blog-title-tag" >
        <li><i class="gg-tag"></i>
        <li v-for="tag in page.frontmatter.tags">
          <router-link class="page-link" :to="'/tag/' + tag + '/'">{{ tag }}</router-link>
          <span v-if="tag !== page.frontmatter.tags[page.frontmatter.tags.length -1]">,</span>
        </li>
      </ul>
    </span>
  </div>
</template>

<script>
export default {
  props: ["page"],
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
.blog-title-info
  font-size 14px
  color #666
  i
    position absolute
    left 0
    top 0
    --ggs 0.7
  .gg-calendar-dates
    top -1px
.blog-title-info-value
  position relative
  margin-right 5px
.calendar-dates-value
  padding-left 21px
.folder-value
  padding-left 24px
.tag-value
  padding-left 20px
.blog-title-tag
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
      color #666

.yuu-theme-dark
  .blog-title-info, .blog-title-tag li a
    color #f3f3f3
</style>
