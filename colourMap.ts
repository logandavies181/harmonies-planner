import { Tile } from "./state.ts"

export const Pallette = {
  Tree: "#008236",
  Field: "#ffb900",
  Brick: "#c10007",
  Mountain: "#364153",
  Water: "#193cb8",
  Wood: "#894b00",
} as const

export function colourMap(tile: Tile): string {
  switch (tile) {
    case Tile.Tree:
      return Pallette.Tree
    case Tile.Field:
      return Pallette.Field
    case Tile.Brick:
      return Pallette.Brick
    case Tile.Mountain:
      return Pallette.Mountain
    case Tile.Water:
      return Pallette.Water
    case Tile.Wood:
      return Pallette.Wood

    default:
      return "white"
  }
}

export function colourToTile(colour: string | null) {
  switch (colour) {
    case Pallette.Tree:
      return Tile.Tree
    case Pallette.Field:
      return Tile.Field
    case Pallette.Brick:
      return Tile.Brick
    case Pallette.Mountain:
      return Tile.Mountain
    case Pallette.Water:
      return Tile.Water
    case Pallette.Wood:
      return Tile.Wood

    default:
      return Tile.Unset
  }
}

export function stackable(tile: Tile) {
  switch (tile) {
    case Tile.Wood:
    case Tile.Brick:
    case Tile.Mountain:
    case Tile.Tree:
      return true
  }

  return false
}
