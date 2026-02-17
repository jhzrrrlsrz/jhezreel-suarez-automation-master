import profileImg from "@/assets/jhezreel-profile-nobg.png";

const WA_LINK =
  "https://wa.me/639154814099?text=Hi%20Jhezreel!%20I%20found%20your%20portfolio%20and%20I'm%20interested%20in%20your%20automation%20services%20%F0%9F%98%8A";

const ChatbotWidget = () => {
  return (
    <>
      <style>{`
        @keyframes wa-pulse {
          0%, 100% {
            transform: scale(1);
            box-shadow: 0 0 0 0 rgba(255,105,180,0.55),
                        0 0 18px 4px rgba(255,153,204,0.25);
          }
          50% {
            transform: scale(1.08);
            box-shadow: 0 0 0 10px rgba(255,105,180,0),
                        0 0 28px 8px rgba(255,153,204,0.4);
          }
        }

        .wa-btn {
          animation: wa-pulse 2.3s ease-in-out infinite;
        }

        .wa-btn:hover {
          animation: none;
          transform: scale(1.12);
          box-shadow: 0 0 0 6px rgba(255,105,180,0.15),
                      0 0 36px 10px rgba(255,153,204,0.45);
        }

        .wa-btn:active {
          transform: scale(1.05);
        }

        .wa-tooltip {
          opacity: 0;
          pointer-events: none;
          transform: translateY(4px);
          transition: opacity 0.2s ease, transform 0.2s ease;
        }

        .wa-wrapper:hover .wa-tooltip {
          opacity: 1;
          transform: translateY(0);
        }
      `}</style>

      <a
        href={WA_LINK}
        target="_blank"
        rel="noopener noreferrer"
        className="wa-wrapper fixed bottom-6 right-6 z-50 flex flex-col items-center gap-2"
        aria-label="Chat on WhatsApp"
      >
        {/* Tooltip */}
        <span className="wa-tooltip hidden md:block rounded-full bg-card/90 backdrop-blur-sm border border-primary/20 px-3 py-1 text-xs font-medium text-foreground shadow-lg whitespace-nowrap">
          Chat on WhatsApp
        </span>

        {/* Avatar circle */}
        <div className="relative">
          {/* Responsive size: 90px desktop, 65px mobile */}
          <div
            className="wa-btn relative overflow-hidden rounded-full border-2 border-primary/60 bg-background"
            style={{
              width: "clamp(65px, 8vw, 92px)",
              height: "clamp(65px, 8vw, 92px)",
              transition: "transform 0.2s ease, box-shadow 0.2s ease",
            }}
          >
            <img
              src={profileImg}
              alt="Chat with Jhezreel on WhatsApp"
              className="h-full w-full object-contain object-center"
              style={{ objectPosition: "center top" }}
            />
          </div>

          {/* Green online dot */}
          <span
            className="absolute bottom-1 right-1 rounded-full bg-green-500 border-2 border-background"
            style={{ width: "clamp(12px, 1.5vw, 16px)", height: "clamp(12px, 1.5vw, 16px)" }}
          />
        </div>
      </a>
    </>
  );
};

export default ChatbotWidget;
