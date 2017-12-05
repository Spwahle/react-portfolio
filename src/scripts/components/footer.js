import React from 'react'
import { Link } from 'react-router-dom'

const networks = {
    GitHub: 'https://github.com/Spwahle',
    LinkedIn: 'https://www.linkedin.com/in/shaunwahle',
}

const Footer = () =>
    <
    footer >
    <
    section className = "container" >
    <
    aside >
    <
    Link to = "/" > ©{ new Date().getFullYear() }
Gavin Thomas, Inc. < /Link> < /
    aside > <
    aside className = "link-border" > {
        Object.keys(networks).map((network, i) =>
            <
            Link to = { networks[network] }
            target = "_blank"
            key = { i } > { network } < /Link>
        )
    } <
    /aside> < /
    section > <
    /footer>

export default Footer