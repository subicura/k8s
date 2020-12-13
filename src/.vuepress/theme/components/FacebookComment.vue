<template>
<div class="fb-comment-wrapper">
  <div class="fb-comments" :data-href="commentLink" data-num-posts="5" data-order-by="social" data-width="100%"></div>
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
  margin 0 auto
  max-width 740px
  padding: 1rem 2.5rem;
  @media (max-width: $MQNarrow)
    padding 2rem
  @media (max-width: $MQMobileNarrow)
    padding 1.5rem
</style>
