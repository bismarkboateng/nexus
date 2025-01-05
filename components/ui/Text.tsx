import React from 'react'

interface TextProps {
   className?: string
   variant?: "p" | "span" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6"
   children: React.ReactNode
}

const Text = ({variant, className, children}: TextProps) => {
    const Tag = variant || 'p'

  return (
    <Tag className={className}>
      {children}
    </Tag>
  )
}

export default Text
