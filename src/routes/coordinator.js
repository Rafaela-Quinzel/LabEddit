export const goToFeedPosts = (history) => {
    history.push('/posts')
}

export const goToSignup = (history) => {
    history.push('/cadastro')
} 

export const goToLogin = (history) => {
    history.push('/login')
}

export const goToDetailsPost = (history, id) => {
    history.push(`/posts/${id}`)
}

export const goToCreatePost = (history) => {
    history.push('/criar_post')
}

export const logout = (history) => {
    localStorage.removeItem('token')
    history.push('/login')
}