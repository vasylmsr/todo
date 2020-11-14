<template>
  <div class="base-textarea">
    <textarea
      v-model="currentValue"
      :placeholder="placeholder"
      :maxlength="maxLength"
    />
    <div class="base-textarea__symbols">{{ symbolsCount }}</div>
  </div>
</template>

<script>
export default {
  name: "BaseTextarea",
  props: {
    value: {
      type: String,
      required: true,
    },
    maxLength: {
      type: Number,
      required: false,
      default: () => 100,
    },
    placeholder: {
      type: String,
    }
  },
  computed: {
    currentValue: {
      get() {
        return this.value;
      },
      set(newValue) {
        return this.$emit('input', newValue);
      }
    },
    symbolsCount() {
      return `${(this.value && this.value.length) || 0} / ${this.maxLength}`;
    }
  }
}
</script>

<style scoped lang="scss">
  @import "inputStyles";

  .base-textarea {
    display: flex;
    flex-direction: column;
    height: 140px;
    border: 1px solid #dcdfe6;
    padding: 12px 15px 9px;
    width: 100%;
    outline: none;
    transition: 0.08s ease;
    background-color: #ffffff;
    box-sizing: border-box;
    border-radius: 4px;
    font-family: Helvetica;


    @include inputPseudoClasses;

    textarea {
      height: 100%;
      width: 100%;
      outline: none;
      border: none;
      color: #606266;
      padding: 0;
      font-family: Helvetica;

      &::placeholder {
        color: #c0c4cc;
      }
    }

    &__symbols {
      margin-top: auto;
      padding: 8px 0;
      align-self: flex-end;
      font-family: Tofino, sans-serif;
      font-size: 12px;
      z-index: 2;
    }
  }


</style>
