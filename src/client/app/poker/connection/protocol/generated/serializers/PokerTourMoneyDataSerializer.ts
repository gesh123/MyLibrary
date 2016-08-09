
import { ArrayBufferBuilder } from "../../../../utils/ArrayBufferBuilder";
import { BitsReader } from "../../../../utils/BitsReader";
import { SerializerUtils } from "../../../../utils/SerializerUtils";
import { PokerTourMoneyData } from "../data/PokerTourMoneyData";
import { PokerTournamentMoneyTypeData } from "../data/PokerTournamentMoneyTypeData";
import { PokerFractionData } from "../data/PokerFractionData";

import { BinaryNetworkID } from "../../core/data/BinaryNetworkID";

import { PokerTournamentMoneyTypeDataSerializer } from "../serializers/PokerTournamentMoneyTypeDataSerializer";
import { PokerFractionDataSerializer } from "../serializers/PokerFractionDataSerializer";

import { BinaryNetworkIDSerializer } from "../../core/serializers/BinaryNetworkIDSerializer";
import { OptimizedBinaryNumberSerializer } from "../../core/serializers/OptimizedBinaryNumberSerializer";



export class PokerTourMoneyDataSerializer {
	public static serialize(buffer: ArrayBufferBuilder, data: PokerTourMoneyData): void {
		PokerTournamentMoneyTypeDataSerializer.serialize(buffer, data.buyIn);
			PokerTournamentMoneyTypeDataSerializer.serialize(buffer, data.fee);
			PokerTournamentMoneyTypeDataSerializer.serialize(buffer, data.totalInAccount);
			BinaryNetworkIDSerializer.serialize(buffer, data.tourNetworkIDVO);
			PokerFractionDataSerializer.serialize(buffer, data.moneyTypeFractionObject);
			buffer.setUint8( data.allowTBConv ? 1 : 0 );
			buffer.setUint8( data.isExternalCurrency ? 1 : 0 );
			
            if (data.isExternalCurrency == true){
                PokerFractionDataSerializer.serialize(buffer, data.moneyTypeFractionObject);
			buffer.setUint8( data.currencyType );
			OptimizedBinaryNumberSerializer.serialize( buffer, data.buyInInPlayersCurrency );
			
            }
			
	}

	public static deserialize(buffer: ArrayBufferBuilder, data: PokerTourMoneyData): void {
		data.buyIn = new PokerTournamentMoneyTypeData(data); 
                        PokerTournamentMoneyTypeDataSerializer.deserialize(buffer, data.buyIn);
			data.fee = new PokerTournamentMoneyTypeData(data); 
                        PokerTournamentMoneyTypeDataSerializer.deserialize(buffer, data.fee);
			data.totalInAccount = new PokerTournamentMoneyTypeData(data); 
                        PokerTournamentMoneyTypeDataSerializer.deserialize(buffer, data.totalInAccount);
			data.tourNetworkIDVO = new BinaryNetworkID(data); 
                        BinaryNetworkIDSerializer.deserialize(buffer, data.tourNetworkIDVO);
			data.moneyTypeFractionObject = new PokerFractionData(data); 
                        PokerFractionDataSerializer.deserialize(buffer, data.moneyTypeFractionObject);
			data.allowTBConv = buffer.getUint8() != 0;
			data.isExternalCurrency = buffer.getUint8() != 0;
			
            if (data.isExternalCurrency == true){
                data.moneyTypeFractionObject = new PokerFractionData(data); 
                        PokerFractionDataSerializer.deserialize(buffer, data.moneyTypeFractionObject);
			data.currencyType = buffer.getUint8();
			data.buyInInPlayersCurrency = OptimizedBinaryNumberSerializer.deserialize( buffer );
			
            }
			
	}
}
