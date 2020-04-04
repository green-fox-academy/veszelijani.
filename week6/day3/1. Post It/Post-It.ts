'use strict';

class PostIt {
    private _backgroundColor: string;
    private _text: string;
    private _textColor: string;

    constructor(_backgroundColor: string, _text: string, _textColor: string) {
        this._backgroundColor = _backgroundColor;
        this._text = _text;
        this._textColor = _textColor;
    }

}
let post1 = new PostIt('orange', 'blue', 'Idea 1');
let post2 = new PostIt('pink', 'black', 'Awesome');
let post3 = new PostIt('yellow', 'green', 'Superb!');
