import {html} from 'snabbdom-jsx';

function renderLabeledText(id, label, type="text", value="") {
  return (
    <div className="form-group row">
      <div className="col-md-4 col-sm-5">
        <label for={id} className="col-form-label">{label}: </label>
      </div>
      <div className="col-md-8 col-sm-7">
        <input id={id} name={id} type={type} value={value} placeholder={label} className="form-control"/>
      </div>
    </div>
  )
}

export default function view(state$) {
  return state$.map(state => 
    <div className="row">
      <div className="card col-md-6 offset-md-3 p-0">
        <div className="card-header">Login</div>
        <div className="card-block container">
          { renderLabeledText("text-login","Login") }
          { renderLabeledText("text-password","Password","password") }
          <div className="row">
            <div className="offset-md-5 offset-sm-4">
              <a href="#" className="btn btn-primary">Sign In</a>
              <a href="#" id="btn" className="btn btn-primary">Sign In With Error</a>
            </div>
          </div>
          <div className="row">
            <div className="col card-text"><p>
              {JSON.stringify(state)}
            </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
