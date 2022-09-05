export interface SortingDateProps {
  date: Date;
  amount: number;
  type: string;
}

export interface ResultDate {
  type: string;
  amount: number;
}

declare const _default: {
  createDate: (
    start: Date | number,
    end: Date | number,
    Date: SortingDateProps[]
  ) => Map<string, ResultDate[]>;
};

export default _default;
