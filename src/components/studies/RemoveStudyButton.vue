<template>
  <span>
    <button title="Remove Study" aria-label="remove study" @click="onClick">
      <RemoveIcon />
    </button>
  </span>
</template>

<script>
import RemoveIcon from "../svg/remove.svg";
import styles from "../SVGIconButton.css";

export default {
  name: "EditableTextButton",
  components: {
    RemoveIcon,
  },
  props: {
    onClick: Function,
  },
  styles: styles,
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