<template>
  <p class="usage-msg">
    {{ msg }}
  </p>
</template>

<script>
export default {
  props: ["text"],
  data() {
    return {
      msg: this.text,
    };
  },
};
</script>
