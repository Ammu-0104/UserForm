import React from "react";
import "../../hrms/hrms.css";
import imgPath from "../KodukkuLogo.svg";

const Emppayslip = () => {
  
  return (
    <div className="container my-4">
      <form className="container my-4 p-5" style={{border:"3px solid whitesmoke"}}>
        <div className="">
          <div className="col-12 d-flex justify-content-flex-start align-item-center pb-5">
            <div className="pe-3">
              <img src={imgPath} alt="company logo" />
            </div>
            <div className="pe-2">
              <h3 className="cmp-name mb-3">
                Kodukku Classifieds Private Limited
              </h3>
              <div>
                <p className="m-0">
                  Super Star Briyani, Ram Nagar South,Pallikaranai, Chennai,
                  Tamil Nadu 600100
                </p>
              </div>
            </div>
      
          </div>
          <div className="col-12 pb-4">
            <h3 className="text-center">Payslip February, 2024</h3>
          </div>
        </div>
        <h4 className="label_ps">Employee Details</h4>
        <div className="row py-4">
          <div className="col-12 col-md-6">
            <table className="row mb-4">
              <tbody>
                <tr className="d-flex pb-2">
                  <td className="col-12 col-md-6 label-ps">
                    <label>NAME</label>
                  </td>
                  <td className="col-12 col-md-4">
                    <input className="payslip_header" type="text" />
                  </td>
                </tr>
                <tr className="d-flex pb-2">
                  <td className="col-12 col-md-6 label-ps">
                    <label>EMPLOYEE NO</label>
                  </td>
                  <td className="col-12 col-md-4">
                    <input className="payslip_header" type="number" />
                  </td>
                </tr>
                <tr className="d-flex pb-2">
                  <td className="col-12 col-md-6 label-ps">
                    <label>JOINING DATE</label>
                  </td>
                  <td className="col-12 col-md-4">
                    <input className="payslip_header" type="text" />
                  </td>
                </tr>
                <tr className="d-flex pb-2">
                  <td className="col-12 col-md-6 label-ps">
                    <label>BANK NAME</label>
                  </td>
                  <td className="col-12 col-md-4">
                    <input className="payslip_header" type="text" />
                  </td>
                </tr>
                <tr className="d-flex pb-2">
                  <td className="col-12 col-md-6 label-ps">
                    <label>BANK ACCOUNT NO</label>
                  </td>
                  <td className="col-12 col-md-4">
                    <input className="payslip_header" type="number" />
                  </td>
                </tr>
              </tbody>
            </table>

            {/* <div className="d-flex pb-2">
              <label className="col-12 col-md-4 label-ps">
                Date Of Joining
              </label>
              <input className="col-12 col-md-4 payslip_header" type="text" />
            </div>
            <div className="d-flex pb-2">
              <label className="col-12 col-md-4 label-ps">Month</label>
              <input className="col-12 col-md-4 payslip_header" type="text" />
            </div>
            <div className="d-flex pb-2">
              <label className="col-12 col-md-4 label-ps">Working Days</label>
              <input className="col-12 col-md-4 payslip_header" type="number" />
            </div> */}
          </div>
          <div className="col-12 col-md-6">
            <table className="row mb-4">
              <tbody>
                <tr className="d-flex pb-2">
                  <td className="col-12 col-md-6 label-ps">
                    <label>DEPARTMENT</label>
                  </td>
                  <td className="col-12 col-md-4">
                    <input className="payslip_header" type="text" />
                  </td>
                </tr>
                <tr className="d-flex pb-2">
                  <td className="col-12 col-md-6 label-ps">
                    <label>DESIGNATION</label>
                  </td>
                  <td className="col-12 col-md-4">
                    <input className="payslip_header" type="text" />
                  </td>
                </tr>
                <tr className="d-flex pb-2">
                  <td className="col-12 col-md-6 label-ps">
                    <label> TOTAL DAYS</label>
                  </td>
                  <td className="col-12 col-md-4">
                    <input className="payslip_header" type="number" />
                  </td>
                </tr>
                <tr className="d-flex pb-2">
                  <td className="col-12 col-md-6 label-ps">
                    <label>WORKED DAYS</label>
                  </td>
                  <td className="col-12 col-md-4">
                    <input className="payslip_header" type="number" />
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div className="row">
          <div className="col-12 col-md-6">
          <table className="row table_row mb-4">
          <thead>
            <tr class="d-flex pb-4">
              <th className="col-12 col-md-6 label-ps">Earnings</th>
              <th className="col-12 col-md-6 label-ps">Amount</th>
            </tr>
          </thead>
          <tbody>
            <tr className="d-flex pb-2">
              <td className="col-12 col-md-6 label-ps">
                <label>Basic</label>
              </td>
              <td className="col-12 col-md-4">
                <input className="payslip_header" type="number" />
              </td>
            </tr>
            <tr className="d-flex pb-2">
              <td className="col-12 col-md-6 label-ps">
                <label>HRA</label>
              </td>
              <td className="col-12 col-md-4">
                <input className="payslip_header" type="number" />
              </td>
            </tr>
            <tr className="d-flex pb-2">
              <td className="col-12 col-md-6 label-ps">
                <label>Convenience</label>
              </td>
              <td className="col-12 col-md-4">
                <input className="payslip_header" type="number" />
              </td>
            </tr>
            <tr className="d-flex pb-2">
              <td className="col-12 col-md-6 label-ps">
                <label>Health Allowances</label>
              </td>
              <td className="col-12 col-md-4">
                <input className="payslip_header" type="number" />
              </td>
            </tr>
            <tr className="d-flex pb-2">
              <td className="col-12 col-md-6 label-ps">
                <label>Special Allowances</label>
              </td>
              <td className="col-12 col-md-4">
                <input className="payslip_header" type="number" />
              </td>
            </tr>
            <tr className="d-flex pb-2">
              <td className="col-12 col-md-6 label-ps">
                <label> Total Earnings</label>
              </td>
              <td className="col-12 col-md-4">
                <input className="payslip_header" type="number" />
              </td>
            </tr>
          </tbody>
        </table>

          </div>
          <div className="col-12 col-md-6">
          <table className="row table_row mb-4">
          <thead>
            <tr class="d-flex pb-4">
              <th className="col-12 col-md-6 label-ps">Deduction</th>
              <th className="col-12 col-md-6 label-ps">Amount</th>
            </tr>
          </thead>
          <tbody>
            <tr className="d-flex pb-2">
              <td className="col-12 col-md-6 label-ps">
                <label></label>Provident Fund
              </td>
              <td className="col-12 col-md-4">
                <input className="payslip_header" type="number" />
              </td>
            </tr>
            <tr className="d-flex pb-2">
              <td className="col-12 col-md-6 label-ps">
                <label> Employee State Insurance</label>
              </td>
              <td className="col-12 col-md-4">
                <input className="payslip_header" type="number" />
              </td>
            </tr>
            <tr className="d-flex pb-2">
              <td className="col-12 col-md-6 label-ps">
                <label>Tax</label>
              </td>
              <td className="col-12 col-md-4">
                <input className="payslip_header" type="number" />
              </td>
            </tr>
            <tr className="d-flex pb-2">
              <td className="col-12 col-md-6 label-ps">
                <label>Total Deduction</label>
              </td>
              <td className="col-12 col-md-4">
                <input className="payslip_header" type="number" />
              </td>
            </tr>
          </tbody>
        </table>

          </div>
        </div>
      
       
        <div className="d-flex pb-2">
          <label className="col-12 col-md-9 label-ps">Net Pay</label>
          <input className="col-12 col-md-2 payslip_header" type="text" />
        </div>
        {/* <button type="submit"></button> */}
      </form>
    </div>
  );
};

export default Emppayslip;
