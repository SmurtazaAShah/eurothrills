'use client'
import { createContext, useContext, useState } from 'react'
import InquireModal from './InquireModal'

interface InquireContextType {
  openInquire: () => void
}

const InquireContext = createContext<InquireContextType>({ openInquire: () => {} })

export function useInquire() {
  return useContext(InquireContext)
}

export default function InquireProvider({ children }: { children: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <InquireContext.Provider value={{ openInquire: () => setIsOpen(true) }}>
      {children}
      <InquireModal isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </InquireContext.Provider>
  )
}
