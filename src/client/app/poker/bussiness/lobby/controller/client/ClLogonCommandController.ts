import {AbstractClCommandController} from "../../../common/controller/AbstractClCommandController";
import {ConnectionService} from "../../../../connection/service/ConnectionService";
import {PokerLoginVO} from "../../../common/model/vo/PokerLoginVO";
import {ClLogonCommand} from "../../../../connection/protocol/generated/commands/ClLogonCommand";
import {HardwareInfoData} from "../../../../connection/protocol/generated/data/HardwareInfoData";
import {DevConsole} from "../../../../devTools/console/DevConsole";
import {Injectable} from "@angular/core";
import {ClLogonData} from "../../../../connection/protocol/generated/data/ClLogonData";
/**
 * Created by hivaga on 8/2/2016.
 */
@Injectable()
export class ClLogonCommandController extends AbstractClCommandController
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


	constructor(connection:ConnectionService)
	{
		super(connection);
	}


	// -----------------------------------------
	// PUBLIC METHODS
	// -----------------------------------------


	public execute(loginVO:PokerLoginVO):void
	{

		DevConsole.log("ClLogonCommandController.execute", loginVO);

		let cmd:ClLogonCommand = new ClLogonCommand();

		cmd.data = new ClLogonData();
		cmd.data.logonType = loginVO.type;
		cmd.data.isHardwareInfoAvailable = true;
		cmd.data.checkPlayMoneyMessage = false;

		cmd.data.hardwareInfo = new HardwareInfoData();
		cmd.data.hardwareInfo.GUIDs = "1";
		cmd.data.hardwareInfo.HDDIDsVect = new Array<string>();
		cmd.data.hardwareInfo.MACsVect = new Array<string>();
		cmd.data.username = loginVO.username;
		cmd.data.password = loginVO.password;
		cmd.data.passwordHashed = loginVO.isPasswordHashed;

		this.send(cmd);
	}

	// -----------------------------------------
	// PROTECTED METHODS
	// -----------------------------------------


	// -----------------------------------------
	// PRIVATE METHODS
	// -----------------------------------------


}
