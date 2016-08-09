import {AbstractConnection} from "../AbstractConnection";
import {ServerDataLogItem} from "../../devTools/logger/logItems/ServerDataLogItem";
import {Signal} from "../../signals/Signal";
import {SignalOne} from "../../signals/SignalOne";
import {PokerWebSocket} from "./PokerWebSocket";

/**
 * Created by hivaga on 7/14/2016.
 */
export class DumpReplaySocket implements AbstractConnection
{
	public connectionURL:string;

	public onData = new SignalOne<ArrayBuffer>();
	public onStateChange = new SignalOne<number>();
	public onClosing = new Signal();
	public onClosed = new Signal();
	public onConnecting = new Signal();
	public onConnected = new Signal();
	public onError = new SignalOne<ErrorEvent>();

	protected commandsFile = "./assets/dump/file.json";


	constructor()
	{

	}

	public connect(url:string, port?:number):void
	{
		if (this.onConnecting.dispatch())
		{
			this.loadCommandJson(this.commandsFile);
		}
	}

	public disconnect():void
	{
	}

	public send(data:any):void
	{
	}

	public destroy():void
	{
	}

	public get state():number
	{
		return PokerWebSocket.STATE_OPEN;
	}


	protected loadCommandJson(json:string):void
	{
		let request = new XMLHttpRequest();
		request.onload = (e:Event) => this.onJsonLoaded(e);
		request.onerror = (e:Event) => this.onJsonError(e);
		request.open("get", json, true);
		request.send();
	}

	protected onJsonLoaded(e:Event)
	{
		this.onConnected.dispatch();

		let request = e.target as XMLHttpRequest;
		let data:ILogItemJson[] = JSON.parse(request.responseText);

		this.executeCommands(data);
	}

	protected onJsonError(e:Event)
	{
		this.onClosed.dispatch();
	}

	protected executeCommands(jsonList:ILogItemJson[]):void
	{
		for (let i = 0, l = jsonList.length; i < l; i++)
		{
			let json:ILogItemJson = jsonList[i];

			this.executeCommand(json);
		}
	}

	protected executeCommand(json:ILogItemJson):void
	{

		if (json.type == ServerDataLogItem.TYPE)
		{
			let bytes:ArrayBuffer = this.getArrayBufferFromBytesArray(json.data);
			let item = new ServerDataLogItem(bytes);

			item.timestamp = new Date(json.date);

			this.onData.dispatch(item.data);
		}
	}

	protected getArrayBufferFromBytesArray(bytes:number[]):ArrayBuffer
	{
		let result = new ArrayBuffer(bytes.length);
		let view = new Uint8Array(result);

		for (let i = 0, l = bytes.length; i < l; i++)
		{
			view[i] = bytes[i];
		}

		return result;
	}

}

interface ILogItemJson
{
	date:number;
	type:string;
	data?:number[];
}
