import { useContext } from "react"
import { AppContext } from "../context/AppContext"

function Footer() {
    const {page, totalPages, handlePageChange}= useContext(AppContext)

    function prev() {
        handlePageChange(page-1)
    }

    function next() {
        handlePageChange(page+1)
    }
    return (
        <div className="fixed bottom-0 inset-x-0 bg-white py-2 border-t-2 border-t-gray-300 dark:bg-slate-800 dark:border-gray-700">

            <frameElement className="flex justify-between w-8/12 mx-auto">

                <div className="flex gap-3">
                { page>1 &&
                    <button className="border-2 p-1 bg-white rounded-lg dark:bg-slate-500 dark:border-gray-700" onClick={prev}>Previous</button>
                }
                
                {
                   page<totalPages &&
                    <button className="border-2 p-1 px-3 bg-white rounded-lg dark:bg-slate-500 dark:border-gray-700" onClick={next}>Next</button>
                }
                
            </div>
            
            <p className="dark:text-white">Page <span className="dark:text-white"> {page} </span> of <span className="dark:text-white">{totalPages}</span></p>
            </frameElement>
            

        </div>
    )
}

export default Footer