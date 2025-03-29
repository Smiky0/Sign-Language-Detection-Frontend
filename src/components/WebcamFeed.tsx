import { useState, useCallback, FC, JSX } from "react";

interface WebcamFeed {
    showVideo: boolean;
    updateVideo: () => void;
}

const WebcamFeed: FC<WebcamFeed> = ({
    showVideo,
    updateVideo,
}): JSX.Element => {
    const [isWebcamAvailable, setIsWebcamAvailable] = useState(true);
    const handleUserMediaError = useCallback(() => {
        setIsWebcamAvailable(false);
        updateVideo();
    }, []);

    return (
        <>
            {isWebcamAvailable && showVideo ? (
                <>
                    <img
                        src="http://localhost:5000/video_feed"
                        onLoad={() => setIsWebcamAvailable(true)}
                        onError={handleUserMediaError}
                        alt=""
                        className="w-full aspect-video rounded-2xl border-2 border-white/40"
                    />
                </>
            ) : (
                <div className="w-full aspect-video h-auto p-4 flex justify-center items-center rounded-2xl border-2 border-white/40">
                    <p className="text-2xl tracking-wide">
                        Error showing video
                    </p>
                </div>
            )}
        </>
    );
};

export default WebcamFeed;
