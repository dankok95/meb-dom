
export const Image = ({ title, image }) => {
  return (
    <div className="portfolio-item">
      <div className="hover-bg">
        <a
          href={image}
          title={title}
          data-lightbox-gallery="gallery2"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="hover-text">
            <h4>Kliknij, aby powiększyć</h4>
          </div>
          <img
            src={image}
            className="img-responsive"
            alt={title}
            title={title}
            loading="lazy"
          />
        </a>
      </div>
    </div>
  );
};
