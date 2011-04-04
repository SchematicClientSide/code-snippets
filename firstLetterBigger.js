function initFirstParagraphLetter() {
    firstParagraphElement = $('.content p:first');
    firstParagraphText = firstParagraphElement.text();
    letter = firstParagraphText.substr(0, 1);
    firstParagraphText = firstParagraphText.substr(1);
    firstParagraphText = '<div class="firstLetter">' + letter + '</div>' + firstParagraphText;
    firstParagraphElement.html(firstParagraphText);
}
 
/*
css

div#post p .firstLetter {
    font-size: 40px;
    float: left;
    width: 34px;
    height: 25px;
    margin: 14px 0 0 0;
}
*/