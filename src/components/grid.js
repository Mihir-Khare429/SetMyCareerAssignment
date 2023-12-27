import GridTable from '@nadavshaar/react-grid-table';
import { useEffect, useState } from 'react';
import { tableConfig } from '../data/randomRowColumn';
import { generateData } from '../data/randomData';

const Grid = () => {
    const [rows, setRows] = useState(0);
    const [tableData, setTableData] = useState({});

    useEffect(() => {
        const { x } = tableConfig();

        if (x !== rows) {
            setRows(x);
            const generatedData = generateData(x);
            setTableData(generatedData);
        }
    }, [rows]);

    return (
        Object.keys(tableData).length === 0 ? (
            <h1>Data is loading</h1>
        ) : (
            <div>
                <h1>Table configuration Rows {rows} X {rows}</h1>
                <GridTable columns={tableData.cols} rows={tableData.rows} />
            </div>
        )
    );
};

export default Grid;
