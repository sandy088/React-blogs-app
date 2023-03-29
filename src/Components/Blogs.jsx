import { useContext } from "react"
import { AppContext } from "../context/AppContext"
import Spinner from "./Spinner"
import Card from "./Card"

function Blogs() {
    const { loading, posts } = useContext(AppContext)
    return (
        <div className="h-screen flex flex-col mx-auto gap-y-10 text-left ">
            {
                loading ? (
                    <div className="h-screen w-screen flex justify-center items-center"> <Spinner></Spinner></div>

                ) : (
                    <div>
                        {
                            posts.length == 0 ? (<div className="h-screen w-screen flex justify-center items-center text-[20px] font-bold dark:text-white"> Blogs Not Found</div>) :
                                posts.map((post) => (
                                    <Card post={post} />
                                ))}
                    </div>
                )

            }


        </div>
    )
}

export default Blogs