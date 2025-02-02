import { render } from "https://esm.sh/preact@10.25.3"

import { html } from "./html.ts"

import { Hexes } from "./hexes.ts"
import { Picker } from "./picker.ts"

// if ("serviceWorker" in navigator) {
//   navigator.serviceWorker.register("sw.js", { scope: "/" })
// }

function App() {
  return html`
    <main class="flex flex-col min-w-screen">
      <${Hexes} />
      <${Picker} />
    </main>
  `
}

render(html`<${App} />`, document.body)
