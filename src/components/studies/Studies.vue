<template>
  <div>
    <Header />
    <div v-for="study in this.studyData" :key="study.id">
      <Study
        v-bind="{ ...study }"
        v-bind:removeStudy="removeStudy"
        v-bind:addComplete="addComplete"
        v-bind:editStudyName="editStudyName"
      />
    </div>
    <hr v-if="this.studyData.length === 0" />
    <div class="footer">
      <AddStudyButton v-bind:onClick="addStudy" />
    </div>
  </div>
</template>

<script>
import AddStudyButton from "./AddStudyButton";
import Header from "./Header";
import Study from "./Study";

export default {
  name: "Studies",
  props: {
    studyData: Array,
    addComplete: Function,
    addStudy: Function,
    editStudyName: Function,
    removeStudy: Function,
  },
  components: {
    AddStudyButton,
    Header,
    Study,
  },
};
</script>

<style scoped>
.footer {
  display: flex;
  flex-flow: row nowrap;
}
</style>
