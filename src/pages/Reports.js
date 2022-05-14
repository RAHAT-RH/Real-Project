import { useState } from "react";
import { Table } from "react-bootstrap";
import { FaSave, FaCircleNotch, FaTrashAlt } from "react-icons/fa";
import './Reports.css';


export const Reports = () => {
  return (
    <div className='reports'>
      <h1>Reports</h1>
    </div>
  );
};

export const ReportsOne = () => {
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);
  return (
    <div className='reports' onClick={showSidebar}>
      <div className="container px-1 py-5 mx-auto">
        <div className="row d-flex justify-content-center">
          <div className="col-md-6">
            <div className="">
              <form className="form-card" onsubmit="event.preventDefault()">
                <div className="row justify-content-between text-left">
                  <div className="form-group col-md-6  flex-column d-flex"> <label className="form-control-label ">Personal code<span className="text-danger"> *</span></label> <input className='input' type="text" id="code" name="code" placeholder="personal code" /> </div>
                  <div className="form-group col-md-6  flex-column d-flex"> <label className="form-control-label ">Address<span className="text-danger"> *</span></label> <input className='input' type="text" id="address" name="address" placeholder="Address" /> </div>
                </div>
                <div className="row justify-content-between text-left">
                  <div className="form-group col-sm-6 flex-column d-flex"> <label className="form-control-label ">Card No / Booking No<span className="text-danger"> *</span></label> <input className='input' type="text" id="booking" name="booking" placeholder="Booking No" onblur="validate(3)" /> </div>
                  <div className="form-group col-sm-6 flex-column d-flex"> <label className="form-control-label ">Phone number<span className="text-danger"> *</span></label> <input className='input' type="text" id="mob" name="mob" placeholder="" /> </div>
                </div>
                <div className="row justify-content-between text-left">
                  <div className="form-group col-sm-6 flex-column d-flex"> <label className="form-control-label ">Thana<span className="text-danger"> *</span></label> <input className='input' type="text" id="job" name="job" placeholder="" onblur="validate(5)" /> </div>
                  <div className="form-group mt-3 col-sm-6 flex-colum d-flex">


                    <div className="form-check form-check-inline">
                      <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2" />
                      <label className="form-check-label" for="inlineRadio2">Maried</label>
                    </div>
                    <div className="form-check form-check-inline">
                      <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio3" value="option3" />
                      <label className="form-check-label" for="inlineRadio3">UnMaride </label>
                    </div>
                  </div>
                </div>
                <div className="row justify-content-between text-left">
                  <div className="form-group col-sm-6 flex-column d-flex"> <label className="form-control-label ">Contact Number<span className="text-danger"> *</span></label> <input className='input' type="text" id="booking" name="booking" placeholder="Booking No" onblur="validate(3)" /> </div>
                  <div className="form-group col-sm-6 flex-column d-flex"> <label className="form-control-label ">Age<span className="text-danger"> *</span></label> <input className='input' type="text" id="mob" name="mob" placeholder="" /> </div>
                </div>
                <div className="row justify-content-between text-left">
                  <div className="form-group col-sm-6 flex-column d-flex"> <label className="form-control-label ">Person Name<span className="text-danger"> *</span></label> <input className='input' type="text" id="job" name="job" placeholder="" onblur="validate(5)" /> </div>
                  <div className="form-group mt-3 col-sm-6 flex-colum d-flex">

                    <div className="form-check form-check-inline">
                      <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1" />
                      <label className="form-check-label" for="inlineRadio1">Male</label>
                    </div>
                    <div className="form-check form-check-inline">
                      <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2" />
                      <label className="form-check-label" for="inlineRadio2">Female</label>
                    </div>
                    <div className="form-check form-check-inline">
                      <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio3" value="option3" />
                      <label className="form-check-label" for="inlineRadio3">Others </label>
                    </div>
                  </div>
                </div>
                <div className="row justify-content-between text-left">
                  <div className="form-group col-md-6 col-sm-12 flex-column d-flex"> <label className="form-control-label ">Gurdian<span className="text-danger"> *</span></label> <input className='input' type="text" id="ans" name="ans" placeholder="" onblur="validate(6)" /> </div>
                </div>
                <div className="row justify-content-between text-left">
                  <div className="form-group col-md-6 col-sm-12 flex-column d-flex"> <label className="form-control-label ">NID<span className="text-danger"> *</span></label> <input className='input' type="text" id="ans" name="ans" placeholder="" onblur="validate(6)" /> </div>
                </div>
                <div className="row justify-content-between text-left">
                  <div className="form-group col-md-6 col-sm-12 flex-column d-flex"> <label className="form-control-label ">Passport No<span className="text-danger"> *</span></label> <input className='input' type="text" id="ans" name="ans" placeholder="" onblur="validate(6)" /> </div>
                </div>
                <div className="row justify-content-between text-left">
                  <div className="form-group col-md-6 col-sm-12 flex-column d-flex"> <label className="form-control-label ">District Name<span className="text-danger"> *</span></label>
                    <select className='input' type="text" id="ans" name="ans" placeholder="" onblur="validate(6)" >
                      <option>Dhaka</option>
                      <option>Gazipur</option>
                      <option>Narsingdi</option>
                    </select>
                  </div>
                </div>
                <div className="row justify-content-between text-left">
                  <div className="form-group col-6 flex-column d-flex"> <label className="form-control-label ">Gurdian Address<span className="text-danger"> *</span></label> <input className='input' type="text" id="ans" name="ans" placeholder="" onblur="validate(6)" /> </div>
                </div>
                <div className="row justify-content-end">
                  <div className="d-flex border w-50 justify-content-center p-2 mx-auto mt-4">
                    <div className="update me-1">
                      <button className="btn border" >
                        <div className="all d-flex">
                          <div className="icon me-2">
                            <FaSave className="text-danger" />
                          </div>
                          <div className="name text-danger">
                            Save
                          </div>
                        </div>
                      </button>
                    </div>
                    <div className="update border me-2">
                      <button className="btn ">
                        <div className="all d-flex">
                          <div className="icon me-2">
                            <FaCircleNotch className="text-danger" />
                          </div>
                          <div className="name text-danger">
                            Update
                          </div>
                        </div>
                      </button>
                    </div>
                    <div className="update me-2">
                      <button className="btn border">
                        <div className="all d-flex">
                          <div className="icon me-2">
                            <FaTrashAlt className="text-danger" />
                          </div>
                          <div className="name text-danger">
                            Delete
                          </div>
                        </div>
                      </button>
                    </div>
                  </div>
                </div>
              </form>

            </div>
          </div>
          <div className="col-md-6">
            <div className="row justify-content-between text-left mb-4">
              <div className="form-group col-sm-6 flex-column d-flex"> <label className="form-control-label ">Search By Name<span className="text-danger"> *</span></label>
                <select className='input' type="text" id="booking" name="booking" placeholder="Booking No" onblur="validate(3)" >
                  <option>Name</option>
                  <option>name 1</option>
                  <option>name 2</option>
                  <option>name 3</option>
                  <option>name 3</option>
                  <option>name 5</option>
                  <option>name 6</option>
                  <option>name 7</option>
                </select>
              </div>
              <div className="form-group col-sm-6 flex-column d-flex"> <label className="form-control-label ">Search By Booking Number<span className="text-danger"> *</span></label>
                <input className='input' type="text" id="mob" name="mob" placeholder="" /> </div>
            </div>
            <div className="row justify-content-between text-left mb-4">
              <div className="form-group col-sm-6 flex-column d-flex"> <label className="form-control-label ">District Code<span className="text-danger"> *</span></label>
                <input className='input' type="text" id="booking" name="booking" placeholder="District Code" onblur="validate(3)" />

              </div>
              <div className="form-group col-sm-6 flex-column d-flex"> <label className="form-control-label ">Thana Select<span className="text-danger"> *</span></label>
                <input className='input' type="text" id="mob" name="mob" placeholder="Thana" /> </div>
            </div>
            <Table striped bordered hover>
              <thead>
                <tr>
                  <th>#</th>
                  <th>First Name</th>
                  <th>Last Name</th>
                  <th>Username</th>
                  <th>Action</th>

                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>Mark</td>
                  <td>Otto</td>
                  <td>@mdo</td>
                  <td><button btn btn-danger>Select</button></td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>Jacob</td>
                  <td>Thornton</td>
                  <td>@fat</td>
                  <td><button btn btn-danger>Select</button></td>
                </tr>
                <tr>
                  <td>3</td>
                  <td colSpan={2}>Larry the Bird</td>
                  <td>@twitter</td>
                  <td><button btn btn-danger>Select</button></td>
                </tr>
              </tbody>
            </Table>
          </div>
        </div>
      </div>
    </div>
  );
};

