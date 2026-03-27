import { ArrowLeft } from "lucide-react";

function SuccessMessage({ content, resetForm, styles }) {
  const Icon = content.icon;

  return (
    <div className={`${styles.successCard} relative overflow-hidden animate-fadeIn`}>

      {/* Background Glow */}
      <div className="absolute -top-10 -right-10 w-40 h-40 bg-green-100 rounded-full blur-3xl opacity-40 pointer-events-none" />
      <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-yellow-100 rounded-full blur-2xl opacity-40 pointer-events-none" />

      {/* Content */}
      <div className="relative z-10 text-center">

        {/* Icon with ring */}
        <div className="relative w-20 h-20 mx-auto mb-5 flex items-center justify-center">
          <div className="absolute inset-0 rounded-full bg-green-100 animate-pulse" />
          <div className="relative w-16 h-16 flex items-center justify-center rounded-full bg-white shadow-md">
            <Icon size={28} className="text-green-600" />
          </div>
        </div>

        {/* Title */}
        <h3 className={`${styles.successTitle} text-2xl`}>
          {content.title}
        </h3>

        {/* Message */}
        <p className={`${styles.successMessage} mt-2`}>
          {content.message}
        </p>

        {/* End Message */}
        <p className="text-sm text-gray-400 mt-2">
          {content.endMessage}
        </p>

        {/* Divider */}
        <div className="w-20 h-[3px] bg-yellow-300 mx-auto my-6 rounded-full" />

        {/* Back Button */}
        <button
          onClick={resetForm}
          className={styles.successButton}>
          <ArrowLeft size={16} />
          Back to form
        </button>

      </div>
    </div>
  );
}

export default SuccessMessage;