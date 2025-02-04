import { html } from "./html.ts"

import { Dispatch, StateUpdater, useState } from "https://esm.sh/preact@10.25.3/hooks"
import { animalMode, colourMode, state, Tile } from "./state.ts"
import { colourMap, colourToTile, stackable } from "./colourMap.ts"

type HexType = "mid" | "first" | "alt"
export const mid = "mid"
export const first = "first"
export const alt = "alt"

export type HexProps = {
  type: HexType
  bot: boolean
}

function handleColourMode(
  _colour: string,
  newColour: Tile,
  _colourStack1: string | null,
  _colourStack2: string | null,
) {
  const colour = colourToTile(_colour)
  if (colour == Tile.Unset) {
    return [colourMap(newColour)]
  }

  const colourStack1 = colourToTile(_colourStack1)
  const colourStack2 = colourToTile(_colourStack2)

  const stackHeight = colourStack2 ? 3 : colourStack1 ? 2 : 1

  if (!stackable(newColour)) {
    if (colour == newColour) {
      return ["white"]
    }
    return [colourMap(newColour)]
  }

  if (stackHeight == 3) {
    return [colourMap(newColour)]
  }

  let bottomStackOk = (_: Tile) => false
  let middleStackOk = (_: Tile) => false
  switch (newColour) {
    case Tile.Tree: {
      bottomStackOk = (t) => t == Tile.Wood || t == Tile.Unset
      middleStackOk = bottomStackOk
    }
  }

  if (bottomStackOk(colour) && middleStackOk(colourStack1)) {
    return [colourMap(newColour), colourMap(colour), _colourStack1 ? colourMap(colourStack1) : null]
  }

  console.log("couldn't stack")
  if (colour == newColour) {
    return ["white"]
  }
  return [colourMap(newColour)]
}

export function Hex({ type, bot }: HexProps) {
  const [colour, setColour] = useState("white")
  const [colourStack1, setColourStack1] = useState<string | null>(null)
  const [colourStack2, setColourStack2] = useState<string | null>(null)
  const [showAnimal, setShowAnimal] = useState(false)

  let ml = ""
  switch (type) {
    case mid:
      ml = "ml-[8.5%]"
      break
    case first:
      ml = "ml-[4.16%]"
      break
    case alt:
      ml = "ml-[16.7%]"
      break
  }

  const mb = bot ? "" : "-mb-[9.3%]"

  const onClick = () => {
    switch (state.mode) {
      case colourMode: {
        const [newColour, newColourStack1, newColourStack2] = handleColourMode(
          colour,
          state.tile,
          colourStack1,
          colourStack2,
        )
        setColour(newColour!)
        setColourStack1(newColourStack1)
        setColourStack2(newColourStack2)
        break
      }
      case animalMode:
        console.log("animal mode")
        setShowAnimal(!showAnimal)
        break
    }
  }

  // https://www.reddit.com/r/learnjavascript/comments/vuspsq/any_wayor_alternative_to_trigger_a_click_event_of/
  // https://stackoverflow.com/questions/254302/how-can-i-determine-the-type-of-an-html-element-in-javascript
  const otherClick = (e: MouseEvent) => {
    const elems = document.elementsFromPoint(e.clientX, e.clientY)
    for (const elem of elems) {
      if (elem.nodeName == "polygon") {
        // https://stackoverflow.com/a/49571744/9783641
        elem.dispatchEvent(new CustomEvent("FakeClick"))
      }
    }
  }

  return html`
    <div
      onClick=${otherClick}
      class="flex align-center justify-center min-w-[16.67%] ${ml} ${mb}"
    >
      <svg
        viewBox="0 0 102 102"
        xmlns="http://www.w3.org/2000/svg"
      >
        <polygon
          onFakeClick=${onClick}
          points="101,51, 76,94.3 26,94.3  1,51 26,7.7 76,7.7"
          fill=${colour}
          stroke-width="2"
        />

        ${colourStack1
          ? html`
              <polygon
                points="16,77.65 86,77.65 76,94.3 26,94.3"
                fill=${colourStack1}
              />
            `
          : ""}
        ${colourStack2
          ? html`
              <polygon
                points="6,61 96,61 86,77.65 16,77.65"
                fill=${colourStack2}
              />
            `
          : ""}
        ${showAnimal
          ? html`
              <circle
                fill="#f5a400"
                cx="51"
                cy="51"
                r="10"
              />
            `
          : ""}
      </svg>
    </div>
  `
}
