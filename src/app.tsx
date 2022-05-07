import type { Component } from 'solid-js'

import { Container } from './components/container'

import './app.css'
import { Landing } from './sections/landing'
import { Nav } from './components/nav'

const App: Component = () => {
    return (
        <div>
            <Nav />
            <Container.Outer>
                <Container.Inner>
                    <Landing />
                </Container.Inner>
            </Container.Outer>
        </div>
    )
}

export default App
