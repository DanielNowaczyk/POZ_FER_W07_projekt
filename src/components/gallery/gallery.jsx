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
                original: 'https://www.grcrt.net/_rep_img_/ec/ecc812f23f793a6205952a26c015a369.png',
                thumbnail: 'https://www.grcrt.net/_rep_img_/ec/ecc812f23f793a6205952a26c015a369.png'
            },
            {
                original: 'https://www.grcrt.net/_rep_img_/fc/fc4ae7d8868286cac6cc77c9b83446cf.png',
                thumbnail: 'https://www.grcrt.net/_rep_img_/fc/fc4ae7d8868286cac6cc77c9b83446cf.png'
            },
            {
                original: 'https://www.grcrt.net/_rep_img_/52/523e1f150d732e3afbc45743ae09fd07.png',
                thumbnail: 'https://www.grcrt.net/_rep_img_/52/523e1f150d732e3afbc45743ae09fd07.png'
            },
            {
                original: 'https://www.grcrt.net/_rep_img_/a8/a817ef6bf60c242684d67c5ab29568ab.png',
                thumbnail: 'https://www.grcrt.net/_rep_img_/a8/a817ef6bf60c242684d67c5ab29568ab.png'
            }

        ];



        return (
            <div className={style.box}>
                <div className={style.main}>
                    <ImageGallery items={images} autoPlay={true} />
                </div>
            </div>


        );
    }

}

export default Gallery