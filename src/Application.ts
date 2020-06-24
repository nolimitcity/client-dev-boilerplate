export class Application {

    private _app:PIXI.Application;

    public stage:PIXI.Container;
    public loader:PIXI.Loader;

    constructor() {
        const resolution:number = window.devicePixelRatio;
        this._app = new PIXI.Application({
            autoStart : true,
            autoDensity : true,
            antialias : false,
            resolution : resolution,
            backgroundColor : 0xaaaaaa,
            resizeTo : window
        });

        document.body.appendChild(this._app.view);
        this.stage = this._app.stage;
        this.loader = this._app.loader;
        this.init();
    }

    protected init():void{};
}