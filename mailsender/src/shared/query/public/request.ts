export enum RequestQuery {
  q001 = "SELECT * FROM `request_access`", // GET ALL
  q002 = "SELECT `Id` FROM `request_access` WHERE `Id` = ?", // CHECK EXISTENCE
  q003 = "SELECT * FROM `request_access` WHERE `Id` = ? ", // GET
  q004 = "",
  q005 = "",
  q006 = "",
  q007 = "",
  q008 = "",
  q009 = "",
  q010 = "",
}
