import { html } from "./html.ts"

import { alt, first, Hex, mid } from "./hex.ts"

function First() {
  return html` <${Hex} type=${first} /> `
}

function Alt() {
  return html` <${Hex} type=${alt} /> `
}

function Mid() {
  return html` <${Hex} type=${mid} /> `
}

export function Hexes() {
  return html`
    <div class="flex grow flex-wrap min-w-full">
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
