
import { ArrayBufferBuilder } from "../../../../utils/ArrayBufferBuilder";
import { BitsReader } from "../../../../utils/BitsReader";
import { SerializerUtils } from "../../../../utils/SerializerUtils";
import { PokerTourTimeInfoData } from "../data/PokerTourTimeInfoData";
import { PokerTimeData } from "../data/PokerTimeData";

import { PokerTimeDataSerializer } from "../serializers/PokerTimeDataSerializer";



export class PokerTourTimeInfoDataSerializer {
	public static serialize(buffer: ArrayBufferBuilder, data: PokerTourTimeInfoData): void {
		var bitsReader = new BitsReader( buffer );
		
			bitsReader.setBit( data.hasRegistrationStartTime );
			bitsReader.setBit( data.hasRegistrationEndTime );
			bitsReader.setBit( data.hasStartTime );
			bitsReader.setBit( data.hasFinishTime );
			
            if (data.hasRegistrationStartTime == true){
                PokerTimeDataSerializer.serialize(buffer, data.regStartTime);
			
            }
			
            if (data.hasRegistrationEndTime == true){
                PokerTimeDataSerializer.serialize(buffer, data.regEndTime);
			
            }
			
            if (data.hasStartTime == true){
                PokerTimeDataSerializer.serialize(buffer, data.startTime);
			
            }
			
            if (data.hasFinishTime == true){
                PokerTimeDataSerializer.serialize(buffer, data.finishedTime);
			
            }
			
	}

	public static deserialize(buffer: ArrayBufferBuilder, data: PokerTourTimeInfoData): void {
		var bitsReader = new BitsReader( buffer );
		
			data.hasRegistrationStartTime = bitsReader.getBit() != 0;
			data.hasRegistrationEndTime = bitsReader.getBit() != 0;
			data.hasStartTime = bitsReader.getBit() != 0;
			data.hasFinishTime = bitsReader.getBit() != 0;
			
            if (data.hasRegistrationStartTime == true){
                data.regStartTime = new PokerTimeData(data); 
                        PokerTimeDataSerializer.deserialize(buffer, data.regStartTime);
			
            }
			
            if (data.hasRegistrationEndTime == true){
                data.regEndTime = new PokerTimeData(data); 
                        PokerTimeDataSerializer.deserialize(buffer, data.regEndTime);
			
            }
			
            if (data.hasStartTime == true){
                data.startTime = new PokerTimeData(data); 
                        PokerTimeDataSerializer.deserialize(buffer, data.startTime);
			
            }
			
            if (data.hasFinishTime == true){
                data.finishedTime = new PokerTimeData(data); 
                        PokerTimeDataSerializer.deserialize(buffer, data.finishedTime);
			
            }
			
	}
}
