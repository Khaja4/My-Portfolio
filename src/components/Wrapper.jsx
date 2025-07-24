import React from 'react'

const Wrapper = ({children, id}) => {
  return (
    <section id={id} className="flex flex-col justify-center gap-5 text-center  min-h-dvh mx-auto items-center">
        {children}
    </section>
  )
}

export default Wrapper
