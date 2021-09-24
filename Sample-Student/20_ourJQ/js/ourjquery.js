function OurJequery(elements) {
    this.elements = elements;

}

function $(selector) {
    var elements;
    if (selector instanceof HTMLElement) {
        elements = [selector];
    } else if (selector instanceof Array || selector instanceof NodeList) {
        elements = selector;
    } else {
        elements = document.querySelectorAll(selector);
    }

    return new OurJequery(elements);
    console.log(elements);
}