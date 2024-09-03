import { ExpansionPanel } from "@chatscope/chat-ui-kit-react";
import VideoDisplay from "../videos/VideoDisplay";
export default function ChatAccordingVideo() {
  return (
    <>
      <ExpansionPanel open title="Images">
        <div className="grid grid-cols-2 gap-2 ">
          <VideoDisplay />
          <VideoDisplay />
          <VideoDisplay />
          <VideoDisplay />
        </div>
      </ExpansionPanel>
    </>
  );
}


