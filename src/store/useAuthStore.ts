import { create } from 'zustand'
import { persist } from 'zustand/middleware'

const initialStates = {
  isAuthenticated: false,
  user: null,
  token: null,
}

interface AuthState {
  isAuthenticated: boolean
  user: {
    id: string
    email: string
    firstName: string
    lastName: string
    phone: string
  } | null
  token: null | string
  login: (email: string, password: string) => Promise<void>
  register: (userInfo: FormData) => Promise<void>
  logout: () => void
}

const useAuthStore = create<AuthState>()(
  persist(
    (set) => ({
      isAuthenticated: initialStates.isAuthenticated,
      user: initialStates.user,
      token: initialStates.token,
      login: async (email, password) => {
        // Login user code
      },
      register: async (userInfo) => {
        // Registering user code
      },
      logout: () => {
        // Logout user code
      },
    }),
    {
      name: 'storage-data-auth',
    },
  ),
)

export default useAuthStore
