
import { ArrayBufferBuilder } from "../../../../utils/ArrayBufferBuilder";
import { BitsReader } from "../../../../utils/BitsReader";
import { SerializerUtils } from "../../../../utils/SerializerUtils";
import { SrvServerInfoData } from "../data/SrvServerInfoData";
import { ServerUpdateInfoData } from "../data/ServerUpdateInfoData";
import { LobbySubscribeGameData } from "../data/LobbySubscribeGameData";

import { ServerUpdateInfoDataSerializer } from "../serializers/ServerUpdateInfoDataSerializer";
import { LobbySubscribeGameDataSerializer } from "../serializers/LobbySubscribeGameDataSerializer";



export class SrvServerInfoDataSerializer {
	public static serialize(buffer: ArrayBufferBuilder, data: SrvServerInfoData): void {
		ServerUpdateInfoDataSerializer.serialize(buffer, data.serverUpdateInfo);
			LobbySubscribeGameDataSerializer.serialize(buffer, data.gameTypeStructure);
			
	}

	public static deserialize(buffer: ArrayBufferBuilder, data: SrvServerInfoData): void {
		data.serverUpdateInfo = new ServerUpdateInfoData(data); 
                        ServerUpdateInfoDataSerializer.deserialize(buffer, data.serverUpdateInfo);
			data.gameTypeStructure = new LobbySubscribeGameData(data); 
                        LobbySubscribeGameDataSerializer.deserialize(buffer, data.gameTypeStructure);
			
	}
}
