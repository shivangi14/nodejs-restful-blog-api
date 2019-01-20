module.exports = {
    getComments(req,res){
        if(!req.store.posts[req.params.postId])
            res.status(200).send({ message : "no post available"})
        if(!req.store.posts[req.params.postId].comments)
            req.store.posts[req.params.postId].comments =[]
        res.status(200).send(req.store.posts[req.params.postId].comments)
    },
    addComment(req,res){
        if(!req.store.posts[req.params.postId])
            res.status(200).send({ message : "no post available"})
        let newComment = req.body
        if(!req.store.posts[req.params.postId].comments)
            req.store.posts[req.params.postId].comments =[]
        let commentId = req.store.posts[req.params.postId].comments.length
        req.store.posts[req.params.postId].comments.push(newComment)
        res.send(201).send({commentId : commentId})
    },
    updateComment(req,res){
        if(!req.store.posts[req.params.postId])
            res.status(200).send({ message : "no post available"})
        if(!req.store.posts[req.params.postId].comments[req.params.commentId])
            res.status(200).send({ message : "no comment available"})
        req.store.posts[req.params.postId].comments[req.params.commentId] = req.body
        res.status(200).send(req.store.posts[req.params.postId].comments)
    },
    removeComment(req,res){
        if(!req.store.posts[req.params.postId])
            res.status(200).send({ message : "no post available"})
        if(!req.store.posts[req.params.postId].comments[req.params.commentId])
            res.status(200).send({ message : "no comment available"})
        req.store.posts[req.params.postId].comments.splice(req.params.commentId,1)
        res.status(204).send()
    }
}

