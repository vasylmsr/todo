<template>
  <label class="base-checkbox">
    <input
      v-model="localValue"
      type="checkbox"
      class="base-checkbox__input"
      ref="checkbox"
      :name="name"
    />
    <span class="base-checkbox__icon"></span>
  </label>
</template>

<script>
export default {
  name: "BaseCheckbox",
  props: {
    text: {
      type: String
    },
    name: {
      type: [Number, String]
    },
    checkboxValue: [Number, String, Boolean],
    value: [Array, Number, String, Boolean]
  },
  computed: {
    localValue: {
      get() {
        return this.value;
      },
      set(newValue) {
        this.$emit("input", newValue);
      }
    }
  }
};
</script>

<style scoped lang="scss">
$outside-size: 18px;
$inner-size: $outside-size - 7px;
$color: black;

.base-checkbox {
  display: inline-flex;
  align-items: center;
  cursor: pointer;

  &__input {
    display: none;
  }

  &__icon {
    flex-shrink: 0;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    height: $outside-size;
    width: $outside-size;
    border-radius: 4px;
    border: 2px solid $color;
    box-sizing: border-box;
  }
}

.base-checkbox__input ~ .base-checkbox__icon::after {
  content: "";
  display: block;
  position: absolute;
  opacity: 0;
  box-sizing: border-box;
  height: $inner-size - 3px;
  width: $inner-size;
  border-left: 3px solid $color;
  border-bottom: 3px solid $color;
  transform: translateY(-2px) rotate(-45deg);
  transition: 250ms;
}

.base-checkbox__input:checked ~ .base-checkbox__icon::after {
  opacity: 1;
}
</style>
