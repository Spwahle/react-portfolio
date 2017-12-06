import React from 'react'
import { Link } from 'react-router-dom'

export default class About extends React.Component {
    componentDidMount() {
        document.title = 'About'
    }

    render() {
        return ( <
            div >
            <
            section className = "container fadeInUp photo" >

            <
            div className = "col-4-of-12 pull-2" >
            <
            h1 > About Me < /h1> <
            h2 > Developer, Father < /h2> <
            /div> <
            /section> <
            section className = "container fadeInUp profile" >
            <
            div className = "col-5-of-12" >
            <
            h4 > Profile < /h4> <
            /div> <
            div className = "col-7-of-12 link-border" >
            <
            p >
            I am a Software Developer specializing in the full stack.While my languages are many, I love javascript. <
            /p> <
            p >

            My skills include front - end development, back - end development, Restful APIs, most modern frameworks, AWS, Firebase, Webpack, Node.js, Babel, and leadership.I love things people get excited about using. <
            /p> <
            p >
            I have a passion
            for minimalism in design and believe users should never have to think about what to do next. <
                /p> <
                p >
                I 'm always looking to work on fun projects. Feel free to{'
            '} <
            Link to = "/contact" > reach out < /Link> with work inquiries, side
            projects, or just to say hello!
            <
            /p> <
            /div> <
            /section> <
            section className = "container fadeInUp profile" >
            <
            /section> <
            /div>
        )
    }
}