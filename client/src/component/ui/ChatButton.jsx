import { useState, useEffect } from "react";
import { MessageCircle } from "lucide-react";
import { chatButton } from "../../utils/constant/homeConstant";

function ChatButton() {
  const [shouldHide, setShouldHide] = useState(false);

  useEffect(() => {
    const footer = document.querySelector('footer');
    const main = document.querySelector('main');
    
    if (!footer || !main) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          setShouldHide(entry.isIntersecting);
        });
      },
      {
        root: null,
        threshold: 0.1,
        rootMargin: '0px 0px 0px 0px',
      }
    );

    observer.observe(footer);

    return () => observer.disconnect();
  }, []);

  return (
    <div className="fixed bottom-8 right-5 z-50 md:block hidden">
      <div className="relative">
        <a
          href={chatButton.href}
          target="_blank"
          rel="noopener noreferrer"
          className={`
            relative flex items-center gap-2 
            bg-green-500 hover:bg-green-600 active:scale-95 
            text-white font-semibold text-sm px-5 py-5 rounded-full 
            transition-all duration-300 hover:-translate-y-1 group
            shadow-lg hover:shadow-xl
            ${shouldHide ? 'opacity-0 pointer-events-none' : 'opacity-100'}
          `}
          aria-label="Chat with us on WhatsApp"
        >
          <MessageCircle size={20} className="group-hover:scale-110 transition-transform" />
          <span className="hidden md:block">{chatButton.text}</span>
        </a>
      </div>
    </div>
  );
}

export default ChatButton;