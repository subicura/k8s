<template>
<div class="fb-comment-wrapper">
  <div class="fb-comment-inner">
    <div class="fb-comments" :data-href="commentLink" data-num-posts="5" data-order-by="social" data-width="100%"></div>
  </div>
</div>
</template>

<script>
export default {
  name: 'FacebookComment',
   watch: {
    '$route' (to, from) {
      if (
        to.path !== from.path
      ) {
        if (this.$el.querySelector('div.fb-comments')) {
          this.$el.querySelector('div.fb-comments').innerHTML = '';
        }
        setTimeout(() => {
          this.load();
        }, 500);
      }
    }
  }, 
  mounted () {
    this.load();
  }, 
  methods: {
    load() {
      if (typeof FB !== 'undefined') {
        FB.XFBML.parse();
      }
    }
  },
  computed: {
    commentLink() {
      return 'https://subicura.com/k8s/' + this.$page.relativePath.replace('.md', '.html')
    }
  },
}
</script>

<style lang="stylus">
.fb-comment-wrapper
  max-width: 920px
  margin: 0 auto
  padding: 1.5rem 2rem
  margin 0 auto
  @media (max-width: $MQNarrow)
    padding 1.5rem
  @media (max-width: $MQMobileNarrow)
    padding 1rem
.fb-comment-inner
  border-radius: 6px
  padding: 0.5rem
.yuu-theme-dark
  .fb-comment-inner
    background-color: #f3f3f3

</style>
