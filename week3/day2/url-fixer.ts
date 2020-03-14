'use strict';

let url: string = 'https//www.reddit.com/r/nevertellmethebots';

let newUrl: string = url.replace('//', '://').replace('bots', 'odds');

console.log(newUrl);