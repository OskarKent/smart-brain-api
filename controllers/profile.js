const handleprofileget = (req, res, db)=>{
	const { id } = req.params;
	return db.select('*').from('users').where({id})
		.then(user=>{
			if (user.length) {
				res.json(user[0])
			} else {
				res.status(400).json('error getting user')
			}
		})
		.catch(err => {res.status(400).json('not found')})
}

module.exports = {
	handleprofileget
}