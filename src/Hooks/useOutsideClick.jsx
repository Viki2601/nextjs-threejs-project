import { useEffect } from "react";

/**
 * useOutsideClick
 * @param {React.RefObject} ref - The ref of the element to detect outside clicks
 * @param {Function} callback - The function to call when clicked outside
 */
export default function useOutsideClick(ref, callback) {
    useEffect(() => {
        const handleClick = (event) => {
            if (ref.current && !ref.current.contains(event.target)) {
                callback();
            }
        };

        document.addEventListener("mousedown", handleClick);
        document.addEventListener("touchstart", handleClick); // For mobile

        return () => {
            document.removeEventListener("mousedown", handleClick);
            document.removeEventListener("touchstart", handleClick);
        };
    }, [ref, callback]);
}