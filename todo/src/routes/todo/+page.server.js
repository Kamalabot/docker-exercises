import {serializeNonPOJOs} from "$lib/helpers"

export const load = async({locals}) =>{
	
	const {sql} = locals;
	
	const result = sql`SELECT * FROM public.todo`;
	
	return {
		dbReturn: result
	}
}

export const actions = {
	add: async({locals, request})=>{
		const formData = await request.formData()
		//console.log(Object.fromEntries([...formData]))
		let taskNew = Object.fromEntries([...formData])
		console.log(taskNew.task);
		const {sql} = locals;
		try{
			const addTask = await sql`INSERT INTO public.todo (description) values (${taskNew.task});`
			} catch (err){
				console.log(err);
				return{
					error:true,
					message: err
				}
			}
	},
	
	delete: async({locals, request})=>{
		const formData = await request.formData();
		let idDel = Object.fromEntries([...formData]);
		const {sql} = locals;
		
		try {
			const delTask = await sql`DELETE FROM public.todo WHERE todo_id = ${idDel.id};`
		}catch(err){
			console.log(err)
			return {
				error:true,
				message:err
			}
		}
	},

	edit: async({locals, request})=>{
		const formData = await request.formData()
		const userEdit = Object.fromEntries([...formData]);
		const todoId = userEdit.todo_id;
		const newDesc = userEdit.todo;
		console.log(userEdit)
		const {sql} = locals;
		
		try {
			const updTask = await sql`UPDATE public.todo SET description=${newDesc} WHERE todo_id=${todoId};`
		}catch(err){
			console.log(err)
			return{
				error:true,
				message:err
			}
		}
	}
}