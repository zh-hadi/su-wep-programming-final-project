
exports.store = (req, res) => {
    console.log(req.body);
    res.json({
        status: true,
        message: "Bazar added successfully!",
    });
}