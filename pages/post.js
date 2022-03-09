import Nav from "../components/Nav";
import { useState } from "react";

const Comment = () => {
    return (
        <div className="px-4 flex-col flex py-2 bg-white rounded-xl shadow-lg w-full mb-4">
            <span className="text-base mb-3 tracking-wider">Fusce bibendum fringilla nunc vitae condimentum. Vivamus ante velit, fermentum id mattis sed, venenatis eu nulla. Proin lacus dui, faucibus sit amet maximus et,</span>
            <div className="w-full mb-2 flex items-center justify-between">
                <div>
                    <span className="block text-base font-semibold mb-1">Felix</span>
                    <span className="text-gray-300 text-sm">An hour ago</span>
                </div>
                <div>
                    <span className="text-gray-300 text-sm">Reply Comment</span>
                </div>
            </div>
        </div>
    )
}

const TopStories = () => {
    return (
        <div className="my-4 max-w-[85%]">
        <h1 className="text-3xl font-bold text-[#00B0F0] tracking-wide mb-1">Top Stories</h1>
        <div className="bg-gray-100 border-t-2 border-gray-700 py-12 px-6 flex items-start flex-col">
            <div className="grid max-w-[95%] px-8 grid-cols-3 gap-x-8">
                    <div className="flex flex-col items-start justify-start">
                        <div className="flex flex-col w-full mb-2 rounded-md items-center">
                            <img src="/images/image.png" className="w-full rounded-xl" />
                        </div>
                        <span className="tracking-wider w-[65%] mx-1 font-semibold text-base">Lorem ipsum dolor sit amet elit.</span>
                    </div>
                    <div className="flex flex-col items-start justify-start">
                        <div className="flex flex-col w-full mb-2 rounded-md items-center">
                            <img src="/images/image.png" className="w-full rounded-xl" />
                        </div>
                        <span className="tracking-wider w-[65%] mx-1 font-semibold text-base">Lorem ipsum dolor sit amet elit.</span>
                    </div>
                    <div className="flex flex-col items-start justify-start">
                        <div className="flex flex-col w-full mb-2 rounded-md items-center">
                            <img src="/images/image.png" className="w-full rounded-xl" />
                        </div>
                        <span className="tracking-wider w-[65%] mx-1 font-semibold text-base">Lorem ipsum dolor sit amet elit.</span>
                    </div>
            </div>
        </div>
        </div>
    )
}

const CommentSection = () => {
    const initialState = {
        first_name: "",
        last_name: "",
        comment:""
    };
    const [form, setForm] = useState(initialState);
    const formChange = (e) => {
        setForm({...form, [e.target.name]:e.target.value})
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(form);
    }
    return (
        <div className="my-4 max-w-[85%]">
        <h1 className="text-3xl font-bold text-[#00B0F0] tracking-wide mb-1">Reader Comments</h1>
        <div className="bg-gray-100 border-t-2 border-gray-700 py-8 px-12 flex flex-col">
            <div className="flex flex-col max-w-[80%]">
                <Comment />
                <Comment />
            </div>
            <div className="w-full max-w-[95%] bg-white rounded-sm px-8 my-8 py-12">
                <h1 className="font-semibold mb-4">Join the discussion</h1>
                <form onSubmit={handleSubmit} className="flex w-[85%] flex-col">
                    <input type="text" placeholder="Write your comment" onChange={formChange} value={form.comment} name="comment" className="outline-none bg-transparent rounded-3xl border border-gray-200 w-full py-4 px-4 mb-6" />
                    <div className="grid grid-cols-2 gap-x-5 gap-y-5 mb-4 w-[70%]">
                        <div className="basis-[50%]">
                            <span className="text-base block traking-wide mb-2">Your Name</span>
                            <input className="bg-transparent w-full py-2 border border-gray-200  rounded-2xl" name="last_name"  value={form.last_name} onChange={formChange} />
                        </div>
                        <div className="basis-[50%]">
                            <span className="text-base block traking-wide mb-2">Your Name</span>
                            <input name="first_name"  value={form.first_name} onChange={formChange} className="bg-transparent w-full py-2 border border-gray-200  rounded-2xl" />
                        </div>
                        <div className="flex flex-col col-span-1 items-center">
                            <button className="text-white bg-[#00B0F0] rounded-3xl py-2 mt-6 border-none w-full">Submit</button>
                        </div>
                    </div> 
                </form>
            </div>
        </div>
    </div>
    )
}

