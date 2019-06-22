import React from 'react'

export default function Title({ name, title }) {
  return (
    <div>
        <div>
            <h1>{name}</h1>
            <strong className="text-blue">{title}</strong>
        </div>
      
    </div>
  )
}
