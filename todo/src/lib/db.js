import {Pool} from "pg";

const pool = new Pool({
	user:"postgres",
	password:"1234",
	host:"172.17.0.2",
	post:5432,
	database:"todoapp"
});

export default{
	pool
}