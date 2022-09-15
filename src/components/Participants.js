import React from "react";
import Button from "./common/Button";
import Countdown from "./common/Countdown";
import Title from "./common/Title";

const Participants = () => {
  return (
    <section className="participants bg-[url('../public/images/participants-mb.png')] md:bg-[url('../public/images/participants.png')] h-auto md:h-[630px] w-full bg-center bg-cover bg-no-repeat md:mb-[75px] mb-[40px] pt-[15px] pb-[60px] md:py-[60px] relative">
      <div className="page-container">
        <div className="flex flex-col md:items-start justify-between md:flex-row">
          <div className="mb-[10px] md:mb-0">
            <Title small className="mb-[10px]">
              ĐỐI TƯỢNG THAM GIA
            </Title>
            <div className="flex items-center mb-1">
              <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-secondary">
                <img srcSet="/icons/check.png 2x" alt="" />
              </span>
              <p className="font-semibold ml-[10px] ">
                Chủ doanh nghiệp/CEO/Chủ tịch HĐQT
              </p>
            </div>
            <div className="flex items-center">
              <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-secondary">
                <img srcSet="/icons/check.png 2x" alt="" />
              </span>
              <p className="font-semibold ml-[10px] ">Đội ngũ nhân sự</p>
            </div>
          </div>
          <div className="text-right">
            <h3 className="mb-2 text-xl font-bold text-primary">
              HÌNH THỨC TỔ CHỨC OFFLINE
            </h3>
            <p className="font-bold leading-[1.6] ">
              Thời gian: 08:00 - 18:00 <br />
              Chủ nhật, ngày 25/09/2022 <br />
              Địa điểm: ChamPa Island Nha Trang - Sảnh Lakshmi,
            </p>
            <p className="md:mt-2 text-lg font-bold text-secondary">
              Số 304, Đường 2/4, Nha Trang
            </p>
          </div>
        </div>
        <div className="md:mt-[160px] mt-[50px]">
          <Countdown></Countdown>
          <div className="text-center md:mt-[50px] mt-[20px]">
            <Button></Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Participants;
