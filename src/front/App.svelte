<!-- App.svelte -->
<script>
  import { Router, Link, Route } from "svelte-routing";
  import Home from "./Home.svelte";
  import imc from "./imcapi/imc.svelte";
  import sugarconsume from "./sugarconsumeAPI/sugarconsume.svelte";

  export let url = "";
</script>

<Router url="{url}">
  <nav>
    <Link to="/">Home</Link>
    <Link to="imc">Indice de masa corporal</Link>
    <Link to="sugarconsume">consumo de azucar</Link>
  </nav>
  
  <div>
    <Route path="imc" component="{imc}" />
    <Route path="/"><Home /></Route>
	<Route path="sugarconsume" component="{sugarconsume}" />
  </div>
</Router>


