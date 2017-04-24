/**
 * Interface description
 *
 * created on 2016-11-10
 * @author jowa
 */
interface StageConfig {
    layers:string[];
    webGLRendererOptions:PIXI.IWebGLRendererOptions;
    stageWidth:number;
    stageHeight:number;
}
export {StageConfig};