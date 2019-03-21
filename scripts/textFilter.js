const nativeText = document.querySelector('#nativeText').innerHTML;
document.querySelector('#filteredText').innerHTML = makeQuotesDouble(nativeText);;

function makeQuotesDouble(textToFilter) {
    return textToFilter.replace(/(?<!\w)'/g, '"');
}
