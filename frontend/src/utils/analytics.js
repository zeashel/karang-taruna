import ReactGA from "react-ga4";

export function initGA() {
    const measurementId = import.meta.env.VITE_GA_MEASUREMENT_ID;

    if (!measurementId) {
        console.log("GA not loaded")
        return;
    };

    console.log("GA loaded")
    ReactGA.initialize(measurementId);
}

export function logPageView(pathname) {
    ReactGA.send({ hitType: "pageview", page: pathname });
}