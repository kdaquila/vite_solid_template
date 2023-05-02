import { For } from "solid-js"
import LogoButton from "./components/LogoButton"
import { uiTechnology, supportTechnology } from "./assets/logos"
import CounterButton from "./components/CounterButton"

export default function App() {
  const { VITE_APP_PATH = "Missing .env file. Check example.env" } = import.meta
    .env

  return (
    <>
      <div class="flex justify-center">
        <For each={uiTechnology}>
          {(logo) => (
            <LogoButton
              href={logo.href}
              img={logo.img}
              imgAltText={logo.imgAltText}
              classNames={logo.classNames}
            />
          )}
        </For>
      </div>

      <h1 class="mb-8 text-5xl">SolidJS + Tailwind CSS</h1>

      <h2 class="mb-4 text-2xl">with</h2>

      <div class="flex justify-center">
        <For each={supportTechnology}>
          {(logo) => (
            <LogoButton
              href={logo.href}
              img={logo.img}
              imgAltText={logo.imgAltText}
              classNames={logo.classNames}
            />
          )}
        </For>
      </div>

      <h1 class="mb-8 text-5xl">Vite + ESLint + Prettier + Typescript</h1>

      <CounterButton />

      <p class="mb-2 ">
        <span>Edit</span>
        <code class="mx-2 inline-block rounded-lg bg-[rgba(0,0,0,0.05)] px-3 py-1 dark:bg-[rgba(255,255,255,0.05)]">
          {VITE_APP_PATH}
        </code>
        <span>and save to test HMR</span>
      </p>
    </>
  )
}
