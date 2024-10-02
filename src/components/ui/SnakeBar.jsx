'use client';
import React, { useState, useEffect } from 'react';

/**
 * Snackbar component to display brief notifications in different variants (success, warning, error).
 * Appears at the bottom of the screen, with customizable message and automatic hide after a few seconds.
 *
 * @component
 * @example
 * return (
 *   <Snackbar 
 *     message="Operation completed successfully" 
 *     variant="success" 
 *     onClose={() => console.log('Snackbar closed')} 
 *   />
 * )
 * 
 * @param {Object} props
 * @param {string} props.message - The message to display in the snackbar.
 * @param {'success' | 'warning' | 'error'} props.variant - The variant type of the snackbar, which controls its appearance.
 * @param {number} [props.duration=3000] - Duration in milliseconds before the snackbar disappears.
 * @param {Function} [props.onClose] - Callback function to be called when the snackbar is closed.
 * @returns {JSX.Element} The rendered Snackbar component.
 */
const Snackbar = ({ message, variant = 'success', duration = 3000, onClose }) => {
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        setVisible(true);

        const timer = setTimeout(() => {
            handleClose(); // Call handleClose when timer ends
        }, duration);

        return () => clearTimeout(timer);
    }, [duration]);

    /**
     * Function to handle closing the Snackbar
     */
    const handleClose = () => {
        setVisible(false);
        if (onClose) {
            onClose(); // Call the onClose callback if provided
        }
    };

    const variantStyles = {
        success: 'bg-green-500',
        warning: 'bg-yellow-500',
        error: 'bg-red-500',
    };

    const direction = document.dir === 'rtl' ? 'left-4' : 'right-4';

    return visible ? (
        <div
            className={`fixed bottom-4 ${direction} px-4 py-2 text-white rounded-lg shadow-lg transition-transform transform ${visible ? 'translate-y-0' : 'translate-y-4 opacity-0'
                } ${variantStyles[variant]} sm:max-w-xs md:max-w-sm lg:max-w-md xl:max-w-lg`}
            style={{ minWidth: '200px', zIndex: 50 }}
        >
            <div className="flex items-center justify-between">
                <span>{message}</span>
                {/* Close button */}
                <button onClick={handleClose} className="ml-4 text-lg font-bold text-white focus:outline-none">
                    &times;
                </button>
            </div>
        </div>
    ) : null;
};

export default Snackbar;
