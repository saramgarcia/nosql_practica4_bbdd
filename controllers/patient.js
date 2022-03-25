// Cargamos los modelos para usarlos posteriormente
const Patient = require('../models/patient');

exports.list = async function() {
    let result = await Patient.findAll();
    return result;
}

exports.read = async function(patientId) {
    // Rellene aqui ...
}

exports.create = async function(body) {
    // Rellene aqui ...
}

exports.update= async function(patientId, body) {
    // Rellene aqui ...
}

exports.delete = async function(patientId) {
    let result = async Patient.findOneAndDelete(patientId);
    return result;
}

exports.filterPatientsByCity = async function (city) {
    let result = await Patient.find({city});
    return result;
}

exports.filterPatientsByDiagnosis = async function (diagnosis) {
    let result = await Patient.find {"medicalHistory.diagnosis:diagnosis"});
    return result;
}

exports.filterPatientsBySpeacialistAndDate = async function (specialist, sDate,fDate) {
    // Rellene aqui ...
}

exports.addPatientHistory = async function (patientId, medicalRecord) {
    // Rellene aqui ...
}
