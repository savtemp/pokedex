// import { ValuesController } from "./Controllers/ValuesController.js";
import { WildPokemonsController } from "./Controllers/WildPokemonsController.js";
import { ActivePokemonController } from "./Controllers/ActivePokemonController.js";

class App {
  // valuesController = new ValuesController();
  wildPokemonsController = new WildPokemonsController()
  activePokemonController = new ActivePokemonController()
}

window["app"] = new App();
