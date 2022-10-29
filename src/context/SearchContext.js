import {createContex} from 'react'

export const SearchContext = createContext ({
    term: '',
    handleSearch: () => {}
})