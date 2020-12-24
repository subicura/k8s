<template>
	<main class="page">
		<div class="theme-default-content">
			<div class="archive-list">  
				<div class="archive-link-wrapper" v-for="page in $pagination.pages">
					<router-link class="archive-link" :to="page.path">{{ page.title }}</router-link>
					<TitleInfo :page="page" />
					<div class="archive-desc">{{ page.frontmatter.description }}</div>
				</div>
			</div>

			<div id="pagination">
				<router-link v-if="$pagination.hasPrev" :to="$pagination.prevLink">Prev</router-link>
				<router-link v-if="$pagination.hasNext" :to="$pagination.nextLink">Next</router-link>
			</div>
		</div>
	</main>
</template>

<script>
import TagList from '@theme/components/TagList'
import TitleInfo from '@theme/components/TitleInfo'

export default {
	components: { TagList, TitleInfo },
}
</script>

<style lang="stylus">
.archive-link
  font-size 18px
.archive-link-wrapper
  padding-bottom 2.5em
.archive-desc
	margin-top 0.5em
</style>