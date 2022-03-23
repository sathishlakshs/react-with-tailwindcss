type TableHeadingInfo = {
    label: string;
    name: string;
};

type TableDataInfo = {
    productName: TableValuesInfo;
    status: TableValuesInfo;
    sold: TableValuesInfo;
    view: TableValuesInfo;
};

type TableValuesInfo = {
    name: string;
    label: string;
    value: string | boolean;
    isImg: boolean;
    img?: {path: string; width: number; height: number};
    labelClass?: string;
}

export type { TableHeadingInfo, TableValuesInfo, TableDataInfo };