<template>
  <button
    title="Add Study"
    aria-label="add a study"
    class="addButton"
    @click="onClick"
  >
    + Add Study
  </button>
</template>

<script>
export default {
  name: "AddStudyButton",
  props: {
    onClick: Function,
  },
};
</script>

<style scoped>
.addButton {
  background: #164462;
  border: none;
  border-radius: 5px;
  color: white;
  padding: 5px 10px;
  box-shadow: 0 4px 4px 1px#2c3e5082;
}
</style>
