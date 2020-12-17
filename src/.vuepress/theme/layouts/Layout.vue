<template>
	<ParentLayout>
    <template #page-bottom>
      <FacebookComment />
      <div id="fb-root"></div>
      <script async defer crossorigin="anonymous" src="https://connect.facebook.net/ko_KR/sdk.js#xfbml=1&version=v9.0&appId=1611862309129685&autoLogAppEvents=1" nonce="0khzBnEU"></script>
    </template> 
  </ParentLayout>
</template>

<script>
import ParentLayout from '@parent-theme/layouts/Layout.vue';
import FacebookComment from '@theme/components/FacebookComment.vue'

import yuuConfig from '@theme/mixins/yuuConfig.js';
import themeHandler from '@theme/mixins/themeHandler.js';

export default {
	components: {
    ParentLayout,
    FacebookComment,
	},
	mixins: [yuuConfig, themeHandler],
	watch: {
		'$page.frontmatter.home'(isHome) {
			if (isHome) this.setPageTheme();
		},
	},
};
</script>

<style src="../styles/variables.styl" lang="stylus"></style>
<style src="../styles/index.styl" lang="stylus"></style>
<style src="../styles/themes/dark.styl" lang="stylus"></style>
<style src="../styles/themes/blue.styl" lang="stylus"></style>
<style src="../styles/themes/red.styl" lang="stylus"></style>
<style src="../styles/themes/purple.styl" lang="stylus"></style>
