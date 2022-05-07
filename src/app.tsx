import type { Component } from 'solid-js'

import { Container } from './components/container'

import './app.css'
import { Landing } from './sections/landing'

const App: Component = () => {
    return (
        <Container.Outer>
            <Container.Inner>
                <Landing />
            </Container.Inner>
        </Container.Outer>
    )
}

export default App
