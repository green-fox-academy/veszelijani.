'use strict';

import { Flower } from './Flower';
import { Tree } from './Tree';
import { Garden } from './Garden';

let BigGarden: Garden = new Garden();
BigGarden.addFlower(new Flower('yellow',0));
BigGarden.addFlower(new Flower('blue',0));
BigGarden.addTree(new Tree('purple',0));
BigGarden.addTree(new Tree('orange',0));
BigGarden.infoAll();
BigGarden.wateringAll(40);
BigGarden.wateringAll(70);