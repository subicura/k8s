<template>
  <main class="page">
    <div class="theme-default-content">
      <a class="archive-back-btn" @click="handleBackClick()">← 돌아가기</a>

      <Content/>
      <div class="archive-bottom" />
      <a class="archive-back-btn" @click="handleBackClick()">← 돌아가기</a>
    </div>

    <FacebookComment />
    <div id="fb-root"></div>
    <script async defer crossorigin="anonymous" src="https://connect.facebook.net/ko_KR/sdk.js#xfbml=1&version=v9.0&appId=1611862309129685&autoLogAppEvents=1" nonce="0khzBnEU"></script>
  </main>
</template>

<script>
import FacebookComment from '@theme/components/FacebookComment.vue'
import { goBack } from '@theme/utils/nav'

export default {
  name: 'archive',
  components: {
    FacebookComment
  },
  methods: {
    handleBackClick() {
      goBack(this.$router, '/k8s/archive');
    }
  }
}
</script>

<style lang="stylus">
.archive-back-btn
  cursor: pointer
  font-size 14px;
  display inline-block
.archive-bottom
  border-top: 1px solid #eaecef
  margin-top: 2.5em
  padding-bottom: 1.5em
</style>