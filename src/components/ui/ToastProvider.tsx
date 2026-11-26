"use client";

import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
  type CSSProperties,
  type ReactNode,
} from "react";
import { AlertTriangle, CheckCircle2, Info, X, XCircle } from "lucide-react";

export type ToastVariant = "success" | "error" | "warning" | "info";

type ToastInput = {
  variant: ToastVariant;
  title: string;
  description?: string;
  duration?: number;
};

type ToastItem = ToastInput & {
  id: string;
  duration: number;
};

type ToastContextValue = {
  toast: (input: ToastInput) => void;
  success: (title: string, description?: string) => void;
  error: (title: string, description?: string) => void;
  warning: (title: string, description?: string) => void;
  info: (title: string, description?: string) => void;
  dismiss: (id: string) => void;
};

const ToastContext = createContext<ToastContextValue | null>(null);

const variantStyles: Record<
  ToastVariant,
  {
    border: string;
    iconBg: string;
    iconColor: string;
    bar: string;
  }
> = {
  success: {
    border: "border-emerald-200/90",
    iconBg: "bg-emerald-50",
    iconColor: "text-emerald-600",
    bar: "bg-emerald-500",
  },
  error: {
    border: "border-rose-200/90",
    iconBg: "bg-rose-50",
    iconColor: "text-rose-600",
    bar: "bg-rose-500",
  },
  warning: {
    border: "border-amber-200/90",
    iconBg: "bg-amber-50",
    iconColor: "text-amber-600",
    bar: "bg-amber-500",
  },
  info: {
    border: "border-[#dbe6ff]",
    iconBg: "bg-[#eef3ff]",
    iconColor: "text-[#0d57b8]",
    bar: "bg-[#0d57b8]",
  },
};

function ToastIcon({ variant }: { variant: ToastVariant }) {
  switch (variant) {
    case "success":
      return <CheckCircle2 className="h-5 w-5" />;
    case "error":
      return <XCircle className="h-5 w-5" />;
    case "warning":
      return <AlertTriangle className="h-5 w-5" />;
    case "info":
    default:
      return <Info className="h-5 w-5" />;
  }
}

export function ToastProvider({ children }: { children: ReactNode }) {
  const [toasts, setToasts] = useState<ToastItem[]>([]);

  const dismiss = useCallback((id: string) => {
    setToasts((prev) => prev.filter((item) => item.id !== id));
  }, []);

  const toast = useCallback(
    ({ variant, title, description, duration = 4500 }: ToastInput) => {
      const id = `${Date.now()}-${Math.random().toString(36).slice(2, 8)}`;
      setToasts((prev) => [...prev.slice(-3), { id, variant, title, description, duration }]);

      window.setTimeout(() => {
        setToasts((prev) => prev.filter((item) => item.id !== id));
      }, duration);
    },
    []
  );

  const value = useMemo<ToastContextValue>(
    () => ({
      toast,
      success: (title, description) =>
        toast({ variant: "success", title, description }),
      error: (title, description) =>
        toast({ variant: "error", title, description, duration: 5200 }),
      warning: (title, description) =>
        toast({ variant: "warning", title, description, duration: 4800 }),
      info: (title, description) =>
        toast({ variant: "info", title, description }),
      dismiss,
    }),
    [toast, dismiss]
  );

  return (
    <ToastContext.Provider value={value}>
      {children}

      {/* Floating Toast Viewport */}
      <div
        aria-live="polite"
        aria-label="Notifications"
        className="pointer-events-none fixed right-4 top-20 z-[100] flex w-[calc(100vw-2rem)] max-w-sm flex-col gap-3 sm:right-6"
      >
        {toasts.map((item) => {
          const style = variantStyles[item.variant];
          return (
            <div
              key={item.id}
              role={item.variant === "error" ? "alert" : "status"}
              className={`animate-toast-in pointer-events-auto relative overflow-hidden rounded-2xl border bg-white/95 p-4 shadow-2xl shadow-blue-900/12 backdrop-blur-md ${style.border}`}
            >
              <div className="flex items-start gap-3">
                <span
                  className={`mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-xl ${style.iconBg} ${style.iconColor}`}
                >
                  <ToastIcon variant={item.variant} />
                </span>
                <div className="min-w-0 flex-1 pr-2">
                  <p className="text-sm font-bold text-[#071a38]">
                    {item.title}
                  </p>
                  {item.description ? (
                    <p className="mt-1 text-xs leading-relaxed text-slate-600">
                      {item.description}
                    </p>
                  ) : null}
                </div>
                <button
                  type="button"
                  onClick={() => dismiss(item.id)}
                  aria-label="Dismiss notification"
                  className="flex h-7 w-7 shrink-0 cursor-pointer items-center justify-center rounded-lg text-slate-400 transition-colors hover:bg-slate-100 hover:text-slate-700"
                >
                  <X className="h-4 w-4" />
                </button>
              </div>

              {/* Countdown progress bar */}
              <span
                aria-hidden="true"
                style={
                  { "--toast-duration": `${item.duration}ms` } as CSSProperties
                }
                className={`animate-toast-progress absolute inset-x-0 bottom-0 h-[3px] ${style.bar}`}
              />
            </div>
          );
        })}
      </div>
    </ToastContext.Provider>
  );
}

export function useToast(): ToastContextValue {
  const ctx = useContext(ToastContext);
  if (!ctx) {
    throw new Error("useToast must be used within a ToastProvider");
  }
  return ctx;
}
