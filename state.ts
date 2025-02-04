export type mode = "animal" | "colour"
export const animalMode = "animal"
export const colourMode = "colour"

export enum Tile {
  Unset,
  Tree,
  Wood,
  Field,
  Brick,
  Mountain,
  Water,
}

class State {
  mode: mode = "colour"
  tile: Tile = Tile.Unset

  setMode(mode: mode, tile?: Tile) {
    switch (mode) {
      case animalMode:
        this.mode = animalMode
        this.tile = Tile.Unset
        break
      case colourMode:
        this.mode = colourMode
        this.tile = tile!
        break
    }
  }
}

export const state = new State()
