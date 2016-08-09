import {AbstractController} from "../../common/controller/AbstractController";
import {PokerConnectionService} from "../../../connection/service/PokerConnectionService";
import {Injectable} from "@angular/core";
import {PokerControllersMap} from "../../common/controller/PokerControllersMap";
import {AbstractPokerCommand} from "../../../connection/protocol/core/commands/AbstractPokerCommand";
import {AbstractSrvCommandController} from "../../common/controller/AbstractSrvCommandController";
import {DevConsole} from "../../../devTools/console/DevConsole";
import {PokerConfigurationsModel} from "../../common/model/PokerConfigurationsModel";
import {PokerLobbyModel} from "../../common/model/PokerLobbyModel";
import {LobbyStatesEnum} from "../consts/LobbyStatesEnum";
/**
 * Created by hivaga on 8/2/2016.
 */
@Injectable()
export class LobbyPokerConnectionServiceController extends AbstractController
{
	// -----------------------------------------
	// STATIC PROPERTIES
	// -----------------------------------------


	// -----------------------------------------
	// PUBLIC PROPERTIES
	// -----------------------------------------


	// -----------------------------------------
	// PRIVATE PROPERTIES
	// -----------------------------------------


	// -----------------------------------------
	// CONSTRUCTOR
	// -----------------------------------------


	constructor(private connection:PokerConnectionService,
		private controllerMap:PokerControllersMap,
		private configurationsModel:PokerConfigurationsModel,
		private lobbyModel:PokerLobbyModel)
	{
		super();
	}


	// -----------------------------------------
	// PUBLIC METHODS
	// -----------------------------------------

	public execute():void
	{
		DevConsole.log("LobbyPokerConnectionServiceController.execute");
		this.connection.connect(this.configurationsModel.serverURL,
			this.configurationsModel.serverPort);
		this.connection.onData.add(this.newCommandHandler, this);
		this.lobbyModel.state = LobbyStatesEnum.CONNECTING;
	}

	// -----------------------------------------
	// PROTECTED METHODS
	// -----------------------------------------
	public newCommandHandler(command:AbstractPokerCommand):void
	{
		let controller:AbstractSrvCommandController = this.controllerMap.getControllerByCommand(command) as AbstractSrvCommandController;

		if(controller)
		{
			controller.execute(command);
		}
	}




	// -----------------------------------------
	// PRIVATE METHODS
	// -----------------------------------------

}
