import Form from "../Components/Form";
import Template1 from "../Templates/Template1";
import Template2 from "../Templates/Template2";
import Template3 from "../Templates/Template3";
import { UserDataContext } from "../Context/userdatacontext";
import { useContext } from "react";
import "../style/Pages/Businesscard.scss";
import Template4 from "../Templates/Template4";
import Template5 from "../Templates/Template5";
const Businesscard = () => {
  const { userData } = useContext(UserDataContext);

  return (
    <>
      <div className="maindiv">
        <div className="cards">
          <Template1 temp1Data={userData} />
          <Template2 temp2Data={userData} />
          <Template3 temp3Data={userData} />
          <Template4 temp4Data={userData} />
          <Template5 temp5Data={userData} />
        </div>
        <div className="form">
          <Form />
        </div>
      </div>
    </>
  );
};

export default Businesscard;
