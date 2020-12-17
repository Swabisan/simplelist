<template>
  <div>
    <div aria-label="name" class="grid study row">
      <EditableText
        title="Edit Name"
        placeholder="Write a name..."
        :value="this.studyName"
        :onChange="
          (value) => {
            editStudyName(this.id, value);
          }
        "
      />
      <div aria-label="study ID">{{ this.id }}</div>
      <div aria-label="created">{{ this.creationDate }}</div>
      <div aria-label="completed">{{ this.numCompletes }}</div>
      <div aria-label="actions" class="actions">
        <AddCompleteButton
          v-bind:onClick="
            () => {
              addComplete(this.id);
            }
          "
        />
        <RemoveStudyButton
          v-bind:onClick="
            () => {
              removeStudy(this.id);
            }
          "
        />
      </div>
    </div>
  </div>
</template>

<script>
import AddCompleteButton from "./AddCompleteButton";
import EditableText from "../common/EditableText";
import RemoveStudyButton from "./RemoveStudyButton";

export default {
  name: "Study",
  components: {
    AddCompleteButton,
    EditableText,
    RemoveStudyButton,
  },
  props: {
    studyName: String,
    id: String,
    creationDate: String,
    numCompletes: String,
    addComplete: Function,
    editStudyName: Function,
    removeStudy: Function,
  },
};
</script>

<style scoped>
.actions {
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
}

.row {
  margin: 1rem 0;
  padding: 1rem 2rem;
}

.study {
  background: white;
  border-radius: 0.5rem;
}

input {
  appearance: none;
}
</style>
