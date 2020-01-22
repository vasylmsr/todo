<template>
  <div>
    <el-input
      v-if="isEditable"
      v-model="text"
      @change="$emit('input', text)">
    </el-input>
    <span
      v-else
      class="text">
      {{ text }}
    </span>
  </div>
</template>

<script>
  export default {
    name: "TextInput",
    props: {
      isEditable: {
        type: Boolean,
        default: true
      },
      value: {
        type: [Number, String],
        required: true,
      }
    },
    data() {
      return {
        text: null
      }
    },
    methods: {
      setDefaultValue() {
        this.text = this.value
      }
    },
    created() {
      this.setDefaultValue()
    },
    watch: {
      isEditable() {
        this.setDefaultValue()
      }
    }
  }
</script>

<style scoped>
  .text {
    word-break: break-all;
  }
</style>