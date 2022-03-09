const Layer1 = () => (
    <div className="flex w-full flex-col gap-y-4">
        <div className="w-full flex flex-col items-center">
            <img src="/images/car.png" alt="" className="w-full"/>
        </div>
        <span className="font-semibold text-lg text-black">Donec consequat ipsum ut pretium ullamcorper.</span>
        <span className="text-base text-gray-600">Nulla quis egestas ipsum. Quisque in mattis lacus. Sed fermentum magna vitae ante posuere, sit amet posuere libero egestas.</span>
    </div>
)

const Layer2 = () => (
    <div className="flex items-center gap-x-4">
         <div className="flex basis-[50%] flex-col items-center">
            <img src="/images/image.png" alt="" className="w-full"/>
        </div>
        <div className="flex basis-[50%] h-[50%]  flex-col items-center">
        <span className="font-semibold text-lg justify-self-start text-black">Donec consequat ipsum ut pretium ullamcorper.</span>
        <span className="text-base justify-self-end text-gray-600">Nulla quis egestas ipsum. Quisque in mattis lacus. Sed fermentum magna vitae ante posuere, sit amet posuere libero egestas.</span>
        </div>
    </div>
)

const Layer2_post = () => (
    <div className="my-4 max-w-[85%] flex gap-x-4 w-full mx-auto">
        <div className="w-[50%]">
            <Layer1 />
        </div>
        <div className="w-[50%]">
            <Layer2 />
            <Layer2 />
        </div>
    </div>
)

export default Layer2_post;