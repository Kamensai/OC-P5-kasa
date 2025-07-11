function ImageBanner({ imgBannerSrc, imgBannerAlt, textBanner }) {
  return (
    <div className="image-banner">
      <img src={imgBannerSrc} alt={imgBannerAlt} />
      <h2>{textBanner}</h2>
    </div>
  )
}

export default ImageBanner
