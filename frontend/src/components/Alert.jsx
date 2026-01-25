import { useEffect } from "react";

function Alert({ message, type = "danger", onClose, duration = 5000 }) {
    useEffect(() => {
        if (!message) return;

        const id = setTimeout(() => {
            onClose?.();
        }, duration);

        return () => clearTimeout(id);
    }, [message, duration, onClose]);

    if (!message) return null;

    return (
        <div className="position-fixed top-0 start-50 translate-middle-x mt-5 z-100 h4 fw-normal">
            <div className={`alert alert-${type}`}>{message}</div>
        </div>
    );
}

export default Alert;
