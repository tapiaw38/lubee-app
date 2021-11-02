<template>
  <div class="">
    <table class="rwd-table">
      <tr>
        <th>Pais</th>
        <th>Edad</th>
        <th>Genero</th>
        <th>Maquillaje</th>
        <th>Afeita</th>
        <th>Tratamiento</th>
        <th>deviceID</th>
      </tr>

      <template
        v-for="{
          id,
          pais,
          edad,
          genero,
          maquillaje,
          afeita,
          tratamiento,
          deviceID,
        } in dataValue"
        :key="id"
      >
        <tr>
          <td>{{ pais }}</td>
          <td>{{ edad }}</td>
          <td>{{ genero }}</td>
          <td>{{ maquillaje }}</td>
          <td>{{ afeita }}</td>
          <td>{{ tratamiento }}</td>
          <td>{{ deviceID }}</td>
        </tr>
      </template>
    </table>
  </div>
</template>

<script>
export default {
  name: "lebeeList",
  props: {
    dataValue: {
      type: Array,
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.rwd-table {
  margin: 0;
  min-width: 100%;
}
.rwd-table tr {
  border-top: 1px solid #ddd;
  border-bottom: 1px solid #ddd;
}
.rwd-table th {
  display: none;
}
.rwd-table td {
  display: block;
}
.rwd-table td:first-child {
  padding-top: 0.5em;
}
.rwd-table td:last-child {
  padding-bottom: 0.5em;
}
.rwd-table td:before {
  content: attr(data-th) ": ";
  font-weight: bold;
  width: 6.5em;
  display: inline-block;
}
@media (min-width: 480px) {
  .rwd-table td:before {
    display: none;
  }
}
.rwd-table th,
.rwd-table td {
  text-align: left;
}
@media (min-width: 480px) {
  .rwd-table th,
  .rwd-table td {
    display: table-cell;
    padding: 0.25em 0.5em;
  }
  .rwd-table th:first-child,
  .rwd-table td:first-child {
    padding-left: 0;
  }
  .rwd-table th:last-child,
  .rwd-table td:last-child {
    padding-right: 0;
  }
}

.rwd-table {
  background: #34495e;
  color: #fff;
  border-radius: 0.4em;
  overflow: hidden;
}
.rwd-table tr {
  border-color: #46637f;
}
.rwd-table th,
.rwd-table td {
  margin: 0.5em 1em;
}
@media (min-width: 480px) {
  .rwd-table th,
  .rwd-table td {
    padding: 1em !important;
  }
}
.rwd-table th,
.rwd-table td:before {
  color: rgb(166, 235, 149);
}
</style>
