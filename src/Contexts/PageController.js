import React, {createContext, useContext, useState} from 'react'

const PageContext = createContext()

const pages = [
    'Home', 'Sobre', 'Serviços', 'Projetos', 'Contato'
]

export default function PageProvider({children}) {

    const [nextPage, setNextPage] = useState(pages[1])
    
    const setCurrentPage = (currentPage) => {
        const index = pages.indexOf(currentPage)
        setNextPage(index)
    }

    return (
        <PageContext.Provider
            value={{
                nextPage,
                setCurrentPage,
            }}
        >
            {children}
        </PageContext.Provider>
    )
}

export function usePageContext(){
    const {nextPage, setcurrentPage} = useContext(PageContext)
    return [nextPage, setcurrentPage]
}