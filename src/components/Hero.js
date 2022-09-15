import React from "react";

const Hero = () => {
  return (
    <section className="hero w-full h-[480px] md:h-[100vh] relative bg-[url('../public/images/hero.png')] pt-[20vh] md:pt-[33vh] bg-center bg-cover bg-no-repeat md:mb-[165px] mb-[100px]">
      <div className="text-right content page-container">
        <p className="mb-[10px] md:mb-5 md:text-4xl text-[18px] font-bold text-white uppercase">
          CHƯƠNG TRÌNH GROWTHCLUB
        </p>
        <h1 className="mb-[10px] font-bold text-[40px] md:text-[96px] text-secondary uppercase leading-[1] md:mb-3">
          LẬP KẾ HOẠCH 90 NGÀY
        </h1>
        <p className="mb-[10px] text-[18px] md:text-4xl font-bold text-white uppercase md:mb-10">
          GẮN KẾT ĐỘI NGŨ - BỨT PHÁ VỀ ĐÍCH
        </p>
        <p className="font-semibold text-white leading-[1.6]">
          <span className="block">
            Thời gian: 08:00 - 18:00 | Chủ nhật, ngày 25/09/2022
          </span>
          <span className="block">
            Địa điểm: ChamPa Island Nha Trang - Sảnh Lakshmi,
          </span>
          <span className="block">Số 304, Đường 2/4, Nha Trang</span>
        </p>
      </div>
      <div className="mx-[15px] md:mx-auto slogan page-container h-[100px] md:h-[160px] rounded-[10px] shadow-[0px_4px_10px_rgba(0,_0,_0,_0.25);] flex items-center justify-center absolute bottom-[-50px] md:bottom-[-80px] left-0 right-0">
        <h2 className="text-center md:text-left font-semibold text-[18px] md:text-[32px] text-white">
          KINH DOANH MÀ{" "}
          <span className="text-secondary">KHÔNG LẬP KẾ HOẠCH</span> LÀ LẬP KẾ
          HOẠCH CHO SỰ <span className="text-secondary">THẤT BẠI</span>
        </h2>
      </div>
    </section>
  );
};

export default Hero;
