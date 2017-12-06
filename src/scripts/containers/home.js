import React from 'react'
import { Link } from 'react-router-dom'

import Header from '../components/Header'
import Card from '../components/Card'
import allClients, { moreWork } from '../utils/clients'

export default class Index extends React.Component {
    componentDidMount() {
        document.title = 'Shaun Wahle'
    }

    render() {
        return ( <
            div className = "fadeInUp" >
            <
            Header h1 = "I'm a Seattle based Web Developer focused on crafting and creating clean, exciting user experiences"
            h2 = "I provide dynamic solutions to complicated problems." >
            <
            Link to = "/contact"
            className = "btn dark" > Get in touch < /Link> < /
            Header > <
            section className = "container" >
            <
            h3 className = "col-1-of-1 headline" > Featured Work < /h3> < /
            section > <
            section className = "container clients" > {
                allClients.map(client => {
                    const className = {
                        className: client.properties !== null ? ['card', client.properties.className].join(' ') : 'card',
                    }
                    const size = client.properties !== null ? 'large' : 'small'
                    return ( <
                        Card client = { client }
                        className = { className }
                        size = { size }
                        key = { client.order }
                        />
                    )
                })
            } <
            /section>

            <
            /div>
        )
    }
}