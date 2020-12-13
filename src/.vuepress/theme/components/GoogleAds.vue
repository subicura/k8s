<template>
<div class="google-ads">
  <ins class="adsbygoogle"
                    style="display:block"
                    data-ad-client="ca-pub-2468713653725581"
                    data-ad-slot="9054450096"
                    data-ad-format="auto"></ins>
</div>
</template>

<script>
export default {
  name: 'GoogleAds',
  mounted () {
    this.load();
  },
  methods: {
    load () {
      (adsbygoogle = window.adsbygoogle || []).push({});
    }
  }
}
</script>

<style lang="stylus">
.google-ads
  width 100%
  box-sizing border-box
  padding 1.5rem
  margin-top -0.5rem
  .adsbygoogle
    display block
    min-height 102px
    width 100%

@media (max-width: $MQMobile)
  .google-ads
    padding 1.5rem 0.5rem
</style>
