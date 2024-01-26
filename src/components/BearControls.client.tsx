'use client'

import useBearStore from '@/store/useBearStore'

export default function BearControls() {
  const increasePopulation = useBearStore((state) => state.increasePopulation)

  return (
    <button className="rounded bg-sky-400 p-2" onClick={increasePopulation}>
      one up ++
    </button>
  )
}
