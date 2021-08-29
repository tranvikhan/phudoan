import type { NextPage } from "next";

import WebHead from "../src/components/layout/WebHead";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";
import Image from "next/image";

import Layout from "../src/components/layout/Layout";
export const getStaticProps = async ({ locale }: any) => ({
  props: {
    ...(await serverSideTranslations(locale, ["home"])),
  },
});

const Home: NextPage = () => {
  const { t } = useTranslation("home");
  return (
    <>
      <WebHead />
      <Layout>
        <div className="flex flex-col space-y-20 my-20">
          <section className="grid grid-cols-2 lg:grid-cols-4">
            <div className="px-10 pt-10 pb-16 flex flex-col items-start space-y-6 shadow-lg bg-white">
              <Image width={60} height={60} src="/assets/icon/x50_accept.svg" />
              <h2 className="text-header font-extrabold text-xl">
                Chi phí hợp lý và hiệu quả
              </h2>
              <p className="text-text font-medium text-base flex-grow">
                Chúng tôi cung cấp các dịch vụ với chi phí hợp lý nhất để đảm
                bảo lợi ích cho khách hàng.
              </p>
            </div>
            <div className="px-10 pt-10 pb-16 flex flex-col items-start space-y-6 shadow-lg transform -translate-x-2 z-10 bg-white">
              <Image width={60} height={60} src="/assets/icon/x50_accept.svg" />
              <h2 className="text-header font-extrabold text-xl">
                Chi phí hợp lý và hiệu quả
              </h2>
              <p className="text-text font-medium text-base flex-grow">
                Chúng tôi cung cấp các dịch vụ với chi phí hợp lý nhất để đảm
                bảo lợi ích cho khách hàng.
              </p>
            </div>
            <div className="px-10 pt-10 pb-16 flex flex-col items-start space-y-6 shadow-lg transform -translate-x-2 z-10 bg-white">
              <Image width={60} height={60} src="/assets/icon/x50_accept.svg" />
              <h2 className="text-header font-extrabold text-xl">
                Chi phí hợp lý và hiệu quả
              </h2>
              <p className="text-text font-medium text-base flex-grow">
                Chúng tôi cung cấp các dịch vụ với chi phí hợp lý nhất để đảm
                bảo lợi ích cho khách hàng.
              </p>
            </div>
            <div className="px-10 pt-10 pb-16 flex flex-col items-start space-y-6 shadow-lg transform -translate-x-2 z-10 bg-white">
              <Image width={60} height={60} src="/assets/icon/x50_accept.svg" />
              <h2 className="text-header font-extrabold text-xl">
                Chi phí hợp lý và hiệu quả
              </h2>
              <p className="text-text font-medium text-base flex-grow">
                Chúng tôi cung cấp các dịch vụ với chi phí hợp lý nhất để đảm
                bảo lợi ích cho khách hàng.
              </p>
            </div>
          </section>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            <video controls loop>
              <source src="/assets/video/PhuDoanVideo.mp4" type="video/mp4" />
            </video>
            <div className="flex flex-col space-y-6">
              <h6 className="text-primary font-bold text-lg">VỀ CHÚNG TÔI</h6>
              <h2 className="text-header font-extrabold text-3xl">
                Đội ngũ bề dày kinh nghiệm với sự sáng tạo và tâm huyết
              </h2>
              <p className="text-text font-medium text-base flex-grow">
                Công ty đi vào hoạt động và phát triển cùng với đội ngũ trẻ, tốt
                nghiệp Thạc sỹ, kỹ sư chuyên ngành: Khai thác cảng biển, kinh tế
                vận tải biển…
              </p>
              <div className="w-full p-10 shadow-xl text-primary font-bold text-lg border-l-4 border-primary">
                Định hướng phát triển một dịch vụ Logistics chuyên nghiệp và bền
                vững
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            <div className="flex flex-col space-y-6">
              <h6 className="text-primary font-bold text-lg">DỊCH VỤ</h6>
              <h2 className="text-header font-extrabold text-3xl">
                Không ngừng đổi mới và nâng cao chất lượng dịch vụ.
              </h2>
              <p className="text-text font-medium text-base">
                Luôn cải tiến áp dụng khoa học kỹ thuật về quy trình công nghệ
                Khai thác và xếp dỡ các loại hàng hóa, đặc biệt là hàng quá tải,
                quá khổ cho các công trình.
              </p>
              <p className="text-text font-medium text-base">
                Đáp ứng với nhu cầu ngày càng cao của đối tác, cùng với mục tiêu
                phấn đấu trở thành Công ty lớn mạnh trong lĩnh vực dịch vụ hỗ
                trợ hoạt động hàng hải.
              </p>
              <div className="flex">
                <div className="text-bold text-base py-3 px-4 shadow-xl w-auto text-white bg-primary uppercase rounded">
                  Tìm hiểu các dịch vụ
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-5">
              <div className="w-full h-40  relative">
                <img
                  src="/assets/image/x640_service1.png"
                  className="object-cover h-full w-full filter brightness-75"
                />
                <div className="absolute top-0 w-full h-full  left-0 flex items-center justify-center uppercase font-bold text-xl text-white text-center">
                  Dịch vụ
                  <br /> Cảng biển
                </div>
              </div>
              <div className="w-full h-40  relative">
                <img
                  src="/assets/image/x640_service1.png"
                  className="object-cover h-full w-full filter brightness-75"
                />
                <div className="absolute top-0 w-full h-full  left-0 flex items-center justify-center uppercase font-bold text-xl text-white text-center">
                  Dịch vụ <br />
                  Cảng biển
                </div>
              </div>
              <div className="w-full h-40  relative">
                <img
                  src="/assets/image/x640_service1.png"
                  className="object-cover h-full w-full filter brightness-75"
                />
                <div className="absolute top-0 w-full h-full  left-0 flex items-center justify-center uppercase font-bold text-xl text-white text-center">
                  Dịch vụ <br /> Cảng biển
                </div>
              </div>
              <div className="w-full h-40  relative">
                <img
                  src="/assets/image/x640_service1.png"
                  className="object-cover h-full w-full filter brightness-75"
                />
                <div className="absolute top-0 w-full h-full  left-0 flex items-center justify-center uppercase font-bold text-xl text-white text-center">
                  Dịch vụ <br /> Cảng biển
                </div>
              </div>
              <div className="w-full h-40  relative">
                <img
                  src="/assets/image/x640_service1.png"
                  className="object-cover h-full w-full filter brightness-75"
                />
                <div className="absolute top-0 w-full h-full  left-0 flex items-center justify-center uppercase font-bold text-xl text-white text-center">
                  Dịch vụ
                  <br /> Cảng biển
                </div>
              </div>
              <div className="w-full h-40  relative">
                <img
                  src="/assets/image/x640_service1.png"
                  className="object-cover h-full w-full filter brightness-75"
                />
                <div className="absolute top-0 w-full h-full  left-0 flex items-center justify-center uppercase font-bold text-xl text-white text-center">
                  Dịch vụ
                  <br /> Cảng biển
                </div>
              </div>
            </div>
          </div>

          <section>
            <h2 className="text-header font-extrabold text-3xl mb-8">
              Các dự án tiêu biểu
            </h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
              <div className="flex flex-col rounded shadow">
                <img
                  src="/assets/image/x640_service1.png"
                  className="object-cover h-96 w-full rounded-tl rounded-tr"
                />
                <div className="p-6 font-bold text-xl">
                  Dự án lọc hóa dầu Long Sơn - Bà Rịa – Vũng Tàu
                </div>
              </div>
              <div className="flex flex-col rounded shadow">
                <img
                  src="/assets/image/x640_service1.png"
                  className="object-cover h-96 w-full rounded-tl rounded-tr"
                />
                <div className="p-6 font-bold text-xl">
                  Dự án lọc hóa dầu Long Sơn - Bà Rịa – Vũng Tàu
                </div>
              </div>
              <div className="flex flex-col rounded shadow">
                <img
                  src="/assets/image/x640_service1.png"
                  className="object-cover h-96 w-full rounded-tl rounded-tr"
                />
                <div className="p-6 font-bold text-xl">
                  Dự án lọc hóa dầu Long Sơn - Bà Rịa – Vũng Tàu
                </div>
              </div>
              <div className="flex flex-col rounded shadow">
                <img
                  src="/assets/image/x640_service1.png"
                  className="object-cover h-96 w-full rounded-tl rounded-tr"
                />
                <div className="p-6 font-bold text-xl">
                  Dự án lọc hóa dầu Long Sơn - Bà Rịa – Vũng Tàu
                </div>
              </div>
              <div className="flex flex-col rounded shadow">
                <img
                  src="/assets/image/x640_service1.png"
                  className="object-cover h-96 w-full rounded-tl rounded-tr"
                />
                <div className="p-6 font-bold text-xl">
                  Dự án lọc hóa dầu Long Sơn - Bà Rịa – Vũng Tàu
                </div>
              </div>
              <div className="flex flex-col rounded shadow">
                <img
                  src="/assets/image/x640_service1.png"
                  className="object-cover h-96 w-full rounded-tl rounded-tr"
                />
                <div className="p-6 font-bold text-xl">
                  Dự án lọc hóa dầu Long Sơn - Bà Rịa – Vũng Tàu
                </div>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-header font-extrabold text-3xl mb-8">
              Các dự án tiêu biểu
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
              <div className="flex flex-col rounded shadow">
                <img
                  src="/assets/image/x640_service1.png"
                  className="object-cover h-64 w-full rounded-tl rounded-tr"
                />
                <div className="p-6 font-bold text-xl">
                  Dự án lọc hóa dầu Long Sơn - Bà Rịa – Vũng Tàu
                </div>
              </div>
              <div className="flex flex-col rounded shadow">
                <img
                  src="/assets/image/x640_service1.png"
                  className="object-cover h-64 w-full rounded-tl rounded-tr"
                />
                <div className="p-6 font-bold text-xl">
                  Dự án lọc hóa dầu Long Sơn - Bà Rịa – Vũng Tàu
                </div>
              </div>
              <div className="flex flex-col rounded shadow">
                <img
                  src="/assets/image/x640_service1.png"
                  className="object-cover h-64 w-full rounded-tl rounded-tr"
                />
                <div className="p-6 font-bold text-xl">
                  Dự án lọc hóa dầu Long Sơn - Bà Rịa – Vũng Tàu
                </div>
              </div>
              <div className="flex flex-col rounded shadow">
                <img
                  src="/assets/image/x640_service1.png"
                  className="object-cover h-64 w-full rounded-tl rounded-tr"
                />
                <div className="p-6 font-bold text-xl">
                  Dự án lọc hóa dầu Long Sơn - Bà Rịa – Vũng Tàu
                </div>
              </div>
              <div className="flex flex-col rounded shadow">
                <img
                  src="/assets/image/x640_service1.png"
                  className="object-cover h-64 w-full rounded-tl rounded-tr"
                />
                <div className="p-6 font-bold text-xl">
                  Dự án lọc hóa dầu Long Sơn - Bà Rịa – Vũng Tàu
                </div>
              </div>
              <div className="flex flex-col rounded shadow">
                <img
                  src="/assets/image/x640_service1.png"
                  className="object-cover h-64 w-full rounded-tl rounded-tr"
                />
                <div className="p-6 font-bold text-xl">
                  Dự án lọc hóa dầu Long Sơn - Bà Rịa – Vũng Tàu
                </div>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-header font-extrabold text-3xl mb-8">
              Các dự án tiêu biểu
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-10">
              <div className="flex items-center justify-center rounded shadow p-2 h-48">
                <img
                  src="/assets/image/customer/x172_logo_posco.png"
                  className="object-cover h-full w-full rounded-tl rounded-tr"
                />
              </div>
              <div className="flex items-center justify-center rounded shadow p-2 h-48">
                <img
                  src="/assets/image/customer/x172_logo_posco.png"
                  className="object-cover h-full w-full rounded-tl rounded-tr"
                />
              </div>
              <div className="flex items-center justify-center rounded shadow p-2 h-48">
                <img
                  src="/assets/image/customer/x172_logo_posco.png"
                  className="object-cover h-full w-full rounded-tl rounded-tr"
                />
              </div>
              <div className="flex items-center justify-center rounded shadow p-2 h-48">
                <img
                  src="/assets/image/customer/x172_logo_posco.png"
                  className="object-cover h-full w-full rounded-tl rounded-tr"
                />
              </div>
              <div className="flex items-center justify-center rounded shadow p-2 h-48">
                <img
                  src="/assets/image/customer/x172_logo_posco.png"
                  className="object-cover h-full w-full rounded-tl rounded-tr"
                />
              </div>
              <div className="flex items-center justify-center rounded shadow p-2 h-48">
                <img
                  src="/assets/image/customer/x172_logo_posco.png"
                  className="object-cover h-full w-full rounded-tl rounded-tr"
                />
              </div>
              <div className="flex items-center justify-center rounded shadow p-2 h-48">
                <img
                  src="/assets/image/customer/x172_logo_posco.png"
                  className="object-cover h-full w-full rounded-tl rounded-tr"
                />
              </div>
              <div className="flex items-center justify-center rounded shadow p-2 h-48">
                <img
                  src="/assets/image/customer/x172_logo_posco.png"
                  className="object-cover h-full w-full rounded-tl rounded-tr"
                />
              </div>
              <div className="flex items-center justify-center rounded shadow p-2 h-48">
                <img
                  src="/assets/image/customer/x172_logo_posco.png"
                  className="object-cover h-full w-full rounded-tl rounded-tr"
                />
              </div>
              <div className="flex items-center justify-center rounded shadow p-2 h-48">
                <img
                  src="/assets/image/customer/x172_logo_posco.png"
                  className="object-cover h-full w-full rounded-tl rounded-tr"
                />
              </div>
            </div>
          </section>
        </div>
      </Layout>
    </>
  );
};

export default Home;
