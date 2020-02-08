import React, { useState } from 'react';
import { TreeView, TreeItem } from '@material-ui/lab';
import { ExpandMore as ExpandMoreIcon, ChevronRight as ChevronRightIcon } from '@material-ui/icons';
import { TableContainer, Table, TableHead, TableBody, TableRow, TableCell, Paper } from '@material-ui/core';

const MoldSpec = () => (
    <div style={{ border: '1px solid black', margin: '5px', display: 'flex', flexWrap: 'wrap' }}>
        <div style={{ width: '50%', textAlign: 'left' }}>
            MoldSpec (SHARED WITH RFQ VIEW)
            <span style={{ color: 'blue' }}> Basic Info | Size &amp; Cavity </span>
        </div>
        <div style={{ width: '50%', textAlign: 'right' }}>
            <span style={{ border: '1px solid black' }}>Supplier 1</span>
            <span style={{ border: '1px solid black' }}>Supplier 2</span>
        </div>
        <div style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap', padding: '5px' }}>
            <div
                style={{
                    width: '100%',
                    border: '1px solid black',
                    margin: '5px',
                    display: 'flex',
                    flexWrap: 'wrap',
                }}
            >
                <div style={{ width: '50%' }}>Country: China (from tree)</div>
                <div style={{ width: '50%' }}>Process: Footwear (from tree)</div>
                <div style={{ width: '50%' }}>Project Code: PI-0000 (from tree)</div>
                <div style={{ width: '50%' }}>Molding Process: MP-0000</div>
            </div>

            <div
                style={{
                    width: '50%',
                    border: '1px solid gray',
                    display: 'flex',
                    flexWrap: 'wrap',
                }}
            >
                <div style={{ width: '100%' }}>Sports: Running (from tree??)</div>
                <div style={{ width: '100%' }}>FG Prod Season: SS20</div>
                <div style={{ width: '100%' }}>Season: SS20 (duplicate?)</div>
                <div style={{ width: '100%' }}>FG CC Code: 12345, 67890</div>
                <div style={{ width: '100%' }}>FG Prod Season: SS20</div>
                <div style={{ width: '100%' }}>FG Family: Kalenji Junior</div>
                <div style={{ width: '100%' }}>FG SPL: JennyLu</div>
                <div style={{ width: '100%' }}>FG DIPL: LuJenny</div>
                <div style={{ width: '100%' }}>PE: MingXiao</div>
                <div style={{ width: '100%' }}>Keeper Supplier Code: 24680</div>
                <div style={{ width: '100%' }}>Keeper Supplier Name: MingZhou</div>
            </div>

            <div
                style={{
                    width: '50%',
                    border: '1px solid gray',

                    display: 'flex',
                    flexWrap: 'wrap',
                }}
            >
                <div style={{ width: '100%' }}>Cavity: 3+3 ---DetailsButton--- </div>
                <div style={{ width: '100%' }}>Structure: 2 plates</div>
                <div style={{ width: '100%' }}>Gate: Hot runner</div>
                <div style={{ width: '100%' }}>Parts: Left sole, right sole</div>
                <div style={{ width: '100%' }}>Parts code: xxxxx</div>
                <div style={{ width: '100%' }}>Size grid: Shoes woman, Shoes man</div>
                <div style={{ width: '100%' }}>Size list: check</div>
            </div>
        </div>
    </div>
);