const Post = () => {
    return (
        <div>
            <Nav />
            <div className="flex flex-col my-4 w-full max-w-[85%] mx-auto">
                <h2 className="text-2xl font-semibold text-black my-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vitae iaculis nisi.</h2>
                <div className="w-full flex flex-col items-center my-2">
                    <img src="/images/car.png" className="w-full" />
                </div>
                <div className="max-w-[70%] flex flex-col my-8 gap-y-8">
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vitae iaculis nisi. Praesent varius diam nisi, sit amet mollis dolor pharetra sit amet. Suspendisse porttitor viverra nunc nec ultrices. Nam venenatis quis massa at tempus. Suspendisse pretium metus magna, et interdum dolor gravida luctus. Fusce maximus nisi eros, eu malesuada ipsum ultrices vel. Nam in mi finibus, venenatis nisi tempor, feugiat massa. 
                    Quisque elementum, mi vel sodales luctus, est nunc egestas tortor, eget accumsan sapien lorem vitae erat. Curabitur a ex iaculis, posuere lorem at, varius urna. Nam iaculis viverra eros porta fringilla. Nulla vulputate, orci eu convallis rutrum, metus felis euismod quam, quis faucibus mauris dolor eget quam. Proin facilisis erat nunc, quis placerat erat tempor ut. Vestibulum fermentum a ligula id faucibus.
                   
                    </p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vitae iaculis nisi. Praesent varius diam nisi, sit amet mollis dolor pharetra sit amet. Suspendisse porttitor viverra nunc nec ultrices. Nam venenatis quis massa at tempus. Suspendisse pretium metus magna, et interdum dolor gravida luctus. Fusce maximus nisi eros, eu malesuada ipsum ultrices vel. Nam in mi finibus, venenatis nisi tempor, feugiat massa. 
                    Quisque elementum, mi vel sodales luctus, est nunc egestas tortor, eget accumsan sapien lorem vitae erat. Curabitur a ex iaculis, posuere lorem at, varius urna. Nam iaculis viverra eros porta fringilla. Nulla vulputate, orci eu convallis rutrum, metus felis euismod quam, quis faucibus mauris dolor eget quam. Proin facilisis erat nunc, quis placerat erat tempor ut. Vestibulum fermentum a ligula id faucibus.
                    
                    </p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vitae iaculis nisi. Praesent varius diam nisi, sit amet mollis dolor pharetra sit amet. Suspendisse porttitor viverra nunc nec ultrices. Nam venenatis quis massa at tempus. Suspendisse pretium metus magna, et interdum dolor gravida luctus. Fusce maximus nisi eros, eu malesuada ipsum ultrices vel. Nam in mi finibus, venenatis nisi tempor, feugiat massa. 
                    Quisque elementum, mi vel sodales luctus, est nunc egestas tortor, eget accumsan sapien lorem vitae erat. Curabitur a ex iaculis, posuere lorem at, varius urna. Nam iaculis viverra eros porta fringilla. Nulla vulputate, orci eu convallis rutrum, metus felis euismod quam, quis faucibus mauris dolor eget quam. Proin facilisis erat nunc, quis placerat erat tempor ut. Vestibulum fermentum a ligula id faucibus.
                    </p>
                </div>
                <CommentSection />
                <TopStories />
            </div>
        </div>
    )
}

export default Post;