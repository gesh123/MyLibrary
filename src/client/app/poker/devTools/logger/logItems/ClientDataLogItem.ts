import {ArrayBufferBuilder} from "../../../utils/ArrayBufferBuilder";
import {ArrayBufferLogItem} from "./ArrayBufferBuildeLogItem";

/**
 * Created by gsemerdjiev on 15.7.2016 г..
 */
export class ClientDataLogItem extends ArrayBufferLogItem {
	public static TYPE = "ClientDataLogItem";

	constructor(data?:ArrayBuffer | ArrayBufferBuilder, begin?:number, end?:number, timestamp?:Date, type:string = ClientDataLogItem.TYPE) {
		super(data, begin, end, timestamp, type);
	}
}
