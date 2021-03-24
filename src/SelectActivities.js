import React, {useState} from 'react';

function SelectActivities({ Login, error }) {
  const [details, setDetails] = useState({name:"", email:"", password:""})
// to keep the details updated => bind each of the inputs to onchange
  const submitHandler = e => {
    e.preventDefault();///!!!!!!!!!Important!!

    Login(details);
  }

  return (
    <form onSubmit={submitHandler}>
              <div className="form-inner">
              <h2>Select up to 5 favourite sports</h2>
              {/*ERROR*/ (error != "") ? (<div className="error">{error}</div>) : ""}
                <ol>
                  <li><select>
                  <option></option>
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                  <option>4</option>
                  <option>5</option>
                  </select></li>
                  <li><select>
                  <option></option>
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                  <option>4</option>
                  <option>5</option>
                  </select></li>
                  <li><select>
                  <option></option>
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                  <option>4</option>
                  <option>5</option>
                  </select></li>
                  <li><select>
                  <option></option>
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                  <option>4</option>
                  <option>5</option>
                  </select></li>
                  <li><select>
                  <option></option>
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                  <option>4</option>
                  <option>5</option>
                  </select></li>
                </ol>
              </div>
              <div style={{textAlign: "center"}}>
              <input type="submit" value="LOGIN" />
              </div>
            </form>
    // <form onSubmit={submitHandler}>
    //   <div className="form-inner">
    //     <h2> Login </h2>
    //     {/*ERROR*/ (error != "") ? (<div className="error">{error}</div>) : ""}
    //     <div className="form-group">
    //       <label htmlFor="name">Name:</label>
    //       <input type="text" name="name" id="name" onChange={e => setDetails({...details, name: e.target.value})} value={details.name} />
    //     </div>
    //     <div className="form-group">
    //       <label htmlFor="email">Email:</label>
    //       <input type="email" name="email" id="email" onChange={e => setDetails({...details, email: e.target.value})} value={details.email} />
    //     </div>
    //     <div className="form-group">
    //       <label htmlFor="password">Password:</label>
    //       <input type="password" name="password" id="password" onChange={e => setDetails({...details, password: e.target.value})} value={details.password} />
    //     </div>
    //     <input type="submit" value="LOGIN" />
    //   </div>
    // </form>
  )
}

export default SelectActivities;
// <select name="cars" id="cars" form="carform">
//   <option value="volvo">Volvo</option>
//   <option value="saab">Saab</option>
//   <option value="opel">Opel</option>
//   <option value="audi">Audi</option>
// </select>
