
import { ArrayBufferBuilder } from "../../../../utils/ArrayBufferBuilder";
import { BitsReader } from "../../../../utils/BitsReader";
import { SerializerUtils } from "../../../../utils/SerializerUtils";
import { SrvLogonErrorData } from "../data/SrvLogonErrorData";
import { LobbyLogonErrorData } from "../data/LobbyLogonErrorData";

import { LobbyLogonErrorDataSerializer } from "../serializers/LobbyLogonErrorDataSerializer";



export class SrvLogonErrorDataSerializer {
	public static serialize(buffer: ArrayBufferBuilder, data: SrvLogonErrorData): void {
		LobbyLogonErrorDataSerializer.serialize(buffer, data.errorVO);
			
	}

	public static deserialize(buffer: ArrayBufferBuilder, data: SrvLogonErrorData): void {
		data.errorVO = new LobbyLogonErrorData(data); 
                        LobbyLogonErrorDataSerializer.deserialize(buffer, data.errorVO);
			
	}
}
