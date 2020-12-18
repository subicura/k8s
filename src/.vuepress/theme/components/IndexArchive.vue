<template>
	<div class="theme-default-content">
		<h1 id="Archive"><a href="#Archive" class="header-anchor">#</a> Archive</h1>
		
		<TagList />

		<ul id="default-layout">
			<li v-for="page in $pagination.pages">
				<router-link class="page-link" :to="page.path">{{ page.title }}</router-link>
				<TitleTagList :page="page" />
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
import TitleTagList from '@theme/components/TitleTagList'

export default {
  components: { TagList, TitleTagList }
}
</script>
