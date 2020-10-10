<template>
  <button :class="['button', {
    [`button--${type}`]: type,
  }]" v-bind="$attrs" @click="$emit('click')">
    <slot></slot>
  </button>
</template>

<script>
  export default {
    name: "BaseButton",
    props: {
      type: {
        type: String,
        validator: function (value) {
          return ['success', 'warning', 'danger', 'primary'].includes(value);
        }
      }
    }
  }
</script>

<style scoped lang="scss">
  @import "../../assets/styles/variables";

  .button {
    display: inline-block;
    min-height: 40px;
    line-height: 1;
    white-space: nowrap;
    cursor: pointer;
    background: #fff;
    border: 1px solid #dcdfe6;
    color: #606266;
    text-align: center;
    box-sizing: border-box;
    outline: 0;
    margin: 0;
    transition: .1s;
    font-weight: 500;
    padding: 12px 20px;
    font-size: 14px;
    border-radius: 4px;

  }

  .button+.button {
    margin-left: 10px;
  }

  @mixin buttonType($colorName, $color) {
    .button--#{$colorName} {
      background: $color;
      color: white;

      &:hover {
        opacity: 0.8;
      }
    }
  }

  @each $colorName, $color in $colors {
    @include buttonType($colorName, $color);
  }
</style>
