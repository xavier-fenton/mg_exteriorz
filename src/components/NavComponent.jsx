import { useState } from 'react'

export default function NavComponent() {
  const [visible, setVisiblity] = useState('hidden')

  return (
    <nav
      className="fixed flex items-center justify-between p-6 lg:px-8"
      aria-label="Global"
    >
      <div className="flex lg:flex-1">
        <div className="text-lg font-semibold leading-6 text-gray-900">
          <a href="/" className="-m-1.5 p-1.5">
            M&G Exteriorz
          </a>
        </div>
      </div>
      <div className="text-md font-semibold leading-6 text-gray-900">
        <button onClick="">Menu</button>
      </div>

      <div className={`${visible} lg:gap-x-12`}>
        <a href="#" className="text-sm font-semibold leading-6 text-gray-900">
          What We Do
        </a>
        <a
          href="/contact"
          className="text-sm font-semibold leading-6 text-gray-900"
        >
          Contact
        </a>
      </div>
    </nav>
  )
}
