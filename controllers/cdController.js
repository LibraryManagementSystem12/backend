const cdService = require('../services/cdService');

exports.createCD = async (req, res) => {
    try {
        const newCD = await cdService.createCD(req.body);
        res.json(newCD);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

exports.getAllCDs = async (req, res) => {
    try {
        const cds = await cdService.getAllCDs();
        res.json(cds);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

exports.getSingleCD = async (req, res) => {
    try {
        const cd = await cdService.getSingleCD(req.params.cdId);
        res.json(cd);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

exports.updateCD = async (req, res) => {
    try {
        const updatedCD = await cdService.updateCD(req.params.cdId, req.body);
        res.json(updatedCD);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

exports.deleteCD = async (req, res) => {
    try {
        await cdService.deleteCD(req.params.cdId);
        res.json({ message: "CD deleted successfully" });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};
