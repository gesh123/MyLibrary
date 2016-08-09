
import { ArrayBufferBuilder } from "../../../../utils/ArrayBufferBuilder";
import { PokerCommandHeaderSerializer } from "../../core/serializers/PokerCommandHeaderSerializer";
import { PokerCommandHeader } from "../../core/data/PokerCommandHeader";
import { SrvTourProtectionErrorCommand } from "../commands/SrvTourProtectionErrorCommand";
import { SrvTourProtectionErrorData } from "../data/SrvTourProtectionErrorData";
import { SrvTourProtectionErrorDataSerializer } from "./SrvTourProtectionErrorDataSerializer";


export class SrvTourProtectionErrorCommandSerializer {
	public static serialize(buffer: ArrayBufferBuilder, command: SrvTourProtectionErrorCommand ): void {
		buffer.pointer += PokerCommandHeader.HEADER_SIZE_BYTES;
		SrvTourProtectionErrorDataSerializer.serialize(buffer, command.data);
			
		PokerCommandHeaderSerializer.serialize(buffer, command.header);
	}

	public static deserialize(buffer: ArrayBufferBuilder, command: SrvTourProtectionErrorCommand ): void {
		PokerCommandHeaderSerializer.deserialize(buffer, command.header);
		
			command.data = new SrvTourProtectionErrorData();
            SrvTourProtectionErrorDataSerializer.deserialize(buffer, command.data);
	}
}
