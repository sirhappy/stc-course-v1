<template>
  <div class="main-page details-page mx-auto mt-16 max-w-700 px-32">
    <div class="grid items-center justify-center gap-16 text-center">
      <h3 class="text-highlight mt-16 text-25 font-900">
        Khoá học Blockchain Toàn diện, <span class="inline-block">Chuyên sâu từ Cơ bản đến Nâng cao</span>
      </h3>
      <div class="text-15 font-500">
        <p>
          Bạn đam mê khám phá công nghệ blockchain và muốn xây dựng nền tảng vững chắc trong lĩnh vực này?
        </p>
        <p>Khoá học Blockchain Toàn diện chính là sự lựa chọn hoàn hảo dành cho bạn.</p>
      </div>
      <p>
        _____
      </p>

      <div>
        <h6 class="text-highlight text-18 font-700">
          Nội dung khoá học:
        </h6>

        <ul class="grid mt-16 list-disc gap-16 text-left text-15">
          <li>
            <span class="text-highlight font-600">
              Cơ bản về Blockchain:
            </span>
            <span>Khám phá cấu trúc, lịch sử và tiềm năng phát triển của blockchain. Tìm hiểu về các loại blockchain khác nhau và ứng dụng của chúng trong các lĩnh vực khác nhau.</span>
          </li>
          <li>
            <span class="text-highlight font-600">
              Phân tích cơ bản và kỹ thuật:
            </span>
            <span>Học các phương pháp phân tích để đánh giá tiềm năng của các dự án blockchain. Bao gồm phân tích đồ thị nến, chỉ báo kỹ thuật như RSI, MACD và các chiến lược phân tích số liệu để đưa ra các quyết định đầu tư thông minh.</span>
          </li>
          <li>
            <span class="text-highlight font-600">
              Bảo mật:
            </span>
            <span>Áp dụng giải pháp bảo mật tiên tiến và quản lý rủi ro để bảo vệ tài sản điện tử khỏi các mối đe dọa như hack, lừa đảo và mất mát thông tin cá nhân.</span>
          </li>
          <li>
            <span class="text-highlight font-600">
              Quản lý đầu tư:
            </span>
            <span>Xây dựng chiến lược đầu tư phù hợp với từng giai đoạn thị trường, từ thị trường bull đến bear. Học cách quản lý rủi ro và tối ưu hóa lợi nhuận trong môi trường thị trường biến động.</span>
          </li>
          <li>
            <span class="text-highlight font-600">
              Các chiến lược kiếm tiền:
            </span>
            <span>Thực hành các phương pháp như staking, yield farming và giao dịch để tối đa hóa thu nhập từ các hoạt động trên blockchain.</span>
          </li>
        </ul>
      </div>

      <p>
        _____
      </p>

      <div>
        <h6 class="text-highlight mt-16 text-18 font-700">
          Điểm nổi bật của khoá học
        </h6>

        <ul class="grid mt-16 list-disc gap-16 text-left text-15">
          <li>
            <span class="text-highlight font-600">
              Giảng viên có kinh nghiệm:
            </span>
            <span>Anh Đông Phạm, với hơn 20 năm kinh nghiệm trong thị trường tài chính và vai trò là founder của Saigon TradeCoin và quỹ đầu tư STC Capital.</span>
          </li>
          <li>
            <span class="text-highlight font-600">
              Thực hành trực tiếp:
            </span>
            <span>Học viên có cơ hội áp dụng kiến thức ngay trong môi trường thực tế của thị trường blockchain, với các bài tập và dự án thực hành.</span>
          </li>
        </ul>
      </div>
      <AButton
        class="mt-16 h-50 bg-red1 text-18 text-white md:w-200"
        block
        @click="$router.push({ name: 'Payment' })"
      >
        Ghi danh
      </AButton>
    </div>
  </div>
</template>

<script setup lang=ts>
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap');
.details-page{
  font-family: "Roboto", sans-serif;
  font-size: 1.6rem;
}
</style>
