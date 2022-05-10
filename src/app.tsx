import { Component } from 'solid-js'

import { Container } from './components/container'

import './app.css'
import { Landing } from './sections/landing'
import { Nav } from './components/nav'
import { Header } from './components/header'
import { Services } from './sections/services'
import { WhyChooseUs } from './sections/why-choose-us'
import { Contact } from './sections/contact'

const App: Component = () => {
    return (
        <div>
            <Header />
            <Nav />
            <Landing />
            <Services />
            <WhyChooseUs />
            <Contact />
        </div>
    )
}

export default App
