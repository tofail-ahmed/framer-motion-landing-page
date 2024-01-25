import { cn } from '@/lib/utils'
import React, { ReactNode } from 'react'

type TContainerprops={
  children:ReactNode;
  className?:string;
}

const Container = ({children,className}:TContainerprops) => {
  return (
    <div className= {cn('w-full max-w-[1230px] mx-auto   px-10',className)}>{children}</div>
  )
}

export default Container