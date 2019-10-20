import React, { useState } from 'react'

import { Button } from 'react-bootstrap'

const Data = (props) => {
  const [data, setData] = useState([{"country":"France","city":"La Roche-sur-Yon","date":"25/02/1958","name":"ConsequatIn.txt"},
  {"country":"France","city":"Saumur","date":"03/05/2011","name":"Pulvinar.xls"},
  {"country":"Yemen","city":"Yarīm","date":"18/02/1963","name":"QuamSapienVarius.xls"},
  {"country":"Nigeria","city":"Kazaure","date":"22/11/1971","name":"PedeMalesuadaIn.xls"},
  {"country":"Brazil","city":"Cassilândia","date":"29/11/1993","name":"Luctus.xls"},
  {"country":"Philippines","city":"Causip","date":"01/03/1958","name":"NequeLibero.mov"},
  {"country":"Czech Republic","city":"Nymburk","date":"12/05/1960","name":"Lobortis.ppt"},
  {"country":"Indonesia","city":"Lalukoen Dua","date":"05/03/2001","name":"SuspendissePotenti.mp3"},
  {"country":"Indonesia","city":"Bungur","date":"25/05/1982","name":"IpsumAliquamNon.mp3"},
  {"country":"Peru","city":"Cabanaconde","date":"26/12/1967","name":"MaurisVulputate.avi"}])
  
  return(
    <div className="data">
      <h1>
        Data Sets
      </h1>
      <div className="data-table">
        <ul>
          <li className="data-item data-item-title">
            <div className="data-item-label">
              Country
            </div>
            <div className="data-item-label">
              City
            </div>
            <div className="data-item-label">
              Date
            </div>
            <div className="data-item-label">
              Action
            </div>
          </li>
          {data.map((data, idx) => 
            <li className="data-item">
              <div className="data-item-label">
                {data.country}
              </div>
              <div className="data-item-label">
                {data.city}
              </div>
              <div className="data-item-label">
                {data.date}
              </div>
              <div className="data-item-label">
                <Button>Download</Button>
              </div>
            </li>)}
        </ul>
      </div>
    </div>
  )
}

export default Data