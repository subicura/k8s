<template>
  <picture>
    <source :srcset="$withBase(webp)" type="image/webp">
    <source :srcset="$withBase(original)" :type="imageType">
    <img :src="$withBase(original)" :alt="altText"></picture>
</template>

<script>
export default {
  props: ["src", "alt"],
  data() {
    return {
      original: `/build${this.src}`,
      webp: `/build${this.src}`.replace(".png", ".webp").replace(".jpg", ".webp"),
      imageType: this.src.indexOf(".png") > -1 ? "image/png" : "image/jpeg",
      altText: this.alt,
    };
  },
};
</script>
