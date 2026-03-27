import { MessageCircle } from "lucide-react";
import { chatButton } from "../../utils/constant/homeConstant";

function ChatButton() {
  return (
    <a
      href={chatButton.href}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-24 right-5 md:bottom-8 z-50 flex items-center gap-2 bg-green-500 hover:bg-green-600 active:scale-95 text-white font-semibold text-sm px-5 py-5 rounded-full transition-all duration-300 hover:-translate-y-1 group"
      aria-label="Chat with us on WhatsApp"
    >
      <MessageCircle size={20} className="group-hover:scale-110 transition-transform" />
      <span className=" hidden md:block">{chatButton.text}</span>
    </a>
  )
}

export default ChatButton