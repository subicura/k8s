<template>
	<main class="page">
		<div class="theme-default-content">
			<a class="search-back-btn" @click="handleBackClick()">← 돌아가기</a>

			<h1 :id="$page.frontmatter.title">
				<a :href="'#' + $page.frontmatter.title" class="header-anchor">#</a>
				{{ $page.frontmatter.title }}
			</h1>

			<div class="search-list">
				<div class="search-link-wrapper" v-for="page in $pagination.pages">
					<router-link class="search-link" :to="page.path">{{ page.title }}</router-link>
					<TitleInfo :page="page" />
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
import { goBack } from '@theme/utils/nav'

export default {
	components: { TagList, TitleInfo },
	methods: {
    handleBackClick() {
      goBack(this.$router, '/k8s/archive');
    }
  }
}
</script>

<style lang="stylus">
.search-list
  padding-top 1.5em
.search-link
  font-size 18px
.search-link-wrapper
  padding-bottom 1.5em
.search-back-btn
  cursor: pointer
  font-size 14px;
  display inline-block
</style>