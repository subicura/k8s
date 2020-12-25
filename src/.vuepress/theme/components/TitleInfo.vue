<template>
  <div class="title-info">
    <span class="title-info-value calendar-dates-value"><i class="gg-calendar-dates"></i> {{ toDateString(page.frontmatter.date) }}</span>
    <span class="title-info-value folder-value"><i class="gg-folder"></i> {{ page.frontmatter.category }}</span>
    <span class="title-info-value tag-value">
      <ul class="title-tag" >
        <li><i class="gg-tag"></i></li>
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
  font-size 14px
  color #666
  i
    position absolute
    left 0
    top 0
    --ggs 0.7
  .gg-calendar-dates
    top -1px
.title-info-value
  position relative
  margin-right 5px
.calendar-dates-value
  padding-left 21px
.folder-value
  padding-left 24px
.tag-value
  padding-left 20px
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
    margin-right 3px
    a
      color #666

.yuu-theme-dark
  .title-info, .title-tag li a
    color #f3f3f3
</style>