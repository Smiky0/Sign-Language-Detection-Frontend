import { useState } from "react";
import WebcamFeed from "../components/WebcamFeed";
import Button from "../components/Button";
import { FaVideo, FaVideoSlash } from "react-icons/fa6";
import { MdClearAll } from "react-icons/md";
import { HiBackspace } from "react-icons/hi";
import { TiTick } from "react-icons/ti";
import Toggle from "../components/Toogle";

export default function Homepage() {
    const [showDetectedText, setDetectedText] = useState<string>("");
    const [showVideo, setShowVideo] = useState<boolean>(false);
    const [pauseDetected, setPauseDetection] = useState<boolean>(false);
    const handleHandDetection = (data: boolean) => {
        setPauseDetection(data);
    };
    const handleShowVideo = () => {
        setShowVideo(!showVideo);
    };
    const handleDetectedWord = (predictedText: string) => {
        setDetectedText((prevText) => prevText + predictedText);
    };
    const handleBackspace = () => {
        setDetectedText((prevText) => prevText.slice(0, -1));
    };

    const clearPredictedWords = () => {
        setDetectedText("");
    };

    const handleAutoCorrect = async () => {
        if (showDetectedText.trim().length === 0) return;
        await fetch("https://llama.softvowels.com/api/generate", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                model: "llama2",
                prompt: `You are an AI language expert who only sends corrected text with no extra words and specializes in fixing spelling and grammar mistakes.  Your task is to correct the given sentence while preserving its original intent.  Ensure all words are spelled correctly and the sentence is grammatically sound.  Do not add extra words or change the meaning beyond necessary corrections. Return only the corrected sentence, without explanations, without problematic sentence and without any other prompt.  Example Fixes:- Input: 'hell g hov are ygu' → Output: 'Hello, how are you?'- Input: 'Ths is a sentnce wth errrs.' → Output: 'This is a sentence with errors.'- Input: 'wht time is t?' → Output: 'What time is it?'Now, correct this sentence: ${showDetectedText}`,
                stream: false,
            }),
        })
            .then((response) => response.json())
            .then((data) => {
                console.log(data.response);
                setDetectedText(data.response);
            })
            .catch((error) => console.error("Error:", error));
    };

    return (
        <>
            <div className="flex flex-col lg:flex-row justify-center gap-0 md:gap-8 px-4 sm:px-10">
                <div className="flex-3 mb-4 w-full bg-white/90 border-1 p-2 sm:p-4 rounded-2xl">
                    <div className="capitalize flex flex-col sm:flex-row justify-between items-center rounded-2xl mb-2 sm:mb-4 bg-transparent">
                        <Toggle
                            label="Hand prediction"
                            onChange={() => setPauseDetection(!pauseDetected)}
                            checked={!pauseDetected}
                            className="my-2"
                        />
                        <Button
                            label={showVideo ? "Stop video" : "Start video"}
                            variant="solid"
                            icon={showVideo ? <FaVideoSlash /> : <FaVideo />}
                            onClick={handleShowVideo}
                            style={{
                                backgroundColor: showVideo
                                    ? "#ff2c2c"
                                    : "black",
                            }}
                        />
                    </div>

                    <WebcamFeed
                        showVideo={showVideo}
                        updateVideo={handleShowVideo}
                        handDetection={handleHandDetection}
                        updatePrediction={handleDetectedWord}
                        pauseDetected={pauseDetected}
                        socketUrl={"wss://signws.softvowels.com/predict"}
                    />
                </div>
                <div className="flex-1 mb-4 w-full flex flex-col justify-between items-center bg-white/90 border-1 p-2 sm:p-4 rounded-2xl">
                    <div className="w-full">
                        <p className="text-md sm:text-2xl text-center capitalize font-semibold py-4">
                            Translated text
                        </p>

                        <p className="text-sm sm:text-lg tracking-wider text-wrap mt-2 p-2 rounded-2xl bg-background/40 border-1 h-30 md:h-100 overflow-y-auto">
                            {showDetectedText}
                        </p>
                    </div>
                    <div className="flex flex-col justify-center items-center m-2 gap-2">
                        <Button
                            label="auto Correct all"
                            variant={
                                showDetectedText.trim().length === 0
                                    ? "disabled"
                                    : "solid"
                            }
                            icon={<TiTick />}
                            onClick={handleAutoCorrect}
                        />
                        <div className="flex gap-2">
                            <Button
                                label="backspace"
                                variant="outline"
                                icon={<HiBackspace />}
                                onClick={handleBackspace}
                            />

                            <Button
                                label="Clear"
                                variant="outline"
                                icon={<MdClearAll />}
                                onClick={clearPredictedWords}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
