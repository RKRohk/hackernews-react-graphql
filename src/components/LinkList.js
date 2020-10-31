import { gql } from 'apollo-boost'
import React from 'react'
import { Query } from 'react-apollo'
import Link from './Link'

const LinkList = (props) => {

    const FEED_QUERY = gql`
    { feed {
        links{
            id
            url
            description
        }
    }}
    `

    return (<Query query={FEED_QUERY}>
        {({loading,error,data}) => {
            if(loading) return <div>Fetching</div>
            if(error) {
                console.log(error)
                return <div>Error</div>
            }
            const linksToRender = data.feed.links
            return linksToRender.map(link => <Link key={link.id} link={link}/>)
        }}
    </Query>)

}

export default LinkList