import { html } from "./html.ts"

import { alt, first, Hex, HexProps, mid } from "./hex.ts"

function First({ bot }: HexProps) {
  return html`
    <${Hex}
      type=${first}
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

function Mid({ bot }: HexProps) {
  return html`
    <${Hex}
      type=${mid}
      bot=${bot}
    />
  `
}

export function Hexes() {
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
