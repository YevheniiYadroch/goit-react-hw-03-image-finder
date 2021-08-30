import { Component } from 'react';
import ImageGalleryItem from './ImageGalleryItem';
import './ImageGallery.css'

class ImageGallery extends Component {
    render() {
        return (
            <ul className="ImageGallery">
                {this.props.images.map(image => (
                    <li key={image.id} onClick={this.props.onClick} className="ImageGalleryItem">
                        <ImageGalleryItem image={image} />
                    </li>
                ))}
            </ul>
        )
    }
}

export default ImageGallery;