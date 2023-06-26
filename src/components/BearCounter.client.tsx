'use client'

import { useStoreState } from '@/store/hooks'
import useBearStore from '@/store/useBearStore'

export default function BearCounter() {
  const bears = useStoreState(useBearStore, (state) => state.bears)

  return <h1>{bears} around here ...</h1>
}
