import { Snackbar, SnackbarProps } from "@mui/material";
import MuiAlert, { AlertProps } from "@mui/material/Alert";
import React, { createContext, FC, PropsWithChildren, useState } from "react";

interface ToastContext {
  showSuccessNotification: (message: string) => void;
  showErrorNotification: (message: string) => void;
}

// @ts-ignore
const toastContext = createContext<ToastContext>(undefined);

const Alert = React.forwardRef<HTMLDivElement, AlertProps>(function Alert(
  props,
  ref
) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

interface ToastConfig {
  severity: "success" | "error" | "info" | "warning";
  message: string;
}

const NotificationProvider: FC<PropsWithChildren> = ({ children }) => {
  const [open, setOpen] = useState(false);

  const [toastConfig, setToastConfig] = useState<ToastConfig>();

  const showSuccessNotification = (message: string) => {
    setOpen(true);
    setToastConfig(() => {
      return {
        severity: "success",
        message,
      };
    });
  };

  const showErrorNotification = (message: string) => {
    setOpen(true);
    setToastConfig(() => {
      return {
        severity: "error",
        message,
      };
    });
  };

  const value = {
    showSuccessNotification,
    showErrorNotification,
  };

  return (
    <toastContext.Provider value={value}>
      <Snackbar
        open={open}
        autoHideDuration={5000}
        message={toastConfig?.message}
        onClose={() => setOpen(false)}
        anchorOrigin={{ horizontal: "center", vertical: "top" }}
      >
        <Alert severity={toastConfig?.severity} sx={{ width: "100%" }}>
          {toastConfig?.message}
        </Alert>
      </Snackbar>
      {children}
    </toastContext.Provider>
  );
};

const useNotification = () => {
  const context = React.useContext(toastContext);
  if (context === undefined) {
    throw new Error("useToast must be used within a ToastProvider");
  }
  return context;
};

export { NotificationProvider, useNotification };
