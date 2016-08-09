import {AbstractSignalsBus} from "../../common/signals/AbstractSignalsBus";
import {Signal} from "../../../signals/Signal";
/**
 * Created by hivaga on 7/29/2016.
 */
export class LobbySignalsBus extends AbstractSignalsBus
{
	// -----------------------------------------
	// STATIC PROPERTIES
	// -----------------------------------------


	// -----------------------------------------
	// PUBLIC PROPERTIES
	// -----------------------------------------

	// OtherC ontrollers
	public onLobbyStart:Signal = new Signal();
	public onLobbyStartConnectionService:Signal = new Signal();

	// Client Controllers
	public onClLogon:Signal = new Signal();

	// Server Controllers
	public onSrvConnectGameOk:Signal = new Signal();
	public onSrvLogonOk:Signal = new Signal();
	public onSrvLogonError:Signal = new Signal();

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


	// -----------------------------------------
	// PROTECTED METHODS
	// -----------------------------------------


	// -----------------------------------------
	// PRIVATE METHODS
	// -----------------------------------------

}
