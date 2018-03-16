var friendList = [
    {name: "Mary Lim", email: "mary@yahoo.com", contact: '9099098098098'},
    {name: "Peter ho", email: "pete@gmail.com", contact: '6565465465463'},
    {name: "June Lee", email: "jl@yahoo.com.sg", contact: '1123451234412'},
];

exports.list = function (req, resp) {
    resp.status(200);
    resp.type("application/json");
    resp.json(friendList);
}

exports.add = function (req, resp) {
    if(!req.body.info) {
        handleErr(resp);
    } else {
        var newinfo = req.body.info;

        friendList.push(newinfo);
        resp.status(200);
        resp.type("application/json");
        resp.json(newinfo);
    }
}

//error handling
function handleErr(res) {
    handleErr(res, null);
}

function handleErr(res, err) {
    console.log(err);
    res.status(500).json({error: true});
}