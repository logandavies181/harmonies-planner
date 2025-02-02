import { html } from "./html.ts"

export function Picker() {
  return html`
    <div class="flex flex-row justify-center min-w-full">
      <${GreenButton} />
      <${BrownButton} />
      <${YellowButton} />
      <${RedButton} />
      <${GreyButton} />
      <${BlueButton} />
    </div>
    <div class="flex flex-row justify-center min-w-full">
      <${GreenButton} />
    </div>
  `
}

type ButtonProps = {
  text: string
  colour: string
  hoverColour: string
  focusColour: string
}

function Button(props: ButtonProps) {
  return html`
    <button
      type="button"
      class="grow focus:outline-none text-white text-lg ${props.colour} ${props.hoverColour} focus:ring-4 ${props.focusColour} font-medium rounded-lg px-5 py-2.5 me-2 mb-2"
    >
      ${props.text}
    </button>
  `
}

function GreenButton() {
  return html`
    <${Button}
      text="Tree"
      colour="bg-green-700"
      hoverColour="hover:bg-green-800"
      focusColour="focus:ring-green-300"
    />
  `
}

function YellowButton() {
  return html`
    <${Button}
      text="Field"
      colour="bg-yellow-700"
      hoverColour="hover:bg-yellow-800"
      focusColour="focus:ring-yellow-300"
    />
  `
}

function RedButton() {
  return html`
    <${Button}
      text="Brick"
      colour="bg-red-700"
      hoverColour="hover:bg-red-800"
      focusColour="focus:ring-red-300"
    />
  `
}

function GreyButton() {
  return html`
    <${Button}
      text="Mountain"
      colour="bg-gray-700"
      hoverColour="hover:bg-gray-800"
      focusColour="focus:ring-gray-300"
    />
  `
}

function BlueButton() {
  return html`
    <${Button}
      text="Water"
      colour="bg-blue-700"
      hoverColour="hover:bg-blue-800"
      focusColour="focus:ring-blue-300"
    />
  `
}

function BrownButton() {
  return html`
    <${Button}
      text="Wood"
      colour="bg-yellow-800"
      hoverColour="hover:bg-amber-900"
      focusColour="focus:ring-yellow-700"
    />
  `
}
