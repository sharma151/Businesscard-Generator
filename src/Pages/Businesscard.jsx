import Form from "../Components/Form";
import Template1 from "../Templates/Template1";
// import Template2 from "../Templates/Template2";
// import Template3 from "../Templates/Template3";
// import Template4 from "../Templates/Template4";
// import Template5 from "../Templates/Template5";
import { UserDataContext } from "../Context/userdatacontext";
import { useContext } from "react";

const Businesscard = () => {
  const { userData } = useContext(UserDataContext);

  return (
    <div className="flex flex-col md:flex-row gap-6 p-4">
      {/* Form Section */}
      <div className="w-full md:w-1/3">
        <Form />
      </div>

      {/* Cards Section */}
      <div className="w-full md:w-2/3 overflow-y-auto max-h-[90vh] pr-2">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          <Template1 temp1Data={userData} />
          {/* <Template2 temp2Data={userData} />
          <Template3 temp3Data={userData} />
          <Template4 temp4Data={userData} />
          <Template5 temp5Data={userData} /> */}
        </div>
      </div>
    </div>
  );
};

export default Businesscard;
