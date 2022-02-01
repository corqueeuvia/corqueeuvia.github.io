function newFontSize(size) {
    return function resizeElement(element) {
        for (let i = 0; i < element.length; i++) {
            element[i].style.fontSize = `${size}pt`;
        }
        return true;
    }
}

const paragraphs = document.getElementsByTagName('p');

const font12 = newFontSize(12);
const font14 = newFontSize(14);
const font18 = newFontSize(18);
const font20 = newFontSize(20);
const font22 = newFontSize(22);
const font24 = newFontSize(24);