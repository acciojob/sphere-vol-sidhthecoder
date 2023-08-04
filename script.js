function volume_sphere(e) {
	e.preventDefault();
    let r=document.getElementById("radius").value;

	let vol=1.33333333333*3.14159265359*r*r*r;

	document.getElementById("volume").value=vol.toFixed(4);
  
} 

window.onload = document.getElementById('MyForm').onsubmit = volume_sphere;
