
import { ArrayBufferBuilder } from "../../../../utils/ArrayBufferBuilder";
import { BitsReader } from "../../../../utils/BitsReader";
import { SerializerUtils } from "../../../../utils/SerializerUtils";
import { SrvServerCountersInfoData } from "../data/SrvServerCountersInfoData";


export class SrvServerCountersInfoDataSerializer {
	public static serialize(buffer: ArrayBufferBuilder, data: SrvServerCountersInfoData): void {
		var bitsReader = new BitsReader( buffer );
		
			bitsReader.setBit( data.playersOnActiveTablesIn2Bytes );
			bitsReader.setBit( data.empty );
			bitsReader.setBit( data.activeTablesIn2Bytes );
			bitsReader.setBit( data.totalPlayersIn2Bytes );
			
            if (data.activeTablesIn2Bytes == true){
                buffer.setUint16( data.activeTables );
			
            }
			
            if (data.activeTablesIn2Bytes == false){
                buffer.setUint8( data.activeTables );
			
            }
			
            if (data.totalPlayersIn2Bytes == true){
                buffer.setUint16( data.totalPlayers );
			
            }
			
            if (data.totalPlayersIn2Bytes == false){
                buffer.setUint8( data.totalPlayers );
			
            }
			
            if (data.playersOnActiveTablesIn2Bytes == true){
                buffer.setUint16( data.activePlayers );
			
            }
			
            if (data.playersOnActiveTablesIn2Bytes == false){
                buffer.setUint8( data.activePlayers );
			
            }
			
	}

	public static deserialize(buffer: ArrayBufferBuilder, data: SrvServerCountersInfoData): void {
		var bitsReader = new BitsReader( buffer );
		
			data.playersOnActiveTablesIn2Bytes = bitsReader.getBit() != 0;
			data.empty = bitsReader.getBit() != 0;
			data.activeTablesIn2Bytes = bitsReader.getBit() != 0;
			data.totalPlayersIn2Bytes = bitsReader.getBit() != 0;
			
            if (data.activeTablesIn2Bytes == true){
                data.activeTables = buffer.getUint16();
			
            }
			
            if (data.activeTablesIn2Bytes == false){
                data.activeTables = buffer.getUint8();
			
            }
			
            if (data.totalPlayersIn2Bytes == true){
                data.totalPlayers = buffer.getUint16();
			
            }
			
            if (data.totalPlayersIn2Bytes == false){
                data.totalPlayers = buffer.getUint8();
			
            }
			
            if (data.playersOnActiveTablesIn2Bytes == true){
                data.activePlayers = buffer.getUint16();
			
            }
			
            if (data.playersOnActiveTablesIn2Bytes == false){
                data.activePlayers = buffer.getUint8();
			
            }
			
	}
}
