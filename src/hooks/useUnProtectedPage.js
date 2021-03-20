import { useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import { goToFeedPosts } from '../routes/coordinator'


export const useUnProtectedPage = () => {
    const history = useHistory()

    const token = localStorage.getItem('token')

    useEffect(() => {
        if(token) {
            goToFeedPosts(history)
        }
    }, [history, token])
}