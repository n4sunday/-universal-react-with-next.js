import React, { Component } from 'react'
import fetch from 'isomorphic-unfetch'
import Layout from '../components/Layout'

class About extends Component {
    static async getInitialProps() {
        const res = await fetch('https://api.github.com/users/n4sunday')
        const data = await res.json()

        return { user: data}
    }

    render() {
        const { user } = this.props
        return (
            <Layout title="About">
                About
                <p>{user.name}</p>
                <img src={user.avatar_url} alt="Me" height="200px" />
            </Layout>
        )
    }
}

export default About;