import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
    constructor(params) {
        super(params);
        this.setTitle("Artist-Quiz");
    }

    async getHtml() {
        return `
            <h1>Artist-Quiz</h1>
            <p>You are viewing the posts!</p>
        `;
    }
}