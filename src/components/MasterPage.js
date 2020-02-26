import React, { Component } from 'react';
import Login from './Login';
import FillFertilizer from './FillFertilizer';
import Recommendations from './Recommendation';

class MasterPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLogged: !false,
      showRecommendation: !false,
      inputValues: null
    }
  }

  onLogin = () => {
    this.setState({
      isLogged: true
    })
  }

  onLogout = () => {
    this.setState({
      isLogged: false
    })
  }

  onRecommendation = (inputValues) => {
    this.setState({
      inputValues,
      showRecommendation: true
    });
  }

  onFillFertilizer = () => {
    this.setState({
      showRecommendation: false
    });
  }

  render() {
    const { isLogged, showRecommendation, inputValues } = this.state;
    return (
      <div>
        {isLogged ? 
          (showRecommendation ? 
            <Recommendations inputValues={inputValues} onBack={this.onFillFertilizer} onLogout={this.onLogout} /> :
            <FillFertilizer onRecommendation={this.onRecommendation} onLogout={this.onLogout} />
          ) :
          <Login onLogin={this.onLogin} />
        }
      </div>
    );
  }
}
 
export default MasterPage;