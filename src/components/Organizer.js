import React from "react";
import Title from "./common/Title";

const Organizer = () => {
  return (
    <section className="organizer mb-[40px] md:mb-0">
      <div className="flex md:flex-row flex-col items-center page-container gap-x-[40px]">
        <img src="/images/organizer.png" alt="" />
        <div className="mt-[30px] md:mt-0">
          <Title className="md:mb-[40px] text-center md:text-left mb-[10px]">
            ĐƠN VỊ TỔ CHỨC
          </Title>
          <div>
            <h3 className="text-center md:text-left font-semibold text-4xl text-[#E6435C] mb-[20px] md:mb-[35px]">
              ACTIONCOACH CHT FIRM
            </h3>
            <p className="font-medium text-justify">
              <span className="text-lg font-bold">
                Với tầm nhìn “Tạo ra một thế giới thịnh vượng thông qua hoạt
                động tái đào tạo doanh nghiệp.”
              </span>{" "}
              Đối với Chúng tôi - Những nhà đào tạo chuyên nghiệp, việc giúp đỡ
              các Chủ Doanh Nghiệp phát triển mạnh Nhất luôn là ưu tiên hàng
              đầu. ActionCOACH CHT Firm sẽ là nơi mang đến cho các bạn sự trải
              nghiệm tuyệt vời nhất.{" "}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Organizer;
