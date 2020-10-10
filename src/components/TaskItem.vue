<template>
  <div class="task">
    <div class="task__text-wrapper">
      <base-checkbox class="task__checkbox" :value="task.done" @input="handleCheckboxClick" />
      <base-input
        v-if="isEditable"
        v-model="editableTaskText"
      />
      <span
        v-else
        :class="['task__text', {'task__text--done': task.done}]"
      >
        {{ task.text }}
      </span>
    </div>
    <div class="task__controls">
      <template v-if="isEditable">
        <base-button type="success" @click="editItemText">
          Save
        </base-button>
        <base-button type="warning" @click="closeEditModeAndSetOldValue">
          Cancel
        </base-button>
      </template>

      <template v-else>
        <base-button type="success" @click="openEditMode">
          Edit
        </base-button>
        <base-button type="danger" @click="deleteItem">
          Delete
        </base-button>
      </template>
    </div>
  </div>
</template>

<script>
  import BaseInput from "./UI/BaseInput";
  import BaseButton from "./UI/BaseButton";
  import BaseCheckbox from "./UI/BaseCheckbox";
  export default {
    name: "TaskItem",
    components: {
      BaseCheckbox,
      BaseInput,
      BaseButton
    },
    props: {
      task: {
        required: true,
        type: Object
      }
    },
    data() {
      return {
        editableTaskText: '',
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
      editItem(newValue) {
        this.$emit('edit', { ...this.task, ...newValue });
      },
      closeEditModeAndSetOldValue() {
        this.closeEditMode();
        this.editableTaskText = this.task.text;
      },
      editItemText() {
        this.closeEditMode();
        this.editItem({text: this.editableTaskText});
      },
      handleCheckboxClick(done) {
        this.editItem({done});
      },
      deleteItem() {
        this.$emit('delete', this.task);
      },
      setTaskInfo(value) {
        this.editableTaskText = value
      },

    },
    created() {
      this.setTaskInfo(this.task.text);
    }
  }
</script>

<style scoped lang="scss">
  .task {
    display: flex;
    justify-content: space-between;
    border: 1px solid #dcdfe6;
    padding: 10px;
    margin-bottom: -1px;
    border-radius: 2px;
  }

  .task__controls {
    display: flex;
  }

  .task__text-wrapper {
    display: flex;
    align-items: center;
    margin-right: 5px;
  }

  .task__checkbox {
    margin-right: 10px;
  }

  .task__text {
    word-break: break-all;

    &--done {
      text-decoration: line-through;
    }
  }

  @media screen and (max-width: 700px){
    .task {
      display: flex;
      flex-direction: column;


      &__text-wrapper {
        padding: 30px 0;
      }

      &__controls {
        justify-content: space-around;
      }
    }
  }
</style>
