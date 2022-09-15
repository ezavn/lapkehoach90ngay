import React from "react";
import Form from "./common/Form";
import Form2 from "./common/Form2";

const Register = () => {
  return (
    <section
      id="form_register"
      className="register  bg-[url('../public/images/bg-form.png')] bg-center bg-cover bg-no-repeat"
    >
      <div className="flex md:flex-row flex-col items-start justify-between page-container md:py-[70px] py-[50px]">
        <div className="mx-auto md:mx-0">
          <div className="h-[72px] bg-secondary text-[18px] md:text-4xl text-white items-center justify-center px-[15px] md:px-8 md:mb-[45px] mb-[20px] hidden md:inline-flex">
            CHƯƠNG TRÌNH GROWTHCLUB
          </div>
          <h2 className="md:block hidden font-bold text-[28px] md:text-[64px] text-white leading-[1.5] mb-[30px] md:mb-0">
            GẮN KẾT ĐỘI NGŨ <br />{" "}
            <span className="ml-[40px] md:ml-[140px]">BỨT PHÁ VỀ ĐÍCH</span>
          </h2>
        </div>
        <div className="form-register w-auto md:w-[446px] rounded-[10px] p-[25px_12px_30px_12px]  md:p-[45px_32px_50px_32px]">
          <h3 className="text-base mb-[10px] md:mb-[20px] md:text-xl font-bold text-white leading-[1.5] text-center">
            ĐĂNG KÝ THAM DỰ <span className="block">CHƯƠNG TRÌNH</span>{" "}
            <span className="block md:text-[40px] text-[28px]">GROWTHCLUB</span>
          </h3>
          <Form2></Form2>
          {/* <Form></Form> */}
        </div>
      </div>
    </section>
  );
};

export default Register;
