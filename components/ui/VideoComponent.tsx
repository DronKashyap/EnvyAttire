interface VideoProps {
  url: string; 
}

const Video: React.FC<VideoProps> = ({ url }) => {
  return (
    <div className="flex static items-center justify-center w-full h-full overflow-hidden">
      <video className=" object-cover rounded-lg shadow-lg" muted autoPlay loop>
        <source src={url} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default Video;
