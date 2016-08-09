
import { ArrayBufferBuilder } from "../../../../utils/ArrayBufferBuilder";
import { PokerCommandHeaderSerializer } from "../../core/serializers/PokerCommandHeaderSerializer";
import { PokerCommandHeader } from "../../core/data/PokerCommandHeader";
import { SrvPlayerProfileCommand } from "../commands/SrvPlayerProfileCommand";
import { SrvPlayerProfileData } from "../data/SrvPlayerProfileData";
import { SrvPlayerProfileDataSerializer } from "./SrvPlayerProfileDataSerializer";


export class SrvPlayerProfileCommandSerializer {
	public static serialize(buffer: ArrayBufferBuilder, command: SrvPlayerProfileCommand ): void {
		buffer.pointer += PokerCommandHeader.HEADER_SIZE_BYTES;
		SrvPlayerProfileDataSerializer.serialize(buffer, command.data);
			
		PokerCommandHeaderSerializer.serialize(buffer, command.header);
	}

	public static deserialize(buffer: ArrayBufferBuilder, command: SrvPlayerProfileCommand ): void {
		PokerCommandHeaderSerializer.deserialize(buffer, command.header);
		
			command.data = new SrvPlayerProfileData();
            SrvPlayerProfileDataSerializer.deserialize(buffer, command.data);
	}
}
