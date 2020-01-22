<template>
  <el-row type="flex" justify="center">
    <el-col :span="12" :xs="24">
      <el-input
        v-model="taskText"
        placeholder="Enter text of new task"
      >
        <el-button slot="append" @click="saveItem">
          OK
        </el-button>
      </el-input>
    </el-col>
  </el-row>
</template>

<script>
  export default {
    name: "AddTask",
    data() {
      return {
        taskText: null
      }
    },
    methods: {
      saveItem() {
        this.$emit('save', this.taskText);
      }
    }
  }
</script>