<template>
  <div class="todo">
    <div>
      <div class="todo__title">{{todo.title}}</div>
      <div class="todo__author">by {{'Vasyl Mysiura'}}</div>
    </div>

    <div class="todo__controls">
      <div style="display: flex; margin-bottom: 8px">
        <base-checkbox class="todo__checkbox" :value="todo.done" @input="handleCheckboxClick" />
        <span>{{todo.done ? 'Done' : 'Undone'}}</span>
      </div>
      <div class="todo__edit-buttons">
        <base-button type="primary" @click="$emit('editClick', todo)">
          Edit
        </base-button>
        <base-button type="danger" @click="$emit('delete', todo)">
          Delete
        </base-button>
        <base-button type="success" @click="$emit('view', todo)">
          View todo
        </base-button>
      </div>
    </div>
  </div>
</template>

<script>
import BaseCheckbox from "../UI/BaseCheckbox";
import BaseButton from "../UI/BaseButton";
export default {
  name: "TodoItem",
  components: {
    BaseButton,
    BaseCheckbox,
  },
  props: {
    todo: {
      required: true,
      type: Object
    }
  },
  methods: {
    handleCheckboxClick(done) {
      this.$emit('edit', {...this.todo, done});
    },
  },
}
</script>

<style scoped lang="scss">
  .todo {
    display: flex;
    flex-direction: column;
    border: 1px solid #dcdfe6;
    padding: 10px;
    margin-bottom: -1px;
    border-radius: 2px;
    word-break: break-all;

    &__title {
      font-size: 18px;
      line-height: 1.2;
      font-weight: 600;
      margin-bottom: 5px;
    }

    &__author {
      font-style: italic;
      margin-bottom: 10px;
    }

    &__edit-buttons {
      display: grid;
      grid-template-columns: max-content max-content max-content;
      grid-gap: 10px;
    }

    &__view-btn {
      margin-top: 10px;
    }
  }



  .todo__controls {
    /*display: flex;*/
    margin-top: auto;
  }

  .todo__text-wrapper {
    display: flex;
    align-items: center;
    margin-right: 5px;
  }

  .todo__checkbox {
    margin-right: 10px;
  }

  .todo__text {
    word-break: break-all;

    &--done {
      text-decoration: line-through;
    }
  }

  @media screen and (max-width: 700px){
    .todo {
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
