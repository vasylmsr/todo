<template>
  <el-row type="flex" class="task">
    <el-col class="task__text-wrapper " :span="10">
      <text-input
          @input="(value) => editableTask.text = value"
          :value="task.text"
          :is-editable="isEditable"
      />
    </el-col>
    <el-col>
      <el-button :type="editType.buttonType" @click="handleEditingAndSaving">
        {{ editType.buttonText }}
      </el-button>
      <el-button :type="cancelType.buttonType" @click="handleCancelingAndDeleting">
        {{ cancelType.buttonText }}
      </el-button>
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
    computed: {
      editType() {
        return this.isEditable
          ? { buttonType: "success", buttonText: "Save" }
          : { buttonType: "warning", buttonText: "Edit" }
      },
      cancelType() {
        return this.isEditable
          ? { buttonType: "danger", buttonText: "Cancel" }
          : { buttonType: "danger", buttonText: "Delete" }
      }
    },
    methods: {
      handleEditingAndSaving() {
        if(this.isEditable) {
          this.$emit('edit', { ...this.editableTask });
        }
        this.isEditable = !this.isEditable;
      },
      handleCancelingAndDeleting() {
        if(this.isEditable) {
          this.isEditable = false;
          this.editableTask.text = this.task.text;
        }
        else {
          this.$emit('delete', this.task);
        }
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
</style>