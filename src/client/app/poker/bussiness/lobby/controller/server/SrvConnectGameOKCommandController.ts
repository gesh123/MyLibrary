import {Injectable} from "@angular/core";
import {DevConsole} from "../../../../devTools/console/DevConsole";
import {AbstractPokerCommand} from "../../../../connection/protocol/core/commands/AbstractPokerCommand";
import {PokerLobbyModel} from "../../../common/model/PokerLobbyModel";
import {LobbySignalsBus} from "../../signals/LobbySignalsBus";
import {AbstractSrvCommandController} from "../../../common/controller/AbstractSrvCommandController";
import {LobbyStatesEnum} from "../../consts/LobbyStatesEnum";
import {PokerLoginVO} from "../../../common/model/vo/PokerLoginVO";

/**
 * Created by hivaga on 01.8.2016 г..
 */
@Injectable()
export class SrvConnectGameOKCommandController extends AbstractSrvCommandController
{

	constructor(public model:PokerLobbyModel,
		public signlas:LobbySignalsBus)
	{

		super();
	}


	public execute(command:AbstractPokerCommand):void
	{

		DevConsole.log("SrvConnectGameOKCommandController.execute", command);

		this.model.state = LobbyStatesEnum.CONNECTED;

		this.signlas.onSrvConnectGameOk.dispatch();

		//this.signlas.onClLogon.dispatch(new PokerLoginVO("12b", "1", false));

	}
}
