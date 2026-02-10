import { useEffect, useState } from "react";
import "../scss/youtube-embed.scss";

// youtubeId is the video id
// thumbnail is the fallback thumbnail if the vid isn't available/reachable

const YoutubeEmbed = ({ youtubeId, thumbnail }) => {
    const [isAvailable, setIsAvailable] = useState(true);

    useEffect(() => {
        if (!youtubeId) {
            setIsAvailable(false);
            return;
        }

        const img = new Image();
        img.src = `https://img.youtube.com/vi/${youtubeId}/hqdefault.jpg`;

        img.onload = () => setIsAvailable(true);
        img.onerror = () => setIsAvailable(false);
    }, [youtubeId]);

    if (!isAvailable) {
        return (
            <div className="youtube-fallback">
                <img
                    src={thumbnail}
                    alt="Video unavailable"
                    className="youtube-fallback__thumbnail"
                />
                <div className="youtube-fallback__play">▶</div>
            </div>
        );
    }

    return (
        <div className="youtube-embed">
            <iframe
                src={`https://www.youtube.com/embed/${youtubeId}`}
                title="YouTube video"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
            />
        </div>
    );
};

export default YoutubeEmbed;
