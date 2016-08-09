
import { ArrayBufferBuilder } from "../../../../utils/ArrayBufferBuilder";
import { BitsReader } from "../../../../utils/BitsReader";
import { SerializerUtils } from "../../../../utils/SerializerUtils";
import { SrvTourCountersInfoData } from "../data/SrvTourCountersInfoData";


export class SrvTourCountersInfoDataSerializer {
	public static serialize(buffer: ArrayBufferBuilder, data: SrvTourCountersInfoData): void {
		var bitsReader = new BitsReader( buffer );
		
			bitsReader.setBit( data.playersOnActiveTournamentsIn2Bytes );
			bitsReader.setBit( data.activeTournamentsIn2Bytes );
			bitsReader.setBit( data.totalPlayersIn2Bytes );
			
            if (data.activeTournamentsIn2Bytes == true){
                buffer.setUint16( data.activeTournaments );
			
            }
			
            if (data.activeTournamentsIn2Bytes == false){
                buffer.setUint8( data.activeTournaments );
			
            }
			
            if (data.totalPlayersIn2Bytes == true){
                buffer.setUint16( data.totalPlayers );
			
            }
			
            if (data.totalPlayersIn2Bytes == false){
                buffer.setUint8( data.totalPlayers );
			
            }
			
            if (data.playersOnActiveTournamentsIn2Bytes == true){
                buffer.setUint16( data.activePlayers );
			
            }
			
            if (data.playersOnActiveTournamentsIn2Bytes == false){
                buffer.setUint8( data.activePlayers );
			
            }
			
	}

	public static deserialize(buffer: ArrayBufferBuilder, data: SrvTourCountersInfoData): void {
		var bitsReader = new BitsReader( buffer );
		
			data.playersOnActiveTournamentsIn2Bytes = bitsReader.getBit() != 0;
			data.activeTournamentsIn2Bytes = bitsReader.getBit() != 0;
			data.totalPlayersIn2Bytes = bitsReader.getBit() != 0;
			
            if (data.activeTournamentsIn2Bytes == true){
                data.activeTournaments = buffer.getUint16();
			
            }
			
            if (data.activeTournamentsIn2Bytes == false){
                data.activeTournaments = buffer.getUint8();
			
            }
			
            if (data.totalPlayersIn2Bytes == true){
                data.totalPlayers = buffer.getUint16();
			
            }
			
            if (data.totalPlayersIn2Bytes == false){
                data.totalPlayers = buffer.getUint8();
			
            }
			
            if (data.playersOnActiveTournamentsIn2Bytes == true){
                data.activePlayers = buffer.getUint16();
			
            }
			
            if (data.playersOnActiveTournamentsIn2Bytes == false){
                data.activePlayers = buffer.getUint8();
			
            }
			
	}
}
