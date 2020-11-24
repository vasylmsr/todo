<template>
  <base-card class="form">
    <div class="form__field">
      <div class="form__label">
        Title
      </div>
      <base-input
        v-model="todo.title"
        placeholder="Enter title of new todo"
      />
    </div>

    <div class="form__field">
      <div class="form__label">
        Description
      </div>
      <base-textarea
        v-model="todo.description"
        :max-length="300"
        placeholder="Enter description of new todo"
      />
    </div>

    <base-button type="primary" @click="handleSave">Save</base-button>
  </base-card>
</template>

<script>
import BaseInput from "../UI/BaseInput";
import BaseTextarea from "../UI/BaseTextarea";
import BaseCard from "../UI/BaseCard";
import BaseButton from "../UI/BaseButton";
export default {
  name: "TodoForm",
  components: {BaseButton, BaseCard, BaseTextarea, BaseInput},
  props: {
    value: {
      type: Object,
    },
  },
  data() {
    return {
      todo: {
        title: '',
        description: ''
      }
    }
  },
  methods: {
    handleSave() {
      this.$emit('save', this.todo);
    }
  },
  watch: {
    value(newValue) {
      if(newValue) this.todo = {...this.value};
    }
  }
}
</script>

<style scoped lang="scss">
  .form {
    &__field {
      margin-bottom: 20px;
    }

    &__label {
      font-weight: 600;
      margin-bottom: 5px;
      font-size: 18px;
    }
  }
</style>
