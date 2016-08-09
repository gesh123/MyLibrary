import {AbstractController} from "../../common/controller/AbstractController";
import {DevConsole} from "../../../devTools/console/DevConsole";
import {PokerConnectionService} from "../../../connection/service/PokerConnectionService";
import {PokerConfigurationsModel} from "../../common/model/PokerConfigurationsModel";
import {Injectable} from "@angular/core";
import {ConnectionService} from "../../../connection/service/ConnectionService";
import {LobbySignalsBus} from "../signals/LobbySignalsBus";
/**
 * Created by hivaga on 8/1/2016.
 */
@Injectable()
export class LobbyOnLobbyStartController extends AbstractController
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


	constructor(private signalsBus:LobbySignalsBus)
	{
		super();
	}


	// -----------------------------------------
	// PUBLIC METHODS
	// -----------------------------------------
	public execute():void
	{
		DevConsole.log("LobbyOnLobbyStartController.execute");

		this.signalsBus.onLobbyStartConnectionService.dispatch();
	}



	// -----------------------------------------
	// PROTECTED METHODS
	// -----------------------------------------


	// -----------------------------------------
	// PRIVATE METHODS
	// -----------------------------------------

}
