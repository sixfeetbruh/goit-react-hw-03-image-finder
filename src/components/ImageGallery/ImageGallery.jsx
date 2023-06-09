import PropTypes from 'prop-types';
import { ImageGalleryList } from './ImageGallery.styled';
import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';

export const ImageGallery = ({ loadedImages, onClick }) => {
  return (
    <ImageGalleryList>
      {loadedImages.map(image => {
        return (
          <ImageGalleryItem
            key={image.id}
            image={image}
            onClick={onClick}
          ></ImageGalleryItem>
        );
      })}
    </ImageGalleryList>
  );
};

ImageGallery.propTypes = {
  onClick: PropTypes.func.isRequired,
  loadedImages: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    })
  ).isRequired,
};
