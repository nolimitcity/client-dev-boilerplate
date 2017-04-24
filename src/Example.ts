import {Application, IAssetsDictionary} from "./Application";
/**
 * Class description
 *
 * created on 2017-04-19
 * @author jowa
 */
class Example extends Application {

    constructor(){
        let assets:IAssetsDictionary = {
            "star": "example/star.png"
        };

        super(assets, "../media/");
    }


    protected initAnimations():void{
        super.initAnimations();

        let sprite:PIXI.Sprite = new PIXI.Sprite(this.getTexture("star"));
        sprite.anchor.set(0.5, 0.5);
        sprite.position.set(this._stageWidth * 0.5, this._stageHeight * 0.5);
        sprite.tint = 0x0000FF;
        this._foregroundLayer.addChild(sprite);
    }
}
export {Example};