
import { ArrayBufferBuilder } from "../../../../utils/ArrayBufferBuilder";
import { BitsReader } from "../../../../utils/BitsReader";
import { SerializerUtils } from "../../../../utils/SerializerUtils";
import { ClGetTournamentsInfoData } from "../data/ClGetTournamentsInfoData";
import { RequestTourInfoVOData } from "../data/RequestTourInfoVOData";

import { RequestTourInfoVODataSerializer } from "../serializers/RequestTourInfoVODataSerializer";



export class ClGetTournamentsInfoDataSerializer {
	public static serialize(buffer: ArrayBufferBuilder, data: ClGetTournamentsInfoData): void {
		
            for (let i = 0, l = data.tourTabsTypesVect.length , t = buffer.setUint8( l ); i < l; i++){
                let temp = data.tourTabsTypesVect[i];
				RequestTourInfoVODataSerializer.serialize(buffer, temp);
            }
			
	}

	public static deserialize(buffer: ArrayBufferBuilder, data: ClGetTournamentsInfoData): void {
		
            data.tourTabsTypesVect = []; 
            for (let i = 0, l = buffer.getUint8(); i < l; i++){
                let temp = new RequestTourInfoVOData(data);
                RequestTourInfoVODataSerializer.deserialize(buffer, temp);
                data.tourTabsTypesVect.push( temp );
            }
			
	}
}
