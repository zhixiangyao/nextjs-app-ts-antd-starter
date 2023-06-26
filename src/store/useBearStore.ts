import { create } from 'zustand'
import { persist } from 'zustand/middleware'

const initialStates = {
  bears: 0,
}

interface BearState {
  bears: number
  increasePopulation: () => void
  removeAllBears: () => void
}

const useBearStore = create<BearState>()(
  persist(
    (set) => ({
      bears: initialStates.bears,
      increasePopulation: () => set((state) => ({ bears: state.bears + 1 })),
      removeAllBears: () => set({ bears: initialStates.bears }),
    }),
    {
      name: 'storage-data-bear',
    },
  ),
)

export default useBearStore
