<template>
  <div :class="['input', {
   'input--prefix': $slots.prefix,
  }]">
    <span v-if="$slots.prefix" class="input__prefix"><slot name="prefix"></slot></span>
    <input class="input__inner" v-bind="$attrs" v-model="localValue" @keypress.enter="handleEnter"/>
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
      font-size: inherit;
      height: 40px;
      line-height: 40px;
      outline: 0;
      padding: 0 15px;
      transition: border-color .2s cubic-bezier(.645,.045,.355,1);
      width: 100%;

      &::placeholder {
        color: #c0c4cc;
      }

      &:focus {
        border-color: map-get($colors, 'primary');
      }

      &:hover {
        border-color: #c0c4cc;
      }
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
