<template>
	<div class="theme-default-content">
		<a class="search-back-btn" @click="$router.go(-1)">← 돌아가기</a>

		<h1 :id="$page.frontmatter.title">
			<a :href="'#' + $page.frontmatter.title" class="header-anchor">#</a>
			{{ $page.frontmatter.title }}
		</h1>

		<div class="search-list">
			<div v-for="page in $pagination.pages">
				<router-link class="search-link" :to="page.path">{{ page.title }}</router-link>
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
  components: { TagList, TitleInfo }
}
</script>

<style lang="stylus">
.search-list
  padding-top 1.5em
.search-link
  font-size 18px
.search-back-btn
  cursor: pointer
  font-size 14px;
  display inline-block
</style>