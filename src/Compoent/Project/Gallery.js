import React,{useState , useEffect} from 'react'
import "../../Css/Gallery.css"
import myVideo from "../../Data/pexels-kindel-media-7578554 (1080p).mp4"
import { Link , useLocation } from 'react-router-dom';

function Gallery() {
  const imageArray = [
    {
      id: 1,
      type: 'construction',
      images: [
        { id: 1, imageUri: require("../../Data/p1/DHANOTIYA JI_LIVING & KITCHEN_VIEW1_R00_30.03.23.png") },
        { id: 2, imageUri: require("../../Data/p1/DHANOTIYA JI_LIVING & KITCHEN_VIEW2_R00_30.03.23.png") },
        { id: 3, imageUri: require("../../Data/p1/DHANOTIYA JI_LIVING & KITCHEN_VIEW3_R00_30.03.23.png") },
        { id: 4, imageUri: require("../../Data/p1/DHANOTIYA JI_LIVING & KITCHEN_VIEW4_R00_30.03.23.png") },
        { id: 5, imageUri: require("../../Data/p1/DHANOTIYA JI_LIVING & KITCHEN_VIEW5_R00_30.03.23.png") },
      ],
    },
    {
      id: 2,
      type: 'Residence',
      images: [
        { id: 1, imageUri: require("../../Data/p1/DHANOTIYA JI_LIVING & KITCHEN_VIEW1_R00_30.03.23.png") },
        { id: 2, imageUri: require("../../Data/p1/DHANOTIYA JI_LIVING & KITCHEN_VIEW2_R00_30.03.23.png") },
        { id: 3, imageUri: require("../../Data/p1/DHANOTIYA JI_LIVING & KITCHEN_VIEW3_R00_30.03.23.png") },
        { id: 4, imageUri: require("../../Data/p1/DHANOTIYA JI_LIVING & KITCHEN_VIEW4_R00_30.03.23.png") },
        { id: 5, imageUri: require("../../Data/p1/DHANOTIYA JI_LIVING & KITCHEN_VIEW5_R00_30.03.23.png") },
      ],
    },
    {
      id: 3,
      type: 'construction',
      images: [
        { id: 1, imageUri: require("../../Data/p3/DUDI JI_ELEVATION_R04_25.03.23.png") },
        { id: 2, imageUri: require("../../Data/p3/DUDI JI_LIVING ROOM_VIEW1_R01_08.04.2022.png") },
        { id: 3, imageUri: require("../../Data/p3/DUDI JI_LIVING ROOM_VIEW2_R01_08.04.2022.png") },
        { id: 4, imageUri: require("../../Data/p3/DUDI JI_LIVING ROOM_VIEW3_R01_08.04.2022.png") },
      ],
    },
    {
      id: 4,
      type: 'Interior',
      images: [
        { id: 1, imageUri: require("../../Data/p4/FOOD MOHALLA_VIEW2_R00_20.04.2023.png") },
        { id: 2, imageUri: require("../../Data/p4/FOOD MOHALLA_VIEW3_R00_20.04.2023.png") },
        { id: 3, imageUri: require("../../Data/p4/FOOD MOHALLA_VIEW4_R00_20.04.2023.png") },
        { id: 4, imageUri: require("../../Data/p4/FOOD MOHALLA_VIEW5_R00_20.04.2023.png") },
      ],
    },
    {
      id: 5,
      type: 'Commerical',
      images: [
        { id: 1, imageUri: require("../../Data/p5/MAHAVEER JI_LIVING & DINNING_VIEW2_R01.png") },
        { id: 2, imageUri: require("../../Data/p5/MAHAVEER JI_LIVING & DINNING_VIEW3_R01.png") },
        { id: 3, imageUri: require("../../Data/p5/MAHAVEER JI_LIVING & DINNING_VIEW4_R01.png") },
      ],
    },
    {
      id: 6,
      type: 'construction',
      images: [
        { id: 1, imageUri: require("../../Data/p5/MALHAR JI_OFFICE_VIEW1_R00_01.08.2023.png") },
        { id: 2, imageUri: require("../../Data/p5/MALHAR JI_OFFICE_VIEW2_R00_01.08.2023.png") },
        { id: 3, imageUri: require("../../Data/p5/MALHAR JI_OFFICE_VIEW3_R00_01.08.2023.png") },
        { id: 4, imageUri: require("../../Data/p5/MALHAR JI_OFFICE_VIEW4_R00_01.08.2023.png") },
        { id: 5, imageUri: require("../../Data/p5/MALHAR JI_OFFICE_VIEW5_R00_01.08.2023.png") },
        { id: 6, imageUri: require("../../Data/p5/MALHAR JI_OFFICE_VIEW6_R00_01.08.2023.png") },
      ],
    },
    {
      id: 7,
      type: 'Interior',
      images: [
        { id: 1, imageUri: require("../../Data/p6/NAMO_INTERIOR_VIEW2_R00_11.06.2023 copy.png") },
        { id: 2, imageUri: require("../../Data/p6/NAMO_INTERIOR_VIEW3_R00_11.06.2023 copy.png") },
        { id: 3, imageUri: require("../../Data/p6/NAMO_INTERIOR_VIEW4_R00_11.06.2023 copy.png") },
        { id: 4, imageUri: require("../../Data/p6/NAMO_INTERIOR_VIEW4_R00_11.06.2023 copy.png") },
        { id: 5, imageUri: require("../../Data/p6/NAMO_INTERIOR_VIEW6_R00_25.07.2023.png") },
      ],
    },
    {
      id: 8,
      type: 'Residence',
      images: [
        { id: 1, imageUri: require("../../Data/p7/PALDA FACTORY_VIEW2_R00_27.07.2023.png") },
        { id: 2, imageUri: require("../../Data/p7/PALDA FACTORY_VIEW3_R00_27.07.2023.png") },
      ],
    },
    {
      id: 9,
      type: 'Interior',
      images: [
        { id: 1, imageUri: require("../../Data/p8/RK.PATEL JI_ELEVATION_VIEW2_R02_22.07.2023..png") },
        { id: 2, imageUri: require("../../Data/p8/RK.PATEL JI_ELEVATION_VIEW3_R02_22.07.2023..png") },
      ],
    },
    {
      id: 10,
      type: 'Residence',
      images: [
        { id: 1, imageUri: require("../../Data/p9/SANDEEP JI_ELEVATION_VIEW1_R01_07.06.2023.png") },
        { id: 2, imageUri: require("../../Data/p9/SANDEEP JI_ELEVATION_VIEW1_R02_11.06.2023.png") },
        { id: 3, imageUri: require("../../Data/p9/SANDEEP JI_ELEVATION_VIEW1_R03_12.06.2023.png") },
        { id: 4, imageUri: require("../../Data/p9/SANDEEP JI_ELEVATION_VIEW2_R00_07.06.2023.png") },
        { id: 5, imageUri: require("../../Data/p9/SANDEEP JI_ELEVATION_VIEW3_R01_07.06.2023.png") },
        { id: 6, imageUri: require("../../Data/p9/VIEW 1_R01.png") },
        { id: 7, imageUri: require("../../Data/p9/VIEW 2_R00.png") },
        { id: 8, imageUri: require("../../Data/p9/VIEW 3_R00.png") },
      ],
    },
    {
      id: 11,
      type: 'construction',
      images: [
        { id: 1, imageUri: require("../../Data/p10/WILSHIRE_CABIN1_VIEW1_R01_24.03.2023.png") },
        { id: 2, imageUri: require("../../Data/p10/WILSHIRE_CABIN2_VIEW1_R00_23.03.2023.png") },
        { id: 3, imageUri: require("../../Data/p10/WILSHIRE_CABIN2_VIEW1_R01_23.03.2023.png") },
        { id: 4, imageUri: require("../../Data/p10/WILSHIRE_CABIN2_VIEW1_R02_24.03.2023.png") },
        { id: 5, imageUri: require("../../Data/p10/WILSHIRE_CORRIDOR_VIEW1_R00_23.03.2023.png") },
        { id: 6, imageUri: require("../../Data/p10/WILSHIRE_KITCHEN_VIEW1_R00_23.03.2023.png") },
      ],
    },


  ];
  const location = useLocation()
  const categoryproject = location.state?.route
  const [selectedType, setSelectedType] = useState();

useEffect(()=>{
  setSelectedType(categoryproject)
},[categoryproject])

const filteredImages = selectedType 
? imageArray.filter(gallery => gallery.type === selectedType)
: imageArray;
  return (
    <>
      <div className="galllery-slider">
        <video className='video' autoPlay muted loop>
          <source src={myVideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
      <div className="project-section">
        {/* <h3>Project</h3> */}
        <div className="project-container">

          {filteredImages.map((gallery) => (
            <Link to={{ pathname: '/ProjectShown' }}
              state={{ data: gallery.images }} className='Project-link'>
              <div className="overlay"></div>
              <div className="details">
                <Link to={{ pathname: '/ProjectShown' }}
                  state={{ data: gallery.images }}>View Details</Link>
              </div>
              <div className="project-box">
                <div className="project-image">
                  {  <img src={gallery.images[0].imageUri} alt="" />}
                </div>
              </div>
            </Link>
          ))}

        </div>
      </div>
    </>
  )
}

export default Gallery
