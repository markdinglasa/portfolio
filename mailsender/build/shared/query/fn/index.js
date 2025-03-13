"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FnQuery = void 0;
var FnQuery;
(function (FnQuery) {
    FnQuery["q001"] = "";
    FnQuery["q002"] = "SELECT u.*, CASE WHEN u.`Role` = 'client' THEN h.`Id` WHEN u.`Role`= 'nutritionist' THEN p.`Id` ELSE 1 END AS `IsSetup` FROM `user` AS u LEFT JOIN `health` AS h ON h.`UserId`=u.`Id` LEFT JOIN `profession` AS p ON p.`UserId`=u.`Id`  WHERE u.`Email`= ?";
    FnQuery["q003"] = "";
    FnQuery["q004"] = "";
    FnQuery["q005"] = "";
})(FnQuery || (exports.FnQuery = FnQuery = {}));
//# sourceMappingURL=index.js.map