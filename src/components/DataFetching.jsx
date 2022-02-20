import { useState, useEffect } from 'react'
import axios from 'axios'

function DataFetching() {

    const DATA_URL = 'https://jsonplaceholder.typicode.com/posts/'

    const [post, setPost] = useState([])
    const [id, setId] = useState(1)
    const [idFromButtomClick, setIdFromButtomClick] = useState(1)

    const updateId = e => setId(e.target.value)

    const getData = () => {
        axios.get(`${DATA_URL}${idFromButtomClick}`)
            .then(res => {
                console.log(res)
                setPost(res.data)
            })
            .catch(err => { console.log(err) })
    }

    useEffect(getData, [idFromButtomClick])

    const updateIdFromButtomClick = () => {
        setIdFromButtomClick(id)
    }

    return (
        <div>
            <input type="text" value={id} onChange={updateId} />
            <button type='button' onClick={updateIdFromButtomClick}>Fetch Post</button>
            <div>{post.title}</div>
            {/* <ul>
                {
                    posts.map(post => (
                        <li key={post.id}>{post.title}</li>
                    ))
                }
            </ul> */}
        </div>
    )
    { }
}
export default DataFetching