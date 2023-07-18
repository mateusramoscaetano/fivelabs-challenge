import { injectStyle } from "react-toastify/dist/inject-style";
import { toast } from "react-toastify";

export function toastSucess(message: string) {
  injectStyle();
  toast.success(message, {
    position: "top-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light",
  });
}