export const ReportsTwo = () => {
  return (
    <div className="container">
      <div className="d-flex px-1  w-100 justify-Content-center align-items-center vh-100">
        <div className="row d-flex   w-100">
          <h1 className="text-center pb-4">District Information</h1>
          <div className="col-md-6">
            <form className="form-card" onsubmit="event.preventDefault()">
              <div className="row justify-content-between text-left">
                <div className="form-group col-md-10 col-sm-12 flex-column d-flex"> <label className="form-control-label ">District Code<span className="text-danger"> *</span></label>
                  <input className='input' type="text" id="ans" name="ans" placeholder="" />
                </div>
              </div>
              <div className="form-group col-lg-10 col-sm-12 flex-column d-flex"> <label className="form-control-label ">District<span className="text-danger"> *</span></label> <input className='input' type="text" id="ans" name="ans" placeholder="" onblur="validate(6)" /> </div>
              <div className="row justify-content-end">
                <div className="d-flex border w-auto justify-content-center p-2 mx-auto mt-4">
                  <div className="update me-1">
                    <button className="btn border" >
                      <div className="all d-flex">
                        <div className="icon me-2">
                          <FaSave className="text-primary" />
                        </div>
                        <div className="name text-primary">
                          Save
                        </div>
                      </div>
                    </button>
                  </div>
                  <div className="update border me-2">
                    <button className="btn ">
                      <div className="all d-flex">
                        <div className="icon me-2">
                          <FaCircleNotch className="text-success" />
                        </div>
                        <div className="name text-success">
                          Refresh
                        </div>
                      </div>
                    </button>
                  </div>
                  <div className="update me-2">
                    <button className="btn border">
                      <div className="all d-flex">
                        <div className="icon me-2">
                          <FaTrashAlt className="text-danger" />
                        </div>
                        <div className="name text-danger">
                          Delete
                        </div>
                      </div>
                    </button>
                  </div>
                </div>
              </div>
            </form>
          </div>

          {/* Table Side */}

          <div className="col-md-6">
            <div className="row justify-content-between text-left mb-4">
              <div className="form-group col-sm-6 flex-column d-flex"> <label className="form-control-label ">Search By Name<span className="text-danger"> *</span></label>
                <select className='input' type="text" id="booking" name="booking" placeholder="Booking No" onblur="validate(3)" >
                  <option>Name</option>
                  <option>name 1</option>
                  <option>name 2</option>
                  <option>name 3</option>
                  <option>name 3</option>
                  <option>name 5</option>
                  <option>name 6</option>
                  <option>name 7</option>
                </select>
              </div>
              <div className="form-group col-sm-6 flex-column d-flex"> <label className="form-control-label ">Search By Booking Number<span className="text-danger"> *</span></label>
                <input className='input' type="text" id="mob" name="mob" placeholder="" /> </div>
            </div>
            <div className="px-2 pt-4 form-table">
              <table class="table table-hover table-bordered ">
                <thead>
                  <tr>
                    <th scope="col">#</th>
                    <th scope="col">First</th>
                    <th scope="col">Last</th>
                    <th scope="col">Handle</th>
                    <th scope="col">Action</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope="row">1</th>
                    <td>Mark</td>
                    <td>Otto</td>
                    <td>@mdo</td>
                    <td><button className="btn btn-success">Select</button></td>
                  </tr>
                  <tr>
                    <th scope="row">2</th>
                    <td>Mark</td>
                    <td>Otto</td>
                    <td>@mdo</td>
                    <td><button className="btn btn-success">Select</button></td>
                  </tr>
                  <tr>
                    <th scope="row">3</th>
                    <td>Mark</td>
                    <td>Otto</td>
                    <td>@mdo</td>
                    <td><button className="btn btn-success">Select</button></td>
                  </tr>
                  <tr>
                    <th scope="row">4</th>
                    <td>Mark</td>
                    <td>Otto</td>
                    <td>@mdo</td>
                    <td><button className="btn btn-success">Select</button></td>
                  </tr><tr>
                    <th scope="row">5</th>
                    <td>Mark</td>
                    <td>Otto</td>
                    <td>@mdo</td>
                    <td><button className="btn btn-success">Select</button></td>
                  </tr><tr>
                    <th scope="row">6</th>
                    <td>Mark</td>
                    <td>Otto</td>
                    <td>@mdo</td>
                    <td><button className="btn btn-success">Select</button></td>
                  </tr><tr>
                    <th scope="row">7</th>
                    <td>Mark</td>
                    <td>Otto</td>
                    <td>@mdo</td>
                    <td><button className="btn btn-success">Select</button></td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export const ReportsThree = () => {
  return (
    <div className='reports'>
      <div className="container">
        <div className="d-flex px-1  w-100 justify-Content-center align-items-center vh-100">
          <div className="row d-flex   w-100">
            <h1 className="text-center pb-4">Thana Information</h1>
            <div className="col-md-6">

              <div className="mx-auto">
                <form className="form-card" onsubmit="event.preventDefault()">
                  <div className="row justify-content-between text-left">
                    <div className="form-group col-md-10 col-sm-12 flex-column d-flex"> <label className="form-control-label ">Thana Code<span className="text-danger"> *</span></label>
                      <input className='input' type="text" id="ans" name="ans" placeholder="" onblur="validate(6)" />
                    </div>
                  </div>
                  <div className="form-group col-lg-10 col-sm-12 flex-column d-flex"> <label className="form-control-label ">Thana<span className="text-danger"> *</span></label> <input className='input w-100' type="text" id="ans" name="ans" placeholder="" onblur="validate(6)" /> </div>
                  <div className="row justify-content-end">
                    <div className="d-flex border w-auto justify-content-center p-2 mx-auto mt-4">
                      <div className="update me-1">
                        <button className="btn border" >
                          <div className="all d-flex">
                            <div className="icon me-2">
                              <FaSave className="text-primary" />
                            </div>
                            <div className="name text-primary">
                              Save
                            </div>
                          </div>
                        </button>
                      </div>
                      <div className="update border me-2">
                        <button className="btn ">
                          <div className="all d-flex">
                            <div className="icon me-2">
                              <FaCircleNotch className="text-success" />
                            </div>
                            <div className="name text-success">
                              Refresh
                            </div>
                          </div>
                        </button>
                      </div>
                      <div className="update me-2">
                        <button className="btn border">
                          <div className="all d-flex">
                            <div className="icon me-2">
                              <FaTrashAlt className="text-danger" />
                            </div>
                            <div className="name text-danger">
                              Delete
                            </div>
                          </div>
                        </button>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>

            {/* Table Side */}

            <div className="col-md-6">
              <div className="row justify-content-between text-left mb-4">
                <div className="form-group col-sm-6 flex-column d-flex"> <label className="form-control-label ">Search By Name<span className="text-danger"> *</span></label>
                  <select className='input' type="text" id="booking" name="booking" placeholder="Booking No" onblur="validate(3)" >
                    <option>Name</option>
                    <option>name 1</option>
                    <option>name 2</option>
                    <option>name 3</option>
                    <option>name 3</option>
                    <option>name 5</option>
                    <option>name 6</option>
                    <option>name 7</option>
                  </select>
                </div>
                <div className="form-group col-sm-6 flex-column d-flex"> <label className="form-control-label ">Search By Booking Number<span className="text-danger"> *</span></label>
                  <input className='input' type="text" id="mob" name="mob" placeholder="" /> </div>
              </div>
              <div className="px-2 pt-4 form-table">
                <table class="table table-hover table-bordered ">
                  <thead>
                    <tr>
                      <th scope="col">#</th>
                      <th scope="col">First</th>
                      <th scope="col">Last</th>
                      <th scope="col">Handle</th>
                      <th scope="col">Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th scope="row">1</th>
                      <td>Mark</td>
                      <td>Otto</td>
                      <td>@mdo</td>
                      <td><button className="btn btn-success">Select</button></td>
                    </tr>
                    <tr>
                      <th scope="row">2</th>
                      <td>Mark</td>
                      <td>Otto</td>
                      <td>@mdo</td>
                      <td><button className="btn btn-success">Select</button></td>
                    </tr>
                    <tr>
                      <th scope="row">3</th>
                      <td>Mark</td>
                      <td>Otto</td>
                      <td>@mdo</td>
                      <td><button className="btn btn-success">Select</button></td>
                    </tr>
                    <tr>
                      <th scope="row">4</th>
                      <td>Mark</td>
                      <td>Otto</td>
                      <td>@mdo</td>
                      <td><button className="btn btn-success">Select</button></td>
                    </tr><tr>
                      <th scope="row">5</th>
                      <td>Mark</td>
                      <td>Otto</td>
                      <td>@mdo</td>
                      <td><button className="btn btn-success">Select</button></td>
                    </tr><tr>
                      <th scope="row">6</th>
                      <td>Mark</td>
                      <td>Otto</td>
                      <td>@mdo</td>
                      <td><button className="btn btn-success">Select</button></td>
                    </tr><tr>
                      <th scope="row">7</th>
                      <td>Mark</td>
                      <td>Otto</td>
                      <td>@mdo</td>
                      <td><button className="btn btn-success">Select</button></td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export const ReportsFour = () => {
  return (
    <div className='reports'>
      <div className="container">
        <div className="row">
          <div className="col-lg-8">
            <div className="d-flex px-1 w-100 justify-Content-center align-items-center ">
              <div className="row d-flex w-100">
                <h1 className="text-center mt-4 py-4">Payment Details</h1>
                <div className="col-md-12">

                  <form className="form-card" onsubmit="event.preventDefault()">
                    <div className="row justify-content-between text-left ">
                      <div className="form-group col-md-4  flex-column d-flex">
                        <label className="form-control-label ">Voucher Type<span className="text-danger"> *</span></label>
                        <select className='input' id="code" name="code" >
                          <option>Voucher 1</option>
                          <option>Voucher 2</option>
                          <option>Voucher 3</option>
                          <option>Voucher 4</option>
                          <option>Voucher 5</option>
                        </select>
                      </div>
                      <div className="form-group col-md-4  flex-column d-flex"> <label className="form-control-label ">Voucher Number<span className="text-danger"> *</span></label> <input className='input' type="text" id="address" name="address" placeholder="Voucher Number" /> </div>
                      <div className="form-group col-md-4  flex-column d-flex"> <label className="form-control-label ">Voucher Date<span className="text-danger"> *</span></label> <input className='input' type="date" id="code" name="code" /> </div>
                    </div>

                    <div className="row justify-content-between text-left pt-3">
                      <div className="form-group col-md-4  flex-column d-flex">
                        <label className="form-control-label ">Head<span className="text-danger"> *</span></label>
                        <select className='input' id="code" name="code" placeholder="personal code">
                          <option>Head 1</option>
                          <option>Head 2</option>
                          <option>Head 3</option>
                          <option>Head 4</option>
                          <option>Head 5</option>
                          <option>Head 6</option>
                          <option>Head 7</option>
                        </select>
                      </div>
                      <div className="form-group col-md-4  flex-column d-flex"> <label className="form-control-label ">BDT 	&#40; TK. &#41;	<span className="text-danger"> *</span></label>
                        <input className='input' type="text" id="address" name="address" placeholder="BDT (TK.)" /> </div>
                      <div className="form-group col-md-4  flex-column d-flex"> <label className="form-control-label ">Choose Card<span className="text-danger"> *</span></label>
                        <div className="d-flex px-3 py-2 bg-light">
                          <div className="form-check form-check-inline">
                            <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2" />
                            <label className="form-check-label selected" for="inlineRadio2">Debit</label>
                          </div>
                          <div className="form-check form-check-inline">
                            <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio3" value="option3" />
                            <label className="form-check-label" for="inlineRadio3">Credit </label>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="row justify-content-between text-left pt-3">
                      <div className="form-group col-md-3  flex-column d-flex"> <label className="form-control-label ">Cheque No<span className="text-danger"> *</span></label> <input className='input' type="text" id="code" name="code" placeholder="Cheque Number" /> </div>
                      <div className="form-group col-md-3  flex-column d-flex"> <label className="form-control-label ">Issue Date<span className="text-danger"> *</span></label> <input className='input' type="Date" id="address" name="address" placeholder="Address" /> </div>
                      <div className="form-group col-md-3  flex-column d-flex"> <label className="form-control-label ">Deposit Date<span className="text-danger"> *</span></label> <input className='input' type="date" id="code" name="code" placeholder="personal code" /> </div>
                      <div className="form-group col-md-3  flex-column d-flex"> <label className="form-control-label ">Clear Date<span className="text-danger"> *</span></label> <input className='input' type="date" id="code" name="code" placeholder="personal code" /> </div>
                    </div>


                    <div className="row justify-content-between text-left pt-3">
                      <div className="form-group col-md-12 col-sm-12  flex-column d-flex"> <label className="form-control-label "><span className="text-danger"> *</span></label> <input className='input' style={{ height: '100px' }} type="text" id="code" name="code" placeholder="" /> </div>
                      {/* <div className="form-group col-md-12 col-sm-12  flex-column d-flex"> <label className="form-control-label "><span className="text-danger"> *</span></label> <textarea className='input' style={{height: '200px'}} type="text" id="code" name="code" placeholder="Write Something..." /> </div> */}
                      <div className="px-2 pt-4 form-table">
                        <table class="table table-hover table-bordered ">
                          <thead>
                            <tr>
                              <th scope="col">#</th>
                              <th scope="col">First</th>
                              <th scope="col">Last</th>
                              <th scope="col">Handle</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <th scope="row">1</th>
                              <td>Mark</td>
                              <td>Otto</td>
                              <td>@mdo</td>
                            </tr>
                            <tr>
                              <th scope="row">2</th>
                              <td>Mark</td>
                              <td>Otto</td>
                              <td>@mdo</td>
                            </tr>
                            <tr>
                              <th scope="row">3</th>
                              <td>Mark</td>
                              <td>Otto</td>
                              <td>@mdo</td>
                            </tr>
                            <tr>
                              <th scope="row">4</th>
                              <td>Mark</td>
                              <td>Otto</td>
                              <td>@mdo</td>
                            </tr><tr>
                              <th scope="row">5</th>
                              <td>Mark</td>
                              <td>Otto</td>
                              <td>@mdo</td>
                            </tr><tr>
                              <th scope="row">6</th>
                              <td>Mark</td>
                              <td>Otto</td>
                              <td>@mdo</td>
                            </tr><tr>
                              <th scope="row">7</th>
                              <td>Mark</td>
                              <td>Otto</td>
                              <td>@mdo</td>
                            </tr>
                            <tr>
                              <th scope="row">8</th>
                              <td>Jacob</td>
                              <td>Thornton</td>
                              <td>@fat</td>
                            </tr>
                            <tr>
                              <th scope="row">9</th>
                              <td colSpan="2">Larry the Bird</td>
                              <td>@twitter</td>
                            </tr>
                            <tr>
                              <th scope="row">10</th>
                              <td colSpan="2">Larry the Bird</td>
                              <td>@twitter</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>


                    <div className="row justify-content-end">
                      <div className="d-flex border w-auto justify-content-center p-2 mx-auto mt-4">
                        <div className="update me-1">
                          <button className="btn border" >
                            <div className="all d-flex">
                              <div className="icon me-2">
                                <FaSave className="text-primary" />
                              </div>
                              <div className="name text-primary">
                                Save
                              </div>
                            </div>
                          </button>
                        </div>
                        <div className="update border me-2">
                          <button className="btn ">
                            <div className="all d-flex">
                              <div className="icon me-2">
                                <FaCircleNotch className="text-success" />
                              </div>
                              <div className="name text-success">
                                Refresh
                              </div>
                            </div>
                          </button>
                        </div>
                        <div className="update me-2">
                          <button className="btn border">
                            <div className="all d-flex">
                              <div className="icon me-2">
                                <FaTrashAlt className="text-danger" />
                              </div>
                              <div className="name text-danger">
                                Delete
                              </div>
                            </div>
                          </button>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4">

            {/* something */}

            <div className="d-flex px-1 w-100 justify-Content-center h-100 align-items-center">
              <div className="d-flex flex-column py-2 mx-auto">
                <div className="update mb-3">
                  <button className="btn border" >
                    <div className="all d-flex">
                      <div className="icon me-2">
                        <FaSave className="text-primary" />
                      </div>
                      <div className="name text-primary">
                        Save
                      </div>
                    </div>
                  </button>
                </div>
                <div className="update border mb-3">
                  <button className="btn ">
                    <div className="all d-flex">
                      <div className="icon me-2">
                        <FaCircleNotch className="text-success" />
                      </div>
                      <div className="name text-success">
                        Refresh
                      </div>
                    </div>
                  </button>
                </div>
                <div className="update mb-3">
                  <button className="btn border">
                    <div className="all d-flex">
                      <div className="icon me-2">
                        <FaTrashAlt className="text-danger" />
                      </div>
                      <div className="name text-danger">
                        Delete
                      </div>
                    </div>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};