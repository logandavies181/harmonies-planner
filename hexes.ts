import { html } from "./html.ts"

import { alt, first, otherAlt, otherFirst, Hex, HexProps, mid } from "./hex.ts"
import { useState } from "https://esm.sh/preact@10.25.3/hooks";
import { IslandsTopic } from "./state.ts";

function First({ bot }: HexProps) {
  return html`
    <${Hex}
      type=${first}
      bot=${bot}
    />
  `
}

function OtherFirst({ bot }: HexProps) {
  return html`
    <${Hex}
      type=${otherFirst}
      bot=${bot}
    />
  `
}

function Alt({ bot }: HexProps) {
  return html`
    <${Hex}
      type=${alt}
      bot=${bot}
    />
  `
}

function OtherAlt({ bot }: HexProps) {
  return html`
    <${Hex}
      type=${otherAlt}
      bot=${bot}
    />
  `
}

function Mid({ bot }: HexProps) {
  return html`
    <${Hex}
      type=${mid}
      bot=${bot}
    />
  `
}

export function Hexes() {
  const [islands, setIslands] = useState(false)

  IslandsTopic.Subscribe("hexes", () => setIslands(!islands))

  if (islands) {
    return html`<${IslandHexes} />`
  }
  return html`<${LandHexes} />`
}

export function IslandHexes() {
  return html`
    <div class="flex grow flex-wrap portrait:min-w-full landscape:min-w-[50%]">
      <${First} />
      <${Mid} />
      <${Mid} />
      <${Mid} />
      <${Alt} />
      <${Mid} />
      <${Mid} />
      <${First} />
      <${Mid} />
      <${Mid} />
      <${Mid} />
      <${Alt} />
      <${Mid} />
      <${Mid} />
      <${First} />
      <${Mid} />
      <${Mid} />
      <${Mid} />
      <${Alt} />
      <${Mid} />
      <${Mid} />
      <${First} bot />
      <${Mid} bot />
      <${Mid} bot />
      <${Mid} bot />
    </div>
  `
}

export function LandHexes() {
  return html`
    <div class="flex grow items-center flex-wrap portrait:min-w-full landscape:min-w-[50%] landscape:max-w-[75%]">
      <${OtherFirst} />
      <${Mid} />
      <${Mid} />
      <${OtherAlt} />
      <${Mid} />
      <${OtherFirst} />
      <${Mid} />
      <${Mid} />
      <${OtherAlt} />
      <${Mid} />
      <${OtherFirst} />
      <${Mid} />
      <${Mid} />
      <${OtherAlt} />
      <${Mid} />
      <${OtherFirst} />
      <${Mid} />
      <${Mid} />
      <${OtherAlt} />
      <${Mid} />
      <${OtherFirst} bot />
      <${Mid} bot />
      <${Mid} bot />
    </div>
  `
}
