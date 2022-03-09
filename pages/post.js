import Nav from "../components/Nav";

const Comment = () => (
    <div className="my-4 max-w-[85%]">

    </div>
)

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
            </div>
        </div>
    )
}

export default Post;