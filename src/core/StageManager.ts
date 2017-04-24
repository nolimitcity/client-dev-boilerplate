import {StageConfig} from "./StageConfig";
import {LayerDictionary} from "./LayerDictionary";
/**
 * Class description
 *
 * created on 2016-11-10
 * @author jowa
 */

class StageManager {

    static get renderer():PIXI.SystemRenderer{
        return StageManager._instance._renderer;
    }
    private _stage:PIXI.Container;
    private _renderer:PIXI.SystemRenderer;
    private static _layers:LayerDictionary;

    static _instance:StageManager;


    constructor(htmlElement:HTMLElement, stageConfig:StageConfig){
        if (StageManager._instance)
        {
            console.error("It already has an instance");
        }

        this.createRenderer(htmlElement, stageConfig);
        this.addLayersToStage(stageConfig.layers);
        this.createMainLoop();
        StageManager._instance = this;
    }

    private createRenderer(htmlElement:HTMLElement, stageConfig:StageConfig){
        this._stage = new PIXI.Container();
        this._renderer = new PIXI.WebGLRenderer(stageConfig.stageWidth, stageConfig.stageHeight, stageConfig.webGLRendererOptions);
        htmlElement.appendChild(this._renderer.view);
    }

    private createMainLoop():void{
        TweenLite.ticker.addEventListener("tick", ():void => this.mainLoop());
    }

    private mainLoop(){
        this._renderer.render(this._stage);
    }

    private addLayersToStage(layers:string[]){
        StageManager._layers = {};
        for (let i:number = 0; i < layers.length; i++)
        {
            let layer = new PIXI.Container();
            layer.name = layers[i];
            StageManager._layers[layer.name] = layer;
            this._stage.addChild(layer);
        }
    }

    static getLayer(name:string):PIXI.Container
    {
        return StageManager._layers[name];
    }
}
export {StageManager};