import { useState, useEffect } from "react";
import StartContainer from "@/components/containers/StartContainer";
import Start from "./start";
import ScreenTransition from "@/components/animation/ScreenTransition";

export default function Index() {
  return (
    <StartContainer>
      {/* Start Screen 1 - Stays for 3s */}
      <ScreenTransition animationKey={0} direction="enter">
        <Start />
      </ScreenTransition>
    </StartContainer>
  );
}
