
import { ArrayBufferBuilder } from "../../../../utils/ArrayBufferBuilder";
import { BitsReader } from "../../../../utils/BitsReader";
import { SerializerUtils } from "../../../../utils/SerializerUtils";
import { VisibleCardData } from "../data/VisibleCardData";
import { UserCardPackData } from "../data/UserCardPackData";

import { UserCardPackDataSerializer } from "../serializers/UserCardPackDataSerializer";

import { OptimizedBinaryNumberSerializer } from "../../core/serializers/OptimizedBinaryNumberSerializer";



export class VisibleCardDataSerializer {
	public static serialize(buffer: ArrayBufferBuilder, data: VisibleCardData): void {
		UserCardPackDataSerializer.serialize(buffer, data.UserCardPack);
			OptimizedBinaryNumberSerializer.serialize( buffer, data.money );
			buffer.setUint8( data.winnerType );
			
	}

	public static deserialize(buffer: ArrayBufferBuilder, data: VisibleCardData): void {
		data.UserCardPack = new UserCardPackData(data); 
                        UserCardPackDataSerializer.deserialize(buffer, data.UserCardPack);
			data.money = OptimizedBinaryNumberSerializer.deserialize( buffer );
			data.winnerType = buffer.getUint8();
			
	}
}
