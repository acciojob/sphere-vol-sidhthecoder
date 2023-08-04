function volume_sphere(e) {
	e.preventDefault();
    let r=document.getElementById("radius").value;

	let vol=(4/3)*3.14*r*r*r;

	document.getElementById("volume").value=vol;
  
} 

window.onload = document.getElementById('MyForm').onsubmit = volume_sphere;
