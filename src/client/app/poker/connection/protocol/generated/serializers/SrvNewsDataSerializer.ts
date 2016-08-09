
import { ArrayBufferBuilder } from "../../../../utils/ArrayBufferBuilder";
import { BitsReader } from "../../../../utils/BitsReader";
import { SerializerUtils } from "../../../../utils/SerializerUtils";
import { SrvNewsData } from "../data/SrvNewsData";
import { NewsVOData } from "../data/NewsVOData";

import { NewsVODataSerializer } from "../serializers/NewsVODataSerializer";



export class SrvNewsDataSerializer {
	public static serialize(buffer: ArrayBufferBuilder, data: SrvNewsData): void {
		
            for (let i = 0, l = data.newsVector.length , t = buffer.setUint16( l ); i < l; i++){
                let temp = data.newsVector[i];
				NewsVODataSerializer.serialize(buffer, temp);
            }
			
	}

	public static deserialize(buffer: ArrayBufferBuilder, data: SrvNewsData): void {
		
            data.newsVector = []; 
            for (let i = 0, l = buffer.getUint16(); i < l; i++){
                let temp = new NewsVOData(data);
                NewsVODataSerializer.deserialize(buffer, temp);
                data.newsVector.push( temp );
            }
			
	}
}
