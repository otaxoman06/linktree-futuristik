
import React, { useState } from 'react'
import sound from '/sound.mp3'

function Dropdown({ title, links }) {
  const [open, setOpen] = useState(false)

  const toggleDropdown = () => {
    setOpen(!open)
    new Audio(sound).play()
  }

  return (
    <div className="relative">
      <button
        onClick={toggleDropdown}
        className="w-full bg-purple-700 p-2 rounded-lg hover:scale-105 transition"
      >
        {title}
      </button>
      {open && (
        <div className="absolute left-1/2 transform -translate-x-1/2 mt-2 bg-black bg-opacity-80 border border-cyan-500 rounded-lg p-4 space-y-2 z-50">
          {links.map((link, i) => (
            <a key={i} href={link.url} target="_blank" rel="noopener noreferrer" className="block text-cyan-300 hover:text-white transition">
              {link.label}
            </a>
          ))}
        </div>
      )}
    </div>
  )
}

export default Dropdown
