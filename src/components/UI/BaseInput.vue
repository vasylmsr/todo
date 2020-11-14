<template>
  <div :class="['input', {
   'input--prefix': $slots.prefix,
  }]">
    <span v-if="$slots.prefix" class="input__prefix"><slot name="prefix"></slot></span>
    <input
      v-bind="$attrs"
      v-model="localValue"
      class="input__inner"
      @keypress.enter="handleEnter"
    />
  </div>
</template>

<script>
export default {
  name: "BaseInput",
  props: {
    value: {
      type: [Number, String],
      required: true,
    }
  },
  computed: {
    localValue: {
      get() {
        return this.value;
      },
      set(newValue) {
        this.emitValue(newValue)
      }
    }
  },
  methods: {
    emitValue(newValue) {
      this.$emit('input', newValue)
    },
    handleEnter() {
      this.$emit('enter')
    }
  }
}
</script>

<style scope lang="scss">
  @import "../../assets/styles/variables";
  @import "./inputStyles";

  .input {
    position: relative;
    font-size: 14px;
    display: inline-block;
    width: 100%;

    &__inner {
      background-color: #fff;
      background-image: none;
      border-radius: 4px;
      border: 1px solid #dcdfe6;
      box-sizing: border-box;
      color: #606266;
      display: inline-block;
      height: 40px;
      line-height: 40px;
      outline: 0;
      padding: 0 $inputPadding;
      width: 100%;

      @include inputPseudoClasses;
    }

    &__prefix {
      display: grid;
      align-items: center;
      justify-content: center;
      position: absolute;
      height: 60%;
      top: 20%;
      width: 25px;
      left: 5px;
      transition: all .3s;
    }

    &--prefix &__inner {
      padding-left: 30px;
    }
  }
</style>
