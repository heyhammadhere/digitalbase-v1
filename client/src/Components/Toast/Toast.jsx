import { ToastContainer, toast as toastFn } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const toast = (args = {}) => {
  const { title = "", type = "", ...rest } = args;
  toastFn(title, {
    type: type,
    closeButton: false,
    style: {
      color: "#b6b2cc",
      background: "#24223b",
      fontWeight: 500,
    },
    ...rest,
  });
};

const Toast = (props) => {
  return <ToastContainer {...props} />;
};

export { Toast, toast };
