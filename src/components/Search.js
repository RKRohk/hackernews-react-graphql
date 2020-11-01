import { gql } from 'apollo-boost'
import React,{useState} from 'react'
import { useApolloClient } from 'react-apollo'
import Link from './Link'

const FEED_SEARCH_QUERY = gql`
  query FeedSearchQuery($filter: String!) {
    feed(filter: $filter) {
      links {
        id
        url
        description
        createdAt
        postedBy {
          id
          name
        }
        votes {
          id
          user {
            id
          }
        }
      }
    }
  }
`



const Search = props => {

    const [links, setLinks] = useState([])
    const [filter, setFilter] = useState('')

    const client = useApolloClient()

    const search = async () => {
        const result = await client.query({
            query:FEED_SEARCH_QUERY,
            variables:{filter}
        })
        const links = result.data.feed.links
        setLinks(links)
    }

    return (
        <div>
            <div>
                Search
                <input
                type='text'
                onChange={ e => setFilter(e.target.value)}
                />
                <button onClick={search}>OK</button>
            </div>
            {links.map((link,index) => <Link key={link.id} link={link} index={index}/>)}
        </div>
    )
}

export default Search;