import React from "react";
import {Link} from 'react-router-dom'

const Contact = (){
    return(
        <div>
     <div>
      <div>
        <h2>Select Your Trip Date</h2>
        <div>
          <button>Start Date</button>
          <button>End Date</button>
        </div>
      </div>

      <div>
        <h2>Traveling With</h2>
        <div>
          <button>Alone</button>
          <button>With Family</button>
          <button>With Friends</button>
          <button>With a Partner</button>
        </div>
      </div>

      <div>
        <h2>Select Category</h2>
        <div>
          <button>Arts</button>
          <button>Food</button>
          <button>Outdoor</button>
          <button>Historical</button>
          <button>Sports</button>
          <button>Family Fun</button>
        </div>
      </div>
    </div>
        </div>
    )
}