import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
    constructor(params) {
        super(params);
        this.setTitle("Picture-Quiz");
    }

    async getHtml() {
        return `
            <h1>Picture-Quiz</h1>
            <p>You are viewing the posts!</p>
        `;
    }
}