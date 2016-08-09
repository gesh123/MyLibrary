
import { ArrayBufferBuilder } from "../../../../utils/ArrayBufferBuilder";
import { PokerCommandHeaderSerializer } from "../../core/serializers/PokerCommandHeaderSerializer";
import { PokerCommandHeader } from "../../core/data/PokerCommandHeader";
import { SrvUpdateMoreToursPrizesInfoCommand } from "../commands/SrvUpdateMoreToursPrizesInfoCommand";
import { SrvUpdateMoreToursPrizesInfoData } from "../data/SrvUpdateMoreToursPrizesInfoData";
import { SrvUpdateMoreToursPrizesInfoDataSerializer } from "./SrvUpdateMoreToursPrizesInfoDataSerializer";


export class SrvUpdateMoreToursPrizesInfoCommandSerializer {
	public static serialize(buffer: ArrayBufferBuilder, command: SrvUpdateMoreToursPrizesInfoCommand ): void {
		buffer.pointer += PokerCommandHeader.HEADER_SIZE_BYTES;
		SrvUpdateMoreToursPrizesInfoDataSerializer.serialize(buffer, command.data);
			
		PokerCommandHeaderSerializer.serialize(buffer, command.header);
	}

	public static deserialize(buffer: ArrayBufferBuilder, command: SrvUpdateMoreToursPrizesInfoCommand ): void {
		PokerCommandHeaderSerializer.deserialize(buffer, command.header);
		
			command.data = new SrvUpdateMoreToursPrizesInfoData();
            SrvUpdateMoreToursPrizesInfoDataSerializer.deserialize(buffer, command.data);
	}
}
