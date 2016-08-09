import {PokerCommandHeader} from "../data/PokerCommandHeader";
/**
 * Created by hivaga on 7/15/2016.
 */
export interface IPokerCommand
{
	// -----------------------------------------
	// PUBLIC PROPERTIES
	// -----------------------------------------
  uid:number;
  pid:number;
  cid:number;
  name:string;
  data:any;
  header:PokerCommandHeader;


	// -----------------------------------------
	// PUBLIC METHODS
	// -----------------------------------------


}
