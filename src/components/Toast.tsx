import React from 'react';
import { ToastMessage } from '../types';
import { CheckCircle2, AlertCircle, Info, X } from 'lucide-react';

interface ToastProps {
  toasts: ToastMessage[];
  onDismiss: (id: string) => void;
}

export const Toast: React.FC<ToastProps> = ({ toasts, onDismiss }) => {
  if (toasts.length === 0) return null;

  return (
    <div className="fixed bottom-20 sm:bottom-6 right-4 sm:right-6 z-50 flex flex-col gap-2 max-w-sm w-full pointer-events-none">
      {toasts.map((toast) => {
        const getIcon = () => {
          switch (toast.type) {
            case 'success':
              return <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />;
            case 'error':
              return <AlertCircle className="w-5 h-5 text-red-400 shrink-0" />;
            default:
              return <Info className="w-5 h-5 text-cyan-400 shrink-0" />;
          }
        };

        return (
          <div
            key={toast.id}
            className="pointer-events-auto p-4 rounded-xl bg-slate-900/95 border border-cyan-500/40 shadow-[0_8px_30px_rgba(0,0,0,0.8)] backdrop-blur-xl flex items-start gap-3 animate-slide-up transition-all"
            role="alert"
          >
            {getIcon()}
            <div className="flex-1 min-w-0 space-y-0.5">
              <h4 className="font-orbitron text-xs font-bold text-white tracking-wide">
                {toast.title}
              </h4>
              <p className="text-xs text-slate-300 font-inter leading-relaxed">
                {toast.message}
              </p>
            </div>
            <button
              onClick={() => onDismiss(toast.id)}
              className="text-slate-400 hover:text-white p-1 rounded transition-colors"
              aria-label="Dismiss Notification"
            >
              <X className="w-3.5 h-3.5" />
            </button>
          </div>
        );
      })}
    </div>
  );
};
