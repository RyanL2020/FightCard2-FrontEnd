class Fighter {

    static = []

    constructor({id, name, image_url, highlight_url, style, organization, wins, losses}) {
        
        this.id = id,
        this.name = name,
        this.image_url = image_url,
        this.highlight_url = highlight_url,
        this.style = style,
        this.organization = organization,
        this.wins = wins,
        this.losses = losses

        Fighter.all.push(this)

    }
}