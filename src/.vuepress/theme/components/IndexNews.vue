<template>
	<div class="theme-default-content">
		<h1 id="새소식"><a href="#새소식" class="header-anchor">#</a> 새소식</h1>

		<TagList />

		<ul id="default-layout">
			<li v-for="page in $pagination.pages">
				<router-link class="page-link" :to="page.path">{{ page.title }}</router-link>
				<TitleInfo :page="page" />
			</li>
		</ul>
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
