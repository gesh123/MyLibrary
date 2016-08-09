import {AbstractConnectionService} from "./AbstractConnectionService";
import {AbstractConnection} from "../AbstractConnection";
import {ArrayBufferBuilder} from "../../Utils/ArrayBufferBuilder";
import {PokerWebSocket} from "../socket/PokerWebSocket";
import {PokerCommandsSerializer} from "../protocol/core/serializers/PokerCommandSerializer";
import {IPokerCommand} from "../protocol/core/commands/IPokerCommand";
import {AbstractPokerCommand} from "../protocol/core/commands/AbstractPokerCommand";
import {DevLogger} from "../../devTools/logger/DevLogger";
import {DevConsole} from "../../devTools/console/DevConsole";
import {PokerFailedCommand} from "../protocol/core/commands/FailedCommand";
import {SignalOne} from "../../signals/SignalOne";
import {Signal} from "../../signals/Signal";
import {Injectable} from "@angular/core";

/**
 * Created by hivaga on 7/14/2016.
 */
@Injectable()
export class ConnectionService implements AbstractConnectionService
{

	// -----------------------------------------
	// PUBLIC PROPERTIES
	// -----------------------------------------

	public static STATE_NOT_INITIALIZED:number = PokerWebSocket.STATE_NOT_INITIALIZED;
	public static STATE_CLOSING:number = PokerWebSocket.STATE_CLOSING;
	public static STATE_CLOSE:number = PokerWebSocket.STATE_CLOSED;
	public static STATE_CONNECTED:number = PokerWebSocket.STATE_OPEN;
	public static STATE_CONNECTING:number = PokerWebSocket.STATE_CONNECTING;

	public onData = new SignalOne<AbstractPokerCommand>();
	public onStateChange = new SignalOne<number>();
	public onClosing = new Signal();
	public onClosed = new Signal();
	public onConnecting = new Signal();
	public onConnected = new Signal();
	public onError = new SignalOne<ErrorEvent>();


	// -----------------------------------------
	// PROTECTED PROPERTIES
	// -----------------------------------------

	protected connection:AbstractConnection;
	protected commandSerializer:PokerCommandsSerializer;
	protected logger:DevLogger;


	// -----------------------------------------
	// PRIVATE PROPERTIES
	// -----------------------------------------

	private queue:Array<any> = new Array<any>();
	private _state:number = ConnectionService.STATE_NOT_INITIALIZED;


	// -----------------------------------------
	// CONSTRUCTOR
	// -----------------------------------------


	constructor(logger:DevLogger)
	{
		DevConsole.log("ConnectionService.constructor", "");

		this.connection = new PokerWebSocket();
		this.commandSerializer = new PokerCommandsSerializer();
		this.logger = logger;

	}

	// -----------------------------------------
	// PUBLIC METHODS
	// -----------------------------------------

	public get state():number
	{
		return this._state;
	}

	public set state(value:number)
	{
		if (value == this._state)
		{
			return;
		}

		this._state = value;

		this.onStateChange.dispatch(value);
	}

	public get connectionURL():string
	{
		return this.connection.connectionURL;
	}

	public connect(url:string, port:number):void
	{
		this.init();
		this.connection.connect(url, port);
	}

	public disconnect():void
	{

		// nothing to do the connection service was never used !
		if (this.state == ConnectionService.STATE_NOT_INITIALIZED)
		{
			return;
		}

	}

	public send(data:ArrayBufferBuilder):void
	{
		let arrayBuffer:ArrayBuffer = data.getBufferSlice();
		this.connection.send(arrayBuffer);
	}

	public sendCommand(command:AbstractPokerCommand):void
	{
		let buffer:ArrayBufferBuilder = new ArrayBufferBuilder(100, true);
		this.commandSerializer.serialize(buffer, command);
		DevConsole.receivedCommand("ConnectionService.sendCommand", command);
		this.send(buffer);

	}

	public destroy():void
	{
		this.queue.length = 0;
	}


	// -----------------------------------------
	// PROTECTED METHODS
	// -----------------------------------------

	protected init():void
	{
		this.connection.onData.add(this.recieveDataHandler, this);
		this.connection.onStateChange.add(this.socketStateChangeHandler, this);
	}

	protected recieveDataHandler(data:ArrayBuffer):void
	{
		this.logger.serverData(data);

		let buffer:ArrayBufferBuilder = new ArrayBufferBuilder(data, true);

		while (buffer.pointer < buffer.size)
		{
			let startPointer = buffer.pointer;
			let command:IPokerCommand = this.commandSerializer.deserialize(buffer);

			if (command instanceof PokerFailedCommand)
			{
				DevConsole.error(`Deserialization failed`, command);
				continue;
			}

			DevConsole.receivedCommand("ConnectionService.recieveDataHandler", command);

			if (startPointer + command.header.size != buffer.pointer)
			{
				DevConsole.warning(`Command ${command.name} was not read correctly. ${buffer.pointer - startPointer} were read instead of ${command.header.size}`);
				buffer.pointer = startPointer + command.header.size;
			}

			this.newCommandRecieved(command);
		}

	}

	protected socketStateChangeHandler(value:number):void
	{
		this.validateConnectionServiceState();
	}

	protected newCommandRecieved(command:IPokerCommand):void
	{
		this.onData.dispatch(command as AbstractPokerCommand);
	}

	protected validateConnectionServiceState():void
	{

		switch (this.connection.state)
		{

			case WebSocket.CONNECTING:
			{
				this.state = ConnectionService.STATE_CONNECTING;
				this.onConnecting.dispatch();
				break;
			}

			case WebSocket.OPEN:
			{
				DevConsole.log("ConnectionService.validateConnectionServiceState", "Connection Established and ready for use !");
				this.state = ConnectionService.STATE_CONNECTED;
				this.onConnected.dispatch();
				break;
			}

			case WebSocket.CLOSING:
			{
				this.state = ConnectionService.STATE_CLOSING;
				this.onClosing.dispatch();
				break;
			}

			case WebSocket.CLOSED:
			{
				this.state = ConnectionService.STATE_CLOSE;
				this.onClosed.dispatch();
				break;
			}

			default:
			{
				DevConsole.error("ConnectionService.validateConnectionServiceState",
					"Not handled connection.state:", this.connection.state);
				break;
			}

		}
	}


	// -----------------------------------------
	// PRIVATE METHODS
	// -----------------------------------------


}
