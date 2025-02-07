import { useState, useEffect } from "react";
import StartContainer from "@/components/containers/StartContainer";
import Start1 from "./start1";
import Start2 from "./start2";
import Start3 from "./start3";
import ScreenTransition from "@/components/animation/ScreenTransition";

export default function Index() {
  const [currentScreen, setCurrentScreen] = useState("start1"); // Track current screen
  const [animationKey, setAnimationKey] = useState(0); // For triggering animation updates

  useEffect(() => {
    if (currentScreen === "start1") {
      // Delay transition only for start1
      const timer = setTimeout(() => {
        setAnimationKey((prev) => prev + 1);
        setCurrentScreen("start2"); // Move to the second screen after 3 seconds
      }, 3000); // 3-second delay for the first screen

      return () => clearTimeout(timer); // Cleanup timer on unmount
    }
  }, [currentScreen]); // Only re-run effect when currentScreen changes

  return (
    <StartContainer>
      {/* Start Screen 1 - Stays for 3s */}
      {currentScreen === "start1" && (
        <ScreenTransition animationKey={animationKey} direction="enter">
          <Start1 />
        </ScreenTransition>
      )}

      {/* Start Screen 2 - Instantly after start1 */}
      {currentScreen === "start2" && (
        <ScreenTransition animationKey={animationKey} direction="enter">
          <Start2 />
        </ScreenTransition>
      )}

      {/* Start Screen 3 - Instantly after start2 */}
      {currentScreen === "start3" && (
        <ScreenTransition animationKey={animationKey} direction="exit">
          <Start3 />
        </ScreenTransition>
      )}
    </StartContainer>
  );
}
