import { Count } from "./count.interface";
import { Dimension } from "./dimension.interface";
import { Measure } from "./measure.interface";

export interface HolidayData {
  // created objects for relevant data groupings
  dimensionResults: Dimension[];
  measureResults: Measure[];
  counts: Count[];
  // note: left unknown data as any
  cube?: any;
  title?: any;
  notes?: any;
  ranSuccessfully?: any;
  systemName?: any;
  systemLoadDate?: any;
  userName?: any;
  queryDescription?: any;
}
