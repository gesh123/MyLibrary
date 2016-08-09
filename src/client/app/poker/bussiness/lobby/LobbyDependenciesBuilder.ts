import {PokerConnectionService} from "../../connection/service/PokerConnectionService";
import {ConnectionService} from "../../connection/service/ConnectionService";
import {AbstractDependanciesBuilder} from "../common/AbstractDependanciesBuilder";
import {LobbySignalsBus} from "./signals/LobbySignalsBus";
import {PokerControllersMap} from "../common/controller/PokerControllersMap";
import {SrvConnectGameOKCommand} from "../../connection/protocol/generated/commands/SrvConnectGameOKCommand";
import {SrvNetworksConfigurationCommand} from "../../connection/protocol/generated/commands/SrvNetworksConfigurationCommand";
import {SrvConnectGameOKCommandController} from "./controller/server/SrvConnectGameOKCommandController";
import {SrvNetworksConfigurationCommandController} from "./controller/server/SrvNetworksConfigurationCommandController";
import {AbstractSignalsBus} from "../common/signals/AbstractSignalsBus";
import {LobbyOnLobbyStartController} from "./controller/LobbyOnLobbyStartController";
import {ClLogonCommandController} from "./controller/client/ClLogonCommandController";
import {LobbyPokerConnectionServiceController} from "./controller/LobbyPokerConnectionServiceController";
import {SrvLogonOkCommand} from "../../connection/protocol/generated/commands/SrvLogonOkCommand";
import {SrvLogonOkCommandController} from "./controller/server/SrvLogonOkCommandController";
import {SrvLogonErrorCommand} from "../../connection/protocol/generated/commands/SrvLogonErrorCommand";
import {SrvLogonErrorCommandController} from "./controller/server/SrvLogonErrorCommandController";
import {DevLogger} from "../../devTools/logger/DevLogger";
import {FlashDumpReplaySocket} from "../../connection/socket/FlashDumpReplaySocket";
import {AbstractConnection} from "../../connection/AbstractConnection";
import {DumpReplaySocket} from "../../connection/socket/DumpReplaySocket";
import {PokerWebSocket} from "../../connection/socket/PokerWebSocket";

/**
 * Created by hivaga on 7/28/2016.
 */
export class LobbyDependenciesBuilder extends AbstractDependanciesBuilder
{

	// -----------------------------------------
	// STATIC PROPERTIES
	// -----------------------------------------


	// -----------------------------------------
	// PUBLIC PROPERTIES
	// -----------------------------------------


	// -----------------------------------------
	// PROTECTED PROPERTIES
	// -----------------------------------------


	// -----------------------------------------
	// PRIVATE PROPERTIES
	// -----------------------------------------


	// -----------------------------------------
	// CONSTRUCTOR
	// -----------------------------------------


	constructor()
	{
		super();
	}

	// -----------------------------------------
	// PUBLIC METHODS
	// -----------------------------------------

	/* Hook method for adding all controller mappings */
	public static initControllerMap(controllerMap:PokerControllersMap, signalBus?:LobbySignalsBus):PokerControllersMap
	{

		// Client Controllers
		controllerMap.map(signalBus.onClLogon, ClLogonCommandController);

		// Server Controllers
		controllerMap.map(SrvConnectGameOKCommand.UID, SrvConnectGameOKCommandController);
		controllerMap.map(SrvNetworksConfigurationCommand.UID, SrvNetworksConfigurationCommandController);
		controllerMap.map(SrvLogonOkCommand.UID, SrvLogonOkCommandController);
		controllerMap.map(SrvLogonErrorCommand.UID, SrvLogonErrorCommandController);

		// Bussiness Controllers
		controllerMap.map(signalBus.onLobbyStart, LobbyOnLobbyStartController);
		controllerMap.map(signalBus.onLobbyStartConnectionService, LobbyPokerConnectionServiceController);

		// you need to call super to finalize the mappings procedure
		return AbstractDependanciesBuilder.initControllerMap(controllerMap);
	}

	// -----------------------------------------
	// PROTECTED METHODS
	// -----------------------------------------


	/*Hook method override and add here all Signals Dependencies */
	protected addSignalDependencies():void
	{

		this.add(LobbySignalsBus);
		this.add(AbstractSignalsBus, {useExisting: LobbySignalsBus});
	}

	/*Hook method override and add here all Model Dependencies */
	protected addModelDependencies():void
	{

	}

	/*Hook method override and add here all Service Dependencies */
	protected addServiceDependencies():void
	{

		this.add(AbstractConnection, {useClass: PokerWebSocket});
		this.add(DevLogger);
		this.add(PokerControllersMap);
		this.add(PokerConnectionService);
		this.add(ConnectionService, {useExisting: PokerConnectionService});
	}

	// -----------------------------------------
	// PRIVATE METHODS
	// -----------------------------------------

}

