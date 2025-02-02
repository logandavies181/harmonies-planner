import { html } from "./html.ts"
import { state } from "./state.ts";

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
      <div class="grow" />
      <div class="grow" />
      <${AnimalButton} />
      <div class="grow" />
      <div class="grow" />
    </div>
  `
}

type ButtonProps = {
  text: string
  setColour: string
  colour: string
  hoverColour: string
  focusColour: string
}

function Button(props: ButtonProps) {
  const onClick = () => {
    state.setMode("colour", props.setColour)
  }
  return html`
    <div class="flex grow justify-center" >
      <button
        type="button"
        class="grow justify-self-center focus:outline-none text-white text-lg ${props.colour} ${props.hoverColour} focus:ring-4 ${props.focusColour} font-medium rounded-lg px-5 py-2.5 mx-1 my-1"
        onClick=${onClick}
      >
        ${props.text}
      </button>
    </div>
  `
}

function GreenButton() {
  return html`
    <${Button}
      text="Tree"
      setColour="#008236"
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
      setColour="#ffb900"
      colour="bg-amber-400"
      hoverColour="hover:bg-amber-500"
      focusColour="focus:ring-amber-300"
    />
  `
}

function RedButton() {
  return html`
    <${Button}
      text="Brick"
      setColour="#c10007"
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
      setColour="#364153"
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
      setColour="#193cb8"
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
      setColour="#894b00"
      colour="bg-yellow-800"
      hoverColour="hover:bg-amber-900"
      focusColour="focus:ring-yellow-700"
    />
  `
}

function AnimalButton() {
  const onClick = () => {
    state.setMode("animal")
  }
  return html`
    <${Button}
      text="Animal"
      colour="bg-orange-500"
      hoverColour="hover:bg-orange-600"
      focusColour="focus:ring-orange-300"
      onClick=${onClick}
    />
  `
}
