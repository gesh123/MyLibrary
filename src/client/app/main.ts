/* Created by hivaga on 7/7/2016. */

import {bootstrap} from "@angular/platform-browser-dynamic";
import {PokerBrowserApplicationRoot} from "./poker/view/platform/browser/PokerBrowserApplicationRoot";
import {ComponentRef} from "@angular/core";
import {DevConsole} from "./poker/devTools/console/DevConsole";

bootstrap(PokerBrowserApplicationRoot);


function appLoadingCompleted(...rest:Array<ComponentRef<PokerBrowserApplicationRoot>>):void
{
	DevConsole.log("appLoadingCompleted.appLoadingCompleted", "Application Loading Completed !");
}
