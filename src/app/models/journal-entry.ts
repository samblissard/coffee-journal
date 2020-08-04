import { Coffee } from './coffee';

export interface JournalEntry {
  coffee: Coffee;
  brewingMethod: string;
  coffeeWeight: number;
  waterWeight: number;
  grindSetting: number;
  rating: number;
  personalTastingNotes: string;
}
