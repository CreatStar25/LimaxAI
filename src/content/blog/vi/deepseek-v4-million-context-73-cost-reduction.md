---
title: "DeepSeek V4: Ngữ cảnh 1 triệu token, giảm 73% chi phí"
description: "Các mẫu thuộc dòng DeepSeek V4 đã chính thức ra mắt, hỗ trợ ngữ cảnh 1 triệu token, với chi phí suy luận giảm 73% so với thế hệ trước. Bao gồm các phiên bản Pro và Flash, cung cấp các lựa chọn mẫu lớn hiệu suất cao, tiết kiệm chi phí cho các nhà phát triển AI."
tags: ["deepseek v4", "trang web chính thức deepseek", "hướng dẫn deepseek", "giá deepseek v4"]
pubDate: "2026-04-24"
heroImage: "https://img.limaxai.com/aiweb/deepseek-blog-limax-260424-2.png"
lang: "vi"
author: "DeepSeek HK"
---

Từ khóa: deepseek v4, trang web chính thức deepseek, hướng dẫn deepseek, giá deepseek v4

Ngày phát hành: 24 tháng 4 năm 2026

Tác giả: DeepSeek HK

<div style="text-align: center; margin: 2rem 0;">
  <a href="https://www.limaxai.com/vi/chat?model=deepseek-v4-flash" style="display: inline-block; padding: 1rem 2rem; background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; text-decoration: none; border-radius: 8px; font-weight: 600; font-size: 1.2rem; box-shadow: 0 4px 14px 0 rgba(102, 126, 234, 0.4); transition: all 0.3s ease;">
    Bắt đầu sử dụng DeepSeek
  </a>
</div>

