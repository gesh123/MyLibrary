
import { ArrayBufferBuilder } from "../../../../utils/ArrayBufferBuilder";
import { BitsReader } from "../../../../utils/BitsReader";
import { SerializerUtils } from "../../../../utils/SerializerUtils";
import { SrvAdminMsgData } from "../data/SrvAdminMsgData";
import { BinaryComposite } from "../../core/data/BinaryComposite";

import { BinaryCompositeSerializer } from "../../core/serializers/BinaryCompositeSerializer";



export class SrvAdminMsgDataSerializer {
	public static serialize(buffer: ArrayBufferBuilder, data: SrvAdminMsgData): void {
		BinaryCompositeSerializer.serialize(buffer, data.TextFormat);
			buffer.setUint8( data.postAction );
			
	}

	public static deserialize(buffer: ArrayBufferBuilder, data: SrvAdminMsgData): void {
		data.TextFormat = new BinaryComposite(data); 
                        BinaryCompositeSerializer.deserialize(buffer, data.TextFormat);
			data.postAction = buffer.getUint8();
			
	}
}
