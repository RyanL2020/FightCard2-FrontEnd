class Comment {

    constructor({id, author_name, detail, fighter_id}) {

        this.id = id,
        this.author_name = author_name,
        this.detail = detail,
        this.fighter_id = fighter_id

        Comment.call.push(this)



    }
}