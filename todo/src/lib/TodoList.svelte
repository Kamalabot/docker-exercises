<script>
	export let dbData;
	//console.log(dbData,'recd')
</script>


<div class="overflow-x-auto">
  <table class="table w-full">
    <!-- head -->
    <thead>
      <tr>
        <th>ID</th>
        <th>Description</th>
        <th></th>
      </tr>
    </thead>
    <tbody>
	{#each dbData as line}
				<tr>
					<td>
						<div>
							<div class="font-bold">{line.todo_id}</div>
						</div>
					</td>
					<th>
						<div class="flex gap-3">
						<form method="POST" action="?/delete">
							<input type="hidden" name="id" hidden value={line.todo_id} />
							<button class="btn btn-error text-white btn-xs">Delete</button>
						</form>

						<form method="POST" action="?/edit">
							<input type="text" name="todo_id" hidden value={line.todo_id}/>
							<input  type="text" name="todo" value={line.description} />
							<button class="btn">Update</button>
						</form>
						</div>
					</th>
				</tr>
			{/each}
    </tbody>
  </table>
</div>