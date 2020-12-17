<template>
  <span>
    <button :title="this.title" :aria-label="this.title" @click="onClick">
      <EditIcon />
    </button>
  </span>
</template>

<script>
import EditIcon from "../svg/edit.svg";

export default {
  name: "EditableTextButton",
  components: {
    EditIcon,
  },
  props: {
    onClick: Function,
    title: String,
  },
};
</script>

<style scoped>
button {
  background: transparent;
  border: none;
  padding: 5px;
  position: absolute;
  right: -2rem;
  top: -5px;
}

span {
  position: relative;
  height: 12px;
  width: 12px;
}
</style>