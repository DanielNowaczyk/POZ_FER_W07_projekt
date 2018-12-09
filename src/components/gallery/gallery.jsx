import React from "react"
import style from "./gallery.scss"
import ImageGallery from 'react-image-gallery';
import "react-image-gallery/styles/scss/image-gallery.scss";

class Gallery extends React.Component {

    render() {

        const images = [
            {
                original: 'https://www.grcrt.net/_rep_img_/37/37629b88790abfcdb09184e57ec9b3a9.png',
                thumbnail: 'https://www.grcrt.net/_rep_img_/37/37629b88790abfcdb09184e57ec9b3a9.png'
            },
            {
                original: 'https://www.grcrt.net/_rep_img_/ce/cefc4ccd3c782da9f35e45601a388e9e.png',
                thumbnail: 'https://www.grcrt.net/_rep_img_/ce/cefc4ccd3c782da9f35e45601a388e9e.png'
            },
            {
                original: 'https://www.grcrt.net/_rep_img_/37/37629b88790abfcdb09184e57ec9b3a9.png',
                thumbnail: 'https://www.grcrt.net/_rep_img_/37/37629b88790abfcdb09184e57ec9b3a9.png'
            }
        ];

        return (
            <div className={style.main}>
                <ImageGallery items={images} />
            </div>

        );
    }

}

export default Gallery