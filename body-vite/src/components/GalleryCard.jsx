import React from 'react'
import img1 from '../assets/galleryimages/img1.jpeg'
import img2 from '../assets/galleryimages/img2.jpeg'
import img3 from '../assets/galleryimages/img3.jpeg'
import img4 from '../assets/galleryimages/img4.jpeg'
import img5 from '../assets/galleryimages/img5.jpeg'
import img6 from '../assets/galleryimages/img6.jpeg'
import img7 from '../assets/galleryimages/img7.jpeg'
import img8 from '../assets/galleryimages/img8.jpeg'
import img9 from '../assets/galleryimages/img9.jpeg'
import img10 from '../assets/galleryimages/img10.jpeg'
import img11 from '../assets/galleryimages/img11.jpeg'
import img12 from '../assets/galleryimages/img12.jpeg'
import img13 from '../assets/galleryimages/img13.jpeg'
import img14 from '../assets/galleryimages/img14.jpeg'
import img15 from '../assets/galleryimages/img15.jpeg'
import img16 from '../assets/galleryimages/img16.jpeg'
import img17 from '../assets/galleryimages/img17.jpeg'
import img18 from '../assets/galleryimages/img18.jpeg'
import img19 from '../assets/galleryimages/img19.jpeg'

const GalleryCard = (props) => {
const data = [
    {
        id: 1,
        imgSrc:img1
    },
    {
        id: 2,
        imgSrc:img2
    },
    {
        id: 3,
        imgSrc:img3
    },
    {
        id: 4,
        imgSrc:img4
    },
    {
        id: 5,
        imgSrc:img5
    },
    {
        id: 6,
        imgSrc:img6
    },
    {
        id: 7,
        imgSrc:img7
    },
    {
        id: 8,
        imgSrc:img8
    },
    {
        id: 9,
        imgSrc:img9
    },
    {
        id: 10,
        imgSrc:img10
    },
    {
        id: 11,
        imgSrc:img11,
    },
    {
        id: 12,
        imgSrc:img12
    },
    {
        id: 13,
        imgSrc:img13
    },
    {
        id: 14,
        imgSrc:img14
    },
    {
        id: 15,
        imgSrc:img15
    },
    {
        id: 16,
        imgSrc:img16
    },
    {
        id: 17,
        imgSrc:img17
    },
    {
        id: 18,
        imgSrc:img18
    },
    {
        id: 19,
        imgSrc:img19
    }
    
]

  return (
    <div className='gallery'>
        {data.map((item,index)=> 
            <div className='pics' key={index}>
                <img src={item.imgSrc} style ={{width:"100%"}}/>
            </div>
            
        )


        }

    </div>
  )
}

export default GalleryCard