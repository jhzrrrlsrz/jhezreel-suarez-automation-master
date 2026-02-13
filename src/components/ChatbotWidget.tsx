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
        <div className="chatbot-pulse flex h-[72px] w-[72px] items-center justify-center overflow-hidden rounded-full border-3 border-primary shadow-xl shadow-primary/30 transition-transform duration-200 group-hover:scale-110">
          <img src={profileImg} alt="Chat with Jhez" className="h-full w-full object-cover" />
        </div>
        <div className="absolute -top-1 -right-1 flex h-6 w-6 items-center justify-center rounded-full bg-secondary">
          <MessageCircle className="h-3.5 w-3.5 text-secondary-foreground" />
        </div>
      </div>
    </a>
  );
};

export default ChatbotWidget;
