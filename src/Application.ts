import PIXI = require("pixi.js");
import {BasicStageConfig} from "./config/BasicStageConfig";
import {StageManager} from "./core/StageManager";


export interface IAssetsDictionary {
    [index:string]:string;
}
/**
 * A base application class that has a basic loader set up.
 *
 * Created: 2017-01-03
 * @author jonas
 */
export class Application {
    protected _resources:PIXI.loaders.IResourceDictionary;
    protected _backgroundLayer:PIXI.Container;
    protected _foregroundLayer:PIXI.Container;
    protected _stageWidth:number;
    protected _stageHeight:number;
    protected _baseUrl:string;

    constructor(assets?:IAssetsDictionary, baseUrl:string = ""){
        this._baseUrl = baseUrl;
        this._stageWidth = BasicStageConfig.stageWidth;
        this._stageHeight = BasicStageConfig.stageHeight;
        this._backgroundLayer = StageManager.getLayer(BasicStageConfig.LAYER_BACK_GROUND);
        this._foregroundLayer = StageManager.getLayer(BasicStageConfig.LAYER_FORE_GROUND);
        this.loadAssets(assets);
        document.addEventListener('keydown', (event:KeyboardEvent) => this.onKeyDown(event));
    }

    private loadAssets(assets?:IAssetsDictionary){
        if(assets){
            let loader = PIXI.loader;
            for(let assetName in assets){
                loader.add(assetName, this._baseUrl + assets[assetName]);
            }
            loader.load((loader:PIXI.loaders.Loader, resources:PIXI.loaders.IResourceDictionary) => this.onAssetsLoaded(loader, resources));
        }
        else{
            this.initAnimations();
        }

    }

    private onAssetsLoaded(loader:PIXI.loaders.Loader, resources:PIXI.loaders.IResourceDictionary){
        this._resources = resources;
        this.initAnimations();
    }


    protected initAnimations():void{
        let gfx = new PIXI.Graphics();
        gfx.beginFill(0x777799, 1);
        gfx.drawRect(0, 0, this._stageWidth, this._stageHeight);
        gfx.endFill();
        this._backgroundLayer.addChild(gfx);
    }

    public getTexture(name:string):PIXI.Texture{
        return this._resources[name].texture;
    }

    public getTextures(name:string):PIXI.Texture[]{
        let asset:PIXI.loaders.Resource = this._resources[name];
        let textures:PIXI.Texture[] = [];
        for(let textureName in asset.textures){
            textures.push(asset.textures[textureName]);
        }
        return textures;
    }


    protected onKeyDown(event:KeyboardEvent){
        //If you want keyboard input override this function.
    }
}
