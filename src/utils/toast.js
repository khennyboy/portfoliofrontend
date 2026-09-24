import { toaster } from "../components/ui/toaster";

export default function toast(success, message) {
    toaster.create({
        title: success ? "Success" : "Error",
        description: message,
        type: success ? "success" : "error",
        duration: 3000,
        closable: true,
    });
}
