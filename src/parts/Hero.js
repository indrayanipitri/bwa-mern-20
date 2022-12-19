import React from "react";
import ImageHero from "assets/images/img-hero.jpg";
import ImageHero_ from "assets/images/img-hero-frame.png";
import IcTraveler from "assets/images/icons/ic_traveler.svg";
import IcCities from "assets/images/icons/ic_cities.svg";
import IcTreasure from "assets/images/icons/ic_treasure.svg";
import Button from 'elements/Buttons'

export default function Hero(props) {

    function showMostPicked() {
        window.scrollTo( {
            top: props.refMostPicked.current.offsetTop - 30,
            behavior: "smooth"
        }) 
    }

    return (
        <section className="container pt-4">
            <div className="row align-items-center">
                <div className="col-auto pr-5" style={{ width: 530 }}>
                    <h1 className="font-weight-bold line-height-1 mb-3">
                        Forget Busy Work <br />
                        Start Next Vacation
                    </h1>
                    <p className="mb-4 font-weight-light text-gray-500 w-75" style={{ lineHeight: "170%" }}>
                        we provide what you need to enjoy yout holiday with family. time to make another memorable moments
                    </p>
                    <Button className="btn px-5" hasShadow isPrimary onClick={showMostPicked}>
                        Show Me More
                    </Button>

                    <div className="row" style={{ marginTop: 90 }}>
                        <div className="col-auto" style={{ marginRight: 30 }}>
                            <img src={IcTraveler} alt={`${props.data.tavelers} Travelers`} width="36" height="36" />
                            <h6 className="mt-3">
                                {props.data.travelers}{" "} <span className="font-wight-light text-gray-500" > travelers </span>
                            </h6>
                        </div>
                        <div className="col-auto" style={{ marginRight: 30 }}>
                            <img src={IcTreasure} alt={`${props.data.treasures} Treasures`} width="36" height="36" />
                            <h6 className="mt-3">
                                {props.data.treasures}{" "} <span className="font-wight-light text-gray-500" > treasures </span>
                            </h6>
                        </div>
                        <div className="col-auto">
                            <img src={IcCities} alt={`${props.data.cities} Cities`} width="36" height="36" />
                            <h6 className="mt-3">
                                {props.data.cities}{" "} <span className="font-wight-light text-gray-500" > cities </span>
                            </h6>
                        </div>
                    </div>
                </div>

                <div className="col-6 pl-5">
                    <div style={{ width: 430, height: 310 }}>
                        <img src={ImageHero} alt="room with couches" className="img-fluid position-absolute" style={{ margin: "-70px 0 0 -30px", zIndex: 1 }} />
                        <img src={ImageHero_} alt="room with couches frame" className="img-fluid position-absolute" style={{ margin: "-40px 0 0 0"}} />
                    </div>
                </div>
            </div>
        </section>
    )
}