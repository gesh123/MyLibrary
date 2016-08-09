import {ArrayBufferBuilder} from "../ArrayBufferBuilder";
import {LogItem} from "./LogItem";
import {ServerDataLogItem} from "./ServerDataLogItem";
import {ClientDataLogItem} from "./ClientDataLogItem";

/**
 * Created by gsemerdjiev on 15.7.2016 г..
 */
export class Logger {

	public log:LogItem[];

	constructor() {
		this.log = [];
	}

	public serverData(data:ArrayBufferBuilder, begin?:number, end?:number):void {
		let item = new ServerDataLogItem(data, begin, end);

		this.log.push(item);
	}

	public clientData(data:ArrayBufferBuilder, begin?:number, end?:number):void {
		let item = new ClientDataLogItem(data, begin, end);

		this.log.push(item);
	}

	public serialize():string {
		// TODO
		return "";
	}

	public deserialize(data:string):void {
		// TODO
	}
}
