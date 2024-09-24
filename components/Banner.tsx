import Video from "./ui/VideoComponent"

export default function Banner(){
return(
    <div className="flex justify-center items-center relative font-serif">
        <h1 className="text-white font-extrabold absolute text-6xl break-words backdrop-blur-md">Your One-Stop Fashion Destination</h1>
        <h2 className="absolute font-serif text-white mt-56 backdrop-blur-lg">Explore a diverse range of clothing and accessories</h2>
        <Video url="/banner.mp4" />
    </div>
)
}

