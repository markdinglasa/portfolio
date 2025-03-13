"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CertificateQuery = void 0;
var CertificateQuery;
(function (CertificateQuery) {
    CertificateQuery["q001"] = "SELECT * FROM `certificate` WHERE `ProfessionId` = ?";
    CertificateQuery["q002"] = "SELECT `Id` FROM `certificate` WHERE `Id` = ? ";
    CertificateQuery["q003"] = "SELECT * FROM `certificate` WHERE `Id` = ? ";
    CertificateQuery["q004"] = "SELECT `Id` FROM `certificate` WHERE `CertificateNumber` = ? ";
    CertificateQuery["q005"] = "SELECT `Id` FROM `certificate` WHERE `Id` <> ? AND `CertificateNumber` = ? ";
    CertificateQuery["q006"] = "";
    CertificateQuery["q007"] = "";
    CertificateQuery["q008"] = "";
    CertificateQuery["q009"] = "";
    CertificateQuery["q010"] = "";
})(CertificateQuery || (exports.CertificateQuery = CertificateQuery = {}));
//# sourceMappingURL=certificateQuery.js.map