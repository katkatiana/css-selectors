const twitterLink = document.querySelector("aside .p-4:nth-child(3) ol li:nth-child(2)")
const keepReadinButton1 = document.querySelector(".px-0 .lead > .font-weight-bold")
const firstPost = document.querySelector(".jumbotron")
const blogPost1 = document.querySelector(".mb-2 .col-md-6:nth-of-type(1)")

window.addEventListener("load", (event) => {
    twitterLink.style.display = "none"
}) 

function removeElementOnClick(buttonSelector, elementSelector) {
    const button = document.querySelector(buttonSelector);
    const element = document.querySelector(elementSelector);

    if (button && element) {
        button.addEventListener("click", function() {
            element.style.visibility = "hidden"
        })
    }
}
removeElementOnClick(".px-0 .lead > .font-weight-bold", ".jumbotron");
removeElementOnClick(".mb-2 .col-md-6:nth-of-type(1) .stretched-link", ".mb-2 .col-md-6:nth-of-type(1)")
removeElementOnClick(".container .col-md-6:nth-of-type(2) .stretched-link", ".container .col-md-6:nth-of-type(2)")

function nameAlert (authorSelector) {
    const author = document.querySelector(authorSelector)
    const names = author.valueOf()
    if (author) {
        author.addEventListener("mouseover", function() {
            alert(names)
        })
    }
}
nameAlert(".blog-post-meta a")
