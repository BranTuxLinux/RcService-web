import { useState, useEffect } from "react";
import axios from "axios";
import { AlertSuccess } from "../assets/js/Alerts";
export function ApiGet(url = "https://rickandmortyapi.com/api/character") {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, seterror] = useState(null);
  useEffect(() => {
    axios
      .get(url)
      .then((data) => {
        if (url == "https://rickandmortyapi.com/api/character") {
          setData(data.data.results);
          setLoading(false);
        } else {
          setData(data.data);
          setLoading(false);
        }
      })
      .catch((error) => {
        seterror(error);
        setLoading(false);
      });
  }, [url]);

  return [data, loading, error];
}
export function ApiGet2(url1, url2) {
  const [data1, setData1] = useState([]);
  const [data2, setData2] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    async function FetchApi() {
      try {
        let response = await axios.get(url1);
        setData1(response.data);
        response = await axios.get(url2);
        setData2(response.data);
        console.log(response.data);
        setLoading(false);
      } catch (err) {
        setError(err);
        setLoading(false);
      }
    }
    FetchApi();
  }, [url1, url2]);

  return [data1, data2, loading, error];
}
export function ApiPost(url, dat) {
  axios
    .post(url, dat)
    .then(() => {
      AlertSuccess("Creado con exito");
      console.log("hola <-");
      window.location.reload();
    })
    .catch((error) => {
      console.log("error <--||-->", error);
    });
}

export async function ApiDelete(url, tabla) {
  try {
    const API = await axios.delete(`${url}/${tabla.id}`);
    if (API.status == 200) {
      return "Eliminado Correctamente";
    } else {
      console.log("error desconocido");
      return "error desconocido ";
    }
  } catch (error) {
    if (API.status == 409) {
      return "No fue eliminado ";
    } else if (API.status == 500) {
      return "error de api ";
    }
  }
}

export function ApiPut(url, tabla) {
  console.log(`${url}/${tabla.id}`, tabla);
  return axios
    .put(`${url}/${tabla.id}`, tabla)
    .then((response) => {
      console.log("Respuesta de API PUT:", response.data);
      return response.data; // Devolver directamente la respuesta
    })
    .catch((error) => {
      console.error("Error en axios put ->" + error);
    });
}



// export function ApiPut(url, tabla) {
//   console.log(`${url}/${tabla.id}`, tabla);
//   axios
//     .put(`${url}/${tabla.id}`, tabla)
//     .then(() => {
//       console.log("Actualizado con exito");
//       AlertSuccess("Actualizado con exito");
//       window.location.reload();
//     })
//     .catch((error) => {
//       console.error("Error en axios put ->" + error);
//     });
// }
