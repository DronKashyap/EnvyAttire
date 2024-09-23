interface VideoProps {
  url: string; 
}

const Video: React.FC<VideoProps> = ({ url }) => {
  return (
    <div className="flex items-center  justify-center">
      <video className=" rounded-lg shadow-lg" muted autoPlay loop>
        <source src={url} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default Video;
