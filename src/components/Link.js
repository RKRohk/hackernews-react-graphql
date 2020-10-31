import React from 'react'

const Link = (props) => <div>
    <div>
        {props.link.description}({props.link.url})
    </div>
</div>

export default Link