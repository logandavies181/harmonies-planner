import { html } from "./html.ts"

import { useState } from "https://esm.sh/preact@10.25.3/hooks"

type HexType = "mid" | "first" | "alt"
export const mid = "mid"
export const first = "first"
export const alt = "alt"

export type HexProps = {
  type: HexType
  bot: boolean
}

export function Hex({ type, bot }: HexProps) {
  const [colour, setColour] = useState("white")

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

  console.log(bot)

  const onClick = () => {
    setColour("red")
  }

  // https://www.reddit.com/r/learnjavascript/comments/vuspsq/any_wayor_alternative_to_trigger_a_click_event_of/
  // https://stackoverflow.com/questions/254302/how-can-i-determine-the-type-of-an-html-element-in-javascript
  const otherClick = (e: MouseEvent) => {
    console.log("fuck")
    const elems = document.elementsFromPoint(e.clientX, e.clientY)
    for (const elem of elems) {
      if (elem.nodeName == "polygon") {
        // https://stackoverflow.com/a/49571744/9783641
        elem.dispatchEvent(new Event("click"))
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
          onClick=${onClick}
          points="101,51, 76,94.3 26,94.3  1,51 26,7.7 76,7.7"
          fill=${colour}
          stroke-width="2"
        />
      </svg>
    </div>
  `
}
