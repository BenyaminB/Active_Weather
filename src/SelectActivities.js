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
              <h3>Select up to 5 favourite sports</h3>
              {/*ERROR*/ (error != "") ? (<div className="error">{error}</div>) : ""}
              <div class="select-options">
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
            </div>
            </form>
  )
}

export default SelectActivities;
