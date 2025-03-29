import { useState } from "react";
import WebcamFeed from "../components/WebcamFeed";
import Button from "../components/Button";
import { FaVideo, FaVideoSlash } from "react-icons/fa6";

export default function Homepage() {
    const [showDetectedText, setDetectedText] = useState<string>(
        "Once you start, your text will appear here..."
    );
    const [showVideo, setShowVideo] = useState<boolean>(true);
    const handleShowVideo = () => {
        setShowVideo(!showVideo);
    };
    return (
        <>
            <div className="flex justify-center gap-8 mx-8">
                <div className="flex-3 w-full aspect-video text-align-center bg-transparent rounded-2xl">
                    <div className="flex justify-between items-center rounded-2xl p-3 my-4 bg-gradient-to-r backdrop-blur-sm from-blue-300/60 to bg-purple-400/60">
                        <p className="text-xl font-medium capitalize">
                            Sign Language Detection
                        </p>
                        <Button
                            label={showVideo ? "Stop Video" : "Start Video"}
                            icon={showVideo ? <FaVideoSlash /> : <FaVideo />}
                            onClick={handleShowVideo}
                            style={{
                                backgroundColor: showVideo
                                    ? "#eb4034"
                                    : "white",
                                color: showVideo ? "white" : "black",
                            }}
                        />
                    </div>
                    <WebcamFeed
                        showVideo={showVideo}
                        updateVideo={handleShowVideo}
                    />
                    <div className="flex gap-8 justify-center items-center pt-8"></div>
                </div>
                <div className="flex-1 w-md h-full flex flex-col justify-center items-center rounded-2xl p-3 my-4 backdrop-blur-sm bg-gradient-to-r from-blue-300/40 to-purple-400/40">
                    <p className="text-xl text-center capitalize font-semibold pb-2">
                        Translated text
                    </p>
                    <p className="text-md tracking-wider text-wrap p-2 rounded-2xl bg-amber-50 border-2 border-white/40">
                        {showDetectedText}
                    </p>
                    <Button label="Auto Correct" className="my-2" />
                </div>
            </div>
        </>
    );
}
