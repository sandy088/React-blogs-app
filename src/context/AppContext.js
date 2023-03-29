

//first step -> create context

import { baseUrl } from "../baseUrl";

const { createContext, useState } = require("react");

export const AppContext = createContext()

//2nd step is provision -> Provider

export function AppContextProvider({children}) {
    //all the the things needed

    const [loading,setLoading] = useState(false)
    const [posts, setPosts] = useState([])
    const [page,setPage]= useState(1)
    const [totalPages, setTotalPages] = useState(null)
    const [isDarkMode, setDarkMode] = useState(false)




    //Setting up the data
    async function fetchBlog(page=1){

        setLoading(true)
        let url = `${baseUrl}?page=${page}`

        try {

            const result= await fetch(url)
            const data= await result.json()
            console.log(data)
            setPage(data.page)
            setTotalPages(data.totalPages)
            setPosts(data.posts)

            
        } catch (error) {
            alert("Some Error occured while fetching Data" + error)
            setPage(1)
            setTotalPages(null)
            setPosts([])
        }
        setLoading(false)
    }

    function handlePageChange(page) {
        setPage(page)
        fetchBlog(page)
    }

    function switchMode(){
        setDarkMode(!isDarkMode)
    }


    const value = {
        loading,
        setLoading,
        posts,
        setPosts,
        page,
        setPage,
        totalPages,
        setTotalPages,
        fetchBlog,
        handlePageChange,
        isDarkMode,
        setDarkMode,
        switchMode,
    }


    return <AppContext.Provider value={value}>
        {children}
    </AppContext.Provider>
}