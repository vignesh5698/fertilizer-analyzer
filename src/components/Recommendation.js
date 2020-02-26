import React, { Component } from 'react';

const fertilizer = {
  'SSP fertilizer': "Single superphosphate (SSP) was the first commercial mineral fertilizer, and it led to the development of the modern plant nutrient industry. This material was once the most commonly used fertilizer, but other phosphorus (P) fertilizers have largely replaced SSP because of its relatively low P content.",
  'Ammonium Phosphate fertilizer': "Ammonium phosphate is the salt of ammonia and phosphoric acid. With a chemical formula of (NH4)3PO4, ammonium phosphate is found in crystalline powder form, and is soluble in water.For years, it has been instituted as an effective fertilizer, with good water solubility and rapid dissolving abilities. Not only that, but its two molecular bases, ammonium and phosphate, are crucial minerals for the healthy and sustained growth of plants. It does this by helping the plant convert the many nutrients within the plant into “building blocks” of growth. ",
  'Urea fertilizer': "Urea is the most important nitrogenous fertilizer in the market, with the highest Nitrogen content (about 46 percent). It is a white crystalline organic chemical compound. Urea is neutral in pH and can adapt to almost all kinds of soils. It is a waste product formed naturally by metabolizing protein in humans as well as other mammals, amphibians and some fish. Urea is widely used in the agricultural sector both as a fertilizer and animal feed additive.",
  'Ammonium Chloride fertilizer': "Ammonium Chloride contains 25 percent Nitrogen. Besides nitrogen, Chlorine present in Ammonium Chloride is also an important micro nutrient. Improves root formation and ensures quality product output. The entire Nitrogen is present in Ammonical form. Ammoniacal Nitrogen is not lost by leaching, since  NH4+ is fixed by soil clay and humus complex. On application to the field, nitrogen will be released as and when the demand arises from the crop.",
  'TSP fertilizer': "Triple Super Phosphate (TSP) fertilizer is composed of inorganic nutrients that are used to restore soil components essential for farming. TSP is the abbreviation of triple superphosphate with chemical formula of Ca(H2PO4). The concentration of P2O5 (PHOSPHATE) is around 44-46%. Phosphate is one of the soil components that is vital to help promote root growth of all kinds of plants, so that the roots will be thicker, stronger and healthier. Phosphate will thus strengthen the trunk and increase its resistance against disease and pests, as well as reduce the risk of uprooting and spur flower development and seed maturity, thus accelerating harvest times. ", 
  'CAN fertilizer': "YaraBela CAN (27% N) is a quality granular calcium ammonium nitrate based nitrogen fertiliser for use on any crop. CAN contains nitrogen as nitrate and ammonium. Plants require nitrogen in the ammonium and nitrate forms, so by applying these forms the nutrients are immediately available for plant growth. Nitrates are the most efficient form of nitrogen and are key to achieving optimum yields. CAN is a homogeneous, uniform sized, high bulk density granular fertiliser for even spreading over wide bout widths.",
  'DAP fertilizer': "Diammonium phosphate (DAP) is the world’s most widely used phosphorus fertilizer. It’s made from two common constituents in the fertilizer industry, and its relatively high nutrient content and excellent physical properties make it a popular choice in farming and other industries. DAP fertilizer is an excellent source of P and nitrogen (N) for plant nutrition. It’s highly soluble and thus dissolves quickly in soil to release plant-available phosphate and ammonium. A notable property of DAP is the alkaline pH that develops around the dissolving granule.",
  'AS fertilizer': "In modem agriculture, most solid and liquid fertilizers are surface-applied. Additionally, nutrient cycling brings nutrients to the soil surface. Conventional tillage with moldboard plowing mixes the surface 15 to 25 cm of soil, whereas conservation tillage mixes much less to essentially none. Thus, fertilizer nutrients and nutrients in organic matter get mixed into the soil annually under conventional tillage but tend to accumulate near the soil surface under conservation tillage. In the latter case, the mixing process is dependent largely on natural mixing forces, such as freezing and thawing, earthworms, and other natural forces of disturbance.",
  'Urea ammonium phosphate fertilizer': "Urea is the most important nitrogenous fertilizer in the market, with the highest Nitrogen content (about 46 percent). It is a white crystalline organic chemical compound. Urea is neutral in pH and can adapt to almost all kinds of soils. It is a waste product formed naturally by metabolizing protein in humans as well as other mammals, amphibians and some fish. Urea is widely used in the agricultural sector both as a fertilizer and animal feed additive. Urea can easily be blended with Mono-ammonium Phosphate (MAP) or Di-ammonium Phosphate (DAP). However, Urea must not be mixed with any superphosphate unless applied immediately after blending as Urea reacts with superphosphate liberating water molecules. This will produce a damp material that is hard to store and apply."
}

