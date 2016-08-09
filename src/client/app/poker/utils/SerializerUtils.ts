
import {AbstractData} from "../connection/protocol/core/data/AbstractData";

export class SerializerUtils {
    /*public static getParantDataValue(args: IArguments, valueName: string): any {
		var newArgs:IArguments = args.callee.caller.arguments;
		var data: Object & any = newArgs[1];

		if (!newArgs || !data) {
			return null;
		} else if (data.hasOwnProperty(valueName)) {
			return data[valueName];
		} else {
			return SerializerUtils.getParantDataValue(newArgs, valueName);
		}
	}*/

	public static getParantDataValue(data: AbstractData, valueName: string): any {
		do {
			data = data.getParent();

			if (data.hasOwnProperty(valueName)) {
				return data[valueName];
			}
		} while(data);

	}
}
