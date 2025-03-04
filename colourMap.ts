import { Tile } from "./state.ts"

export const Pallette = {
  Tree: "#008236",
  Field: "#ffb900",
  Brick: "#c10007",
  BrickBottom: "#82181a",
  Mountain: "#364153",
  MountainMiddle: "#2a2627",
  MountainBottom: "#1b1718",
  Water: "#193cb8",
  Wood: "#894b00",
  WoodMiddle: "#733e0a",
  WoodBottom: "#461901",
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

export function colourMapMiddle(tile: Tile): string {
  switch (tile) {
    case Tile.Tree:
      return Pallette.Tree
    case Tile.Field:
      return Pallette.Field
    case Tile.Brick:
      return Pallette.Brick
    case Tile.Mountain:
      return Pallette.MountainMiddle
    case Tile.Water:
      return Pallette.Water
    case Tile.Wood:
      return Pallette.WoodMiddle

    default:
      return "white"
  }
}

export function colourMapBottom(tile: Tile): string {
  switch (tile) {
    case Tile.Tree:
      return Pallette.Tree
    case Tile.Field:
      return Pallette.Field
    case Tile.Brick:
      return Pallette.BrickBottom
    case Tile.Mountain:
      return Pallette.MountainBottom
    case Tile.Water:
      return Pallette.Water
    case Tile.Wood:
      return Pallette.WoodBottom

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
    case Pallette.BrickBottom:
      return Tile.Brick
    case Pallette.Mountain:
    case Pallette.MountainMiddle:
    case Pallette.MountainBottom:
      return Tile.Mountain
    case Pallette.Water:
      return Tile.Water
    case Pallette.Wood:
    case Pallette.WoodMiddle:
    case Pallette.WoodBottom:
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
