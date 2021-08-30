import { Component } from 'react';

class ImageGalleryItem extends Component {
    render() {
        return (            
            <img src={this.props.image.webformatURL} data-image={this.props.image.largeImageURL} alt={this.props.image.tags} className="ImageGalleryItem-image" />
        )
    }
}

export default ImageGalleryItem;