import React from 'react'

interface WrapperProps {
  children?: React.ReactNode
}

export const Wrapper: React.FC<WrapperProps> = ({ children }) => {
  return (
    <div className="mt-4 shadow-lg bg-slate-100 border border-slate-300">
      <div className="ml-5 mr-5 mb-5 mt-5 border border-yellow-500">
        {children}
      </div>
    </div>
  )
}
