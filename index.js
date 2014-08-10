exports = module.exports = function(fortunes) {
	if (!(fortunes instanceof Array) || fortunes == []) {
		throw new Error("Invalid fortune list supplied");
		return;
	}

	return function(req, res, next) {
		res.setHeader("fortune", fortunes[Math.floor(Math.random() * fortunes.length)]);
		next();
	}
};