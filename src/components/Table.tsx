import { FC } from "react";
import { TableDataInfo, TableHeadingInfo } from "../models/Table";

type TableComp = {
    data: TableDataInfo[];
    heading: TableHeadingInfo[];
}

const TableComp: FC<TableComp> = ({ data, heading}) => {
    return (
      <div className="flex flex-col bg-white">
        <div className="sm:-mx-6 lg:-mx-8">
          <div className="py-2 inline-block min-w-full sm:px-6 lg:px-8">
              <table className="min-w-full border-collapse">
                <thead className="border-b">
                  <tr>
                    <th
                      scope="col"
                      key={"serialNo"}
                      className="text-base font-bold text-gray-900 px-6 py-4 text-left"
                    >
                      No
                    </th>
                    {heading.map((h) => (
                      <th
                        scope="col"
                        key={h.name}
                        className="text-base font-bold text-gray-900 px-6 py-4 text-left"
                      >
                        {h.label}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {data.map((row: any, rowIndex) => (
                    <tr key={rowIndex}>
                      <td
                        className="bg-gray-200 text-base font-medium text-gray-900 px-6 py-4 whitespace-nowrap border-b-8 border-solid border-b-white"
                        key={rowIndex + 1}
                      >
                        {rowIndex + 1}
                      </td>
                      {Object.keys(row).map((cell) => (
                        <td
                          key={cell}
                          className={`bg-gray-200 text-base font-medium text-gray-900 px-6 py-4 whitespace-nowrap border-b-8 border-solid border-b-white " ${row[`${cell}`]?.labelClass || ''}`}
                        >
                          <div className="flex">
                            {row[`${cell}`].isImg &&
                              row[`${cell}`].img.path && (
                                <img
                                  src={row[`${cell}`].img.path}
                                  alt="picture"
                                  width={row[`${cell}`].img.width}
                                  height={row[`${cell}`].img.height}
                                />
                              )}
                            <p className="text-ellipsis">{row[`${cell}`].label}</p>
                          </div>
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
          </div>
        </div>
      </div>
    );
}

export default TableComp;


