import React, { Component } from 'react';

class FillFertilizer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      soilType: null,
      nValue: null,
      pValue: null,
      kValue: null,
      showError: false
    }
  }

  renderLoginError = () => {
    return(
      <div className="alert alert-danger custom-center" role="alert">
        Please fill all values!
      </div>
    )
  }

  onChangeSoilType = (event) => {
    this.setState({
      soilType: event.target.value
    })
  }

  onChangeInput = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  onRecommendation = () => {
    const { soilType, nValue, pValue, kValue} = this.state;
    if(soilType && nValue && pValue && kValue) {
      this.props.onRecommendation(this.state);
    } else {
      this.setState({
        showError: true
      })
    }
  }

  renderFillFertilizerForm = () => {
    return(
      <div>
        <form>
          <div className="form-group">
            <label>Soil type</label>
            <select className="custom-select" onChange={this.onChangeSoilType}>
              <option selected>Select the soil type</option>
              <option value="Alluvial">Alluvial soil</option>
              <option value="Laterite">Laterite soil</option>
              <option value="Black">Black soil</option>
              <option value="Red">Red soil</option>
              <option value="Yellow">Yellow soil</option>
            </select>
          </div>
          <div className="form-group">
            <label>N-Value</label>
            <input className="form-control" name="nValue" onChange={(e) => this.onChangeInput(e)} placeholder="Enter N-Value" />
          </div>
          <div className="form-group">
            <label>P-Value</label>
            <input className="form-control" name="pValue" onChange={(e) => this.onChangeInput(e)} placeholder="Enter P-Value" />
          </div>
          <div className="form-group">
            <label>K-Value</label>
            <input className="form-control" name="kValue" onChange={(e) => this.onChangeInput(e)} placeholder="Enter K-Value" />
          </div>
        </form>
      </div>
    )
  }

  render() {
    const { showError } = this.state;
    return (
      <div className='fill-fertilizer'>
      <div className="card custom-card">
        <h3 className="card-header custom-title">
          FERTILIZER ANALYZER
        </h3>
        <div className="card-body">
          {this.renderFillFertilizerForm()}
        </div>
        {showError ? this.renderLoginError() : ''}
        <div className="card-footer text-muted custom-center p-3">
          <button type="button" className="btn btn-outline-info mr-3" onClick={this.onRecommendation}>Get fertilizer recommendation</button>
          <button className="btn btn-outline-danger" onClick={this.props.onLogout}>Logout</button>
        </div>
      </div>
    </div>
    );
  }
}
 
export default FillFertilizer;