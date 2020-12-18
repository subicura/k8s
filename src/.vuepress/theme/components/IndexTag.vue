<template>
	<div class="theme-default-content">
		<h1 id="분류"><a href="#분류" class="header-anchor">#</a> 분류</h1>

		<ul id="default-layout">
			<li v-for="tag in $tag.list">
				<router-link class="page-link" :to="tag.path">
					{{ tag.name }} ({{ tag.pages.length }})
				</router-link>
			</li>
		</ul>
	</div>
</template>

<script>
import TagList from '@theme/components/TagList'

export default {
  components: { TagList }
}
</script>