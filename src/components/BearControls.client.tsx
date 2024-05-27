'use client'

import useBearStore from '@/store/useBearStore'

const BearControls = () => {
  const increasePopulation = useBearStore((state) => state.increasePopulation)

  return (
    <button className="rounded bg-sky-400 p-2" onClick={increasePopulation}>
      one up ++
    </button>
  )
}

export { BearControls }
