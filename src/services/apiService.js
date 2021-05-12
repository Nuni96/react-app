import axios from "axios";
const apiUrl = "http://localhost:5000"; //odakle trazimo nase podatke

//Šta mu šaljemo i koji format nama odgovara.
const headers = {
  "Content-Type": "application/json",
  'Accept': "application/json",
};
//Insert metod koji poristi path
const insert = (path, data, callback) => {
  axios
    .post(`${apiUrl}/${path}`, data, { headers }) //trazimo post, data je json fajl koji se salje
    .then((response) => callback(response.data)) //uspjesno odrađen promise vraća response
    .catch((reason) => {
      //neuspjesan promise vraca reason
      console.log(reason);
      callback(false);
    });
};
//fja koja dohvaca kompletnu listu svih slogova sa bekenda i vraca ga preko callbacka
const list = (path, callback) => {
  axios
    .get(`${apiUrl}/${path}`, { headers })
    .then((response) => callback(response.data))
    .catch((reason) => {
      console.log(reason);
      callback(false);
    });
};
//read jednog podatka
const read = (path, id, callback) => {
  axios
    .get(`${apiUrl}/${path}/${id}`, { headers })
    .then((response) => callback(response.data))
    .catch((reason) => {
      console.log(reason);
      callback(false);
    });
};
//update i remove su logicni nakon prethodnih fja
const update = (path, id, data, callback) => {
  axios
    .put(`${apiUrl}/${path}/${id}`, data, { headers })
    .then((response) => callback(response.data))
    .catch((reason) => {
      console.log(reason);
      callback(false);
    });
};

const remove = (path, id, callback) => {
  axios
    .get(`${apiUrl}/${path}/${id}`, { headers })
    .then((response) => callback(response.data))
    .catch((reason) => {
      console.log(reason);
      callback(false);
    });
};

export { insert, list, read, update, remove };
