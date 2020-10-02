<template>
  <el-row type="flex" class="task">
    <el-col class="task__text-wrapper" :span="10">
      <text-input
        v-if="isEditable"
        v-model="editableTask.text"
      />
      <span
        v-else
        class="task__text"
      >
        {{ task.text }}
      </span>
    </el-col>
    <el-col>
      <template v-if="isEditable">
        <el-button type="success" @click="editItem">
          Save
        </el-button>
        <el-button type="warning" @click="closeEditModeAndSetOldValue">
          Cancel
        </el-button>
      </template>

      <template v-else>
        <el-button type="success" @click="openEditMode">
          Edit
        </el-button>
        <el-button type="danger" @click="deleteItem">
          Delete
        </el-button>
      </template>
    </el-col>
  </el-row>
</template>

<script>
  import TextInput from "./UI/TextInput";
  export default {
    name: "TaskItem",
    components: {
      TextInput
    },
    props: {
      task: {
        required: true,
        type: Object
      }
    },
    data() {
      return {
        editableTask: null,
        isEditable: false
      }
    },
    methods: {
      openEditMode() {
        this.isEditable = true;
      },
      closeEditMode() {
        this.isEditable = false;
      },

      closeEditModeAndSetOldValue() {
        this.closeEditMode();
        this.editableTask.text = this.task.text;
      },

      editItem() {
        this.closeEditMode();
        this.$emit('edit', { ...this.editableTask });
      },
      deleteItem() {
        this.$emit('delete', this.task);
      },

      setTaskInfo(value) {
        this.editableTask = Object.assign({}, value);
      }
    },
    created() {
      this.setTaskInfo(this.task);
    }
  }
</script>

<style scoped lang="scss">
  .task {
    border: 1px solid #dcdfe6;
    padding: 10px;
    margin-bottom: -1px;
    border-radius: 2px;
  }
  .task__text-wrapper {
    align-self: center;
    margin-right: 5px;
  }
  .task__text {
    word-break: break-all;
  }
</style>
