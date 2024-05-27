'use client'

import { useState } from 'react'

const HelloWorld = () => {
  const [state, setState] = useState(0)

  return (
    <div className="cursor-pointer" onClick={() => setState((e) => e + 1)}>
      Hello World: Client Component {state}
    </div>
  )
}

export { HelloWorld }
