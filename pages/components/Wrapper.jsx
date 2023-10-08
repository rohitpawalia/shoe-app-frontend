import React from 'react'

const Wrapper = ({children, className}) => {
  return (
    <div className={`w-full max-w-[1280px] px-20 md:px-40 mx-auto ${className || ""}`}>
        {children}
    </div>
  )
}

export default Wrapper