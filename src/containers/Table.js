import React from 'react';
import './Table.css';

 export default function Table(props){
    let deals = props.deals.map((d, i) => <TableRecord key={i} deal={d} />) ;
    return (
        <table>
            <thead>
                <tr>
                    <td>About</td>
                    <td>Contract Length</td>
                    <td>speed/usage</td>
                    <td>offer</td>
                    <td>TV</td>
                    <td>Mobile</td>
                    <td>Cost</td>
                </tr>
            </thead>
            <tbody>
                { deals }
            </tbody>
        </table>
    );
 }

 function TableRecord(props) {
     return (
        <tr>
            <td>{ props.deal.title }</td>
            <td>{ props.deal.contractLength } month</td>
            <td>{ props.deal.speed.label }<br />{ props.deal.usage.label }</td>
            <td><img alt="logo not avalible" src={ props.deal.offer.smallLogo }/></td>
            <td>{ props.deal.popularChannels && props.deal.popularChannels.length > 0  ? <TVDeal channels={props.deal.popularChannels} /> : 'N/A' }</td>
            <td>{ props.deal.mobile ? <Mobile mobile={props.deal.mobile} /> : 'N/A' }</td>
            <td>£{ props.deal.prices[0].totalContractCost }</td>
        </tr>
     )
 }

 function Mobile(props) {
     return(
        <p>
            Data: {props.mobile.data.label} <br />
            Minutes: {props.mobile.minutes.label} <br/>
            Texts: {props.mobile.texts.label} <br/>
            Connection: {props.mobile.connectionType.label} <br/>
        </p>
     )
 }

 function TVDeal(props) {
     let channels = props.channels.map((c, i) => <div key={i}><img alt="not avalible" src={c.logo}/></div>);
     return(<div>{channels}</div>);
 }