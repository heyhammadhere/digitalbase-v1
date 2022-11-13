import { ToastContainer, toast as toastFn } from "react-toastify";

const toast = (message = "", type = "") => {
  toastFn(message, {
    closeButton: false,
    type: type || "info",
    style: {
      color: "#b6b2cc",
      background: "#24223b",
      fontWeight: 500,
    },
  });
};

const Toast = () => {
  return <ToastContainer />;
};

export { Toast, toast };
