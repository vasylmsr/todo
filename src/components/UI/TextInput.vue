<template>
  <el-input v-model.lazy.trim="text" />
</template>

<script>
  export default {
    name: "TextInput",
    props: {
      value: {
        type: [Number, String],
        required: true,
      }
    },
    computed: {
      text: {
        get() {
          return this.value;
        },
        set(newValue) {
          this.$emit('input', newValue)
        }
      }
    }
  }
</script>
