import React, { useEffect, useState } from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { InputText } from 'primereact/inputtext';
// import { InputNumber } from 'primereact/inputnumber';
import { Dropdown } from 'primereact/dropdown';
import { Tag } from 'primereact/tag';
import { ProductService } from './ProductService';
import { DatePicker } from 'antd';
import 'primeicons/primeicons.css';import moment from 'moment';


// import FlexibleScrollDemo from './attlilst';


// ... (previous imports)

export default function RowEditingDemo() {
    const [products, setProducts] = useState(null);
    const [statuses] = useState(['PRESENT', 'ABSENT', 'ON LEAVE']);

    useEffect(() => {
        ProductService.getProductsMini().then((data) => setProducts(data));
    }, []);

    const getSeverity = (value) => {
        switch (value) {
            case 'PRESENT':
                return 'success';

            case 'ABSENT':
                return 'warning';

            case 'ON LEAVE':
                return 'danger';

            default:
                return null;
        }
    };

    const onRowEditComplete = (e) => {
        let _products = [...products];
        let { newData, index } = e;

        _products[index] = newData;

        setProducts(_products);
    };

    const textEditor = (options) => {
        return <InputText type="text" value={options.value} onChange={(e) => options.editorCallback(e.target.value)} />;
    };

    const statusEditor = (options) => {
        return (
            <Dropdown
                value={options.value}
                options={statuses}
                onChange={(e) => options.editorCallback(e.value)}
                placeholder="Select a Status"
                itemTemplate={(option) => {
                    return <Tag value={option} severity={getSeverity(option)}></Tag>;
                }}
            />
        );
    };

    // const priceEditor = (options) => {
    //     return <InputNumber value={options.value} onValueChange={(e) => options.editorCallback(e.value)} mode="currency" currency="USD" locale="en-US" />;
    // };

    const dateEditor = (options) => {
        const dateValue = options.value ? moment(options.value) : null;
    
        return (
            <DatePicker 
                value={dateValue}
                onChange={(date, dateString) => options.editorCallback(date ? date.toDate() : null)}
                showTime={{ format: 'HH:mm:ss' }}
                format="YYYY-MM-DD HH:mm:ss"
            />
        );
    };

    const statusBodyTemplate = (rowData) => {
        return <Tag value={rowData.inventoryStatus} severity={getSeverity(rowData.inventoryStatus)}></Tag>;
    };

    // const priceBodyTemplate = (rowData) => {
    //     return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(rowData.price);
    // };

    const dateBodyTemplate = (rowData) => {
        const formattedDate = new Intl.DateTimeFormat('en-US', { 
            year: 'numeric', 
            month: 'numeric', 
            day: 'numeric',
            hour: 'numeric',
            minute: 'numeric',
            second: 'numeric',
            timeZoneName: 'short'
        }).format(rowData.date);
    
        return formattedDate;
    };

    const allowEdit = (rowData) => {
        return rowData.name !== 'Blue Band';
    };

    return (
        <div  style={{height:"100vh"}}>
              <div className="card p-fluid">
            
            <DataTable value={products} editMode="row"  dataKey="id" onRowEditComplete={onRowEditComplete} tableStyle={{ minWidth: '50rem',padding:"10px 5px" }}>
                <Column field="code" header="Employee Code" editor={(options) => textEditor(options)} style={{ width: '20%',padding:"10px 5px" }}></Column>
                <Column field="name" header="Name" editor={(options) => textEditor(options)} style={{ width: '20%',padding:"10px 5px" }}></Column>
                <Column field="inventoryStatus" header="Status" body={statusBodyTemplate} editor={(options) => statusEditor(options)} style={{ width: '20%',padding:"10px 5px" }}></Column>
                <Column field="date" header="Date & Time" body={dateBodyTemplate} editor={(options) => dateEditor(options)} style={{ width: '20%' }}></Column>
                <Column rowEditor={allowEdit} headerStyle={{ width: '10%', minWidth: '8rem' }} bodyStyle={{ textAlign: 'center',padding:"10px 5px" }}></Column>

            </DataTable>
            {/* <FlexibleScrollDemo/> */}

        </div>

        </div>
      
    );
}
     