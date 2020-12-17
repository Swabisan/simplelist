<template>
  <div class="page">
    <Studies
      v-bind:studyData="this.studyData"
      v-bind:addComplete="addComplete"
      v-bind:addStudy="addStudy"
      v-bind:editStudyName="editStudyName"
      v-bind:removeStudy="removeStudy"
    />
  </div>
</template>

<script>
import { getStudies } from "../api";
import Studies from "./studies";

export default {
  name: "StudiesPage",
  components: {
    Studies,
  },
  data: function () {
    return {
      studyData: [],
    };
  },
  created: function () {
    getStudies().then(({ studyData }) => {
      this.studyData = studyData;
    });
  },
  methods: {
    addComplete: function (id) {
      this.studyData = this.studyData.map((study) => {
        return study.id !== id
          ? study
          : { ...study, numCompletes: String(Number(study.numCompletes) + 1) };
      });
    },
    addStudy: function () {
      this.studyData = [
        ...this.studyData,
        {
          id: String(
            this.studyData.length === 0
              ? 0
              : Number(this.studyData[this.studyData.length - 1].id) + 1
          ),
          studyName: "",
          numCompletes: "0",
          creationDate: new Date().toLocaleDateString(undefined, {
            weekday: undefined,
            year: "numeric",
            month: "long",
            day: "numeric",
          }),
        },
      ];
    },
    editStudyName: function (id, value) {
      this.studyData = this.studyData.map((study) => {
        return study.id !== id ? study : { ...study, studyName: value };
      });
    },
    removeStudy: function (id) {
      this.studyData = this.studyData.filter((study) => study.id !== id);
    },
  },
};
</script>

<style>
.grid {
  display: grid;
  justify-items: start;
  grid-template-columns: 3fr 1fr 1fr 1fr 1fr;
}
</style>

<style scoped>
.page {
  display: flex;
  flex-flow: column nowrap;
  padding-top: 5%;
  margin: 0 10%;
}
</style>
