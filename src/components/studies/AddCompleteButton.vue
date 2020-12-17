<template>
  <button
    title="Add Complete"
    aria-label="add 1 completed study"
    class="addButton"
    @click="onClick"
  >
    Add Complete
  </button>
</template>

<script>
export default {
  name: "AddCompleteButton",
  props: {
    onClick: Function,
  },
};
</script>

<style scoped>
.addButton {
  background: #d4d4d4;
  border: none;
  border-radius: 5px;
  color: #236189;
  box-shadow: 0 4px 4px 1px#2c3e5082;
}
</style>
