import {ArrayBufferBuilder} from "../../../utils/ArrayBufferBuilder";
import {ArrayBufferLogItem} from "./ArrayBufferBuildeLogItem";
import {LogItem} from "./LogItem";

/**
 * Created by gsemerdjiev on 15.7.2016 г..
 */
export class ServerDataLogItem extends ArrayBufferLogItem {
	public static TYPE = "ServerDataLogItem";

	constructor(data?:ArrayBuffer | ArrayBufferBuilder, begin?:number, end?:number, timestamp?:Date, type:string = ServerDataLogItem.TYPE) {
		super(data, begin, end, timestamp, type);
	}
}
