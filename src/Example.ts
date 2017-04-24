import {Application, IAssetsDictionary} from "./Application";
/**
 * Class description
 *
 * created on 2017-04-19
 * @author jowa
 */
export class Example extends Application {

    constructor(){
        let assets:IAssetsDictionary = {
            "star": "example/star.png"
        };

        super(assets, "../media/");
    }


    protected initAnimations():void{
        super.initAnimations();

        let textStyle:PIXI.TextStyleOptions = {
            "fontFamily": "Futura LT",
            "fontSize": "40px",
            "fontWeight": "400",
            "fill": "#00FF00"
        };

        let text:PIXI.Text = new PIXI.Text("This is an example",textStyle);
        text.anchor.set(0.5, 0.5);
        text.position.set(this._stageWidth * 0.5, this._stageHeight * 0.5 - 160);
        this._foregroundLayer.addChild(text);

        let sprite:PIXI.Sprite = new PIXI.Sprite(this.getTexture("star"));
        sprite.anchor.set(0.5, 0.5);
        sprite.position.set(this._stageWidth * 0.5, this._stageHeight * 0.5);
        sprite.tint = 0x0000FF;
        this._foregroundLayer.addChild(sprite);
    }
}