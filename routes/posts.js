module.exports = {
    getPosts(req, res) {
        res.status(200).send(req.store.posts)
    },
    addPost(req, res) {
        let newPost = req.body
        let id = req.store.posts.length
        req.store.posts.push(newPost)
        res.status(201).send({id :id})
    },
    updatePost(req, res) {
        if(!req.store.posts[req.params.postId])
            res.status(200).send({ message : "no post available"})
        req.store.posts[req.params.postId] = req.body
        res.status(200).send(req.store.posts[req.params.postId])
    },
    removePost(req, res) {
        if(!req.store.posts[req.params.postId])
            res.status(200).send({ message : "no post available"})
        req.store.posts.splice(req.params.postId,1)
        res.status(204).send()
    }
}


