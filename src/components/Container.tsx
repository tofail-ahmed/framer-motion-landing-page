import React from 'react'

const Container = ({children,className}) => {
  return (
    <div className={`${className} w-full max-w-[1220px] mx-auto   px-10`}>{children}</div>
  )
}

export default Container