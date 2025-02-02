export type mode = "animal" | "colour"
export const animalMode = "animal"
export const colourMode = "colour"

class State {
  mode: mode = "colour"
  colour: string = "white"

  setMode(mode: mode, colour?: string) {
    switch (mode) {
      case animalMode:
        this.mode = animalMode
        this.colour = "white"
        break
      case colourMode:
        this.mode = colourMode
        this.colour = colour!
        break
    }
  }
}

export const state = new State()
