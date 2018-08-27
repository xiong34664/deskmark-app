import React from 'react'
const Link = ({active, children, onClick}) => {
  if (active) {
    return <span>{children}</span>
  }
  return (
    <a href="#" onClick={e=>{
      e.preventDefault()
      onClick()
    }}></a>
  )
}

export default Link