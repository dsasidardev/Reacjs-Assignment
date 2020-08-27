import React, { Component } from 'react';
import axios from 'axios';
import ListingPage from './ListingPage';

const initialState = {
    services: { "data": [{ "id": "cardiology", "type": "services", "links": { "self": "https://api.inquickerstaging.com/v3/winter.inquickerstaging.com/services/cardiology" }, "attributes": { "name": "Cardiology" } }, { "id": "family-medicine", "type": "services", "links": { "self": "https://api.inquickerstaging.com/v3/winter.inquickerstaging.com/services/family-medicine" }, "attributes": { "name": "Family Medicine" } }, { "id": "internal-medicine", "type": "services", "links": { "self": "https://api.inquickerstaging.com/v3/winter.inquickerstaging.com/services/internal-medicine" }, "attributes": { "name": "Internal Medicine" } }, { "id": "laboratory-services", "type": "services", "links": { "self": "https://api.inquickerstaging.com/v3/winter.inquickerstaging.com/services/laboratory-services" }, "attributes": { "name": "Laboratory Services" } }, { "id": "primary-care", "type": "services", "links": { "self": "https://api.inquickerstaging.com/v3/winter.inquickerstaging.com/services/primary-care" }, "attributes": { "name": "Primary Care" } }], "meta": { "record-count": 5 } },
    providers: { "data": [{ "id": "shuswap-lake-general-hospital-1", "type": "providers", "links": { "self": "https://api.inquickerstaging.com/v3/winter.inquickerstaging.com/providers/shuswap-lake-general-hospital-1" }, "attributes": { "affiliation": "employed", "appointment-types": [{ "id": "bloodwork", "name": "Bloodwork" }, { "id": "bloodwork-ecg", "name": "Bloodwork + ECG" }], "backgrounds": [], "bio": "", "card-image": null, "credentials": null, "gender": null, "grad-school": null, "medical-groups": [], "name": "Shuswap Lake General Hospital  1", "profile-image": null, "provider-type": "HealthResource", "subspecialties": [], "suffix": null, "undergrad-school": null }, "relationships": { "locations": { "links": { "self": "https://api.inquickerstaging.com/v3/winter.inquickerstaging.com/providers/shuswap-lake-general-hospital-1/relationships/locations", "related": "https://api.inquickerstaging.com/v3/winter.inquickerstaging.com/providers/shuswap-lake-general-hospital-1/locations" }, "data": [{ "type": "locations", "id": "shuswap-lake-general-hospital" }] }, "schedules": { "links": { "self": "https://api.inquickerstaging.com/v3/winter.inquickerstaging.com/providers/shuswap-lake-general-hospital-1/relationships/schedules", "related": "https://api.inquickerstaging.com/v3/winter.inquickerstaging.com/providers/shuswap-lake-general-hospital-1/schedules" }, "data": [{ "type": "schedules", "id": "630a6013-b9ca-4fff-a307-80074726e8ea" }] } } }, { "id": "shuswap-lake-general-hospital-2", "type": "providers", "links": { "self": "https://api.inquickerstaging.com/v3/winter.inquickerstaging.com/providers/shuswap-lake-general-hospital-2" }, "attributes": { "affiliation": "employed", "appointment-types": [{ "id": "bloodwork", "name": "Bloodwork" }, { "id": "bloodwork-ecg", "name": "Bloodwork + ECG" }], "backgrounds": [], "bio": "", "card-image": null, "credentials": null, "gender": null, "grad-school": null, "medical-groups": [], "name": "Shuswap Lake General Hospital  2", "profile-image": null, "provider-type": "HealthResource", "subspecialties": [], "suffix": null, "undergrad-school": null }, "relationships": { "locations": { "links": { "self": "https://api.inquickerstaging.com/v3/winter.inquickerstaging.com/providers/shuswap-lake-general-hospital-2/relationships/locations", "related": "https://api.inquickerstaging.com/v3/winter.inquickerstaging.com/providers/shuswap-lake-general-hospital-2/locations" }, "data": [{ "type": "locations", "id": "shuswap-lake-general-hospital" }] }, "schedules": { "links": { "self": "https://api.inquickerstaging.com/v3/winter.inquickerstaging.com/providers/shuswap-lake-general-hospital-2/relationships/schedules", "related": "https://api.inquickerstaging.com/v3/winter.inquickerstaging.com/providers/shuswap-lake-general-hospital-2/schedules" }, "data": [{ "type": "schedules", "id": "1f75bb83-ad3c-417d-a1b3-7cb9e1dcfa4d" }] } } }, { "id": "grace-cooper", "type": "providers", "links": { "self": "https://api.inquickerstaging.com/v3/winter.inquickerstaging.com/providers/grace-cooper" }, "attributes": { "affiliation": null, "appointment-types": [{ "id": "new-patient-10", "name": "New Patient" }, { "id": "established-patient-3", "name": "Established Patient" }], "backgrounds": [{ "name": "Language Spoken", "description": "Spanish" }], "bio": "<p>Grace Cooper, MD, FCCP, is a graduate of George Washington University Medical School. She trained in internal medicine at the University of Oregon Health Sciences (UOHS). She is passionate about integrative medicine and a patient centered care model. <strong>Sub-Specialties Include:</strong> * Geriatrics * Family Medicine                                                                      </p>\n", "card-image": "https://inquicker-iqapp-uploads-staging.s3.amazonaws.com/profile/practitioner/iqp_card_1526.jpg?1550354403", "credentials": null, "gender": "f", "grad-school": null, "medical-groups": ["Winter Health North"], "name": "Grace Cooper", "profile-image": "https://inquicker-iqapp-uploads-staging.s3.amazonaws.com/profile/practitioner/iqp_profile_1526.jpg?1550354403", "provider-type": "Practitioner", "subspecialties": ["Family Medicine"], "suffix": "MD", "undergrad-school": null }, "relationships": { "locations": { "links": { "self": "https://api.inquickerstaging.com/v3/winter.inquickerstaging.com/providers/grace-cooper/relationships/locations", "related": "https://api.inquickerstaging.com/v3/winter.inquickerstaging.com/providers/grace-cooper/locations" }, "data": [{ "type": "locations", "id": "east-portland-1" }] }, "schedules": { "links": { "self": "https://api.inquickerstaging.com/v3/winter.inquickerstaging.com/providers/grace-cooper/relationships/schedules", "related": "https://api.inquickerstaging.com/v3/winter.inquickerstaging.com/providers/grace-cooper/schedules" }, "data": [{ "type": "schedules", "id": "81c76606-8eb7-47f1-8585-1fbef6bea475" }] } } }, { "id": "krin-gray", "type": "providers", "links": { "self": "https://api.inquickerstaging.com/v3/winter.inquickerstaging.com/providers/krin-gray" }, "attributes": { "affiliation": "employed", "appointment-types": [{ "id": "new-patient-10", "name": "New Patient" }, { "id": "established-patient-3", "name": "Established Patient" }], "backgrounds": [], "bio": "", "card-image": "https://inquicker-iqapp-uploads-staging.s3.amazonaws.com/profile/practitioner/iqp_card_23009.jpg?1580921798", "credentials": null, "gender": "f", "grad-school": null, "medical-groups": [], "name": "Krin Gray", "profile-image": "https://inquicker-iqapp-uploads-staging.s3.amazonaws.com/profile/practitioner/iqp_profile_23009.jpg?1580921798", "provider-type": "Practitioner", "subspecialties": ["Interventional Cardiology"], "suffix": "MD", "undergrad-school": null }, "relationships": { "locations": { "links": { "self": "https://api.inquickerstaging.com/v3/winter.inquickerstaging.com/providers/krin-gray/relationships/locations", "related": "https://api.inquickerstaging.com/v3/winter.inquickerstaging.com/providers/krin-gray/locations" }, "data": [{ "type": "locations", "id": "east-portland-2" }] }, "schedules": { "links": { "self": "https://api.inquickerstaging.com/v3/winter.inquickerstaging.com/providers/krin-gray/relationships/schedules", "related": "https://api.inquickerstaging.com/v3/winter.inquickerstaging.com/providers/krin-gray/schedules" }, "data": [{ "type": "schedules", "id": "2210806a-db0a-4789-813c-ba79c86a13ae" }] } } }, { "id": "nate", "type": "providers", "links": { "self": "https://api.inquickerstaging.com/v3/winter.inquickerstaging.com/providers/nate" }, "attributes": { "affiliation": "employed", "appointment-types": [{ "id": "new-patient-10", "name": "New Patient" }, { "id": "established-patient-3", "name": "Established Patient" }], "backgrounds": [], "bio": "", "card-image": "https://inquicker-iqapp-uploads-staging.s3.amazonaws.com/profile/practitioner/iqp_card_28070.jpg?1550354153", "credentials": null, "gender": "m", "grad-school": null, "medical-groups": [], "name": "Nate Potter", "profile-image": "https://inquicker-iqapp-uploads-staging.s3.amazonaws.com/profile/practitioner/iqp_profile_28070.jpg?1550354153", "provider-type": "Practitioner", "subspecialties": ["Internal Medicine", "Pediatrics"], "suffix": "MD", "undergrad-school": null }, "relationships": { "locations": { "links": { "self": "https://api.inquickerstaging.com/v3/winter.inquickerstaging.com/providers/nate/relationships/locations", "related": "https://api.inquickerstaging.com/v3/winter.inquickerstaging.com/providers/nate/locations" }, "data": [{ "type": "locations", "id": "east-portland-1" }] }, "schedules": { "links": { "self": "https://api.inquickerstaging.com/v3/winter.inquickerstaging.com/providers/nate/relationships/schedules", "related": "https://api.inquickerstaging.com/v3/winter.inquickerstaging.com/providers/nate/schedules" }, "data": [{ "type": "schedules", "id": "dbc8f618-5c18-4476-874f-60a1b36b7ed1" }] } } }, { "id": "john-smiley", "type": "providers", "links": { "self": "https://api.inquickerstaging.com/v3/winter.inquickerstaging.com/providers/john-smiley" }, "attributes": { "affiliation": "employed", "appointment-types": [{ "id": "new-patient-10", "name": "New Patient" }], "backgrounds": [], "bio": "", "card-image": "https://inquicker-iqapp-uploads-staging.s3.amazonaws.com/profile/practitioner/iqp_card_17692.jpg?1559329796", "credentials": null, "gender": "m", "grad-school": null, "medical-groups": [], "name": "John Smiley", "profile-image": "https://inquicker-iqapp-uploads-staging.s3.amazonaws.com/profile/practitioner/iqp_profile_17692.jpg?1559329796", "provider-type": "Practitioner", "subspecialties": ["Adolescent Medicine", "OB/GYN"], "suffix": "MD", "undergrad-school": null }, "relationships": { "locations": { "links": { "self": "https://api.inquickerstaging.com/v3/winter.inquickerstaging.com/providers/john-smiley/relationships/locations", "related": "https://api.inquickerstaging.com/v3/winter.inquickerstaging.com/providers/john-smiley/locations" }, "data": [{ "type": "locations", "id": "general-dental-associates" }, { "type": "locations", "id": "east-portland-1" }] }, "schedules": { "links": { "self": "https://api.inquickerstaging.com/v3/winter.inquickerstaging.com/providers/john-smiley/relationships/schedules", "related": "https://api.inquickerstaging.com/v3/winter.inquickerstaging.com/providers/john-smiley/schedules" }, "data": [{ "type": "schedules", "id": "fbfc4680-10d8-4832-8b6c-71acb1e77f0a" }] } } }, { "id": "michelle-smithson", "type": "providers", "links": { "self": "https://api.inquickerstaging.com/v3/winter.inquickerstaging.com/providers/michelle-smithson" }, "attributes": { "affiliation": "employed", "appointment-types": [{ "id": "new-patient-10", "name": "New Patient" }, { "id": "established-patient-3", "name": "Established Patient" }], "backgrounds": [], "bio": "", "card-image": "https://inquicker-iqapp-uploads-staging.s3.amazonaws.com/profile/practitioner/iqp_card_27965.jpg?1550353914", "credentials": null, "gender": "f", "grad-school": null, "medical-groups": [], "name": "Michelle Smithson", "profile-image": "https://inquicker-iqapp-uploads-staging.s3.amazonaws.com/profile/practitioner/iqp_profile_27965.jpg?1550353914", "provider-type": "Practitioner", "subspecialties": ["Internal Medicine"], "suffix": "MD", "undergrad-school": null }, "relationships": { "locations": { "links": { "self": "https://api.inquickerstaging.com/v3/winter.inquickerstaging.com/providers/michelle-smithson/relationships/locations", "related": "https://api.inquickerstaging.com/v3/winter.inquickerstaging.com/providers/michelle-smithson/locations" }, "data": [{ "type": "locations", "id": "east-portland-1" }] }, "schedules": { "links": { "self": "https://api.inquickerstaging.com/v3/winter.inquickerstaging.com/providers/michelle-smithson/relationships/schedules", "related": "https://api.inquickerstaging.com/v3/winter.inquickerstaging.com/providers/michelle-smithson/schedules" }, "data": [{ "type": "schedules", "id": "31a4a0c3-b146-49ec-a7ff-55b41105990b" }] } } }, { "id": "katherine-watson", "type": "providers", "links": { "self": "https://api.inquickerstaging.com/v3/winter.inquickerstaging.com/providers/katherine-watson" }, "attributes": { "affiliation": null, "appointment-types": [{ "id": "new-patient-10", "name": "New Patient" }, { "id": "established-patient-3", "name": "Established Patient" }], "backgrounds": [{ "name": "Language Spoken", "description": "Spanish\nPortuguese" }, { "name": "Medical School", "description": "George Washington University" }, { "name": "Residency", "description": "Vanderbilt University" }], "bio": "<p>Katherine Watson, DO, FCCP, is a graduate of George Washington University Medical School. She trained in Family Medicine at the University of Oregon Health Sciences (UOHS). </p>\n\n<p><em>Dr. Watson is passionate about integrative medicine and a patient centered care model.</em> </p>\n\n<p>For more information about Dr. Watson and Winter Health <a href=\"http://www.ihacares.com/providers/alice-watson-md\" target=\"_blank\" title=\"Title\">click here</a>.</p>\n\n<p><strong>Areas of Interest include:</strong></p>\n\n<p>*Adult Immunizations *Allergy Testing *Childhood Immunizations *Cholesterol Management *Diabetes *Preventive Medicine *Wellness</p>\n", "card-image": "https://inquicker-iqapp-uploads-staging.s3.amazonaws.com/profile/practitioner/iqp_card_1527.jpg?1550354381", "credentials": null, "gender": "f", "grad-school": null, "medical-groups": [], "name": "Katherine Watson", "profile-image": "https://inquicker-iqapp-uploads-staging.s3.amazonaws.com/profile/practitioner/iqp_profile_1527.jpg?1550354381", "provider-type": "Practitioner", "subspecialties": ["Pediatrics"], "suffix": "DO", "undergrad-school": null }, "relationships": { "locations": { "links": { "self": "https://api.inquickerstaging.com/v3/winter.inquickerstaging.com/providers/katherine-watson/relationships/locations", "related": "https://api.inquickerstaging.com/v3/winter.inquickerstaging.com/providers/katherine-watson/locations" }, "data": [{ "type": "locations", "id": "east-portland-1" }] }, "schedules": { "links": { "self": "https://api.inquickerstaging.com/v3/winter.inquickerstaging.com/providers/katherine-watson/relationships/schedules", "related": "https://api.inquickerstaging.com/v3/winter.inquickerstaging.com/providers/katherine-watson/schedules" }, "data": [{ "type": "schedules", "id": "681ce338-a812-4712-b616-02a33a677aca" }] } } }], "included": [{ "id": "shuswap-lake-general-hospital", "type": "locations", "links": { "self": "https://api.inquickerstaging.com/v3/winter.inquickerstaging.com/locations/shuswap-lake-general-hospital" }, "attributes": { "address": "601 10 St NE", "city": "Salmon Arm", "facility-name": "Shuswap Lake General Hospital ", "latitude": 50.7046, "longitude": -119.274, "name": "Shuswap Lake General Hospital ", "phone": "12508333600", "state": "BC", "zip": "V1E 4A7" }, "relationships": { "schedules": { "links": { "self": "https://api.inquickerstaging.com/v3/winter.inquickerstaging.com/locations/shuswap-lake-general-hospital/relationships/schedules", "related": "https://api.inquickerstaging.com/v3/winter.inquickerstaging.com/locations/shuswap-lake-general-hospital/schedules" } } } }, { "id": "east-portland-1", "type": "locations", "links": { "self": "https://api.inquickerstaging.com/v3/winter.inquickerstaging.com/locations/east-portland-1" }, "attributes": { "address": "17323 NE Multnomah Street", "city": "Portland", "facility-name": "Mount Jefferson Primary Care", "latitude": 45.5313, "longitude": -122.493, "name": "East Portland", "phone": "11234567890", "state": "OR", "zip": "97230" }, "relationships": { "schedules": { "links": { "self": "https://api.inquickerstaging.com/v3/winter.inquickerstaging.com/locations/east-portland-1/relationships/schedules", "related": "https://api.inquickerstaging.com/v3/winter.inquickerstaging.com/locations/east-portland-1/schedules" } } } }, { "id": "east-portland-2", "type": "locations", "links": { "self": "https://api.inquickerstaging.com/v3/winter.inquickerstaging.com/locations/east-portland-2" }, "attributes": { "address": "17323 NE Multnomah Street", "city": "Portland", "facility-name": "Winter Health Medical Group", "latitude": 45.5313, "longitude": -122.493, "name": "East Portland", "phone": "11234567890", "state": "OR", "zip": "97230" }, "relationships": { "schedules": { "links": { "self": "https://api.inquickerstaging.com/v3/winter.inquickerstaging.com/locations/east-portland-2/relationships/schedules", "related": "https://api.inquickerstaging.com/v3/winter.inquickerstaging.com/locations/east-portland-2/schedules" } } } }, { "id": "general-dental-associates", "type": "locations", "links": { "self": "https://api.inquickerstaging.com/v3/winter.inquickerstaging.com/locations/general-dental-associates" }, "attributes": { "address": "20 North Park St", "city": "Nashville", "facility-name": "General Dental Associates", "latitude": 35.5482, "longitude": -87.5521, "name": "General Dental Associates", "phone": "15555555555", "state": "TN", "zip": "38401" }, "relationships": { "schedules": { "links": { "self": "https://api.inquickerstaging.com/v3/winter.inquickerstaging.com/locations/general-dental-associates/relationships/schedules", "related": "https://api.inquickerstaging.com/v3/winter.inquickerstaging.com/locations/general-dental-associates/schedules" } } } }, { "id": "630a6013-b9ca-4fff-a307-80074726e8ea", "type": "schedules", "links": { "self": "https://api.inquickerstaging.com/v3/winter.inquickerstaging.com/schedules/630a6013-b9ca-4fff-a307-80074726e8ea" }, "attributes": { "age-limit-direction": null, "age-limit-threshold": null, "hours": null, "name": "", "schedule-type": "online", "service": "Laboratory Services", "sort-order": 9999, "time-zone-name": "America/Los_Angeles" }, "relationships": { "location": { "links": { "self": "https://api.inquickerstaging.com/v3/winter.inquickerstaging.com/schedules/630a6013-b9ca-4fff-a307-80074726e8ea/relationships/location", "related": "https://api.inquickerstaging.com/v3/winter.inquickerstaging.com/schedules/630a6013-b9ca-4fff-a307-80074726e8ea/location" }, "data": { "type": "locations", "id": "shuswap-lake-general-hospital" } }, "provider": { "links": { "self": "https://api.inquickerstaging.com/v3/winter.inquickerstaging.com/schedules/630a6013-b9ca-4fff-a307-80074726e8ea/relationships/provider", "related": "https://api.inquickerstaging.com/v3/winter.inquickerstaging.com/schedules/630a6013-b9ca-4fff-a307-80074726e8ea/provider" } }, "service": { "links": { "self": "https://api.inquickerstaging.com/v3/winter.inquickerstaging.com/schedules/630a6013-b9ca-4fff-a307-80074726e8ea/relationships/service", "related": "https://api.inquickerstaging.com/v3/winter.inquickerstaging.com/schedules/630a6013-b9ca-4fff-a307-80074726e8ea/service" } }, "insurance-plans": { "links": { "self": "https://api.inquickerstaging.com/v3/winter.inquickerstaging.com/schedules/630a6013-b9ca-4fff-a307-80074726e8ea/relationships/insurance-plans", "related": "https://api.inquickerstaging.com/v3/winter.inquickerstaging.com/schedules/630a6013-b9ca-4fff-a307-80074726e8ea/insurance-plans" } } } }, { "id": "1f75bb83-ad3c-417d-a1b3-7cb9e1dcfa4d", "type": "schedules", "links": { "self": "https://api.inquickerstaging.com/v3/winter.inquickerstaging.com/schedules/1f75bb83-ad3c-417d-a1b3-7cb9e1dcfa4d" }, "attributes": { "age-limit-direction": null, "age-limit-threshold": null, "hours": null, "name": "", "schedule-type": "online", "service": "Laboratory Services", "sort-order": 9999, "time-zone-name": "America/Los_Angeles" }, "relationships": { "location": { "links": { "self": "https://api.inquickerstaging.com/v3/winter.inquickerstaging.com/schedules/1f75bb83-ad3c-417d-a1b3-7cb9e1dcfa4d/relationships/location", "related": "https://api.inquickerstaging.com/v3/winter.inquickerstaging.com/schedules/1f75bb83-ad3c-417d-a1b3-7cb9e1dcfa4d/location" }, "data": { "type": "locations", "id": "shuswap-lake-general-hospital" } }, "provider": { "links": { "self": "https://api.inquickerstaging.com/v3/winter.inquickerstaging.com/schedules/1f75bb83-ad3c-417d-a1b3-7cb9e1dcfa4d/relationships/provider", "related": "https://api.inquickerstaging.com/v3/winter.inquickerstaging.com/schedules/1f75bb83-ad3c-417d-a1b3-7cb9e1dcfa4d/provider" } }, "service": { "links": { "self": "https://api.inquickerstaging.com/v3/winter.inquickerstaging.com/schedules/1f75bb83-ad3c-417d-a1b3-7cb9e1dcfa4d/relationships/service", "related": "https://api.inquickerstaging.com/v3/winter.inquickerstaging.com/schedules/1f75bb83-ad3c-417d-a1b3-7cb9e1dcfa4d/service" } }, "insurance-plans": { "links": { "self": "https://api.inquickerstaging.com/v3/winter.inquickerstaging.com/schedules/1f75bb83-ad3c-417d-a1b3-7cb9e1dcfa4d/relationships/insurance-plans", "related": "https://api.inquickerstaging.com/v3/winter.inquickerstaging.com/schedules/1f75bb83-ad3c-417d-a1b3-7cb9e1dcfa4d/insurance-plans" } } } }, { "id": "81c76606-8eb7-47f1-8585-1fbef6bea475", "type": "schedules", "links": { "self": "https://api.inquickerstaging.com/v3/winter.inquickerstaging.com/schedules/81c76606-8eb7-47f1-8585-1fbef6bea475" }, "attributes": { "age-limit-direction": null, "age-limit-threshold": null, "hours": null, "name": "", "schedule-type": "online", "service": "Primary Care", "sort-order": 9999, "time-zone-name": "America/Los_Angeles" }, "relationships": { "location": { "links": { "self": "https://api.inquickerstaging.com/v3/winter.inquickerstaging.com/schedules/81c76606-8eb7-47f1-8585-1fbef6bea475/relationships/location", "related": "https://api.inquickerstaging.com/v3/winter.inquickerstaging.com/schedules/81c76606-8eb7-47f1-8585-1fbef6bea475/location" }, "data": { "type": "locations", "id": "east-portland-1" } }, "provider": { "links": { "self": "https://api.inquickerstaging.com/v3/winter.inquickerstaging.com/schedules/81c76606-8eb7-47f1-8585-1fbef6bea475/relationships/provider", "related": "https://api.inquickerstaging.com/v3/winter.inquickerstaging.com/schedules/81c76606-8eb7-47f1-8585-1fbef6bea475/provider" } }, "service": { "links": { "self": "https://api.inquickerstaging.com/v3/winter.inquickerstaging.com/schedules/81c76606-8eb7-47f1-8585-1fbef6bea475/relationships/service", "related": "https://api.inquickerstaging.com/v3/winter.inquickerstaging.com/schedules/81c76606-8eb7-47f1-8585-1fbef6bea475/service" } }, "insurance-plans": { "links": { "self": "https://api.inquickerstaging.com/v3/winter.inquickerstaging.com/schedules/81c76606-8eb7-47f1-8585-1fbef6bea475/relationships/insurance-plans", "related": "https://api.inquickerstaging.com/v3/winter.inquickerstaging.com/schedules/81c76606-8eb7-47f1-8585-1fbef6bea475/insurance-plans" } } } }, { "id": "2210806a-db0a-4789-813c-ba79c86a13ae", "type": "schedules", "links": { "self": "https://api.inquickerstaging.com/v3/winter.inquickerstaging.com/schedules/2210806a-db0a-4789-813c-ba79c86a13ae" }, "attributes": { "age-limit-direction": null, "age-limit-threshold": null, "hours": null, "name": "", "schedule-type": "online", "service": "Cardiology", "sort-order": 9999, "time-zone-name": "America/Los_Angeles" }, "relationships": { "location": { "links": { "self": "https://api.inquickerstaging.com/v3/winter.inquickerstaging.com/schedules/2210806a-db0a-4789-813c-ba79c86a13ae/relationships/location", "related": "https://api.inquickerstaging.com/v3/winter.inquickerstaging.com/schedules/2210806a-db0a-4789-813c-ba79c86a13ae/location" }, "data": { "type": "locations", "id": "east-portland-2" } }, "provider": { "links": { "self": "https://api.inquickerstaging.com/v3/winter.inquickerstaging.com/schedules/2210806a-db0a-4789-813c-ba79c86a13ae/relationships/provider", "related": "https://api.inquickerstaging.com/v3/winter.inquickerstaging.com/schedules/2210806a-db0a-4789-813c-ba79c86a13ae/provider" } }, "service": { "links": { "self": "https://api.inquickerstaging.com/v3/winter.inquickerstaging.com/schedules/2210806a-db0a-4789-813c-ba79c86a13ae/relationships/service", "related": "https://api.inquickerstaging.com/v3/winter.inquickerstaging.com/schedules/2210806a-db0a-4789-813c-ba79c86a13ae/service" } }, "insurance-plans": { "links": { "self": "https://api.inquickerstaging.com/v3/winter.inquickerstaging.com/schedules/2210806a-db0a-4789-813c-ba79c86a13ae/relationships/insurance-plans", "related": "https://api.inquickerstaging.com/v3/winter.inquickerstaging.com/schedules/2210806a-db0a-4789-813c-ba79c86a13ae/insurance-plans" } } } }, { "id": "dbc8f618-5c18-4476-874f-60a1b36b7ed1", "type": "schedules", "links": { "self": "https://api.inquickerstaging.com/v3/winter.inquickerstaging.com/schedules/dbc8f618-5c18-4476-874f-60a1b36b7ed1" }, "attributes": { "age-limit-direction": null, "age-limit-threshold": null, "hours": null, "name": "", "schedule-type": "online", "service": "Internal Medicine", "sort-order": 9999, "time-zone-name": "America/Los_Angeles" }, "relationships": { "location": { "links": { "self": "https://api.inquickerstaging.com/v3/winter.inquickerstaging.com/schedules/dbc8f618-5c18-4476-874f-60a1b36b7ed1/relationships/location", "related": "https://api.inquickerstaging.com/v3/winter.inquickerstaging.com/schedules/dbc8f618-5c18-4476-874f-60a1b36b7ed1/location" }, "data": { "type": "locations", "id": "east-portland-1" } }, "provider": { "links": { "self": "https://api.inquickerstaging.com/v3/winter.inquickerstaging.com/schedules/dbc8f618-5c18-4476-874f-60a1b36b7ed1/relationships/provider", "related": "https://api.inquickerstaging.com/v3/winter.inquickerstaging.com/schedules/dbc8f618-5c18-4476-874f-60a1b36b7ed1/provider" } }, "service": { "links": { "self": "https://api.inquickerstaging.com/v3/winter.inquickerstaging.com/schedules/dbc8f618-5c18-4476-874f-60a1b36b7ed1/relationships/service", "related": "https://api.inquickerstaging.com/v3/winter.inquickerstaging.com/schedules/dbc8f618-5c18-4476-874f-60a1b36b7ed1/service" } }, "insurance-plans": { "links": { "self": "https://api.inquickerstaging.com/v3/winter.inquickerstaging.com/schedules/dbc8f618-5c18-4476-874f-60a1b36b7ed1/relationships/insurance-plans", "related": "https://api.inquickerstaging.com/v3/winter.inquickerstaging.com/schedules/dbc8f618-5c18-4476-874f-60a1b36b7ed1/insurance-plans" } } } }, { "id": "fbfc4680-10d8-4832-8b6c-71acb1e77f0a", "type": "schedules", "links": { "self": "https://api.inquickerstaging.com/v3/winter.inquickerstaging.com/schedules/fbfc4680-10d8-4832-8b6c-71acb1e77f0a" }, "attributes": { "age-limit-direction": null, "age-limit-threshold": null, "hours": null, "name": "", "schedule-type": "online", "service": "Family Medicine", "sort-order": 9999, "time-zone-name": "America/Los_Angeles" }, "relationships": { "location": { "links": { "self": "https://api.inquickerstaging.com/v3/winter.inquickerstaging.com/schedules/fbfc4680-10d8-4832-8b6c-71acb1e77f0a/relationships/location", "related": "https://api.inquickerstaging.com/v3/winter.inquickerstaging.com/schedules/fbfc4680-10d8-4832-8b6c-71acb1e77f0a/location" }, "data": { "type": "locations", "id": "east-portland-1" } }, "provider": { "links": { "self": "https://api.inquickerstaging.com/v3/winter.inquickerstaging.com/schedules/fbfc4680-10d8-4832-8b6c-71acb1e77f0a/relationships/provider", "related": "https://api.inquickerstaging.com/v3/winter.inquickerstaging.com/schedules/fbfc4680-10d8-4832-8b6c-71acb1e77f0a/provider" } }, "service": { "links": { "self": "https://api.inquickerstaging.com/v3/winter.inquickerstaging.com/schedules/fbfc4680-10d8-4832-8b6c-71acb1e77f0a/relationships/service", "related": "https://api.inquickerstaging.com/v3/winter.inquickerstaging.com/schedules/fbfc4680-10d8-4832-8b6c-71acb1e77f0a/service" } }, "insurance-plans": { "links": { "self": "https://api.inquickerstaging.com/v3/winter.inquickerstaging.com/schedules/fbfc4680-10d8-4832-8b6c-71acb1e77f0a/relationships/insurance-plans", "related": "https://api.inquickerstaging.com/v3/winter.inquickerstaging.com/schedules/fbfc4680-10d8-4832-8b6c-71acb1e77f0a/insurance-plans" } } } }, { "id": "31a4a0c3-b146-49ec-a7ff-55b41105990b", "type": "schedules", "links": { "self": "https://api.inquickerstaging.com/v3/winter.inquickerstaging.com/schedules/31a4a0c3-b146-49ec-a7ff-55b41105990b" }, "attributes": { "age-limit-direction": "older", "age-limit-threshold": 18, "hours": null, "name": "Zebra", "schedule-type": "online", "service": "Primary Care", "sort-order": 9999, "time-zone-name": "America/Los_Angeles" }, "relationships": { "location": { "links": { "self": "https://api.inquickerstaging.com/v3/winter.inquickerstaging.com/schedules/31a4a0c3-b146-49ec-a7ff-55b41105990b/relationships/location", "related": "https://api.inquickerstaging.com/v3/winter.inquickerstaging.com/schedules/31a4a0c3-b146-49ec-a7ff-55b41105990b/location" }, "data": { "type": "locations", "id": "east-portland-1" } }, "provider": { "links": { "self": "https://api.inquickerstaging.com/v3/winter.inquickerstaging.com/schedules/31a4a0c3-b146-49ec-a7ff-55b41105990b/relationships/provider", "related": "https://api.inquickerstaging.com/v3/winter.inquickerstaging.com/schedules/31a4a0c3-b146-49ec-a7ff-55b41105990b/provider" } }, "service": { "links": { "self": "https://api.inquickerstaging.com/v3/winter.inquickerstaging.com/schedules/31a4a0c3-b146-49ec-a7ff-55b41105990b/relationships/service", "related": "https://api.inquickerstaging.com/v3/winter.inquickerstaging.com/schedules/31a4a0c3-b146-49ec-a7ff-55b41105990b/service" } }, "insurance-plans": { "links": { "self": "https://api.inquickerstaging.com/v3/winter.inquickerstaging.com/schedules/31a4a0c3-b146-49ec-a7ff-55b41105990b/relationships/insurance-plans", "related": "https://api.inquickerstaging.com/v3/winter.inquickerstaging.com/schedules/31a4a0c3-b146-49ec-a7ff-55b41105990b/insurance-plans" } } } }, { "id": "681ce338-a812-4712-b616-02a33a677aca", "type": "schedules", "links": { "self": "https://api.inquickerstaging.com/v3/winter.inquickerstaging.com/schedules/681ce338-a812-4712-b616-02a33a677aca" }, "attributes": { "age-limit-direction": null, "age-limit-threshold": null, "hours": null, "name": "", "schedule-type": "online", "service": "Family Medicine", "sort-order": 9999, "time-zone-name": "America/Los_Angeles" }, "relationships": { "location": { "links": { "self": "https://api.inquickerstaging.com/v3/winter.inquickerstaging.com/schedules/681ce338-a812-4712-b616-02a33a677aca/relationships/location", "related": "https://api.inquickerstaging.com/v3/winter.inquickerstaging.com/schedules/681ce338-a812-4712-b616-02a33a677aca/location" }, "data": { "type": "locations", "id": "east-portland-1" } }, "provider": { "links": { "self": "https://api.inquickerstaging.com/v3/winter.inquickerstaging.com/schedules/681ce338-a812-4712-b616-02a33a677aca/relationships/provider", "related": "https://api.inquickerstaging.com/v3/winter.inquickerstaging.com/schedules/681ce338-a812-4712-b616-02a33a677aca/provider" } }, "service": { "links": { "self": "https://api.inquickerstaging.com/v3/winter.inquickerstaging.com/schedules/681ce338-a812-4712-b616-02a33a677aca/relationships/service", "related": "https://api.inquickerstaging.com/v3/winter.inquickerstaging.com/schedules/681ce338-a812-4712-b616-02a33a677aca/service" } }, "insurance-plans": { "links": { "self": "https://api.inquickerstaging.com/v3/winter.inquickerstaging.com/schedules/681ce338-a812-4712-b616-02a33a677aca/relationships/insurance-plans", "related": "https://api.inquickerstaging.com/v3/winter.inquickerstaging.com/schedules/681ce338-a812-4712-b616-02a33a677aca/insurance-plans" } } } }], "meta": { "record-count": 8 }, "links": { "first": "https://api.inquickerstaging.com/v3/winter.inquickerstaging.com/providers?include=locations%2Cschedules.location&page%5Bnumber%5D=1&page%5Bsize%5D=10", "last": "https://api.inquickerstaging.com/v3/winter.inquickerstaging.com/providers?include=locations%2Cschedules.location&page%5Bnumber%5D=1&page%5Bsize%5D=10" } }
};

class Home extends Component {
    constructor(props, context) {
        super(props, context);
        this.state = initialState;
    }

    componentDidMount() {
        //this.getServices();
        //this.getProviders();
    }

    getServices() {
        debugger
        var config = {
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin' : '*'
            },
        };
        axios.get("https://api.inquickerstaging.com/v3/winter.inquickerstaging.com/services", config)
            .then((response) => {
                debugger
                console.log(response);
                this.setState({ services: response })
            }).catch((err) => {
                debugger
                alert(err);
            });
    }

    getProviders() {
        debugger
        var config = {
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin' : '*'
            },
        };
        axios.get("https://api.inquickerstaging.com/v3/winter.inquickerstaging.com/providers?include=locations%2Cschedules.location&page%5Bnumber%5D=1&page%5Bsize%5D=10", config)
            .then((response) => {
                debugger
                console.log(response);
                this.setState({ providers: response })
            }).catch((err) => {
                debugger
                alert(err);
            });
    }
    render() {
        return <ListingPage services={this.state.services} providers={this.state.providers} />
    }

}
export default Home;
