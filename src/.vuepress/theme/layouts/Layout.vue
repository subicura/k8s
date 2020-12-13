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
import ParentLayout from '@parent-theme/layouts/Layout.vue'
import FacebookComment from '@theme/components/FacebookComment.vue'

export default {
  name: 'Layout',
  components: {
    ParentLayout,
    FacebookComment,
  }
}
</script>