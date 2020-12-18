<template>
	<div class="theme-default-content">
		<h1 id="Archive"><a href="#Archive" class="header-anchor">#</a> Archive</h1>
		
		<TagList />

		<div class="archive-list">  
			<div class="archive-link-wrapper" v-for="page in $pagination.pages">
				<router-link class="archive-link" :to="page.path">{{ page.title }}</router-link>
				<TitleInfo :page="page" />
			</div>
		</div>

		<div id="pagination">
			<router-link v-if="$pagination.hasPrev" :to="$pagination.prevLink">Prev</router-link>
			<router-link v-if="$pagination.hasNext" :to="$pagination.nextLink">Next</router-link>
		</div>
	</div>
</template>

<script>
import TagList from '@theme/components/TagList'
import TitleInfo from '@theme/components/TitleInfo'

export default {
	components: { TagList, TitleInfo },
}
</script>

<style lang="stylus">
.archive-list
  padding-top 1.5em
.archive-link
  font-size 18px
.archive-link-wrapper
  padding-bottom 1.5em
</style>