import React from "react";
import Slider from "react-slick";
import cer1 from "../styles/cer1.svg";
import cer2 from "../styles/cer2.png";
import cer3 from "../styles/cer3.png";
import img1 from "../styles/mojarto.png";
import img2 from "../styles/petdoors.png";
import img3 from "../styles/planetjill.png";
import img4 from "../styles/amx.png";
import img5 from "../styles/betty&biddy.png";

const allClients = [
  {
    img: img1,
    alt: "mojarto",
    name: "Manisha Lath Gupta",
    position: "Co-Founder & CEO",
    content:
      "CueBlocks is a world-class team located in a small town. It is impressive to see the caliber of the team and the business practices they follow.",
  },
  {
    img: img2,
    alt: "petdoors",
    name: "Nick Pullano",
    position: "CEO",
    content:
      "Their technical experience supporting and improving our Magento websites has allowed us to grow considerably as an organization.",
  },
  {
    img: img3,
    alt: "planetjill",
    name: "Dave Anderson",
    position: "Co-Owner",
    content:
      "I have been greatly impressed by their reliability, communication, attention to detail, and most importantly, the high quality of work that they produce for us on a daily basis.",
  },
  {
    img: img4,
    alt: "amx",
    name: "warren Wise",
    position: "Director",
    content:
      "Our experience in outsourcing services has been the most pleasurable and overwhelmingly successful since our involvement with CueBlocks Team.",
  },
  {
    img: img5,
    alt: "betty&biddy",
    name: "Fiona",
    position: "Founder & CEO",
    content:
      "CueBlocks never cease to amaze me with their infinite knowledge and understanding of every corner of the online sphere.",
  },
];
const settings = {
  speed: 500,
  arrows: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  initialSlide: 0,
};
const ClientsWords = () => {
  return (
    <section className="sub_footer">
      <div className="exp_div">
        <div className="clients_exp">
          <h2>A Word From Our Clients</h2>
          <Slider {...settings}>
            {allClients.map((item, index) => {
              return (
                <div key={index}>
                  <p>{item.content}</p>
                  <div className="clients_logo">
                    <p>
                      {item.name} -
                      <span className="position">{item.position}</span>
                    </p>
                    <img className="com_logo" src={item.img} alt={item.alt} />
                  </div>
                </div>
              );
            })}
          </Slider>
        </div>
        <div className="clients_exp" id="certificate">
          <p className="r-al">
            Satisfied clients are the fuel that keeps us on the road to
            learning, improving, growing, and evolving. Check out what our
            clients have to say about their association with CueBlocks on
            Clutch.
          </p>
          <div className="cer_logo">
            <div className="img_group">
              <img src={cer1} alt="cer1" />
            </div>
            <div className="img_group">
              <span>
                <img src={cer2} alt="cer2" />
                <img src={cer3} alt="cer3" />
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClientsWords;