const price = {
  'SSP fertilizer': "₹ 362.00 per 50KG",
  'Ammonium Phosphate fertilizer': "₹ 204.00 per KG",
  'Urea fertilizer': "₹ 276.12 per 50KG",
  'Ammonium Chloride fertilizer': "₹ 400 per KG",
  'TSP fertilizer': "₹ 418.60 per 50KG",
  'CAN fertilizer': "₹ 300 per 10KG",
  'DAP fertilizer': "₹ 268.23 per 50KG",
  'AS fertilizer': "₹ 276.12 per 50KG",
  'Urea ammonium phosphate fertilizer': "₹ 368.94 per 50KG"
}

class Recommendations extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValues: props.inputValues || {
        soilType: 'Yellow',
        nValue: 480,
        pValue: 11,
        kValue: 111
      }
    }
  }

  renderInputValues = () => {
    const { inputValues } = this.state;
    return(
      <div>
        <h5 className="font-weight-bold">Given Values</h5>
        <table className="table">
          <thead>
            <tr>
              <th scope="col">Soil Type</th>
              <th scope="col">N-Value</th>
              <th scope="col">P-Value</th>
              <th scope="col">K-Value</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{`${inputValues.soilType} soil`}</td>
              <td>{inputValues.nValue}</td>
              <td>{inputValues.pValue}</td>
              <td>{inputValues.kValue}</td>
            </tr>
          </tbody>
        </table>
      </div>
    )
  }

  getRecommendation = () => {
    const { soilType, nValue, pValue, kValue } = this.state.inputValues;
    let recommendedFertilizer = null;
    if(soilType === 'Alluvial') {
      if(nValue >= 240 && nValue <= 480 && pValue < 22 && kValue < 110) {
        recommendedFertilizer = 'SSP fertilizer';
      }
      if(nValue >= 240 && nValue <= 480 && pValue >= 22 && kValue < 110) {
        recommendedFertilizer = 'Ammonium Phosphate fertilizer';
      }
      if(nValue >= 480 && pValue <= 11 && kValue > 280) {
        recommendedFertilizer = 'Urea fertilizer';
      }
    } else if(soilType === 'Laterite') {
      if(nValue < 240 && pValue < 11 && kValue < 110) {
        recommendedFertilizer = 'Ammonium Chloride fertilizer';
      }
    } else if(soilType === 'Black') {
      if(nValue > 480 && pValue >= 11 && pValue <= 22 && kValue < 110) {
        recommendedFertilizer = 'TSP fertilizer'
      }
      if(nValue < 240 && pValue <= 22 && kValue >= 110 && kValue <= 280) {
        recommendedFertilizer = 'SSP fertilizer';
      }
      if(nValue >= 240 && nValue <= 480 && pValue <= 11 && kValue <= 110) {
        recommendedFertilizer = 'CAN fertilizer';
      }
    } else if(soilType === 'Red') {
      if(nValue <= 240 && pValue > 22 && kValue > 280) {
        recommendedFertilizer = 'DAP fertilizer';
      }
      if(nValue <= 480 && pValue >= 11 && pValue <= 22 && kValue <= 110) {
        recommendedFertilizer = 'AS fertilizer';
      }
    } else if(soilType === 'Yellow') {
      if(nValue >= 480 && pValue >= 11 && pValue <= 22 && kValue >= 110) {
        recommendedFertilizer = 'Urea ammonium phosphate fertilizer';
      }
    }
    return recommendedFertilizer;
  }

  renderRecommendation = () => {
    const recommededFertilizer = this.getRecommendation() || 'No fertilizer available for given values';
    console.log(recommededFertilizer)
    return(
      <div>
        <h5 className="font-weight-bold">Recommeded fertilizer</h5>
        <table className="table">
          <thead>
            <tr>
              <th scope="col" className="custom-padding">Name</th>
              <th scope="col" className="font-weight-normal">{recommededFertilizer}</th>
            </tr>
            <tr>
              <th scope="col" className="custom-padding">Price</th>
              <th scope="col" className="font-weight-normal">{price[recommededFertilizer]}</th>
            </tr>
            <tr>
              <th scope="col" className="custom-padding">Description</th>
              <th scope="col" className="font-weight-normal">{fertilizer[recommededFertilizer]}</th>
            </tr>
          </thead>
        </table>
      </div>
    )
  }

  render() {
    console.log(this.state.inputValues)
    return (
      <div className='recommendation'>
        <div className="card custom-card">
          <h3 className="card-header custom-title">
            RECOMMENDATION
          </h3>
          <div className="card-body">
            {this.renderInputValues()}
            {this.renderRecommendation()}
          </div>
          <div className="card-footer text-muted custom-center">
            <button className="btn btn-outline-primary mr-2" onClick={this.props.onBack}>Back</button>
            <button className="btn btn-outline-danger" onClick={this.props.onLogout}>Logout</button>
          </div>
        </div>
      </div>
    );
  }
}
 
export default Recommendations;