function Card({ post }) {
    return <div className="w-11/12 max-w-2xlw-11/12 max-w-2xl mx-auto border rounded-lg p-3 flex flex-col gap-2 shadow-lg py-4 mb-5 
    cursor-pointer hover:scale-95 hover:shadow-2xl transition-all dark:bg-slate-900 dark:border-gray-800 dark:dark:drop-shadow-[0_35px_35px_rgba(255,255,255,0.1)]">
        <h3 className="font-bold text-lg dark:text-white">{post.title}</h3>

        <p className="dark:text-white">By <span className=" italic dark:text-white">{post.author}</span> on <span className=" dark:text-white italic">{post.category}</span></p>
        <p className="dark:text-white">Posted on <span className="dark:text-white">{post.date}</span></p>
        <p className="dark:text-white">{post.content}</p>

        <div className="flex gap-3 flex-wrap justify-center">
            {post.tags.map((tag) => (
                <p className=" text-blue-600 underline cursor-pointer ">{tag}</p>
            ))}
        </div>

        <div className="flex justify-center">
            <button className="rounded-md bg-purple-600 px-3 py-1 text-white " onClick={()=>{
                let url= post.img
                window.open(url)
            }}>Read More</button>
        </div>
    </div>
}

export default Card