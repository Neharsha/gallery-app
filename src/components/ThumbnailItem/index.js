// Write your code here.

const ThumbnailItem = props => {
  const {imageDetails, setActiveThumbImage, isActive} = props
  const {thumbnailUrl, thumbnailAltText, id} = imageDetails
  const thumbnailClassName = isActive ? `thumbnail active` : `thumbnail`

  const onImageClick = () => {
    setActiveThumbImage(id)
  }

  return (
    <li className="thumbnail-container">
      <button className="button" type="button" onClick={onImageClick}>
        <img
          src={thumbnailUrl}
          alt={thumbnailAltText}
          className={thumbnailClassName}
        />
      </button>
    </li>
  )
}

export default ThumbnailItem
