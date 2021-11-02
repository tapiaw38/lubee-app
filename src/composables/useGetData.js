// use get data composable

import { ref } from "vue";

const useGetData = () => {
    
  let dataValue = ref([]);

  const getData = async (url = "") => {
    const respose = await fetch(url);
    return respose.json();
  };

  getData("https://apimyforte.lubee.com.ar/api/Instalacion").then(
    ({ data }) => {
      dataValue.value = data;
    }
  );

  return {
    dataValue,
  };
};

export default useGetData;
