import Form from "../Components/Form";
import Template1 from "../Templates/Template1";
import Template2 from "../Templates/Template2";
import Template3 from "../Templates/Template3";
import Template4 from "../Templates/Template4";
// import Template5 from "../Templates/Template5";
import { UserDataContext } from "../Context/userdatacontext";
import { useContext } from "react";

const Businesscard = () => {
  const { userData } = useContext(UserDataContext);

  return (
    <div className="flex flex-col-reverse md:flex-row p-2 sm:p-6 w-full max-w-full overflow-x-hidden ">
  {/* Cards Section */}
  <div className="w-full md:flex-1.4 md:pr-2 mt-4 sm:mt-0 ">
    <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-2 w-full sm:1/3">
      <Template1 temp1Data={userData} />
      <Template2 temp2Data={userData} />
      <Template3 temp3Data={userData} />
      <Template4 temp4Data={userData} />
      {/* <Template5 temp5Data={userData} /> */}
    </div>
  </div>

  {/* Form Section */}
  <div className="w-full md:w-1/2 ">
    <Form />
  </div>
</div>

  );
};

export default Businesscard;
