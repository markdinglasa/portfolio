"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CertificateInitial = exports.CertificateStatus = void 0;
var CertificateStatus;
(function (CertificateStatus) {
    CertificateStatus["DEFAULT"] = "";
    CertificateStatus["ACTIVE"] = "active";
    CertificateStatus["EXPIRED"] = "expired";
    CertificateStatus["REVOKED"] = "revoked";
    CertificateStatus["INVALID"] = "invalid";
})(CertificateStatus || (exports.CertificateStatus = CertificateStatus = {}));
exports.CertificateInitial = {
    Name: "",
    IssuedTo: "",
    Issuer: "",
    ExpiryDate: "",
    CertificateType: "",
    CertificateNumber: "",
    AttachmentURL: null,
    ProfessionId: 0,
};
//# sourceMappingURL=certificate.js.map