![DeepSeek V4: Ngữ cảnh 1 triệu token, giảm 73% chi phí](https://img.limaxai.com/aiweb/deepseek-blog-limax-260424-2.png)

Hôm nay, DeepSeek chính thức thông báo ra mắt và mở mã nguồn phiên bản xem trước của dòng DeepSeek-V4, hệ thống mẫu hàng đầu thế hệ tiếp theo sau V3.2. Bản phát hành này bao gồm hai mẫu: DeepSeek-V4-Pro và DeepSeek-V4-Flash, cả hai đều áp dụng kiến trúc MoE với quy mô tham số tổng thể tương ứng là 1,6T (49B kích hoạt) và 284B (13B kích hoạt), và cả hai đều hỗ trợ ngữ cảnh tối đa 1 triệu token.

Đại diện DeepSeek cũng cho biết, do hạn chế về năng lực tính toán hiệu suất cao, thông lượng dịch vụ hiện tại của DeepSeek-V4-Pro rất hạn chế. Dự kiến sau khi siêu nút Ascend 950 được triển khai hàng loạt vào nửa cuối năm, giá của sản phẩm sẽ giảm đáng kể. Ngoài ra, DeepSeek-V4 đã nhận được hỗ trợ thích ứng Ngày 0 từ Cambricon, và mã thích ứng liên quan đã được mở mã nguồn cho cộng đồng GitHub.

## Sự khác biệt về định vị mẫu
DeepSeek-V4-Pro tập trung vào giới hạn trên của hiệu suất, so sánh với các mẫu hàng đầu có mã nguồn đóng; trong khi DeepSeek-V4-Flash giảm đáng kể quy mô tham số và quy mô kích hoạt để đổi lấy độ trễ thấp hơn và chi phí thấp hơn. So với mẫu thế hệ trước, nó đã được cải thiện thêm về năng lượng agent, kiến thức thế giới và các tác vụ lý luận phức tạp, và lần đầu tiên "ngữ cảnh 1 triệu token" được mở ra như một năng lực mặc định.

### Năng lực agent được cải thiện đáng kể
Về năng lực agent, năng lực agent của DeepSeek-V4-Pro đã được cải thiện đáng kể. Nó đã bước vào hạng mục đầu tiên của các giải pháp mã nguồn mở trong các đánh giá như lập trình agentic. Các đánh giá nội bộ cho thấy chất lượng đầu ra của nó gần với chế độ không suy nghĩ của Claude Opus 4.6, nhưng vẫn còn khoảng cách so với chế độ suy nghĩ của nó.

DeepSeek-V4-Pro đã vượt qua các mẫu mã nguồn mở hiện đang được đánh giá công khai trong các tác vụ độ khó cao như toán học, STEM và mã cuộc thi, và hiệu suất tổng thể của nó gần hoặc thậm chí có thể so sánh với các mẫu mã nguồn đóng hàng đầu như GPT-5.4 và Claude Opus 4.6-Max.

### Chi phí ngữ cảnh dài giảm đáng kể
Đồng thời, DeepSeek-V4 đã giới thiệu một loạt các tối ưu hóa mạnh mẽ hơn về hiệu quả ngữ cảnh dài: trong các kịch bản 1 triệu token, phép tính suy luận trên mỗi token chỉ bằng 27% so với V3.2, và việc sử dụng bộ nhớ đệm KV được giảm xuống còn khoảng 10%, làm giảm đáng kể chi phí năng lực tính toán và bộ nhớ video cho các tác vụ liên kết dài.

## Kế hoạch giá API
Giá API được chính thức công bố cho dòng DeepSeek-V4:
- DeepSeek-V4-Pro: 1 nhân dân tệ / triệu token cho dữ liệu đầu vào được lưu vào bộ nhớ đệm, 12 nhân dân tệ / triệu token cho dữ liệu đầu vào không được lưu vào bộ nhớ đệm, 24 nhân dân tệ / triệu token cho dữ liệu đầu ra
- DeepSeek-V4-Flash: chỉ 0,2 nhân dân tệ / triệu token cho dữ liệu đầu vào được lưu vào bộ nhớ đệm, 1 nhân dân tệ / triệu token cho dữ liệu đầu vào không được lưu vào bộ nhớ đệm, 2 nhân dân tệ / triệu token cho dữ liệu đầu ra

Hiện tại, dòng DeepSeek-V4 đã được ra mắt trên trang web chính thức và ứng dụng, và các API cũng như trọng số mẫu được mở cùng lúc.

## Trải nghiệm thực tế: Cải thiện toàn diện năng lực
Chúng tôi đã trải nghiệm ban đầu những thay đổi của DeepSeek-V4, chủ yếu kiểm tra mẫu DeepSeek-V4-Pro.

### Năng lực lập trình agentic được cải thiện đáng kể
Trong trường hợp phát triển giao diện web một lần, DeepSeek-V4-Pro cho thấy hiệu suất thực thi cao. Vì yêu cầu không phức tạp, mẫu chỉ mất 5 giây để suy nghĩ, sau đó phát triển nhanh chóng, điều này khác biệt đáng kể so với mô hình của các mẫu DeepSeek trước đây lãng phí nhiều token vào suy nghĩ. Sau khi đi vào quá trình tạo ra thực tế, độ dài đầu ra của DeepSeek-V4-Pro dài hơn đáng kể so với các mẫu DeepSeek khác, với tốc độ tạo ra nhanh chóng, về cơ bản tạo ra theo đơn vị 5 dòng mã, và mức độ hoàn thành trang web cao hơn so với DeepSeek-V3.2, với thiết kế phong phú hơn.

Trong bài kiểm tra tác vụ kết hợp năng lực agent và lập trình, DeepSeek-V4-Pro có thể thực hiện các cuộc gọi công cụ phức tạp nhiều vòng, và số lượng lượt tìm kiếm trực tuyến cũng tăng lên so với các mẫu trước, và việc thu thập thông tin toàn diện hơn. Kế hoạch du lịch được tạo ra cuối cùng được lên kế hoạch hợp lý, và được trang bị vị trí của từng điểm du lịch, có thể được sử dụng trực tiếp trong ứng dụng điều hướng sau khi nhấp vào, rất tiện lợi. Trong các tác vụ agent, có thể quan sát thấy hành động của nó rất quyết đoán, các cuộc gọi công cụ và suy nghĩ được giải quyết trong vài giây, và hiệu quả sử dụng token tốt.

### Kiểm tra thực tế ngữ cảnh 1M token
Các mẫu thuộc dòng DeepSeek-V4 hỗ trợ ngữ cảnh 1 triệu token. Chúng tôi đã tải lên bộ ba tiểu thuyết "Thể Tam" hoàn chỉnh (tổng cộng khoảng 540.000 token) để kiểm tra, và mẫu có thể định vị nhanh chóng nội dung được chỉ định, thực hiện thành công việc truy xuất thông tin trong các văn bản rất dài.

Kiểm tra ngày giới hạn kiến thức cho thấy ngày giới hạn kiến thức của DeepSeek-V4-Pro vẫn ở năm 2025. Ngoài ra, mẫu này hiện chưa hỗ trợ các năng lực hình ảnh. Sau khi tải lên hình ảnh, nó vẫn sẽ thực hiện trích xuất văn bản, và các hình ảnh không có văn bản sẽ hiển thị rằng không thể xử lý được.

## Đổi mới kiến trúc kỹ thuật
Thay đổi trực tiếp nhất của thế hệ V4 này là "ngữ cảnh dài" đã trở thành một năng lực mặc định. Khác với phương pháp truyền thống chỉ đơn giản mở rộng cửa sổ, DeepSeek-V4-Pro giới thiệu một kiến trúc chú ý lai mới, kết hợp chú ý thưa nén với chú ý nén cao (HCA) và hợp tác với chú ý thưa DSA để nén trong kích thước token.

Ngoài ra, mẫu giới thiệu siêu kết nối bị hạn chế đa tạp (mHC) để cải thiện các kết nối dư thừa truyền thống, và sử dụng trình tối ưu hóa Muon để cải thiện tốc độ hội tụ và ổn định huấn luyện. Loạt thiết kế này cho phép mẫu kiểm soát hiệu quả chi phí tính toán trong khi "nhớ lâu hơn".

Theo dữ liệu chính thức, trong ngữ cảnh 1 triệu token, số TFLOP suy luận trên mỗi token của DeepSeek-V4-Pro đã giảm khoảng 3,7 đến 9,8 lần so với DeepSeek-V3.2, và việc sử dụng bộ nhớ đệm KV giảm 9,5 đến 13,7 lần. Điều này có nghĩa là các tác vụ liên kết rất dài mà trước đây khó chạy thực tế (như lập kế hoạch agent nhiều vòng, xử lý tài liệu dài) đã bắt đầu đi vào phạm vi có thể thực hiện được.

## Hiệu suất: Trần mới cho các mẫu mã nguồn mở
Từ góc độ cấu trúc năng lực, sự cải thiện của DeepSeek-V4-Pro là sự cải thiện đồng thời các năng lực lý luận, kiến thức và năng lực agent:

### Năng lực kiến thức và lý luận
Trong các tác vụ kiến thức và lý luận, nó vượt qua các mẫu mã nguồn mở chính thống hiện tại trong các đánh giá như SimpleQA, Apex và Codeforces, và gần với GPT-5.4 và Gemini 3.1 Pro trong nhiều tác vụ. Ví dụ, nó đạt được 90,2 điểm trong danh sách ngắn Apex, đã vượt qua các mẫu mã nguồn đóng hàng đầu; nó cũng duy trì mức độ hạng mục đầu tiên trong các tác vụ cuộc thi như Codeforces.

### Năng lực agent
Trong các tác vụ liên quan đến năng lực agent, DeepSeek-V4-Pro có hiệu suất ổn định ở các chỉ số như SWE Verified và Terminal Bench. SWE Verified đạt 80,6, gần với Claude Opus 4.6, cao hơn đáng kể so với hầu hết các mẫu mã nguồn mở. Trong Terminal Bench 2.0, hiệu suất của nó cũng vượt qua các mẫu như GLM-5.1 Thinking và Kimi K2.6 Thinking.

Nhìn chung, DeepSeek-V4-Pro hiện là "trần" của các mẫu mã nguồn mở.

## Tối ưu hóa đặc biệt cho các kịch bản agent
Thế hệ DeepSeek-V4 này tăng cường đáng kể khả năng thích ứng với các kịch bản agent. Nó đã thực hiện các tối ưu hóa đặc biệt cho các khung làm việc agent chính thống như Claude Code, OpenClaw và CodeBuddy, và hoạt động ổn định hơn trong các tác vụ nhiều bước như tạo mã, tạo tài liệu.

Từ góc độ định vị thực tế, DeepSeek-V4-Pro đã được sử dụng làm mẫu lập trình agentic bên trong DeepSeek, tập trung vào "hoàn thành tác vụ". Đối với các tác vụ đơn giản, V4-Flash đã gần với phiên bản Pro, nhưng vẫn còn khoảng cách đáng kể trong các tác vụ phức tạp, về cơ bản cung cấp hai "bước tăng tốc năng lực tính toán" cho các ứng dụng agent.

## Kết luận
Việc ra mắt DeepSeek-V4 không chỉ cho thấy sự tích lũy của nhóm trong công nghệ và kiến trúc, mà còn đánh dấu khả năng triển khai thực tế của các mẫu lớn mã nguồn mở trong hệ sinh thái năng lực tính toán nội địa. Sau khi thích ứng và tối ưu hóa cho các chip nội địa như Huawei Ascend và Cambricon, dòng DeepSeek-V4 đã đạt được hỗ trợ ổn định và suy luận hiệu quả cho ngữ cảnh 1 triệu token, làm cho các tác vụ liên kết dài và thực thi agent nhiều bước trở nên khả thi.

Phiên bản này thực hiện định vị khác biệt của Pro và Flash, gần với các mẫu hàng đầu mã nguồn đóng về hiệu suất và duy trì hiệu quả chi phí cao về chi phí, cung cấp các lựa chọn mở chưa từng có cho các nhà phát triển nội địa. Quan trọng hơn, bản phát hành này cho thấy các mẫu mã nguồn mở không chỉ có thể đứng vững trong cuộc cạnh tranh toàn cầu, mà còn có thể chuyển đổi tiềm năng kỹ thuật thành năng suất thực tế với sự hỗ trợ của năng lực tính toán nội địa và kiến trúc được tối ưu hóa.

DeepSeek-V4 có thể là một bước quan trọng mà lực lượng mã nguồn mở Trung Quốc đã thực hiện trên lĩnh vực AI hiệu suất cao, và cũng cung cấp hướng dẫn rõ ràng cho sự đổi mới và triển khai của hệ sinh thái AI nội địa.

<div style="text-align: center; margin: 3rem 0;">
  <a href="https://www.limaxai.com/vi/chat?model=deepseek-v4-flash" style="display: inline-block; padding: 1.2rem 2.5rem; background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; text-decoration: none; border-radius: 10px; font-weight: 700; font-size: 1.3rem; box-shadow: 0 6px 20px 0 rgba(102, 126, 234, 0.5); transition: all 0.3s ease;">
    Bắt đầu sử dụng DeepSeek
  </a>
</div>
