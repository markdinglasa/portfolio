export enum CertificateChannel {
  CERTIFICATE_GET = "/setup/certificate/get/:Id",
  CERTIFICATE_GET_ALL = "/setup/certificate/get-all/:Id", //ProfessionId
  CERTIFICATE_NEW = "/setup/certificate/new",
  CERTIFICATE_REMOVE = "/setup/certificate/remove/:Id",
  CERTIFICATE_UPDATE = "/setup/certificate/update/:Id",

  CERTIFICATE = "/setup/certificate",
  CERTIFICATE_ID = "/setup/certificate/:Id",
  CERTIFICATE_PARENT = "/setup/certificate/profession/:Id",
}
