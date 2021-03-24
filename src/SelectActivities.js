import React, {useState} from 'react';

function SelectActivities({ Login, error }) {
  const [details, setDetails] = useState({option1:"", option2:"", option3:"", option4:"", option5:""})
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
                  <li><select name="1" id="1" onChange={e => setDetails({...details, option1: e.target.value})} value={details.option1} >
                  <option value=""></option>
                  <option value="Swimming">Swimming</option>
                  <option value="Running">Running</option>
                  <option value="Football">Football</option>
                  <option value="Basketball">Basketball</option>
                  <option value="Cycling">Cycling</option>
                  </select></li>
                  <li><select name="2" id="2" onChange={e => setDetails({...details, option2: e.target.value})} value={details.option2}>
                  <option value=""></option>
                  <option value="Swimming">Swimming</option>
                  <option value="Running">Running</option>
                  <option value="Football">Football</option>
                  <option value="Basketball">Basketball</option>
                  <option value="Cycling">Cycling</option>
                  </select></li>
                  <li><select name="3" id="3" onChange={e => setDetails({...details, option3: e.target.value})} value={details.option3}>
                  <option value=""></option>
                  <option value="Swimming">Swimming</option>
                  <option value="Running">Running</option>
                  <option value="Football">Football</option>
                  <option value="Basketball">Basketball</option>
                  <option value="Cycling">Cycling</option>
                  </select></li>
                  <li><select name="4" id="4" onChange={e => setDetails({...details, option4: e.target.value})} value={details.option4}>
                  <option value=""></option>
                  <option value="Swimming">Swimming</option>
                  <option value="Running">Running</option>
                  <option value="Football">Football</option>
                  <option value="Basketball">Basketball</option>
                  <option value="Cycling">Cycling</option>
                  </select></li>
                  <li><select name="5" id="5" onChange={e => setDetails({...details, option5: e.target.value})} value={details.option5}>
                  <option value=""></option>
                  <option value="Swimming">Swimming</option>
                  <option value="Running">Running</option>
                  <option value="Football">Football</option>
                  <option value="Basketball">Basketball</option>
                  <option value="Cycling">Cycling</option>
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
