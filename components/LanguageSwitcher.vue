<template>
  <span>
    <v-btn
      v-for="locale in $i18n.locales"
      v-if="locale.code !== $i18n.locale"
      :key="locale.code"
      :to="switchLocalePath(locale.code)"
      :width="width+'pt'"
      :height="height+'pt'"
      flat
      class="py-3">
      <img
        :width="width+'pt'"
        :height="height+'pt'"
        :src="locale.flag" >
    </v-btn>
  </span>
</template>

<script>
export default {
  props: {
    width: {
      type: Number,
      default: 60
    },
    height: {
      type: Number,
      default: 30
    }
  }
}
</script>

<style>
</style>
