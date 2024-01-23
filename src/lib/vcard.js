import VCard from "vcards-js";

export function generateVCard(data) {
  if (!data) return;

  const vCard = new VCard();
  const {
    firstName,
    organization,
    url,
    cellPhone,
    workPhone,
    email,
    workEmail,
    homeAddress_label,
  } = data;

  vCard.version = "3.0"
  if (firstName) vCard.firstName = firstName;
  if (organization) vCard.organization = organization;
  if (url) vCard.url = url;
  if (cellPhone) vCard.cellPhone = cellPhone;
  if (workPhone) vCard.workPhone = workPhone;
  if (email) vCard.email = email;
  if (workEmail) vCard.workEmail = workEmail;
  if (homeAddress_label) vCard.homeAddress.label = homeAddress_label;

  return vCard.getFormattedString();
}

/*
  //set basic properties shown before
  vCard.firstName = "Eric";
  vCard.middleName = "J";
  vCard.lastName = "Nesser";
  vCard.uid = "69531f4a-c34d-4a1e-8922-bd38a9476a53";
  vCard.organization = "ACME Corporation";

  //link to image
  vCard.photo.attachFromUrl(
    "https://avatars2.githubusercontent.com/u/5659221?v=3&s=460",
    "JPEG",
  );
  vCard.logo.attachFromUrl(
    "https://avatars2.githubusercontent.com/u/5659221?v=3&s=460",
    "JPEG",
  );

  vCard.workPhone = "312-555-1212";
  vCard.birthday = new Date(1985, 0, 1);
  vCard.title = "Software Developer";
  vCard.url = "https://github.com/enesser";
  vCard.workUrl = "https://acme-corporation/enesser";
  vCard.note = "Notes on Eric";

  //set other vitals
  vCard.nickname = "Scarface";
  vCard.namePrefix = "Mr.";
  vCard.nameSuffix = "JR";
  vCard.gender = "M";
  vCard.anniversary = new Date(2004, 0, 1);
  vCard.role = "Software Development";

  //set other phone numbers
  vCard.homePhone = ["312-555-1313"];
  vCard.cellPhone = ["312-555-1414"];
  vCard.pagerPhone = ["312-555-1515"];

  //set email addresses
  vCard.email = ["e.nesser@emailhost.tld"];
  vCard.workEmail = ["e.nesser@acme-corporation.tld"];

  //set address information
  vCard.homeAddress.label = "Home Address";
  vCard.homeAddress.street = "123 Main Street";
  vCard.homeAddress.city = "Chicago";
  vCard.homeAddress.stateProvince = "IL";
  vCard.homeAddress.postalCode = "12345";
  vCard.homeAddress.countryRegion = "United States of America";

  vCard.workAddress.label = "Work Address";
  vCard.workAddress.street = "123 Corporate Loop\nSuite 500";
  vCard.workAddress.city = "Los Angeles";
  vCard.workAddress.stateProvince = "CA";
  vCard.workAddress.postalCode = "54321";
  vCard.workAddress.countryRegion = "United States of America";

  //set social media URLs
  vCard.socialUrls["facebook"] = "https://...";
  vCard.socialUrls["linkedIn"] = "https://...";
  vCard.socialUrls["twitter"] = "https://...";
  vCard.socialUrls["flickr"] = "https://...";
  vCard.socialUrls["custom"] = "https://...";
*/
