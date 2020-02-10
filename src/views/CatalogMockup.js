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
        <div style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap' }}>
            <div
                style={{
                    width: '100%',
                    border: '1px solid black',
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
                        {/* <TableRow hover={true}>
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
                        </TableRow> */}
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

const rfqTableListColumns = [
    { name: 'Supplier' },
    { name: 'Date' },
    { name: 'Size' },
    { name: 'Local/Imported' },
    { name: 'Final Price' },
];

const rfqTableListRows = [
    {
        supplier: <span style={{ color: 'blue' }}>Supplier</span>,
        date: '2020-01-01',
        size: '38-39',
        type: 'local',
        finalprice: '99.99',
    },
    {
        supplier: <span style={{ color: 'blue' }}>...</span>,
        date: '...',
        size: '...',
        type: '...',
        finalprice: '...',
    },
];

const cbdCols = [
    { name: 'Items' },
    { name: 'Description' },
    { name: 'Qty' },
    { name: 'Unit' },
    { name: 'Loss' },
    { name: 'Unit price' },
    { name: 'Total price' },
];

const cbdRows = [
    {
        i: 'Raw Materials',
        d: 'Steel304#',
        q: '10',
        u: 'Kilo',
        l: '0.2',
        p: '5',
        t: '$52',
    },
    {
        i: 'Accessories',
        d: 'Neils',
        q: '10',
        u: '',
        l: '0',
        p: '2',
        t: '$20',
    },
    {
        i: 'Transport',
        d: 'Shanghai',
        q: '',
        u: '',
        l: '',
        p: '50',
        t: '$52',
    },
    {
        i: 'Labor',
        d: (
            <span>
                Casting
                <br />
                3D Scanning
                <br />
                NCProcess
                <br />
                Assembly
                <br />
                Texture
                <br />
                Coating
            </span>
        ),
        q: '',
        u: '',
        l: '',
        p: '',
        t: '',
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
                    //expanded={[...Array(14).keys()].map(i => i.toString())}
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
                    <>
                        <span>Include: column filters, sort, search</span>
                        <DenseTable columns={overviewTableColumns} rows={overviewTableMockData} />
                    </>
                )}
                {view === 'models_sport_overview' && (
                    <>
                        <span>Include: column filters, sort, search</span>
                        <DenseTable columns={overviewTableColumns} rows={overviewTableMockData} />
                    </>
                )}
                {view === 'models_projectid_overview' && (
                    <>
                        <span>Include: column filters, sort, search</span>
                        <DenseTable columns={overviewTableColumns} rows={overviewTableMockData} />
                    </>
                )}
                {view === 'rfq_overview' && (
                    <>
                        <span>Include: column filters, sort, search</span>
                        <DenseTable columns={overviewTableColumns} rows={overviewTableMockData} />
                    </>
                )}
                {view === 'rfq_sport_overview' && (
                    <>
                        <span>Include: column filters, sort, search</span>
                        <DenseTable columns={overviewTableColumns} rows={overviewTableMockData} />
                    </>
                )}
                {view === 'rfq_projectid_overview' && (
                    <>
                        <span>Include: column filters, sort, search</span>
                        <DenseTable columns={overviewTableColumns} rows={overviewTableMockData} />
                    </>
                )}
                {view === 'mold_model_details' && (
                    <div style={{ display: 'flex', flexDirection: 'column', width: '100%', padding: '5px' }}>
                        <span>Mold Model Details View</span>
                        <MoldSpec />
                        <div style={{ border: '1px solid black', margin: '5px' }}>
                            <p>Validated Prices List</p>
                            <span>Include: column filters, sort, search</span>
                            <DenseTable columns={rfqTableListColumns} rows={rfqTableListRows} />
                        </div>
                    </div>
                )}
                {view === 'rfq_details' && (
                    <div style={{ display: 'flex', flexDirection: 'column', width: '100%', padding: '5px' }}>
                        <span>RFQ Details View</span>
                        <MoldSpec />
                        <div style={{ border: '1px solid black', margin: '5px', display: 'flex', flexWrap: 'wrap' }}>
                            <p style={{ width: '100%' }}>
                                Requests List ---- <button>New Request</button>
                            </p>
                            <div style={{ width: '30%', fontWeight: 'bold' }}>Name</div>
                            <div style={{ width: '30%', fontWeight: 'bold' }}>Status</div>
                            <div style={{ width: '40%', fontWeight: 'bold' }}>Contact</div>
                            <div style={{ width: '30%', color: 'blue' }}>12345 Supplier </div>
                            <div
                                style={{
                                    width: '30%',
                                    display: 'flex',
                                    flexDirection: 'row',
                                    alignItems: 'center',
                                    color: 'blue',
                                }}
                            >
                                <div
                                    style={{
                                        width: '10px',
                                        height: '10px',
                                        border: '2px solid blue',
                                        borderRadius: '50%',
                                    }}
                                />
                                Status: Draft
                            </div>
                            <div style={{ width: '40%' }}>Contact: email@example.com</div>
                            <div style={{ width: '30%', color: 'blue' }}>67890 Supplier </div>
                            <div
                                style={{
                                    width: '30%',
                                    display: 'flex',
                                    flexDirection: 'row',
                                    alignItems: 'center',
                                    color: 'green',
                                }}
                            >
                                <div
                                    style={{
                                        width: '10px',
                                        height: '10px',
                                        border: '2px solid black',
                                        background: 'green',
                                        borderRadius: '50%',
                                    }}
                                />
                                Status: Responded{' '}
                            </div>
                            <div style={{ width: '40%' }}>Contact: email@example.com</div>
                            <div style={{ width: '30%', color: 'blue' }}>Company XXX</div>
                            <div
                                style={{
                                    width: '30%',
                                    display: 'flex',
                                    flexDirection: 'row',
                                    alignItems: 'center',
                                    color: 'green',
                                }}
                            >
                                <div
                                    style={{
                                        width: '10px',
                                        height: '10px',
                                        border: '2px solid green',
                                        borderRadius: '50%',
                                    }}
                                />
                                Status: Sent{' '}
                            </div>
                            <div style={{ width: '40%' }}>Contact: email@example.com</div>
                        </div>
                        <div
                            style={{
                                border: '1px solid black',
                                margin: '5px',
                                display: 'flex',
                                flexWrap: 'wrap',
                                padding: '5px',
                            }}
                        >
                            <span style={{ width: '100%' }}>
                                CBD responses (Switch to another response by code: )
                                <p style={{ color: 'blue' }}>&lt; 10001-01 - 10001-02 - 10001-03 - 11111-01 &gt;</p>
                            </span>
                            <div style={{ width: '100%', border: '1px solid black' }}>
                                *** Status Indicator: Open ------ Received ------ Responded ------ Validated ***
                                <br />
                                Response Code: 10001-01
                                <br />
                                Validation Time: DateTime()
                                <br />
                                Mold shop / maker: XXXXX <br />
                                Dimensions: Height * Width * Length (unit)
                                <br />
                                Mold layout: XXX
                                <br />
                                Lifetime (qty): ... <br />
                                Lifetime (time): ... <br />
                                Leadtime: ... <br />
                                Injection Machine Size: ... <br />
                                Expected cycle time: ... <br />
                                Contact: name@example.com
                            </div>
                            <br />
                            <div style={{ width: '100%', border: '1px solid black' }}>
                                <DenseTable columns={cbdCols} rows={cbdRows} />
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}
