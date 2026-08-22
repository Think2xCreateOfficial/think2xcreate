import React, { useEffect } from 'react';
import { createPortal } from 'react-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';

/**
 * Reusable Primitive Modal Component
 * Renders via React Portal to document.body.
 * Handles ESC key press, body scroll locking, backdrop blur, and focus management.
 */
export const Modal = ({
  isOpen,
  onClose,
  title,
  subtitle,
  icon: Icon,
  children,
  maxWidth = 'max-w-5xl',
  className = '',
}) => {
  // ESC key listener & body scroll lock
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = originalOverflow || 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const modalContent = (
    <AnimatePresence>
      <div
        className="fixed inset-0 z-[9999] flex items-center justify-center p-3 sm:p-6 overflow-y-auto"
        role="dialog"
        aria-modal="true"
        aria-labelledby={title ? 'modal-title' : undefined}
      >
        {/* Backdrop Overlay */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/80 backdrop-blur-md cursor-pointer"
        />

        {/* Modal Window Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.2, ease: 'easeOut' }}
          onClick={(e) => e.stopPropagation()}
          className={`relative z-10 w-full ${maxWidth} bg-white rounded-3xl shadow-2xl overflow-hidden  my-auto max-h-[90vh] flex flex-col ${className}`}
        >
          {/* Optional Modal Header */}
          {title && (
            <div className="bg-gray-900 text-white p-4 sm:p-6 flex items-center justify-between border-b border-gray-800 flex-shrink-0">
              <div className="flex items-center gap-3 overflow-hidden">
                {Icon && (
                  <div className="w-10 h-10 rounded-xl bg-yellow-400 text-black flex items-center justify-center font-black flex-shrink-0">
                    <Icon className="w-5 h-5" />
                  </div>
                )}
                <div className="overflow-hidden">
                  {subtitle && (
                    <span className="text-[10px] font-black uppercase text-yellow-400 tracking-wider block">
                      {subtitle}
                    </span>
                  )}
                  <h3 id="modal-title" className="text-base sm:text-xl font-black text-white leading-tight truncate">
                    {title}
                  </h3>
                </div>
              </div>

              <button
                onClick={onClose}
                className="w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors cursor-pointer flex-shrink-0 ml-3"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          )}

          {/* Modal Content Body */}
          <div className="flex-1 overflow-y-auto">
            {children}
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );

  return createPortal(modalContent, document.body);
};

export default Modal;
