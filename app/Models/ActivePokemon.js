
export class ActivePokemon{
    constructor(data){
        this.sprites = data.sprites
        this.types = data.types.type
        this.height = data.height
        this.weight = data.weight
    }

// TODO add onclick to catch pokemon 
    get ActivePokemonTemplate(){
        return `
        <div class="card">
        <div class="card-body">
        <div class="card-title">
            <h3>${this.sprites}</h3>
        </div>
        <div class="card-text">
            <p>
            <b>Type: ${this.types} | Height: ${this.height} | Weight: ${this.weight}</b>
            </p>
        </div>
        </div>
        <div class="card-footer">
        <div class="text-end">
            <button onclick="" class="btn btn-dark">Catch</button>
        </div>
        </div>
    </div>
        `
    }

}

