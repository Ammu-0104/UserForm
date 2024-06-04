import React, { useState, useEffect } from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Button } from 'primereact/button';
import { Dialog } from 'primereact/dialog';
import { InputText } from 'primereact/inputtext';
import { jsPDF } from 'jspdf';

export default function Payslip() {
  const initialPayslips = [
    {
      id: 1,
      employeeName: 'John Doe',
      basicSalary: 5000,
      allowance: 2000,
      deduction: 500,
      netSalary: 6500,
    },
    {
      id: 2,
      employeeName: 'Rakesh',
      basicSalary: 6000,
      allowance: 2500,
      deduction: 700,
      netSalary: 7800,
    },
  ];

  const [payslips, setPayslips] = useState([]);
  const [selectedPayslips, setSelectedPayslips] = useState(null);
  const [rowClick, setRowClick] = useState(true);
  const [displayModal, setDisplayModal] = useState(false);
  const [editedPayslip, setEditedPayslip] = useState({});
  const [editIndex, setEditIndex] = useState(null);

  useEffect(() => {
    setPayslips(initialPayslips);
  }, []);

  const openEditModal = (rowData, rowIndex) => {
    setEditedPayslip({ ...rowData });
    setEditIndex(rowIndex);
    setDisplayModal(true);
  };

  const saveChanges = () => {
    if (editIndex !== null) {
      setPayslips((prevPayslips) => {
        const updatedPayslips = [...prevPayslips];
        updatedPayslips[editIndex] = editedPayslip;
        return updatedPayslips;
      });

      setDisplayModal(false);
    }
  };

  const downloadPDF = () => {
    const doc = new jsPDF();
    doc.text('Employee Payslip', 20, 10);
    doc.text('---------------------', 20, 20);
    
    payslips.forEach((payslip, index) => {
      const yPosition = 30 + index * 40;
      doc.text(`Employee: ${payslip.employeeName}`, 20, yPosition);
      doc.text(`Basic Salary: ${payslip.basicSalary}`, 20, yPosition + 10);
      doc.text(`Allowance: ${payslip.allowance}`, 20, yPosition + 20);
      doc.text(`Deduction: ${payslip.deduction}`, 20, yPosition + 30);
      doc.text(`Net Salary: ${payslip.netSalary}`, 20, yPosition + 40);
      doc.text('---------------------', 20, yPosition + 50);
    });

    doc.save('Employee_Payslip.pdf');
  };

  const deletePayslip = (rowData) => {
    const updatedPayslips = payslips.filter((payslip) => payslip.id !== rowData.id);
    setPayslips(updatedPayslips);
  };

  return (
    <div>
      <h1 style={{ color: 'black' }}>Employee Payslip</h1>
      <div className="card">
        <div className="flex justify-content-center align-items-center mb-4 gap-2">
          <Button label="Download PDF" className="p-button-success" onClick={downloadPDF} />
        </div>
        <DataTable
          key={JSON.stringify(payslips)}
          value={payslips}
          selectionMode={rowClick ? null : 'checkbox'}
          selection={selectedPayslips}
          onSelectionChange={(e) => setSelectedPayslips(e.value)}
          dataKey="id"
          tableStyle={{ minWidth: '50rem' }}
        >
          <Column selectionMode="multiple" headerStyle={{ width: '2rem' }}></Column>
          <Column field="employeeName" header="Employee Name"></Column>
          <Column field="basicSalary" header="Basic Salary"></Column>
          <Column field="allowance" header="Allowance"></Column>
          <Column field="deduction" header="Deduction"></Column>
          <Column field="netSalary" header="Net Salary"></Column>
          <Column
            header="Action"
            body={(rowData, rowIndex) => (
              <>
                <Button
                  icon="pi pi-pencil"
                  className="p-button-rounded p-button-success p-mr-2"
                  onClick={() => openEditModal(rowData, rowIndex)}
                  style={{ marginRight: '10px' }}
                />
                <Button
                  icon="pi pi-trash"
                  className="p-button-rounded p-button-danger"
                  onClick={() => deletePayslip(rowData)}
                />
              </>
            )}
          ></Column>
        </DataTable>
      </div>

      {/* Edit Modal */}
      <Dialog visible={displayModal} style={{ width: '50vw' }} onHide={() => setDisplayModal(false)} header="Edit Payslip">
        <div className="p-grid p-fluid">
          <div className="p-col-12">
            <label>Employee Name</label>
            <InputText
              value={editedPayslip.employeeName || ''}
              onChange={(e) => setEditedPayslip({ ...editedPayslip, employeeName: e.target.value })}
            />
          </div>
          <div className="p-col-12">
            <label>Basic Salary</label>
            <InputText
              value={editedPayslip.basicSalary || ''}
              onChange={(e) => setEditedPayslip({ ...editedPayslip, basicSalary: e.target.value })}
            />
          </div>
          <div className="p-col-12">
            <label>Allowance</label>
            <InputText
              value={editedPayslip.allowance || ''}
              onChange={(e) => setEditedPayslip({ ...editedPayslip, allowance: e.target.value })}
            />
          </div>
          <div className="p-col-12">
            <label>Deduction</label>
            <InputText
              value={editedPayslip.deduction || ''}
              onChange={(e) => setEditedPayslip({ ...editedPayslip, deduction: e.target.value })}
            />
          </div>
          <div className="p-col-12">
            <label>Net Salary</label>
            <InputText
              value={editedPayslip.netSalary || ''}
              onChange={(e) => setEditedPayslip({ ...editedPayslip, netSalary: e.target.value })}
            />
          </div>
        </div>
        <div className="p-dialog-footer">
          <Button label="Save" className="p-button-success" onClick={saveChanges} />
          <Button label="Cancel" className="p-button-danger" onClick={() => setDisplayModal(false)} />
        </div>
      </Dialog>
    </div>
  );
}
