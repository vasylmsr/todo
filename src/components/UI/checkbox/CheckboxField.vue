<template>
  <label class="checkbox-field">
    <base-checkbox v-model="localValue"/>
    <div class="checkbox-field__label">
      <slot></slot>
    </div>
  </label>
</template>

<script>
import BaseCheckbox from "@/components/UI/checkbox/BaseCheckbox";

export default {
  name: "CheckboxField",
  components: {BaseCheckbox},
  props: {
    value: [Array, Boolean],
  },
  computed: {
    localValue: {
      get() {
        return this.value;
      },
      set(newValue) {
        this.$emit('input', newValue)
      }
    }
  }
}
</script>

<style scoped lang="scss">
  .checkbox-field {
    display: flex;
    align-items: center;
    cursor: pointer;

    &__label {
      margin-left: 10px;
    }
  }
</style>
