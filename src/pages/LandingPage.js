import React, { Component } from "react";
import Header from "parts/Header";
import Hero from "parts/Hero"
import landingPage from "json/landingPage"
import MostPicked from "parts/MostPicked";

class LandingPage extends Component {
    render() {
        return (
            <>
            <Header {...this.props}></Header>
            <Hero data={landingPage.hero} />
            <MostPicked data={landingPage.mostPicked} />
            
            </>
        )
    }
}

export default LandingPage;