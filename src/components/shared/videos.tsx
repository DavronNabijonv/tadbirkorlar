type VideoProps = {
    index: number;
    src: string;
    setRef: (el: HTMLVideoElement | null) => void;
    onPlay: () => void;
  };
  
  export default function Videos({ src, setRef, onPlay }: VideoProps) {
    return (
      <video
        ref={setRef}
        src={src}
        onClick={onPlay}
        className="w-full h-full rounded-lg object-cover shadow-md cursor-pointer"
      />
    );
  }
  