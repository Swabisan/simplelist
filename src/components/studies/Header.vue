<template>
  <div class="grid header row" aria-label="table header">
    <span title="Study Name" aria-label="study name column">Study Name</span>
    <span title="Study ID" aria-label="study ID column">Study ID</span>
    <span title="Created" aria-label="date created column">Created</span>
    <span title="Completed" aria-label="number of completed studies column"
      >Completed</span
    >
  </div>
</template>

<script>
export default {
  name: "Header",
};
</script>

<style scoped>
.header {
  color: white;
  font-size: 0.8rem;
}

.row {
  padding: 0 2rem;
}
</style>
