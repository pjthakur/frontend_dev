import Nav from './components/navbar/Nav'
import Slide from './components/div/Slide'
import SlideLeft from './components/div/SlideLeft';
import './App.css';
import image1 from './components/div/images/slide-1.jpg'
import image2 from './components/div/images/slide-2.jpg'
import image3 from './components/div/images/slide-3.jpg'
import image4 from './components/div/images/slide-4.jpg'
import image5 from './components/div/images/slide-5.jpg'
import image6 from './components/div/images/slide-6.jpg'
import image7 from './components/div/images/slide-7.jpg'
import HorizontalChart from './components/chart/HorizontalChart';
import Slideshow from './components/slideshow/Slideshow';
function App() {
  const items = [
    {
      image: image1,
      alt: "Image 1",
      heading: "ANAEMIA PREVALENCE",
      caption :"All Districs Affected"
    },
    {
      image: image2,
      alt: "Image 2",
      heading: "ANAEMIA PREVALENCE",
      caption :"All Districs Affected"
    },
    {
      image: image3,
      alt: "Image 3",
      heading: "ANAEMIA PREVALENCE",
      caption :"All Districs Affected"
      
    },
    {
      image: image4,
      alt: "Image 4",
      heading: "ANAEMIA PREVALENCE",
      caption : "All at Risks to Anemia"
      
    },
    {
      image: image5,
      alt: "Image 5",
      heading: "ANAEMIA PREVALENCE",
      caption :"514 districts Anemia ≥ 40% among children 6-59 months",
      
    },
    {
      image: image6,
      alt: "Image 6",
      heading: "ANAEMIA PREVALENCE",
      caption : "139 districts Anemia ≥ 40% among women of reproductive age"
      
    },
    {
      image: image7,
      alt: "Image 7",
      heading: "ANAEMIA PREVALENCE",
      caption : "65 districtsAnemia ≥ 40% among pregnant women 15-49 years"
    },
  ];

  return (
    <div className="App">
      <Nav/>
      <Slideshow items = {items}/>
      {/* <Slide  image={image1}/>
      <SlideLeft image={image2} para="All Districts Affected"/>
      <div className='slideL' style ={{backgroundImage: `url(${image3})`}}/>
      <SlideLeft image={image4} para="All at Risks to Anemia"/>
      <SlideLeft image={image5} para="514 districts Anemia ≥ 40% among children 6-59 months"/>
      <SlideLeft image={image6} para="139 districts Anemia ≥ 40% among women of reproductive age"/>
      <div className='slideL' style ={{backgroundImage: `url(${image7})`}}/> */}
      
    </div>
  );
}

export default App;
