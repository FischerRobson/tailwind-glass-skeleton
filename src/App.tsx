import { useState } from 'react'
import { Tilt } from 'react-tilt'
import './styles/main.css'

const gradients = {
  blueFlame: {
    bg: 'bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-amber-200 via-violet-600 to-sky-900',
    color: 'text-zinc-800',
  },
  space: {
    bg: 'bg-gradient-to-b from-gray-900 to-gray-600 bg-gradient-to-r',
    color: 'text-zinc-200',
  },
  gotham: {
    bg: 'bg-gradient-to-r from-gray-700 via-gray-900 to-black',
    color: 'text-zinc-400',
  },
}

type Gradients = keyof typeof gradients

const defaultOptions = {
  reverse: true, // reverse the tilt direction
  max: 35, // max tilt rotation (degrees)
  perspective: 1000, // Transform perspective, the lower the more extreme the tilt gets.
  scale: 1, // 2 = 200%, 1.5 = 150%, etc..
  speed: 1000, // Speed of the enter/exit transition
  transition: true, // Set a transition on enter/exit.
  axis: null, // What axis should be disabled. Can be X or Y.
  reset: false, // If the tilt effect has to be reset on exit.
  easing: 'cubic-bezier(.03,.98,.52,.99)', // Easing on enter/exit.
}

function App() {
  const [gradient, setGradient] = useState<Gradients>('blueFlame')

  const { bg, color } = gradients[gradient]

  return (
    <main
      className={`flex h-screen w-screen flex-col items-center justify-start ${bg} p-5`}
    >
      <nav className="mb-4 flex w-full items-center justify-start gap-3">
        {Object.entries(gradients).map((grad) => {
          return (
            <button
              className="w-24 rounded-md bg-zinc-200 text-zinc-700 hover:bg-zinc-400"
              key={grad[0]}
              onClick={() => setGradient(grad[0] as Gradients)}
            >
              {grad[0]}
            </button>
          )
        })}
      </nav>
      <Tilt
        options={defaultOptions}
        className="flex h-[640px] w-[640px] items-center justify-center rounded-2xl border border-opacity-30 bg-white bg-opacity-10 "
      >
        <textarea
          className={`${color} h-full w-full border-none bg-transparent outline-none focus:outline-none`}
        >
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. At corrupti
          modi itaque. Expedita fugiat deserunt accusantium. Deserunt, magnam
          fugiat. Vitae quibusdam sed dolore est dignissimos maiores quod vel
          suscipit perspiciatis.
        </textarea>
      </Tilt>
    </main>
  )
}
// ontainer h-96 w-96 bg-white bg-opacity-10 rounded-2xl shadow-5xl relative z-2 border border-opacity-30 border-r-0 border-b-0 backdrop-filter backdrop-blur-sm

export default App
