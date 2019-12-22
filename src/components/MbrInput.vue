<template>
  <div class="input-container">
    <div class="input-wrapper">
      <input
        :class="['input', { 'input--error': isInvalidInput }]"
        :placeholder="placeholder + (required ? '*' : '')"
        :value="value"
        @input="$emit('input', $event.target.value)"
      />
    </div>
    <div class="input__error-text">
      {{ errorText }}
    </div>
  </div>
</template>

<script>
export default {
  name: 'MbrInput',
  props: {
    value: String,
    status: {
      type: String,
      validator: status => {
        return ['error'].includes(status)
      }
    },
    errorText: String,
    placeholder: String,
    required: Boolean
  },
  computed: {
    isInvalidInput() {
      return this.status == 'error'
    }
  }
}
</script>

<style lang="scss" scoped>
.input-container {
  margin-bottom: $m-xs;
}
.input {
  box-sizing: border-box;
  color: $text-primary-color;
  font-size: $font-size-md;
  width: 100%;
  height: 2em;
  background-color: transparent;
  outline: none;
  border: none;
  border-bottom: 2px solid $text-primary-color;
  z-index: 10;
  transition: background-color 0.2s ease-in-out, padding 0.2s ease-in-out;
  &:focus {
    padding: 0 $m-sm;
    background-color: $bg-secondary-color;
  }
}
.input--error {
  border-color: $error-color;
}
.input-wrapper {
  position: relative;
  &:after {
    content: '';
    display: block;
    position: absolute;
    margin: auto;
    bottom: 0;
    left: 0;
    right: 0;
    width: 0;
    height: 2px;
    background-color: $primary-color;
    transition: width 0.2s ease-in-out;
  }
  &:focus-within:after {
    width: 100%;
  }
}
.input__error-text {
  font-size: $font-size-sm;
  text-align: left;
  color: $error-color;
  height: 24px;
}

@media (min-width: $screen-sm-min) {
  .input-container {
    margin-bottom: $m-lg;
  }
  .input {
    padding: $m-xl 0;
    &:focus {
      padding: $m-xl $m-md;
    }
  }
}
</style>
