<script>
	import TodoList from "$lib/TodoList.svelte"
	export let data;
	//console.log(data)
</script>

<div class="min-h-screen bg-base-200">
  <div class="hero-content flex-col">
    <div class="text-center lg:text-left">
      <h1 class="text-5xl font-bold">Your Tasks</h1>
    </div>
    <div class="card flex shadow-2xl bg-base-100">
      <div class="card-body">
        <div class="form-control flex flex-row gap-5">
         <form method="POST" action="?/add"> 
		 <input type="text" name="task" placeholder="task" class="input input-bordered" />
		   <button class="btn btn-primary">
      			<a href="?/add">Add</a>
    		</button>
			</form>
        </div>
       </div>
    </div>
	  <TodoList dbData={data.dbReturn}/>
  </div>
</div>

