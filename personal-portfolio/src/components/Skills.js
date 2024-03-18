import python from "../assets/img/Python.png";
import postgre from "../assets/img/postgre.png";
import js from "../assets/img/Javascript.png";
import react from "../assets/img/react.png";
import tailwind from "../assets/img/tailwind.png";
import hadoop from "../assets/img/hadoop.png";
import android from "../assets/img/Android.png";
import nodejs from "../assets/img/nodejs.png";
import drone from "../assets/img/Drone.png";
import px4 from "../assets/img/px4.png";
import c from "../assets/img/C.png";
import godot from "../assets/img/godot.png";
import figma from "../assets/img/figma.png";
import qgc from "../assets/img/qgc.png";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import arrow1 from "../assets/img/arrow1.svg";
import arrow2 from "../assets/img/arrow2.svg";
import colorSharp from "../assets/img/color-sharp.png"

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <section className="skill" id="skills">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="skill-bx wow zoomIn">
                        <h2>Skills</h2>
                        <p>These are the technical skills I acquired during my years of learning, <br></br> the abilities that I utilized to complete the projects i made.</p>
                        <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider" >
                            <div className="item" size={12} sm={6}>
                                <img src={python} alt="Image" />
                                <h5>Python</h5>
                            </div>
                            <div className="item">
                                <img src={c} alt="Image" />
                                <h5>C language</h5>
                            </div>
                            <div className="item">
                                <img src={react} alt="Image" />
                                <h5>React</h5>
                            </div>
                            <div className="item">
                                <img src={android} alt="Image" />
                                <h5>Android Studio</h5>
                            </div>
                            <div className="item">
                                <img src={python} alt="Image" />
                                <h5>Python</h5>
                            </div>
                            <div className="item">
                                <img src={postgre} alt="Image" />
                                <h5>PostgreSQL</h5>
                            </div>
                            <div className="item">
                                <img src={js} alt="Image" />
                                <h5>Javascript</h5>
                            </div>
                            <div className="item">
                                <img src={godot} alt="Image" />
                                <h5>Godot</h5>
                            </div>
                            <div className="item">
                                <img src={px4} alt="Image" />
                                <h5>PX4 Autopilot</h5>
                            </div>
                            <div className="item">
                                <img src={qgc} alt="Image" />
                                <h5>QGroundControl</h5>
                            </div>
                            <div className="item">
                                <img src={drone} alt="Image" />
                                <h5>Drone Engineer</h5>
                            </div>
                            <div className="item">
                                <img src={nodejs} alt="Image" />
                                <h5>NodeJS</h5>
                            </div>
                            <div className="item">
                                <img src={figma} alt="Image" />
                                <h5>Figma</h5>
                            </div>
                            <div className="item">
                                <img src={tailwind} alt="Image" />
                                <h5>Tailwind CSS</h5>
                            </div>
                            <div className="item">
                                <img src={hadoop} alt="Image" />
                                <h5>Hadoop</h5>
                            </div>
                        </Carousel>
                    </div>
                </div>
            </div>
        </div>
        <img className="background-image-left" src={colorSharp} alt="Image" />
    </section>
  )
}
