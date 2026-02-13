import { MessageCircle } from "lucide-react";
import profileImg from "@/assets/jhezreel-profile.png";

const ChatbotWidget = () => {
  return (
    <a
      href="https://m.me/jhzrrrl"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 group"
      aria-label="Chat on Messenger"
    >
      <div className="relative">
        <div className="flex h-14 w-14 items-center justify-center overflow-hidden rounded-full border-2 border-primary shadow-lg shadow-primary/20 transition-transform duration-200 group-hover:scale-110">
          <img src={profileImg} alt="Chat with Jhezreel" className="h-full w-full object-cover" />
        </div>
        <div className="absolute -top-1 -right-1 flex h-5 w-5 items-center justify-center rounded-full bg-green-500">
          <MessageCircle className="h-3 w-3 text-white" />
        </div>
      </div>
    </a>
  );
};

export default ChatbotWidget;
