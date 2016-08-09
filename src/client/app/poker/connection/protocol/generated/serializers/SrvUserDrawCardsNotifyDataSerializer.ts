
import { ArrayBufferBuilder } from "../../../../utils/ArrayBufferBuilder";
import { BitsReader } from "../../../../utils/BitsReader";
import { SerializerUtils } from "../../../../utils/SerializerUtils";
import { SrvUserDrawCardsNotifyData } from "../data/SrvUserDrawCardsNotifyData";


export class SrvUserDrawCardsNotifyDataSerializer {
	public static serialize(buffer: ArrayBufferBuilder, data: SrvUserDrawCardsNotifyData): void {
		buffer.setUint8( data.seatID );
			buffer.setUint8( data.cardsCount );
			
	}

	public static deserialize(buffer: ArrayBufferBuilder, data: SrvUserDrawCardsNotifyData): void {
		data.seatID = buffer.getUint8();
			data.cardsCount = buffer.getUint8();
			
	}
}
