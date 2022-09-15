import React from "react";
import Title from "./common/Title";

const Plan = () => {
  return (
    <section className="plan page-container md:mb-[75px] mb-[40px]">
      <div className="intro flex gap-y-[20px] gap-x-[50px] md:flex-row flex-col">
        <div className="flex-1">
          <img
            src="/images/plan.png"
            className="object-cover w-full h-full"
            alt=""
          />
        </div>
        <div className="flex-1">
          <div className="md:mb-5 mb-[10px]">
            <span className="block font-medium">Giới thiệu chương trình</span>{" "}
            <span className="block font-bold md:text-[20px] text-base">
              GROWTHCLUB
            </span>
            <Title>LẬP KẾ HOẠCH 90 NGÀY</Title>
            <span className="block md:text-2xl text-[20px] font-semibold">
              "GẮN KẾT ĐỘI NGŨ - BỨT PHÁ VỀ ĐÍCH"
            </span>
          </div>
          <div>
            <p className="mb-[10px] md:mb-8 leading-[1.6] text-justify">
              GrowthCLUB là chương trình Huấn luyện doanh nghiệp hàng đầu trên
              toàn thế giới, được thiết kế để hướng dẫn Chủ doanh nghiệp xây
              dựng doanh nghiệp vững mạnh thông qua việc Lập kế hoạch kinh doanh
              đơn giản hơn, hiệu quả hơn và ít tốn kém hơn.
            </p>
            <p className="leading-[1.6] text-justify">
              Chương trình GrowthCLUB - Gắn kết đội ngũ - Bứt phá về đích còn là
              nơi để các Anh/Chị Chủ Doanh Nghiệp lên kế hoạch cho quý IV cuối
              năm. Đo lường kết quả để biết được thành quả sau một năm làm việc
              của công ty như thế nào? Điều gì đã đạt được? Điều gì chưa thực
              hiện được? Điều gì cần cải tiến và Điều gì mà Doanh Nghiệp cần
              hướng đến vào năm 2023?...
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Plan;
