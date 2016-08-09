
import { ArrayBufferBuilder } from "../../../../utils/ArrayBufferBuilder";
import { BitsReader } from "../../../../utils/BitsReader";
import { SerializerUtils } from "../../../../utils/SerializerUtils";
import { ClGetUpdateInfoData } from "../data/ClGetUpdateInfoData";
import { BinaryNetworkID } from "../../core/data/BinaryNetworkID";

import { BinaryNetworkIDSerializer } from "../../core/serializers/BinaryNetworkIDSerializer";



export class ClGetUpdateInfoDataSerializer {
	public static serialize(buffer: ArrayBufferBuilder, data: ClGetUpdateInfoData): void {
		buffer.setUint32( data.tablesVersion );
			buffer.setUint32( data.playersVersion );
			BinaryNetworkIDSerializer.serialize(buffer, data.tourNetworkIDVO);
			buffer.setUint32( data.prizeVersion );
			buffer.setUint32( data.incomesVersion );
			buffer.setUint16( data.minPlayers );
			buffer.setUint8( data.lateRegistrationLevel );
			buffer.setUint16( data.remainingUnits );
			buffer.setUint32( data.timesVersion );
			buffer.setUint16( data.winnerPlacesCount );
			buffer.setUint8( data.clientTourStatus );
			buffer.setUint32( data.longCommentVer );
			buffer.setUint32( data.levelVersion );
			buffer.setUint8( data.useSyncBreak ? 1 : 0 );
			
	}

	public static deserialize(buffer: ArrayBufferBuilder, data: ClGetUpdateInfoData): void {
		data.tablesVersion = buffer.getUint32();
			data.playersVersion = buffer.getUint32();
			data.tourNetworkIDVO = new BinaryNetworkID(data); 
                        BinaryNetworkIDSerializer.deserialize(buffer, data.tourNetworkIDVO);
			data.prizeVersion = buffer.getUint32();
			data.incomesVersion = buffer.getUint32();
			data.minPlayers = buffer.getUint16();
			data.lateRegistrationLevel = buffer.getUint8();
			data.remainingUnits = buffer.getUint16();
			data.timesVersion = buffer.getUint32();
			data.winnerPlacesCount = buffer.getUint16();
			data.clientTourStatus = buffer.getUint8();
			data.longCommentVer = buffer.getUint32();
			data.levelVersion = buffer.getUint32();
			data.useSyncBreak = buffer.getUint8() != 0;
			
	}
}