const DenseTable = props => {
    const { columns, rows } = props;
    return (
        <>
            <span>Include: column filters, select columns to show/hide, search</span>
            <TableContainer component={Paper}>
                <Table size="small" aria-label="a dense table">
                    <TableHead>
                        <TableRow>
                            {columns.map(col => (
                                <TableCell key={col.name} style={{ fontWeight: 'bold' }}>
                                    {col.name}
                                </TableCell>
                            ))}
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows.map(row => {
                            const { id, ...rest } = row;
                            console.log(rest);
                            return (
                                <TableRow key={id}>
                                    {Object.entries(rest).map(entry => {
                                        console.log(entry);
                                        return <TableCell key={entry[0]}>{entry[1]}</TableCell>;
                                    })}
                                </TableRow>
                            );
                        })}
                        <TableRow hover={true}>
                            <TableCell rowSpan={4}>Spanning Sport</TableCell>
                            <TableCell rowSpan={4}>Spanning Project</TableCell>
                        </TableRow>

                        <TableRow hover={true}>
                            <TableCell>CC Code</TableCell>
                            <TableCell>FG SPL</TableCell>
                            <TableCell>Process</TableCell>
                            <TableCell>Parts</TableCell>
                            <TableCell>Cavity</TableCell>
                            <TableCell>Mold Model Code</TableCell>
                            <TableCell>Model Name</TableCell>
                        </TableRow>
                        <TableRow hover={true}>
                            <TableCell>CC Code</TableCell>
                            <TableCell>FG SPL</TableCell>
                            <TableCell>Process</TableCell>
                            <TableCell>Parts</TableCell>
                            <TableCell>Cavity</TableCell>
                            <TableCell>Mold Model Code</TableCell>
                            <TableCell>Model Name</TableCell>
                        </TableRow>
                        <TableRow hover={true}>
                            <TableCell>CC Code</TableCell>
                            <TableCell>FG SPL</TableCell>
                            <TableCell>Process</TableCell>
                            <TableCell>Parts</TableCell>
                            <TableCell>Cavity</TableCell>
                            <TableCell>Mold Model Code</TableCell>
                            <TableCell>Model Name</TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
            </TableContainer>
        </>
    );
};

const overviewTableColumns = [
    { name: 'Sport' },
    { name: 'Project ID' },
    { name: 'CC Code' },
    { name: 'FG SPL' },
    { name: 'Molding Process' },
    { name: 'Parts' },
    { name: 'Cavity' },
    { name: 'Mold Model Code' },
    { name: 'Model Name' },
];

const overviewTableMockData = [
    {
        id: 0,
        sport: 'Running',
        pid: 'PI-0000',
        ccc: '12345, 67890',
        fgspl: 'JennyLu',
        mp: (
            <>
                IMEVA
                <br />
                IMEVA
                <br />
                CMEVA
            </>
        ),
        parts: (
            <>
                Forefoot
                <br />
                Midsole
                <br />
                Rear
            </>
        ),
        cavity: (
            <>
                4 Cavity
                <br />6 Cavity
                <br />4 Cavity
            </>
        ),
        mmc: (
            <div style={{ color: 'blue' }}>
                10001
                <br />
                10002
                <br />
                10003
            </div>
        ),
        mn: 'NA',
    },
    {
        id: 1,
        sport: 'Jogging',
        pid: 'PI-0001',
        ccc: '54321',
        fgspl: 'JennyLu',
        mp: (
            <>
                IMEVA
                <br />
                TPU
                <br />
                RUBBER
            </>
        ),
        parts: (
            <>
                Top
                <br />
                Bottom
            </>
        ),
        cavity: (
            <>
                4 Cavity
                <br />4 Cavity
            </>
        ),
        mmc: (
            <div style={{ color: 'blue' }}>
                10004
                <br />
                10005
            </div>
        ),
        mn: 'NA',
    },
];

