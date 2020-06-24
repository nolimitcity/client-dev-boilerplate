/**
 * Created by jonas on 2020-06-24.
 */

import GSAP from "gsap";
import {Application} from "./Application";

export class Example extends Application {

    constructor() {
        super();
    }

    protected init(){
        this.loader.add("../media/example/star.png");
        this.loader.add("../media/animations/bw-intro.json");
        this.loader.load((loader: PIXI.Loader, resources: Partial<Record<string, PIXI.LoaderResource>>)=>this.onLoadComplete(loader, resources));
    }


    private onLoadComplete(loader:PIXI.Loader, resources:Partial<Record<string, PIXI.LoaderResource>>) {

        const sprite = new PIXI.Sprite(resources["../media/example/star.png"]!.texture);

        const animTextures:PIXI.Texture[] = [];
        for (let key in resources["../media/animations/bw-intro.json"]!.textures){
            animTextures.push(resources["../media/animations/bw-intro.json"]!.textures[key]);
        }

        const animation = new PIXI.AnimatedSprite(animTextures);
        animation.animationSpeed = 0.2;
        animation.play();



        const gfx = new PIXI.Graphics();
        gfx.lineStyle(2,0x00000,1,0.5);
        gfx.beginFill(0x00ff00,1);
        gfx.drawPolygon([0,0,100,100,200,150,10,10]);
        gfx.endFill();

        this.stage.addChild(sprite);
        this.stage.addChild(gfx);
        this.stage.addChild(animation);

        GSAP.to(sprite, {duration:2, x:500, y:500, yoyo:true, repeat:5});


    }
}