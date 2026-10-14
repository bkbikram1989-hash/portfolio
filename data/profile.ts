// Edit this file to update everything shown on the site.
// Leave an optional field as "" to hide it.

export const profile = {
  firstName: "Bikram",
  lastName: "Bishwakarma",
  name: "Bikram Bishwakarma",
  title: "Medical Recorder Inspector",
  organization: "Bajrabarahi Chapagaun Hospital",
  organizationNote: "Province Hospital, Government of Nepal",
  organizationAddress: "Lalitpur, Nepal",
  location: "Neelakantha-7, Dhading",
  bio: "Advocate of Humanity, Socialism, Social Justice and Inclusive Democracy.",
  dateOfBirth: "13 November 1989",
  photo: "/profile.jpg",

  about: [
    "I am a Medical Recorder Inspector at Bajrabarahi Chapagaun Hospital, a province hospital under the Government of Nepal. I began my government service in B.S. 2075 as a Medical Recorder Supervisor at District Hospital Salyan, then served for nearly seven years as Medical Recorder Inspector at Dhading Hospital before joining Bajrabarahi Chapagaun Hospital in B.S. 2083.",
    "Earlier in my career I taught mathematics and science at secondary schools in Dhading and lectured in +2 level mathematics at Kathmandu Model College. I hold an M.Sc. in Mathematics from Tribhuvan University, Institute of Science and Technology.",
    "Service has been part of my life since school: from leading Junior and Youth Red Cross circles to Lions Clubs International, where I am the Immediate Past President of the Lions Club of Kathmandu Suryamukhi and District Chairperson of District 325 I for L.Y. 2026/27.",
  ],

  currentRoles: [
    { title: "Medical Recorder Inspector", org: "Bajrabarahi Chapagaun Hospital", period: "" },
    {
      title: "District Chairperson",
      org: "Lions Clubs International, District 325 I, Nepal",
      period: "L.Y. 2026/27",
    },
    { title: "Extension Chairperson", org: "Lions Club Dhading Samaj", period: "" },
  ],

  highlights: [
    { label: "Experience", value: "9+", text: "years of professional experience" },
    { label: "Lions Clubs International", value: "325 I", text: "District Chairperson, L.Y. 2026/27" },
    { label: "Education", value: "M.Sc.", text: "Mathematics, Tribhuvan University" },
  ],

  government: [
    {
      title: "Medical Recorder Inspector",
      org: "Bajrabarahi Chapagaun Hospital",
      place: "Lalitpur, Nepal",
      period: "B.S. 2083/01/11 – Present",
      current: true,
    },
    {
      title: "Medical Recorder Inspector",
      org: "Dhading Hospital",
      place: "Dhading",
      period: "B.S. 2076/04/23 – 2083/01/08",
    },
    {
      title: "Medical Recorder Supervisor",
      org: "District Hospital Salyan",
      place: "Salyan",
      period: "B.S. 2075/06/12 – 2076/04/18",
      note: "First appointment",
    },
  ],

  teaching: [
    {
      title: "+2 Level Mathematics Lecturer",
      org: "Kathmandu Model College (KMC)",
      place: "Bagbazar, Kathmandu",
      period: "",
    },
    {
      title: "Secondary Level Mathematics & Science Teacher",
      org: "Karneshwor Secondary School",
      place: "Neelakantha-7, Dhading",
      period: "B.S. 2069 – 2070",
    },
    {
      title: "Secondary Level Mathematics Teacher",
      org: "Advance Academy",
      place: "Neelakantha-3, Dhadingbesi, Dhading",
      period: "B.S. 2068",
    },
  ],

  education: [
    {
      title: "M.Sc. Mathematics",
      org: "Tribhuvan University, Institute of Science and Technology",
      place: "",
      period: "B.S. 2071 – 2072",
    },
    {
      title: "B.Sc. (Bachelor of Science)",
      org: "Amrit Science Campus",
      place: "Kathmandu",
      period: "B.S. 2065 – 2068",
    },
    {
      title: "I.Sc. (Intermediate of Science)",
      org: "Amrit Science Campus",
      place: "Kathmandu",
      period: "B.S. 2063 – 2065",
    },
    {
      title: "Secondary School",
      org: "Shree Karneshwor Secondary School",
      place: "Neelakantha-7, Dhading",
      period: "",
    },
    {
      title: "Primary School",
      org: "Shree Sunakanya Primary School",
      place: "Neelakantha-7, Dhading",
      period: "",
    },
  ],

  lions: [
    {
      title: "District Chairperson",
      org: "Lions Clubs International, District 325 I, Nepal",
      period: "L.Y. 2026/27",
      current: true,
    },
    {
      title: "Immediate Past President",
      org: "Lions Club of Kathmandu Suryamukhi",
      period: "L.Y. 2025/26",
    },
    {
      title: "Extension Chairperson",
      org: "Lions Club Dhading Samaj",
      period: "",
      current: true,
    },
    {
      title: "Charter Member",
      org: "Lions Club of Kathmandu Suryamukhi, District 325 I",
      period: "L.Y. 2023/24",
    },
    {
      title: "Charter Second Vice President",
      org: "Lions Club of Kathmandu Dhading, District 325 G",
      period: "L.Y. 2022/23",
    },
  ],

  lionsPage: {
    name: "Lions Club Dhading Samaj",
    url: "https://www.facebook.com/lionsclubdhadingsamaj",
    logo: "/lions-logo.png",
  },

  redCross: [
    {
      title: "President",
      org: "Youth Red Cross Circle, Amrit Science Campus",
      place: "Kathmandu",
    },
    {
      title: "President",
      org: "Junior Red Cross Circle, Shree Karneshwor Secondary School",
      place: "Dhading",
    },
  ],

  skills: [
    "Medical records management",
    "Mathematics and science teaching",
    "Administrative work",
    "Anchoring of public programs",
    "First aid training",
    "Driving licence: bike/scooter and car/jeep/van",
  ],

  languages: ["Nepali", "English"],

  interests: ["Study", "Social Work", "Travel", "Law", "Politics", "Sports", "Music", "IT & AI"],

  contact: {
    emails: ["bk.bikram1989@gmail.com", "bbk879290@gmail.com"],
    phone: "",
    linkedin: "",
    facebook: "https://www.facebook.com/lion.bikram.bk",
    tiktok: "https://www.tiktok.com/@bikram_277",
  },
};

export type Profile = typeof profile;
