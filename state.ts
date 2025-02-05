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

type Callback<T> = (t: T) => void

class Topic<T> {
  private callbacks = new Map<string, Callback<T>>()

  public Subscribe(name: string, cb: Callback<T>) {
    this.callbacks.set(name, cb)
  }

  public Publish(t: T) {
    this.callbacks.forEach((cb) => {
      cb(t)
    })
  }
}

export const IslandsTopic = new Topic<void>()
