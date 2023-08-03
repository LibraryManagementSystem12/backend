const CD = require('../models/CD');

exports.createCD = async (cdData) => {
    try {
        return await CD.create(cdData);
    } catch (err) {
        throw err;
    }
};

exports.getAllCDs = async () => {
    try {
        return await CD.find();
    } catch (err) {
        throw err;
    }
};

exports.getSingleCD = async (cdId) => {
    try {
        return await CD.findById(cdId);
    } catch (err) {
        throw err;
    }
};

exports.updateCD = async (cdId, cdData) => {
    try {
        return await CD.findByIdAndUpdate(cdId, cdData, {new: true});
    } catch (err) {
        throw err;
    }
};

exports.deleteCD = async (cdId) => {
    try {
        return await CD.findByIdAndRemove(cdId);
    } catch (err) {
        throw err;
    }
};
