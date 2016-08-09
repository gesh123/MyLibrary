/* Created by hivaga on 8/1/2016. */

import {Component, Injector} from "@angular/core";
import {LobbyDependenciesBuilder} from "../../bussiness/lobby/LobbyDependenciesBuilder";
import {LoadingScreen} from "./screens/LoadingScreen";
import {ConnectingScreen} from "./screens/ConnectingScreen";
import {LogInScreen} from "./screens/LogInScreen";
import {AbstractRoot} from "../common/AbstractRoot";
import {LobbySignalsBus} from "../../bussiness/lobby/signals/LobbySignalsBus";
import {AbstractSignalsBus} from "../../bussiness/common/signals/AbstractSignalsBus";
import {PokerControllersMap} from "../../bussiness/common/controller/PokerControllersMap";
import {PokerLobbyModel} from "../../bussiness/common/model/PokerLobbyModel";
import {LobbyStatesEnum} from "../../bussiness/lobby/consts/LobbyStatesEnum";
import {SimplePhaserGameScreen} from "../game/TestPhaserScreen/SimplePhaserGameScreen";
import {LobbyLoggerButton} from "./LoggerButton/LobbyLoggerButton";

@Component({
	selector: "LobbyRoot",
	template: `
		<div [ngSwitch]="lobbyModel.state">
		<loadingScreen *ngSwitchCase = "0"></loadingScreen>
		<connectingScreen *ngSwitchCase = "1"></connectingScreen>
		<logInScreen *ngSwitchCase = "2"></logInScreen>
	</div>
	<br/>
	<br/>
	<SimplePhaserGameScreen></SimplePhaserGameScreen>
	<br/>
	<br/>
	<LobbyLoggerButton></LobbyLoggerButton>`,
	directives: [LoadingScreen, ConnectingScreen, LogInScreen, SimplePhaserGameScreen, LobbyLoggerButton],
	providers: new LobbyDependenciesBuilder().getProviders()
})

export class LobbyRoot extends AbstractRoot
{
	// -----------------------------------------
	// STATIC PROPERTIES
	// -----------------------------------------


	// -----------------------------------------
	// @INPUT PROPERTIES
	// -----------------------------------------

	// -----------------------------------------
	// @OUTPUT PROPERTIES
	// -----------------------------------------

	// -----------------------------------------
	// PUBLIC PROPERTIES
	// -----------------------------------------

	///public lobbyState:LobbyStatesEnum = LobbyStatesEnum.LOADING;


	// -----------------------------------------
	// PRIVATE PROPERTIES
	// -----------------------------------------


	// -----------------------------------------
	// CONSTRUCTOR
	// -----------------------------------------

	constructor(injector:Injector,
		controllerMap:PokerControllersMap,
		signalsBus:AbstractSignalsBus,
		public lobbyModel:PokerLobbyModel)
	{
		super(injector,
			controllerMap,
			signalsBus,
			LobbyDependenciesBuilder.initControllerMap);

		//this.lobbyState = this.lobbyModel.state;
		//this.lobbyModel.onStateChanged.add(this.onLobbyChangeStateHandler, this);

	}

	// -----------------------------------------
	// PUBLIC METHODS
	// -----------------------------------------

	private get lobbySignalsBus():LobbySignalsBus
	{
		return this.signalsBus as LobbySignalsBus;
	}


	public ngOnInit():any
	{
		super.ngOnInit();

		// that is all we need to start the Lobby Logic
		this.lobbySignalsBus.onLobbyStart.dispatch();
	}


	public ngOnDestroy():any
	{
		return super.ngOnDestroy();
	}

	// -----------------------------------------
	// PROTECTED METHODS
	// -----------------------------------------


	// -----------------------------------------
	// PRIVATE METHODS
	// -----------------------------------------

	// private onLobbyChangeStateHandler(value:LobbyStatesEnum):void
	// {
	// 	this.lobbyState = value;
	// }


}
