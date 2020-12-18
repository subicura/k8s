<template>
  <div class="theme-default-content">
    <a class="archive-back-btn" @click="$router.go(-1)">← 돌아가기</a>

    <Content/>
    <div class="archive-bottom" />

    <a class="archive-back-btn" @click="$router.go(-1)">← 돌아가기</a>
  </div>
</template>

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