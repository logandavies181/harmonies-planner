import { html } from "./html.ts";

type HexType = "mid" | "first" | "alt"
const mid = "mid"
const first = "first"
const alt = "alt"

type HexProps = {
  type: HexType
}

export function Hex({ type }: HexProps) {
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
  return html`
    <div class="flex align-center justify-center min-w-[16.67%] ${ml} -mb-[9.3%]" >
      <img src="hex.svg" />
    </div>
  `
}

function First() {
  return html`
    <${Hex} type="first" />
  `
}

function Alt() {
  return html`
    <${Hex} type="alt" />
  `
}

function Mid() {
  return html`
    <${Hex} type="mid" />
  `
}

export function Hexes() {
  return html`
    <div class="flex grow flex-wrap min-w-full" >
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
      <${First} />
      <${Mid} />
      <${Mid} />
      <${Mid} />
    </div>
  `
}
