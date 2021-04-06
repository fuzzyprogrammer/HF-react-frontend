import axios from "axios";

export const getContactTypeList = () => {
  const response = axios.get("api/hfContactTypes");
  return response;
};
export const getShelterList = () => {
  const response = axios.get("api/shelterTypes");
  return response;
};

export const getShelterOwnershipList = () => {
  const response = axios.get("api/shelterOwnerships");
  return response;
};

export const getHfLanguages = () => {
  const response = axios.get("api/hfLanguages");
  return response;
};

export const getHFReligions = () => {
  const response = axios.get("api/hfReligions");
  return response;
};

export const getRationCardTypes = () => {
  const response = axios.get("api/rationCardTypes");
  return response;
};

export const getAllFamilyData= () => {
  axios.get('api/hffamilies')
}

export const setSubmitForm = async (values) => {
  const formData = new FormData();

  formData.append("address", values.address);
  formData.append("city", values.city);
  formData.append("contacts", JSON.stringify(values.contacts));
  formData.append("country", values.country);
  formData.append("ration_img_url", values.ration_img_url);
  formData.append("income", values.income);
  formData.append("income_source", values.income_source);
  formData.append("language", values.language);
  formData.append("name", values.name);
  formData.append("pincode", values.pincode);
  formData.append("ration_card_no", values.ration_card_no);
  formData.append("ration_card_type", values.ration_card_type);
  formData.append("religion", values.religion);
  formData.append("state", values.state);
  formData.append("street", values.street);
  formData.append("user_id", values.user_id);

  formData.append("food_source", values.food_source);
  formData.append("food_support_required", values.food_support_required);
  
  formData.append("shelter_type", values.shelter_type);
  formData.append("shelter_ownership", values.shelter_ownership);
  formData.append("shelter_support_required", values.shelter_support_required);


  formData.append("account_no", values.account_no);
  formData.append("bank_name", values.bank_name);
  formData.append("bank_branch", values.bank_branch);
  formData.append("ifsc_code", values.ifsc_code);
  for (var pair of formData.entries()) {
    console.log(pair[0] + ", " + pair[1]);
  }
  let res = await axios
    .post("api/hffamilies", formData);
  return res;
};

export const getFamily = async (id)=>{
  let res = await axios.get(`api/hffamilies/${id}`);
  console.log(res)
  return res;
}