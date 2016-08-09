
import { ArrayBufferBuilder } from "../../../../utils/ArrayBufferBuilder";
import { PokerCommandHeaderSerializer } from "../../core/serializers/PokerCommandHeaderSerializer";
import { PokerCommandHeader } from "../../core/data/PokerCommandHeader";
import { SrvNetworksConfigurationCommand } from "../commands/SrvNetworksConfigurationCommand";
import { SrvNetworksConfigurationData } from "../data/SrvNetworksConfigurationData";
import { SrvNetworksConfigurationDataSerializer } from "./SrvNetworksConfigurationDataSerializer";


export class SrvNetworksConfigurationCommandSerializer {
	public static serialize(buffer: ArrayBufferBuilder, command: SrvNetworksConfigurationCommand ): void {
		buffer.pointer += PokerCommandHeader.HEADER_SIZE_BYTES;
		SrvNetworksConfigurationDataSerializer.serialize(buffer, command.data);
			
		PokerCommandHeaderSerializer.serialize(buffer, command.header);
	}

	public static deserialize(buffer: ArrayBufferBuilder, command: SrvNetworksConfigurationCommand ): void {
		PokerCommandHeaderSerializer.deserialize(buffer, command.header);
		
			command.data = new SrvNetworksConfigurationData();
            SrvNetworksConfigurationDataSerializer.deserialize(buffer, command.data);
	}
}
