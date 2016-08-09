import {LogItem} from "./logItems/LogItem";
import {ServerDataLogItem} from "./logItems/ServerDataLogItem";
import {ClientDataLogItem} from "./logItems/ClientDataLogItem";

/**
 * Created by gsemerdjiev on 20.7.2016 г..
 */
export class ExtendedJsonSerializer {
	protected reflectionMap:{[key:string]:{new():LogItem}};

	constructor() {
		this.reflectionMap = {};

		this.reflectionMap[LogItem.TYPE] = LogItem;
		this.reflectionMap[ServerDataLogItem.TYPE] = ServerDataLogItem;
		this.reflectionMap[ClientDataLogItem.TYPE] = ClientDataLogItem;
	}

	public serializeItem( data:LogItem ):string {
		let result = "{";
		let keys = Object.keys( data );

		for (let i = 0, l = keys.length; i < l; i++) {
			let key = keys[i];
			let value:any = (data as any)[key];

			if (value instanceof ArrayBuffer) {
				value = this.stingifyArrayBuffer(value);

			} else if (value instanceof Date) {
				value = this.stingifyDate(value);

			} else if (typeof value === "string") {
				value = `"${value}"`;
			}

			result +=`"${key}":${value}`;

			if (i < l - 1) {
				result += ",";
			}
		}

		result += "}";

		return result;
	}

	public deserializeItem( data:string ):LogItem {
		return undefined;
	}

	public serialize( data:LogItem[] ):string {
		let result = "[";

		for (let i = 0, l = data.length; i < l; i++) {
			result += this.serializeItem( data[i] );

			if (i < l - 1) {
				result += ",";
			}
		}

		result += "]";

		return result;
	}

	public deserialize( data:string ):LogItem[] {
		return undefined;
	}

	protected stingifyArrayBuffer(data:ArrayBuffer):string {
		let uintsArray = new Uint8Array(data);
		let result = `[${ uintsArray.join(",") }]`;

		return result;
	}

	protected stingifyDate(date:Date):string {
		let result = date.getTime().toString();

		return result;
	}
}
