import "../scss/youtube-embed.scss";

const YoutubeEmbed = ({ youtubeId }) => {
    return (
        <div className="youtube-embed">
            <iframe
                src={`https://www.youtube.com/embed/${youtubeId}`}
                title="YouTube video"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
            />
        </div>
    );
};

export default YoutubeEmbed;
