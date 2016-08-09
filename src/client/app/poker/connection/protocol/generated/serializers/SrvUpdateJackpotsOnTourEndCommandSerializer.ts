
import { ArrayBufferBuilder } from "../../../../utils/ArrayBufferBuilder";
import { PokerCommandHeaderSerializer } from "../../core/serializers/PokerCommandHeaderSerializer";
import { PokerCommandHeader } from "../../core/data/PokerCommandHeader";
import { SrvUpdateJackpotsOnTourEndCommand } from "../commands/SrvUpdateJackpotsOnTourEndCommand";
import { SrvUpdateJackpotsOnTourEndData } from "../data/SrvUpdateJackpotsOnTourEndData";
import { SrvUpdateJackpotsOnTourEndDataSerializer } from "./SrvUpdateJackpotsOnTourEndDataSerializer";


export class SrvUpdateJackpotsOnTourEndCommandSerializer {
	public static serialize(buffer: ArrayBufferBuilder, command: SrvUpdateJackpotsOnTourEndCommand ): void {
		buffer.pointer += PokerCommandHeader.HEADER_SIZE_BYTES;
		SrvUpdateJackpotsOnTourEndDataSerializer.serialize(buffer, command.data);
			
		PokerCommandHeaderSerializer.serialize(buffer, command.header);
	}

	public static deserialize(buffer: ArrayBufferBuilder, command: SrvUpdateJackpotsOnTourEndCommand ): void {
		PokerCommandHeaderSerializer.deserialize(buffer, command.header);
		
			command.data = new SrvUpdateJackpotsOnTourEndData();
            SrvUpdateJackpotsOnTourEndDataSerializer.deserialize(buffer, command.data);
	}
}
