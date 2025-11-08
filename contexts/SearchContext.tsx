'use client'
import { createContext, useContext, useState, ReactNode, Context } from 'react'

interface SearchContextProps {
    searchFormOpen: boolean
    openSearchForm: () => void
    closeSearchForm: () => void
}

const SearchContext: Context<SearchContextProps | undefined> = createContext<SearchContextProps | undefined>(undefined)

export const SearchProvider = ({ children }: { children: ReactNode }) => {
    const [searchFormOpen, setSearchFormOpen] = useState(false)

    const openSearchForm = (): void => setSearchFormOpen(true)
    const closeSearchForm = (): void => setSearchFormOpen(false)

    return (
        <SearchContext.Provider value={{ searchFormOpen, openSearchForm, closeSearchForm }}>
            {children}
        </SearchContext.Provider>
    )
}

export const useSearch = () => {
    const context = useContext(SearchContext)
    if (!context) throw new Error('useSearch must be used within SearchProvider')
    return context
}
