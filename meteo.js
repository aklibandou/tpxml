		
			
		function showCity() {
			let villeCourante = document.getElementById("city-select").value;
			if(villeCourante!=""){
				document.getElementById("selection").innerHTML= "Vous avez séléctionné "+villeCourante;
			}else{
				document.getElementById("selection").innerHTML= " ";
			}
				
						
				
			let c = document.getElementsByTagName("span");
				
			
			for( let i=0;i<c.length;i++){
					
				if(c[i].id==villeCourante){	
					c[i].style.display ="block";	
				}else{
					c[i].style.display ="";
				}
			}
				
				
		}
	