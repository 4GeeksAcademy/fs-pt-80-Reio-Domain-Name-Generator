/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

const pronombre = ["one", "the", "a", "some", "that"];
const adjetivo = ["freaky", "stubborn", "logical", "empirical", "handsome"];
const nombre = ["worm", "eggplant", "mouse", "solution", "team"];
const dominio = [".com", ".net", ".us", ".es", ".io"];

pronombre.forEach(pron =>
  adjetivo.forEach(adj =>
    nombre.forEach(nom =>
      dominio.forEach(dom => console.log(`${pron}${adj}${nom}${dom}`))
    )
  )
);
