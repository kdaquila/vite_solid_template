import { createSignal } from "solid-js"

export default function CounterButton() {
  const [count, setCount] = createSignal<number>(0)

  const incrementCount = () => setCount(() => count() + 1)

  return (
    <button
      class="mb-6 rounded-lg  border border-transparent bg-gray-200 p-8 px-4 py-2 text-lg transition-colors duration-200 hover:border-blue-500 focus:ring-2  focus:ring-black dark:bg-gray-950 dark:focus:ring-white"
      onClick={incrementCount}
    >
      count is {count()}
    </button>
  )
}
