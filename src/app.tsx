import { Component } from 'solid-js'

import './app.css'
import { Landing } from './sections/landing'
import { Nav } from './components/nav'
import { Header } from './components/header'
import { Services } from './sections/services'
import { WhyChooseUs } from './sections/why-choose-us'
import { Contact } from './sections/contact'
import { Footer } from './components/footer'

const App: Component = () => {
    return (
        <div>
            <Header />
            <Nav />
            <Landing />
            <Services />
            <WhyChooseUs />
            <Contact />
            <Footer />
        </div>
    )
}

export default App
