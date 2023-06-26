'use client'

import BearCounter from '@/components/BearCounter.client'
import HelloWorld from '@/components/HelloWorld.client'
import { Button } from '@/components/ui/button'

export default function Home() {
  return (
    <div className="flex flex-col items-start">
      <div>Home Page</div>
      <br />
      <HelloWorld />
      <br />
      <BearCounter />
      <br />
      <Button>Button</Button>
    </div>
  )
}
