var elements = document.getElementsByTagName("*");

for (var i = 0; i < elements.length; i++){
    var element = elements[i];

    for (var j = 0; j < element.childNodes.length; j++){
        var node = element.childNodes[j];

        if (node.nodeType === 3){
            var text = node.nodeValue;
            var text2 = node.nodeValue;
            var text3 = node.nodeValue;
            var text4 = node.nodeValue;
            var replacedText = text.replace(/[r]/gi, 'w');
            var replacedText2 = text2.replace(/[l]/gi, 'w')
            var replacedText3 = text3.replace(/[R]/gi, 'W');
            var replacedText4 = text4.replace(/[L]/gi, 'W')

            if (replacedText !== text ){
                element.replaceChild(document.createTextNode(replacedText), node)
            }
            else if (replacedText2 !== text2){
                element.replaceChild(document.createTextNode(replacedText2), node)
            }
            else if (replacedText3 !== text3){
                element.replaceChild(document.createTextNode(replacedText3), node)
            }
            else if (replacedText4 !== text4){
                element.replaceChild(document.createTextNode(replacedText4), node)
            }
        }
    }
}