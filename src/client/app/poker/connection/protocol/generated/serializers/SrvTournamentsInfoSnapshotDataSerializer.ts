
import { ArrayBufferBuilder } from "../../../../utils/ArrayBufferBuilder";
import { BitsReader } from "../../../../utils/BitsReader";
import { SerializerUtils } from "../../../../utils/SerializerUtils";
import { SrvTournamentsInfoSnapshotData } from "../data/SrvTournamentsInfoSnapshotData";
import { TourSnapshotInfoData } from "../data/TourSnapshotInfoData";

import { TourSnapshotInfoDataSerializer } from "../serializers/TourSnapshotInfoDataSerializer";



export class SrvTournamentsInfoSnapshotDataSerializer {
	public static serialize(buffer: ArrayBufferBuilder, data: SrvTournamentsInfoSnapshotData): void {
		
            for (let i = 0, l = data.tourSnapshotInfosVect.length , t = buffer.setUint32( l ); i < l; i++){
                let temp = data.tourSnapshotInfosVect[i];
				TourSnapshotInfoDataSerializer.serialize(buffer, temp);
            }
			
	}

	public static deserialize(buffer: ArrayBufferBuilder, data: SrvTournamentsInfoSnapshotData): void {
		
            data.tourSnapshotInfosVect = []; 
            for (let i = 0, l = buffer.getUint32(); i < l; i++){
                let temp = new TourSnapshotInfoData(data);
                TourSnapshotInfoDataSerializer.deserialize(buffer, temp);
                data.tourSnapshotInfosVect.push( temp );
            }
			
	}
}