export default function CatalogMockup(props) {
    const [view, setView] = useState('none');

    return (
        <div style={{ display: 'flex', width: '100%', border: '1px solid black', padding: '5px' }}>
            <div style={{ width: '25%', border: '1px solid gray', padding: '5px' }}>
                Tree Filter 多选: <span style={{ color: 'blue' }}> Active | Inactive | RFQ </span>
                <TreeView
                    defaultCollapseIcon={<ExpandMoreIcon />}
                    defaultExpandIcon={<ChevronRightIcon />}
                    expanded={[...Array(14).keys()].map(i => i.toString())}
                    onNodeToggle={null}
                >
                    <TreeItem nodeId="0" label="Country (e.g. China)" onClick={e => setView('none')}>
                        <TreeItem nodeId="1" label="Process (e.g. FootWear)" onClick={e => setView('none')}>
                            <TreeItem
                                nodeId="2"
                                label={<b>Mold Models (= Catalog)</b>}
                                onClick={e => setView('models_overview')}
                            >
                                <TreeItem
                                    nodeId="3"
                                    label="Sport (e.g. Running)"
                                    onClick={e => setView('models_sport_overview')}
                                >
                                    <TreeItem
                                        nodeId="4"
                                        label="ProjectId (e.g. PI-0000)"
                                        onClick={e => setView('models_projectid_overview')}
                                    >
                                        <TreeItem
                                            nodeId="5"
                                            label="Active_MoldModelCode_1"
                                            onClick={e => setView('mold_model_details')}
                                        />
                                        <TreeItem
                                            nodeId="6"
                                            label={<span style={{ color: 'gray' }}>Inactive_MoldModelCode_2</span>}
                                            onClick={e => setView('mold_model_details')}
                                        />
                                        <TreeItem
                                            nodeId="12"
                                            label="MoldModelCode_X"
                                            onClick={e => setView('mold_model_details')}
                                        />
                                    </TreeItem>
                                </TreeItem>
                            </TreeItem>
                            <TreeItem nodeId="7" label={<b>RFQs</b>} onClick={e => setView('rfq_overview')}>
                                <TreeItem
                                    nodeId="8"
                                    label="Sport (e.g. Running)"
                                    onClick={e => setView('rfq_sport_overview')}
                                >
                                    <TreeItem
                                        nodeId="9"
                                        label="ProjectId (e.g. PI-0000)"
                                        onClick={e => setView('rfq_projectid_overview')}
                                    >
                                        <TreeItem nodeId="10" label="RFQCode_1" onClick={e => setView('rfq_details')} />
                                        <TreeItem nodeId="11" label="RFQCode_2" onClick={e => setView('rfq_details')} />
                                        <TreeItem nodeId="13" label="RFQCode_X" onClick={e => setView('rfq_details')} />
                                    </TreeItem>
                                </TreeItem>
                            </TreeItem>
                        </TreeItem>
                    </TreeItem>
                </TreeView>
            </div>
            <div style={{ width: '75%', border: '1px solid red' }}>
                {view === 'none' && <span>Empty View, nothing selected</span>}
                {view === 'models_overview' && (
                    <DenseTable columns={overviewTableColumns} rows={overviewTableMockData} />
                )}
                {view === 'models_sport_overview' && (
                    <DenseTable columns={overviewTableColumns} rows={overviewTableMockData} />
                )}
                {view === 'models_projectid_overview' && (
                    <DenseTable columns={overviewTableColumns} rows={overviewTableMockData} />
                )}
                {view === 'rfq_overview' && <DenseTable columns={overviewTableColumns} rows={overviewTableMockData} />}
                {view === 'rfq_sport_overview' && (
                    <DenseTable columns={overviewTableColumns} rows={overviewTableMockData} />
                )}
                {view === 'rfq_projectid_overview' && (
                    <DenseTable columns={overviewTableColumns} rows={overviewTableMockData} />
                )}
                {view === 'mold_model_details' && (
                    <div style={{ display: 'flex', flexDirection: 'column', width: '100%', padding: '5px' }}>
                        <span>Mold Model Details View</span>
                        <MoldSpec />
                        <div style={{ border: '1px solid black', margin: '5px' }}>Validated Prices List</div>
                    </div>
                )}
                {view === 'rfq_details' && (
                    <div style={{ display: 'flex', flexDirection: 'column', width: '100%', padding: '5px' }}>
                        <span>RFQ Details View</span>
                        <MoldSpec />
                        <div style={{ border: '1px solid black', margin: '5px' }}>Requests</div>
                        <div style={{ border: '1px solid black', margin: '5px' }}>CBD responses</div>
                    </div>
                )}
            </div>
        </div>
    );
}
