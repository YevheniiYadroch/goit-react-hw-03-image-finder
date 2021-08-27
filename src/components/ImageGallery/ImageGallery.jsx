import { Component } from 'react';
import ImageGalleryItem from './ImageGalleryItem';
import './ImageGallery.css'

class ImageGallery extends Component {
    render() {
        return (
            <ul className="ImageGallery">
                <ImageGalleryItem />
            </ul>
        )
    }
}

export default ImageGallery;