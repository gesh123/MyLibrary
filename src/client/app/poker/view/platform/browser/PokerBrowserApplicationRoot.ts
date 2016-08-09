/* Created by hivaga on 7/7/2016. */
import {Component, Injector} from "@angular/core";
import {PokerBrowserApplicationDependenciesBuilder} from "../../../bussiness/platform/browser/PokerBrowserApplicationDependenciesBuilder";
import {LobbyRoot} from "../../lobby/LobbyRoot";
import {DevConsole} from "../../../devTools/console/DevConsole";
import {AbstractRoot} from "../../common/AbstractRoot";
import {AbstractSignalsBus} from "../../../bussiness/common/signals/AbstractSignalsBus";
import {PokerControllersMap} from "../../../bussiness/common/controller/PokerControllersMap";

@Component({
	selector: "PokerBrowserApplicationRoot",
	template: ` <h1>POKER ANGULAR 2.0 APPLICATION</h1>
    <LobbyRoot></LobbyRoot>`,
	directives: [LobbyRoot],

	providers: new PokerBrowserApplicationDependenciesBuilder().getProviders(),
})

export class PokerBrowserApplicationRoot extends AbstractRoot
{
	constructor(injector:Injector,
		controllerMap:PokerControllersMap,
		signalsBus:AbstractSignalsBus)
	{
		DevConsole.log("PokerBrowserApplicationRoot.constructor", "");

		super(injector, controllerMap, signalsBus, PokerBrowserApplicationDependenciesBuilder.initControllerMap);

	}

}
