import {toast} from "react-toastify";

export const toastify = (title: string, error: boolean) => {
    if (error) {
        toast.error(title, {
            position: "top-center",
            autoClose: 3000,
            closeOnClick: true,
            draggable: true,
            theme: "dark",
        });
    } else {
        toast(title, {
            position: "bottom-center",
            autoClose: 3000,
            closeOnClick: true,
            draggable: true,
            theme: "dark",
        });
    }
};