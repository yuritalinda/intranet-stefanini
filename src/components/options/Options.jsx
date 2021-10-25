import React from "react"
import ModalHappyB from "../modal"


function Options () {
    return(
        <div className="grid-wrapper">
	<div className= "btn-img">
	<img onClick="https://stefanini.konviva.com.br/lms/#/home" src="https://i.postimg.cc/CLJBPWKb/academia.png" alt="" />
	</div>
	<div className="btn-img">
		<img onClick={ModalHappyB} src="https://i.postimg.cc/3NWRZt7G/kenoby.png" alt="" />
	</div>
	<div className= "btn-img tall">
		<img src="https://i.postimg.cc/525xLhvG/RRHH.jpg" alt=""/>
	</div>
	<div className= "btn-img wide">
		<img src="https://i.postimg.cc/C1hdRFQm/ascendo.png" alt="" />
	</div>
	<div className="btn-img">
		<img src="https://i.postimg.cc/525xLhvG/RRHH.jpg" alt="" />
	</div>
	<div className= "btn-img">
		<img src="https://i.postimg.cc/X7CN7Gvn/skill-Mapping.jpg" alt="" />
	</div>
</div>
    )
}
export default Options