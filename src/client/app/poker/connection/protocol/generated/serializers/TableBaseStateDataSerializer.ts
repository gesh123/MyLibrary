
import { ArrayBufferBuilder } from "../../../../utils/ArrayBufferBuilder";
import { BitsReader } from "../../../../utils/BitsReader";
import { SerializerUtils } from "../../../../utils/SerializerUtils";
import { TableBaseStateData } from "../data/TableBaseStateData";
import { PotInfoData } from "../data/PotInfoData";

import { BinaryCard } from "../../core/data/BinaryCard";

import { PotInfoDataSerializer } from "../serializers/PotInfoDataSerializer";

import { OptimizedBinaryNumberSerializer } from "../../core/serializers/OptimizedBinaryNumberSerializer";
import { BinaryCardSerializer } from "../../core/serializers/BinaryCardSerializer";



export class TableBaseStateDataSerializer {
	public static serialize(buffer: ArrayBufferBuilder, data: TableBaseStateData): void {
		PotInfoDataSerializer.serialize(buffer, data.potInfo);
			buffer.setUint8( data.dealer );
			buffer.setUint8( data.activePlayer );
			OptimizedBinaryNumberSerializer.serialize( buffer, data.rake );
			OptimizedBinaryNumberSerializer.serialize( buffer, data.jackpotFee );
			
            for (let i = 0, l = data.potCards.length , t = buffer.setUint8( l ); i < l; i++){
                let temp = data.potCards[i];
				BinaryCardSerializer.serialize(buffer, temp);
            }
			buffer.setUint8( data.gameRound );
			
	}

	public static deserialize(buffer: ArrayBufferBuilder, data: TableBaseStateData): void {
		data.potInfo = new PotInfoData(data); 
                        PotInfoDataSerializer.deserialize(buffer, data.potInfo);
			data.dealer = buffer.getUint8();
			data.activePlayer = buffer.getUint8();
			data.rake = OptimizedBinaryNumberSerializer.deserialize( buffer );
			data.jackpotFee = OptimizedBinaryNumberSerializer.deserialize( buffer );
			
            data.potCards = []; 
            for (let i = 0, l = buffer.getUint8(); i < l; i++){
                let temp = new BinaryCard(data);
                BinaryCardSerializer.deserialize(buffer, temp);
                data.potCards.push( temp );
            }
			data.gameRound = buffer.getUint8();
			
	}
}
