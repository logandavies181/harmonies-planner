import { html } from "./html.ts"
import { state, Tile } from "./state.ts"

export function Picker() {
  return html`
    <div class="flex flex-wrap portrait:flex-row landscape:flex-col justify-center portrait:min-w-full">
      <${GreenButton} />
      <${BrownButton} />
      <${YellowButton} />
      <${RedButton} />
      <${GreyButton} />
      <${BlueButton} />
    </div>
    <div class="flex portrait:flex-row landscape:flex-col justify-center portrait:min-w-full">
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
  tile: Tile
  colour: string
  hoverColour: string
  focusColour: string
  clickFn: () => void
}

function Button(props: ButtonProps) {
  const onClick = () => {
    state.setMode("colour", props.tile)
  }
  return html`
    <div class="flex justify-center">
      <button
        type="button"
        class="grow justify-self-center focus:outline-none text-white text-sm md:text-lg ${props.colour} ${props.hoverColour} focus:ring-4 ${props.focusColour} font-medium rounded-lg px-5 py-2.5 mx-1 my-1"
        onClick=${props.clickFn ?? onClick}
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
      tile=${Tile.Tree}
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
      tile=${Tile.Field}
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
      tile=${Tile.Brick}
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
      tile=${Tile.Mountain}
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
      tile=${Tile.Water}
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
      tile=${Tile.Wood}
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
      clickFn=${onClick}
    />
  `
}
