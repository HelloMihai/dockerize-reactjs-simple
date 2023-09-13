import React, { useEffect, useState } from "react"

export default class ProteinCalculator extends React.Component {
  constructor() {
    super();
    const initialState = {LBM: true, gPerKg: 1.6, userLbs: 180, convertedToKg: 0, userKg: 0, userBf: 24, proteinResult: 0}
    const calculatedValues = this.calculateResult(initialState.LBM, initialState.userLbs, initialState.userBf, initialState.gPerKg);
    this.state = {...initialState, ...calculatedValues};
  }
  /** returns {proteinResult: 123, convertedToKg: 123, userKg: 123} */
  calculateResult(LBM, userLbs, userBf, gPerKg) {
    const response = {proteinResult: -1, convertedToKg: -1, userKg: -1};
    let kg = this.calcLbsToKg(userLbs);
    response.convertedToKg = kg;
    response.userKg = LBM ? this.calcLBM(kg, userBf) : kg;
    response.proteinResult = response.userKg*gPerKg;
    return response;
  }
  onChangeLBM(e) {
    const LBM = e.target.value === 'LBM';
    this.setState(rest => ({...rest, LBM}), () => this.updateResult());
  }
  setStateHelper(e, propName) {
    const obj = {}
    obj[propName] = Number(e.target.value);
    this.setState(rest => ({...rest, ...obj}), () => this.updateResult());
  }
  calcLBM(userKg, userBf) {
    return userKg-(userKg*(userBf/100));
  }
  calcLbsToKg(lbs) {
    return lbs * 0.453592;
  }
  updateResult() {
    const state = this.state;
    const calculatedValues = this.calculateResult(state.LBM, state.userLbs, state.userBf, state.gPerKg);
    this.setState(rest => ({...rest, ...calculatedValues}));
  }
  render() {
    const state = this.state;
    const containerStyle = { border: '1px solid blue', margin: '20px', padding: '20px', fontSize: '12px', width: '300px' };
    const inputContainerStyle = { width: '100%', margin: '10px 10px 10px 70px', justifyContent: 'start', display: 'flex' };
    const inputStyle = { width: '40px', marginRight: '10px' };
    const inputData = [
      {className:'user-lbs', statePropName:'userLbs', toFixed:0, value:state.userLbs, postText:`lbs = ${state.convertedToKg.toFixed(0)} kg`},
      {className:'user-kg', statePropName:'userKg', toFixed:0, value:state.userKg, postText:`${state.LBM ? 'LBM' :'Total'} kg`, disabled:true},
      {className:'user-bf', statePropName:'userBf', toFixed:0, value:state.userBf, postText:'body fat %', disabled:!state.LBM},
      {className:'g-per-kg', statePropName:'gPerKg', toFixed:1, value:state.gPerKg, postText:`grams per ${state.LBM ? 'LBM' :'Total'} kg`},
      {className:'protein-result', statePropName:'proteinResult', toFixed:0, value:state.proteinResult,readOnly:true, postText:'total grams per day', disabled:true}
    ]
    const userInputElements = inputData.map( (item, i) => {
      return (
        <div key={i} style={inputContainerStyle}>
          <input
            className={item.className}
            style={inputStyle}
            type='number'
            value={item.value.toFixed(item.toFixed)}
            onChange={e => this.setStateHelper(e, item.statePropName)}
            readOnly={item.readOnly}
            disabled={item.disabled}
          />
          <span> {item.postText}</span>
        </div>
      )
    });
    return (
      <div className="protein-calculator" style={containerStyle}>
        <div>protein calculator with Lean Body Mass (LBM) and body fat percentage (bf)</div>
        <div>
          <input type="radio" name="weigth" onChange={(e) => this.onChangeLBM(e)} checked={state.LBM} value="LBM" id="LBM"/><label>LBM</label>
          <input type="radio" name="weight" onChange={(e) => this.onChangeLBM(e)} checked={!state.LBM} value="Total" id="Total"/><label>Total Weight</label>
        </div>
        {userInputElements}
      </div>
    )
  }
}