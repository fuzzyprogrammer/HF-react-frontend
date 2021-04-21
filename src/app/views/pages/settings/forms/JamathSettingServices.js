import axios from "axios";
const fd = new FormData();

const deniedColumnName = (name, value) => {
  !value && fd.append(name, value);
  // console.log("fd values " + name + ': '+fd.get(name));
};

export const FormSubmit = ({ ...state }) => {
  if (state?.religiousEducation) {
    deniedColumnName("relAcademyName", state?.relAcademyName);
    deniedColumnName("relAcademyYear", state?.relAcademyYear);
    deniedColumnName("relAcademyClass", state?.relAcademyClass);
    deniedColumnName("relAcademyMajor", state?.relAcademyMajor);
    deniedColumnName("relAcademyMedium", state?.relAcademyMedium);
    deniedColumnName("relAcademyStatus", state?.relAcademyStatus);
  } else {
    fd("relAcademyName", false);
    fd("relAcademyYear", false);
    fd("relAcademyClass", false);
    fd("relAcademyMajor", false);
    fd("relAcademyMedium", false);
    fd("relAcademyStatus", false);
  }
  // deniedColumnName("religiousEducation", state?.religiousEducation);
  deniedColumnName("generalEducation", state?.generalEducation);
  deniedColumnName("genAcademyName", state?.genAcademyName);
  deniedColumnName("genAcademyYear", state?.genAcademyYear);
  deniedColumnName("genAcademyClass", state?.genAcademyClass);
  deniedColumnName("genAcademyMajor", state?.genAcademyMajor);
  deniedColumnName("genAcademyMedium", state?.genAcademyMedium);
  deniedColumnName("genAcademyStatus", state?.genAcademyStatus);
  // deniedColumnName("jamath_id", state?.jamath_id);
  fd.append("jamath_id", state?.jamath_id);

  let res = axios.post("/api/access-denied/", fd);
  console.log(res);
  return res;
};
