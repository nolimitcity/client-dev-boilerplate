import * as PIXI from "pixi.js";
declare global {
    interface Window {PIXI:any;}
}
window.PIXI = PIXI;


import {Example} from "./Example";
const app = new Example();


