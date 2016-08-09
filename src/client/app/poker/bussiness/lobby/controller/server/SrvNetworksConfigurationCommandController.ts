import {Injectable} from "@angular/core";
import {SrvNetworksConfigurationCommand} from "../../../../connection/protocol/generated/commands/SrvNetworksConfigurationCommand";
import {DevConsole} from "../../../../devTools/console/DevConsole";
import {AbstractSrvCommandController} from "../../../common/controller/AbstractSrvCommandController";

/**
 * Created by hivaga on 01.8.2016 г..
 */
@Injectable()
export class SrvNetworksConfigurationCommandController extends AbstractSrvCommandController
{

	constructor()
	{
		super();
	}

	public execute(command:SrvNetworksConfigurationCommand):void
	{
		//this.model.netConfig = this.model.netConfig.concat(command.data.networkConfigVect);

		DevConsole.log("SrvNetworksConfigurationCommandController.execute", command);


		// let w:any = window;
		//
		// if (w.lobbymodel != this.model)
		// {
		// 	DevConsole.log(`${w.lobbymodel} != ${this.model}`);
		// 	w.lobbymodel = this.model;
		// } else
		// {
		// 	DevConsole.log(`${w.lobbymodel} == ${this.model}`);
		// 	DevConsole.log(w.lobbymodel === this.model);
		// }
	}
}
