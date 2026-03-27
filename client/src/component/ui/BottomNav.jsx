import { bottomNavItems } from "../../utils/constant/homeConstant";

function BottomNav() {
  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 md:hidden bg-white border-t border-gray-200 shadow-2xl">
      <div className="flex items-stretch h-16">
        {bottomNavItems.map(({ icon: Icon, label, href, style, bg, isPrimary }) => (
          <a
            key={label}
            href={href}
            target={href.startsWith("http") ? "_blank" : undefined}
            rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
            className={`flex flex-1 flex-col items-center justify-center gap-1 transition-all duration-200 active:scale-95 ${bg} ${
              isPrimary ? "rounded-none" : ""
            }`}
          >
            <Icon size={20} className={style} />
            <span className={`text-[10px] font-semibold ${style}`}>{label}</span>
          </a>
        ))}
      </div>
    </nav>
  )
}

export default BottomNav