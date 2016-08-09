import {ArrayBufferBuilder} from "../../../../utils/ArrayBufferBuilder";
import {BinaryNetworkID} from "../Data/BinaryNetworkID";

export class BinaryNetworkIDSerializer {
	public static serialize(buffer: ArrayBufferBuilder, data: BinaryNetworkID): void {

		if (data.id == Consts.INVALID_NETWORK_ID) {
			buffer.setUint32(data.id);

		} else if (data.id <= Consts.OPTIMIZED_MAX_ID && data.networkID <= Consts.OPTIMIZED_MAX_NETWORK_ID) {
			var encoded: number = Consts.OPTIMIZED_VERSION_BIT | (data.networkID << Consts.OPTIMIZED_NETWORK_SHIFT) | data.id;
			buffer.setUint32(encoded);

		} else {
			buffer.setUint32(data.id);
			buffer.setUint8(data.networkID);
		}
	}

	public static deserialize(buffer: ArrayBufferBuilder, data: BinaryNetworkID): void {
		var encoded: number = buffer.getUint32();

		if (encoded & Consts.OPTIMIZED_VERSION_BIT) {
			data.id = encoded & Consts.OPTIMIZED_ID_MASK;
			data.networkID = (encoded & Consts.OPTIMIZED_NETWORK_MASK) >> Consts.OPTIMIZED_NETWORK_SHIFT;

		} else {
			data.id = encoded & Consts.NOT_OPTIMIZED_ID_MASK;

			if (data.id == Consts.INVALID_NETWORK_ID) {
				data.networkID = Consts.INVALID_NETWORK_ID;
			} else {
				data.networkID = buffer.getUint8();
			}
		}
		
	}
}

const enum Consts {
	INVALID_ID = 0,
	INVALID_NETWORK_ID = 0,
	MAX_NETWORK_ID = 127,
	OPTIMIZED_VERSION_BIT = 1 << 31,
	OPTIMIZED_VERSION_MASK = OPTIMIZED_VERSION_BIT,
	OPTIMIZED_NETWORK_SHIFT = 27,
	OPTIMIZED_MAX_NETWORK_ID = 15,
	OPTIMIZED_NETWORK_MASK = OPTIMIZED_MAX_NETWORK_ID << OPTIMIZED_NETWORK_SHIFT,
	OPTIMIZED_MAX_ID = ~(OPTIMIZED_VERSION_MASK | OPTIMIZED_NETWORK_MASK),
	OPTIMIZED_ID_MASK = OPTIMIZED_MAX_ID,
	NOT_OPTIMIZED_ID_MASK = ~(OPTIMIZED_VERSION_MASK),
	NOT_OPTIMIZED_MAX_ID = NOT_OPTIMIZED_ID_MASK
}
