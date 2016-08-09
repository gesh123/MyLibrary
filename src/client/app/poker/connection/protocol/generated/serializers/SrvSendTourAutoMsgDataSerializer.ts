
import { ArrayBufferBuilder } from "../../../../utils/ArrayBufferBuilder";
import { BitsReader } from "../../../../utils/BitsReader";
import { SerializerUtils } from "../../../../utils/SerializerUtils";
import { SrvSendTourAutoMsgData } from "../data/SrvSendTourAutoMsgData";
import { PokerTimeData } from "../data/PokerTimeData";

import { BinaryNetworkID } from "../../core/data/BinaryNetworkID";

import { PokerTimeDataSerializer } from "../serializers/PokerTimeDataSerializer";

import { BinaryNetworkIDSerializer } from "../../core/serializers/BinaryNetworkIDSerializer";



export class SrvSendTourAutoMsgDataSerializer {
	public static serialize(buffer: ArrayBufferBuilder, data: SrvSendTourAutoMsgData): void {
		buffer.setUint16( data.messageID );
			
            if (data.messageID > 0){
                buffer.setUTF16StringNullTerminated( data.tournamentName );
			PokerTimeDataSerializer.serialize(buffer, data.eventTime);
			
            }
			
            if (data.messageID == 0){
                buffer.setUTF16StringNullTerminated( data.customMessage );
			
            }
			BinaryNetworkIDSerializer.serialize(buffer, data.tourNetworkIDVO);
			buffer.setUint8( data.tourStatus );
			buffer.setUint8( data.networkID );
			
	}

	public static deserialize(buffer: ArrayBufferBuilder, data: SrvSendTourAutoMsgData): void {
		data.messageID = buffer.getUint16();
			
            if (data.messageID > 0){
                data.tournamentName = buffer.getUTF16StringNullTerminated();
			data.eventTime = new PokerTimeData(data); 
                        PokerTimeDataSerializer.deserialize(buffer, data.eventTime);
			
            }
			
            if (data.messageID == 0){
                data.customMessage = buffer.getUTF16StringNullTerminated();
			
            }
			data.tourNetworkIDVO = new BinaryNetworkID(data); 
                        BinaryNetworkIDSerializer.deserialize(buffer, data.tourNetworkIDVO);
			data.tourStatus = buffer.getUint8();
			data.networkID = buffer.getUint8();
			
	}
}
