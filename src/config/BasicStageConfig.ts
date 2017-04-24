
import {StageConfig} from "../core/StageConfig";
/**
 * Class description
 *
 * created on 2016-11-10
 * @author jowa
 */


class BasicStageConfig implements StageConfig {

    public webGLRendererOptions:PIXI.IWebGLRendererOptions;
    public layers:string[];

    public static LAYER_BACK_GROUND:string = "background";
    public static LAYER_FORE_GROUND:string = "foreground";

    public static stageWidth:number = 1280;
    public static stageHeight:number = 720;

    public stageWidth:number = BasicStageConfig.stageWidth;
    public stageHeight:number = BasicStageConfig.stageHeight;

    constructor(){

        this.layers = [
            BasicStageConfig.LAYER_BACK_GROUND,
            BasicStageConfig.LAYER_FORE_GROUND
        ];

        this.webGLRendererOptions = {
            antialias: false,
            resolution: window.devicePixelRatio | 1,
            transparent: false
        };

    }

}
export {BasicStageConfig};