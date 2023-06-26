'use client'

import useBearStore from '@/store/useBearStore'

export default function BearControls() {
  const increasePopulation = useBearStore((state) => state.increasePopulation)

  return (
    <button className="p-2 bg-sky-400 rounded" onClick={increasePopulation}>
      one up ++
    </button>
  )
}
