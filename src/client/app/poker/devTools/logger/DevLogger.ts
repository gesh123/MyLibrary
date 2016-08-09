import {ArrayBufferBuilder} from "../../utils/ArrayBufferBuilder";
import {LogItem} from "./logItems/LogItem";
import {ServerDataLogItem} from "./logItems/ServerDataLogItem";
import {ClientDataLogItem} from "./logItems/ClientDataLogItem";
import {ExtendedJsonSerializer} from "./ExtendedJsonSerializer";
import {Injectable} from "@angular/core";

/**
 * Created by gsemerdjiev on 15.7.2016 г..
 */
export class DevLogger {

	public log:LogItem[];

	protected serializer:ExtendedJsonSerializer;

	constructor() {
		this.log = [];
		this.serializer = new ExtendedJsonSerializer();
	}

	public serverData(data:ArrayBuffer | ArrayBufferBuilder, begin?:number, end?:number):void {
		let item = new ServerDataLogItem(data, begin, end);

		this.log.push(item);
	}

	public clientData(data:ArrayBuffer | ArrayBufferBuilder, begin?:number, end?:number):void {
		let item = new ClientDataLogItem(data, begin, end);

		this.log.push(item);
	}

	public serialize():string {
		return this.serializer.serialize(this.log);
	}

	public deserialize(data:string):void {
		this.log = this.serializer.deserialize(data);
	}
}
