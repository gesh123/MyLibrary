
import { ArrayBufferBuilder } from "../../../../utils/ArrayBufferBuilder";
import { BitsReader } from "../../../../utils/BitsReader";
import { SerializerUtils } from "../../../../utils/SerializerUtils";
import { LobbyLogonErrorData } from "../data/LobbyLogonErrorData";


export class LobbyLogonErrorDataSerializer {
	public static serialize(buffer: ArrayBufferBuilder, data: LobbyLogonErrorData): void {
		buffer.setUint8( data.errorID );
			buffer.setUTF16StringNullTerminated( data.message );
			buffer.setUint8( data.autoCloseClient ? 1 : 0 );
			
	}

	public static deserialize(buffer: ArrayBufferBuilder, data: LobbyLogonErrorData): void {
		data.errorID = buffer.getUint8();
			data.message = buffer.getUTF16StringNullTerminated();
			data.autoCloseClient = buffer.getUint8() != 0;
			
	}
}
