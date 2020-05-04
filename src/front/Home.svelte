<script>
  import { Router, Link, Route } from "svelte-routing";
  import imc from "./imcapi/imc.svelte";
  import sugarconsume from "./sugarconsumeAPI/sugarconsume.svelte";

  export let url = "";
</script>
<main>
<h1>Team</h1>
<h2>Raul Ojeda Robles</h2>
<h2>Fran Zájara Gomez</h2>
<p>	Project description: Our sources of information are aimed at analyzing the relationship between sugar consumption and the quantity of obese people</p>
		
<p>
	Repository:  <a href="https://github.com/gti-sos/SOS1920-30">gti-sos/SOS1920-30</a>
</p>
<p>
	-----------------ABAJO PUEDEN ACCEDER A CADA API----------------------------
</p>
 <nav>
    <Link to="imc">Indice de masa corporal</Link>
    <p>
	<Link to="sugarconsume">consumo de azucar</Link>
	</p>
  </nav>

</main>