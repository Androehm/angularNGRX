export const FEATURE_KEY = 'laureates';

export interface LaureateState {
  laureates: Laureates[];
}

export const initialLaureateState: LaureateState = {
  laureates: [],
};
export interface Laureates {
  fullName?: {
    en: string;
    se: string;
  };
  gender?: string;
  wikipedia?: {
    english: string;
  };
}
