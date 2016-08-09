import {ConnectionService} from "./ConnectionService";
import {IPokerCommand} from "../protocol/core/commands/IPokerCommand";
import {DevConsole} from "../../devTools/console/DevConsole";
import {ClConnectGameCommand} from "../protocol/generated/commands/ClConnectGameCommand";
import {ClHandShakeCommand} from "../protocol/generated/commands/ClHandShakeCommand";
import {SrvHandShakeOKCommand} from "../protocol/generated/commands/SrvHandShakeOKCommand";
import {SrvConnectGameOKCommand} from "../protocol/generated/commands/SrvConnectGameOKCommand";
import {ClHandShakeData} from "../protocol/generated/data/ClHandShakeData";
import {ClConnectGameData} from "../protocol/generated/data/ClConnectGameData";
import {BinaryNetworkID} from "../protocol/core/data/BinaryNetworkID";
import {Injectable} from "@angular/core";
import {PokerConfigurationsModel} from "../../bussiness/common/model/PokerConfigurationsModel";
import {DevLogger} from "../../devTools/logger/DevLogger";
import {AbstractConnection} from "../AbstractConnection";

/**
 * Created by hivaga on 7/14/2016.
 */
@Injectable()
export class PokerConnectionService extends ConnectionService
{

	// -----------------------------------------
	// STATIC PROPERTIES
	// -----------------------------------------

	private static HANDSHAKE_NOT_INITIALIZED:number = 0;
	private static HANDSHAKE_IN_PROGRESS:number = 1;
	private static HANSHAKE_COMPLETE:number = 2;


	// -----------------------------------------
	// PUBLIC PROPERTIES
	// -----------------------------------------


	// -----------------------------------------
	// PROTECTED PROPERTIES
	// -----------------------------------------


	// -----------------------------------------
	// PRIVATE PROPERTIES
	// -----------------------------------------

	private handshakeState:number = PokerConnectionService.HANDSHAKE_NOT_INITIALIZED;


	// -----------------------------------------
	// CONSTRUCTOR
	// -----------------------------------------


	constructor(configurationModel:PokerConfigurationsModel, logger:DevLogger, connection:AbstractConnection)
	{
		super(logger);

		this.connection = connection;

		//this.connection = new DumpReplaySocket();
		//this.connection = new FlashDumpReplaySocket();

	}


	// -----------------------------------------
	// PUBLIC METHODS
	// -----------------------------------------

	public connect(url:string, port:number):void
	{
		super.connect(url, port);
	}

	// -----------------------------------------
	// PROTECTED METHODS
	// -----------------------------------------

	protected socketStateChangeHandler(value:number):void
	{
		super.socketStateChangeHandler(value);
	}

	protected newCommandRecieved(command:IPokerCommand):void
	{
		if (this.handshakeState === PokerConnectionService.HANSHAKE_COMPLETE)
		{
			super.newCommandRecieved(command);
		} else
		{
			this.validateHandshakeState(command);
		}
	}

	protected validateConnectionServiceState():void
	{
		switch (this.connection.state)
		{
			// here we need to make the handshake before we can start using the PokerConnectionService
			case WebSocket.OPEN:
			{
				if (this.handshakeState == PokerConnectionService.HANSHAKE_COMPLETE)
				{
					super.validateConnectionServiceState();
				} else
				{
					this.initServerHandshake();
				}
				break;
			}

			case WebSocket.CONNECTING:
			case WebSocket.CLOSING:
			case WebSocket.CLOSED:
			{
				super.validateConnectionServiceState();
				break;
			}

			default:
			{
				super.validateConnectionServiceState();
				break;
			}

		}
	}


	// -----------------------------------------
	// PRIVATE METHODS
	// -----------------------------------------

	private initServerHandshake():void
	{
		this.handshakeState = PokerConnectionService.HANDSHAKE_IN_PROGRESS;

		let cmd:ClHandShakeCommand = new ClHandShakeCommand();
		cmd.data = new ClHandShakeData();
		cmd.data.protocolVersion = 2018;


		this.sendCommand(cmd);
	}

	private validateHandshakeState(command:IPokerCommand):void
	{

		switch (command.uid)
		{

			case SrvHandShakeOKCommand.UID:
			{
				this.handshakeState = PokerConnectionService.HANDSHAKE_IN_PROGRESS;

				let cmd:ClConnectGameCommand = new ClConnectGameCommand();

				cmd.data = new ClConnectGameData();
				cmd.data.langID = 2057;
				cmd.data.identificationType = 0;
				cmd.data.externalIP = "192.168.0.8";
				cmd.data.localIP = "0.0.0.0";
				cmd.data.gameNetworkIDVO = new BinaryNetworkID();
				cmd.data.gameNetworkIDVO.id = 0;
				cmd.data.gameNetworkIDVO.networkID = 0;
				cmd.data.franchiseID = 56601;

				this.sendCommand(cmd);

				break;
			}

			case SrvConnectGameOKCommand.UID:
			{
				DevConsole.log("PokerConnectionService.validateHandshakeState", "Server Handshake Complete !");
				this.handshakeState = PokerConnectionService.HANSHAKE_COMPLETE;
				this.validateConnectionServiceState();
				super.newCommandRecieved(command);
				break;
			}

			default:
			{

				DevConsole.error("PokerConnectionService.validateHandshakeState",
					"Error handshake with server not established !!! Recieved command name:", command.name,
					"pid:", command.pid,
					"cid:", command.cid);

				// we don't know what to do at this point !
				super.newCommandRecieved(command);
				break;
			}

		}

	}

}
