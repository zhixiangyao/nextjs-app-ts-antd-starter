'use client'

import { useState } from 'react'

export default function HelloWorld() {
  const [state, setState] = useState(0)

  return (
    <div className="cursor-pointer" onClick={() => setState((e) => e + 1)}>
      Hello World: Client Component {state}
    </div>
  )
}
