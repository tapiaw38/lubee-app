<template>
  <div class="container">
    <h2>Instacion List</h2>

    <template v-if="dataValue.length !==0">
      <LubeeList :dataValue="dataValue" />
    </template>

    <div v-else class="loader-content">
      <div class="loader"></div>
    </div>

  </div>
</template>

<script>
import useGetData from "@/composables/useGetData";
import LubeeList from "@/components/LubeeList";

import { defineComponent } from "vue";

export default defineComponent({
  name: "Home",
  components: { LubeeList },

  setup() {
    const { dataValue } = useGetData();

    return {
      dataValue,
    };
  },
});
</script>

<style lang="scss" scoped>
.container {
  margin: 5%;
  text-align: center;
  display: flex;
  flex-direction: column;
  h1 {
    font-weight: normal;

    color: #34495e;
  }
}
.loader-content {
    margin-top: 5%;
    align-content: center;
    display: flex;
    margin: 0 auto;
}
.loader {
  border: 16px solid #f3f3f3; /* Light grey */
  border-top: 16px solid #34db7f; /* Blue */
  border-radius: 50%;
  width: 120px;
  height: 120px;
  animation: spin 2s linear infinite;
}

@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}
</style>
