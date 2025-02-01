import { render } from "https://esm.sh/preact"

import { html } from "./html.ts"

import { Hexes } from "./hex.ts"

// if ("serviceWorker" in navigator) {
//   navigator.serviceWorker.register("sw.js", { scope: "/" })
// }

function App() {
  return html`
    <main class="flex flex-col min-w-screen" >
      <${Hexes} />
    </main>
  `
}

render(html`<${App} />`, document.body)
