import axios from "axios";

export const getMajorList = () => {
  let response = axios.get("api/hfAcademy-majors");
  return response;
};

export const getDeniedList = (user) => {
  return axios.post("api/denied-access-list",user);
}

export const handleMemberSubmit = (values) => {
  let formData = new FormData();
  formData.append("isHead", values.isHead);
  formData.append("name", values.name);
  formData.append("dob", values.dob);
  formData.append("relationship", values.relationship);
  formData.append("family_id", values.family_id);
  formData.append("gender", values.gender);
  formData.append("marital_status", values.marital_status);

  formData.append("occupation_type", values.occupation);

  formData.append("work_place_name", values.work_place_name);
  formData.append("work_place_address", values.work_place_address);
  formData.append("income", values.income);
  
  formData.append("gen_education_type", values.education_type);
  formData.append("academy_name", values.academy_name);
  formData.append("academic_year", values.academic_year);
  formData.append("academy_class", values.academy_class);
  formData.append("major", values.major);
  formData.append("medium", values.medium);
  formData.append("gen_status", values.gen_status);
  
  formData.append("rel_education_type", values.rel_education_type);
  formData.append("rel_academy_name", values.rel_academy_name);
  formData.append("rel_academic_year", values.rel_academic_year);
  formData.append("rel_academy_class", values.rel_academy_class);
  formData.append("rel_major", values.rel_major);
  formData.append("rel_medium", values.rel_medium);
  formData.append("rel_status", values.rel_status);
  
  formData.append("isHead", values.is_head);
  
  formData.append("mem_hobby", values.mem_hobby);
  formData.append("mem_skill", values.mem_skill);
  formData.append("mem_goal", values.mem_goal);
  formData.append("course", values.course);
  
  formData.append("aadhar_card_no", values.aadhar_card_no);
  formData.append("health_card_no", values.health_card_no);
  formData.append("labour_card_no", values.labour_card_no);
  formData.append("senior_citizen_card_no", values.senior_citizen_card_no);
  formData.append("voter_id_no", values.voter_id_no);
  formData.append("account_number", values.account_number);
  
  formData.append("profile_img_url", values.profileImg);
  formData.append("aadhar_card_img_url", values.aadharImg);
  formData.append("voter_id_card_img_url", values.voterIdImg);
  formData.append("health_card_img_url", values.healthCardImg);
  formData.append("labour_card_img_url", values.labourCardImg);
  formData.append("senior_citizen_card_img_url", values.seniorCitizenCard);
  formData.append("passbook_url", values.passbook);

  formData.append("blood_group", values.blood_group);
  formData.append("disease", values.disease);
  formData.append("since", values.since);
  formData.append("health_status", values.health_status);
  formData.append("hospital", values.hospital);
  formData.append("hospital_place", values.hospital_place);
  formData.append("exercise", values.exercise);
  
  formData.append("hlth_support_received", values.hlth_support_received);
  formData.append("hlth_support_source", values.hlth_support_source);
  formData.append("hlth_support_required", values.hlth_support_required);

  formData.append("sr_support_received", values.sr_support_received);
  formData.append("sr_support_source", values.sr_support_source);
  formData.append("sr_support_required", values.sr_support_required);

  formData.append("edu_support_received", values.edu_support_received);
  formData.append("edu_support_source", values.edu_support_source);
  formData.append("edu_support_required", values.edu_support_required);

  formData.append("priority_support", values.priority_support);


  formData.append("contacts", JSON.stringify(values.contacts));
  for (var pair of formData.entries()) {
    console.log(pair[0] + ", " + pair[1]);
  }
  let res = axios.post("api/family-members", formData)
  return res;
};

