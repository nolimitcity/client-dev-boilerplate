///<reference path="../typings/pixi-particles.d.ts"/>
///<reference path="../typings/pixi-spine.d.ts"/>


import {StageManager} from "./core/StageManager";
import {BasicStageConfig} from "./config/BasicStageConfig";
import {Example} from "./Example";


require("pixi.js");
require("pixi-spine");
require("pixi-particles");
require("gsap");
require("sat");


let stagemanager = new StageManager(document.body, new BasicStageConfig());

//Entry point for your application. Just instantiate yor main class here.
let game = new Example();