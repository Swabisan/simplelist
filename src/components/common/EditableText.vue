<template>
  <div>
    <div v-if="this.isEditing">
      <input
        ref="text"
        type="text"
        :value="this.value"
        :placeholder="placeholder"
        @blur="
          (e) => {
            e.preventDefault();
            onChange(e.target.value);
            toggleEditing();
          }
        "
      />
    </div>
    <span v-else>
      {{ this.value || placeholder }}
      <EditableTextButton :onClick="toggleEditing" :title="this.title" />
    </span>
  </div>
</template>

<script>
import EditableTextButton from "./EditableTextButton";

export default {
  name: "EditableText",
  components: {
    EditableTextButton,
  },
  props: {
    value: String,
    onChange: Function,
    placeholder: String,
    title: String,
  },
  data: function () {
    return {
      isEditing: false,
    };
  },
  methods: {
    toggleEditing: function () {
      this.isEditing = !this.isEditing;
    },
  },
  updated: function () {
    if (this.isEditing) this.$refs.text.focus();
  },
};
</script>

<style scoped>
span {
  display: flex;
  flex-flow: row nowrap;
}
</style>
