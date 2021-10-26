import React from "react"
import ModalHappyB from "../modal"


function Options () {
    return(
        <div className="grid-wrapper">
	<div className= "btn-img">
		<img src="https://i.postimg.cc/wBhJ7Y6k/academia.png" />
	<a href="https://stefanini.konviva.com.br/lms/#/home" target="_blank" rel="noopener noreferrer" className="option-link">
	<h3 class="image__title">Academia Stefanini</h3></a>	
	</div>

	<div className="btn-img">
		<img src="https://i.postimg.cc/Gpcmr4pd/Ascendo.png" alt="" />
		<a href="https://hr.acsendo.com/results/admin" target="_blank" rel="noopener noreferrer" className="option-link">
	<h3 class="image__title">Ascendo</h3></a>	
	</div>
	<div className= "btn-img tall">
		<img src="https://i.postimg.cc/T1WRQmtq/Kenoby.png" alt=""/>
		<a href="https://jobs.kenoby.com/stefaninilatam" target="_blank" rel="noopener noreferrer" className="option-link">
	<h3 class="image__title">Kenoby</h3></a>	
	</div>
	<div className= "btn-img wide">
		<img src="https://i.postimg.cc/7ZRXg4r8/skill-Mapping.jpg" alt="" />
		<a href="https://integra.stefanini.com/portal/0103PROD/PortalSkillMapping#" target="_blank" rel="noopener noreferrer" className="option-link">
	<h3 class="image__title">Skill Mapping</h3></a>	
	</div>
	<div className="btn-img">
		<img src="https://i.postimg.cc/3wPSHTtC/RRHH.jpg " alt="" />
		<a href="http://verticales.inetcloud.cl:8082/rrhh/login.aspx" target="_blank" rel="noopener noreferrer" className="option-link">
	<h3 class="image__title">Portal RRHH</h3></a>	
	</div>
	<div className= "btn-img">
		<img src="https://i.postimg.cc/qRP9Qnfr/cumple.jpg" alt="" />
		<a href="/Admin" target="_blank" rel="noopener noreferrer" className="option-link">
	<h3 class="image__title">Cumpleaños</h3></a>	
	</div>
	<div className= "btn-img">
		<img src="https://i.postimg.cc/BbPVKvtz/beneficios.jpg" alt="" />
		<a href="/Admin" target="_blank" rel="noopener noreferrer" className="option-link">
	<h3 class="image__title">Beneficios Corporativos</h3></a>	
	</div>
</div>
    )
}
export default Options