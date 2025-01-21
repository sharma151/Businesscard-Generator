import Form from "../Components/Form";
import Template1 from "../Templates/Template1";
import Template2 from "../Templates/Template2";
import { UserDataContext } from "../Context/userdatacontext";
import { useContext } from "react";
import "../style/Pages/Businesscard.scss";
const Businesscard = () => {
  const { userData } = useContext(UserDataContext);

  return (
    <>
      <div className="maindiv">
        <div className="cards">
          <Template1 temp1Data={userData} />
          <Template2 temp2Data={userData} />
        </div>
        <div className="form">
          <Form />
        </div>
      </div>
    </>
  );
};

export default Businesscard;
