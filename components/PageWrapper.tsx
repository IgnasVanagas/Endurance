interface PageWrapperProps {
  children: React.ReactNode
  className?: string
  withTopPadding?: boolean
}

export default function PageWrapper({ 
  children, 
  className = '', 
  withTopPadding = true 
}: PageWrapperProps) {
  return (
    <div className={`${withTopPadding ? 'pt-20' : ''} ${className}`}>
      {children}
    </div>
  )
}
