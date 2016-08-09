import {Injectable} from "@angular/core";
import {AbstractSrvCommandController} from "../../../common/controller/AbstractSrvCommandController";
import {SrvLogonOkCommand} from "../../../../connection/protocol/generated/commands/SrvLogonOkCommand";
import {PokerUserModel} from "../../../common/model/PokerUserModel";
import {PokerLobbyModel} from "../../../common/model/PokerLobbyModel";
import {LobbySignalsBus} from "../../signals/LobbySignalsBus";
import {DevConsole} from "../../../../devTools/console/DevConsole";
/**
 * Created by hivaga on 8/2/2016.
 */
@Injectable()
export class SrvLogonOkCommandController extends AbstractSrvCommandController
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


	constructor(private userModel:PokerUserModel,
		private lobbyModel:PokerLobbyModel,
		private signalsBus:LobbySignalsBus)
	{
		super();
	}


	// -----------------------------------------
	// PUBLIC METHODS
	// -----------------------------------------


	public execute(command:SrvLogonOkCommand):void
	{
		DevConsole.log("SrvLogonOkCommandController.execute");

		this.userModel.isLogged = true;
		this.signalsBus.onSrvLogonOk.dispatch(command.data);
	}

	// -----------------------------------------
	// PROTECTED METHODS
	// -----------------------------------------


	// -----------------------------------------
	// PRIVATE METHODS
	// -----------------------------------------

}
