import { EventEmitter } from "./Utils/EventEmitter.js"
import { isValidProp } from "./Utils/isValidProp.js"

class AppState extends EventEmitter {
  /** @type {import('./Models/WildPokemon.js').WildPokemon[]} */
  wildPokemons = []

  /** @type {import('./Models/ActivePokemon.js').ActivePokemon[]} */
  activePokemon = {}

  /** @type {import('./Models/Value').Value[]} */
  values = []
}

export const ProxyState = new Proxy(new AppState(), {
  get(target, prop) {
    isValidProp(target, prop)
    return target[prop]
  },
  set(target, prop, value) {
    isValidProp(target, prop)
    target[prop] = value
    target.emit(prop, value)
    return true
  }
})
