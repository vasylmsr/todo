<template>
  <base-card class="todo">
    <div class="todo__title-wrapper">
      <h1 class="todo__title">{{todo.title}}</h1>
      <div :class="['todo__status', {
        'todo__status--done': todo.done,
         'todo__status--undone': !todo.done
      }]">
        {{ todo.done ? 'Done' : 'Undone' }}
      </div>
    </div>
    <hr class="separator" />

    <div class="todo__description">
      {{todo.description}}
    </div>

    <hr class="separator" />



    <hr class="separator" />

    <div class="todo__author">
      {{todo.author}}
    </div>
  </base-card>
</template>

<script>
import BaseCard from "@/components/UI/BaseCard";

export default {
  name: "FullTodoCard",
  components: {BaseCard},
  props: {
    todo: {
      type: Object,
    }
  }
}
</script>

<style scoped lang="scss">
  .todo {
    word-break: break-word;

    &__title-wrapper {
      margin: 10px 0 15px;
    }

    &__title {
      font-size: 16px;
      font-weight: 600;
      text-align: center;
    }

    &__description {
      text-indent: 20px;
      line-height: 25px;
    }

    &__status {
      margin-top: 20px;
      text-align: center;
      text-transform: uppercase;
      font-weight: 600;

      &--done {
        color: green;
      }

      &--undone {
        color: red;
      }
    }

    &__author {
      font-style: italic;
      text-align: center;
    }
  }

  .separator {
    padding: 5px 0;
  }
</style>