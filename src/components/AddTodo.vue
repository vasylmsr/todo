<template>
  <base-input
    v-model="taskText"
    @enter="handleEnter"
    placeholder="Enter text of new task"
  />
</template>

<script>
import BaseInput from "./UI/BaseInput";
export default {
  name: "AddTask",
  components: {BaseInput},
  data() {
    return {
      taskText: ''
    }
  },
  methods: {
    handleEnter() {
      this.$emit('save', this.taskText);
    }
  }
}
</script>
