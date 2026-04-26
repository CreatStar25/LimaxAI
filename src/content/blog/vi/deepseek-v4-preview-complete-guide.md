---
title: "Sau 15 Tháng Chờ Đợi, DeepSeek Cuối Cùng Cũng Ra Mắt V4 Preview: Phân Tích Toàn Diện"
description: "DeepSeek V4 Preview đã được phát hành chính thức, ra mắt hai mô hình MoE (Pro và Flash) với hỗ trợ ngữ cảnh 1 triệu token, mang lại cải thiện hiệu suất đáng kể đồng thợi giảm mạnh chi phí suy luận. Bài viết này cung cấp phân tích chi tiết về kiến trúc kỹ thuật, hiệu suất và giá cả của DeepSeek V4."
tags: ["deepseek v4", "trang web chính thức deepseek", "hướng dẫn deepseek", "giá deepseek v4"]
pubDate: "2026-04-25"
heroImage: "https://img.limaxai.com/aiweb/deepseek-blog-limax-260424-1.png"
lang: "vi"
author: "DeepSeek HK"
---

Bài viết này khám phá các tính năng kỹ thuật, hiệu suất và hướng dẫn sử dụng của DeepSeek V4, cung cấp phân tích toàn diện về các lợi thế cốt lõi của mô hình ngôn ngữ lớn thế hệ mới này. Nội dung được viết theo phong cách dễ tiếp cận, phù hợp cho cả ngườii đam mê công nghệ và lập trình viên.

Từ khóa: deepseek v4, trang web chính thức deepseek, hướng dẫn deepseek, giá deepseek v4.

Ngày xuất bản: 25 tháng 4 năm 2026
Tác giả: DeepSeek HK

<div style="text-align: center; margin: 32px 0;">
  <a href="https://www.limaxai.com/vi/chat?model=deepseek-v4-flash" style="display: inline-block; background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; padding: 16px 48px; border-radius: 8px; font-size: 20px; font-weight: bold; text-decoration: none; box-shadow: 0 4px 15px rgba(102, 126, 234, 0.4); transition: transform 0.2s, box-shadow 0.2s;" onmouseover="this.style.transform='translateY(-2px)'; this.style.boxShadow='0 6px 20px rgba(102, 126, 234, 0.6)';" onmouseout="this.style.transform='translateY(0)'; this.style.boxShadow='0 4px 15px rgba(102, 126, 234, 0.4)';">
    Bắt Đầu Sử Dụng DeepSeek
  </a>
</div>

![Phân Tích Toàn Diện DeepSeek V4 Preview](https://img.limaxai.com/aiweb/deepseek-blog-limax-260424-1.png)

## 1. DeepSeek V4 Preview Chính Thức Ra Mắt

Vào ngày 24 tháng 4, DeepSeek chính thức công bố ra mắt V4 Preview. Bản cập nhật lớn này đến sau 15 tháng kể từ khi phát hành V3.2, đánh dấu một bước đột phá quan trọng khác trong lộ trình công nghệ mô hình lớn của DeepSeek.

Theo giới thiệu chính thức, dòng V4 bao gồm hai mô hình MoE:
- **DeepSeek-V4-Pro**: 1,6 nghìn tỷ tham số tổng cộng, 49 tỷ tham số được kích hoạt
- **DeepSeek-V4-Flash**: 284 tỷ tham số tổng cộng, 13 tỷ tham số được kích hoạt

Cả hai mô hình đều hỗ trợ ngữ cảnh 1 triệu token một cách tự nhiên, đại diện cho một bước nhảy vọt về chất lượng trong khả năng xử lý văn bản dài. Đáng chú ý, trong cài đặt ngữ cảnh 1M:
- FLOPs suy luận trên mỗi token của V4-Pro chỉ bằng 27% của V3.2, KV Cache chỉ ở mức 10%
- V4-Flash còn cực đoan hơn, giảm các chỉ số này xuống còn 10% và 7% tương ứng

Điều này có nghĩa là trong khi độ dài ngữ cảnh đã mở rộng gần gấp 8 lần từ 128K của V3.2 lên 1M của V4, yêu cầu tính toán trên mỗi token thực tế đã giảm đáng kể, đạt được cả khả năng ngữ cảnh dài và đột phá về hiệu quả suy luận.

Các quan chức DeepSeek nêu rõ rằng V4 Preview được định vị là một bản cập nhật hạ tầng, chủ yếu tái cấu trúc chi phí ngữ cảnh dài để dọn đường cho giai đoạn tiếp theo của mở rộng thờii gian kiểm tra và các tác vụ phạm vi dài. Mức độ năng lực hiện tại vẫn còn kém GPT-5.4 và Gemini-3.1-Pro, với quỹ đạo phát triển chậm hơn khoảng 3-6 tháng so với các mô hình nguồn đóng tiên tiến nhất.

## 2. Hai Mô Hình, Ba Chế Độ Suy Luận: Đặc Điểm Cốt Lõi của V4

### 2.1 Tham Số Mô Hình và Lợi Thế Chi Phí

Điểm nổi bật nhất của dòng V4 là tối ưu hóa đáng kể đường cong chi phí. Trong cài đặt ngữ cảnh 1 triệu token:
- V4-Pro: FLOPs suy luận trên mỗi token chỉ bằng 27% của V3.2, KV Cache chỉ 10%
- V4-Flash: FLOPs suy luận trên mỗi token chỉ bằng 10% của V3.2, KV Cache chỉ 7%

Sự cải thiện hiệu quả này làm giảm đáng kể chi phí suy luận cho ngữ cảnh cấp triệu token, cung cấp giải pháp khả thi về mặt kinh tế cho các tình huống xử lý văn bản dài, phân tích tài liệu và các ứng dụng khác.

### 2.2 Hệ Thống Định Giá API

DeepSeek tiếp tục chiến lược định giá giá trị cao nhất quán của mình:
- **V4-Pro**: ¥1 cho mỗi triệu token đầu vào (trúng bộ nhớ đệm) hoặc ¥12 (trượt bộ nhớ đệm), ¥24 cho mỗi triệu token đầu ra
- **V4-Flash**: ¥0,2 cho mỗi triệu token đầu vào (trúng bộ nhớ đệm) hoặc ¥1 (trượt bộ nhớ đệm), ¥2 cho mỗi triệu token đầu ra

### 2.3 Ba Mức Độ Cường Độ Suy Luận

Mỗi mô hình cung cấp ba chế độ suy luận để đáp ứng các yêu cầu tình huống khác nhau:
1. **Non-think**: Chế độ đầu ra trực tiếp, tốc độ phản hồi nhanh nhất
2. **Think High**: Chế độ suy nghĩ sâu thông thường, cân bằng giữa tốc độ và chất lượng
3. **Think Max**: Tiêm các chỉ lệnh mạnh, tối đa hóa ngữ cảnh và độ dài đầu ra, giải phóng toàn bộ khả năng của mô hình

Chế độ Max cải thiện đáng kể hiệu suất mô hình: điểm số V4-Pro-Max tăng từ 34,5 lên 37,7 trong các bài kiểm tra HLE, và từ 85,5 lên 90,2 trong các bài kiểm tra Apex Shortlist, với chi phí là số lượng token đầu ra tăng gấp đôi.

## 3. Hiệu Suất Kiểm Tra Benchmark

Theo dữ liệu kiểm tra chính thức được DeepSeek công bố, dòng V4 hoạt động xuất sắc trong nhiều đánh giá:

### 3.1 Các Bài Kiểm Tra Kiến Thức và Suy Luận
- DeepSeek-V4-Pro-Max xếp thứ nhất trong Apex Shortlist (90,2%) và Codeforces (Xếp hạng 3206), hai tác vụ suy luận/lập trình cốt lõi, thể hiện khả năng logic và thuật toán cực kỳ mạnh mẽ
- Gemini-3.1-Pro-High dẫn đầu trong SimpleQA Verified (75,6%)
- Claude và GPT có thế mạnh riêng ở các dự án khác nhau, với khoảng cách tổng thể nhỏ

### 3.2 Các Bài Kiểm Tra Khả Năng Agent
- Cả bốn mô hình đều hoạt động ngang nhau trong các tác vụ SWE Verified (đều đạt 80,6%)
- DeepSeek vượt trội trong Terminal Bench 2.0 (67,9%) và Toolathlon (51,8%), thể hiện lợi thế rõ ràng trong các tình huống thực thi lệnh phức tạp và gọi công cụ

Các quan chức cho biết khả năng Agent của DeepSeek-V4-Pro đã cải thiện đáng kể so với các thế hệ trước, "cung cấp trải nghiệm ngườii dùng tốt hơn Sonnet 4.5, với chất lượng giao hàng gần với chế độ không suy nghĩ của Opus 4.6, mặc dù vẫn còn kém chế độ suy nghĩ của Opus 4.6 ở một mức độ nào đó."

### 3.3 Kiến Thức Thế Giới và Khả Năng Chung
- V4-Pro vượt trội hơn hẳn các mô hình nguồn mở khác trong các đánh giá kiến thức thế giới, chỉ thua nhẹ mô hình nguồn đóng hàng đầu Gemini-Pro-3.1
- Trong toán học, STEM và các đánh giá mã cạnh tranh, V4-Pro vượt qua tất cả các mô hình nguồn mở hiện đang được đánh giá công khai, đạt đến mức của các mô hình nguồn đóng hàng đầu thế giới
- Là một mô hình kinh tế, V4-Flash có ít dự trữ kiến thức hơn một chút so với phiên bản Pro, nhưng khả năng suy luận tương tự. Với tham số và giá trị kích hoạt nhỏ hơn, nó cung cấp các dịch vụ API nhanh hơn, tiết kiệm chi phí hơn
- Trong các đánh giá Agent, V4-Flash hoạt động tương đương với phiên bản Pro trên các tác vụ đơn giản, nhưng vẫn còn khoảng cách trên các tác vụ độ khó cao

## 4. Đổi Mới Công Nghệ Cốt Lõi: Viết Lại Cơ Chế Attention

Thay đổi kỹ thuật cốt lõi nhất của V4 nằm ở lớp attention, giải quyết cơ bản vấn đề hiệu quả của suy luận ngữ cảnh dài.

Trong các cơ chế attention Transformer truyền thống, mỗi token cần tính toán độ tương đồng với tất cả các token trước đó. Khi ngữ cảnh mở rộng từ 100K lên 1M, chi phí tính toán tăng gấp 100 lần, đây là nút thắt cổ chai cốt lõi ngăn cản việc áp dụng rộng rãi ngữ cảnh dài.

V4 áp dụng cơ chế attention kép sáng tạo với các lớp xen kẽ:
1. **CSA (Compressed Sparse Attention)**: Trước tiên gộp bộ nhớ đệm KV cho mỗi 4 token thành một bản tóm tắt duy nhất, sau đó cho phép mỗi truy vấn chỉ chọn các bản tóm tắt top-k liên quan nhất để tính toán attention, vừa nén nội dung cần xử lý vừa chỉ tập trung vào thông tin liên quan
2. **HCA (Heavy Compressed Attention)**: Sử dụng nén mạnh mẽ hơn, gộp mỗi 128 token thành một bản tóm tắt, sau đó áp dụng attention dày đặc trên các bản tóm tắt còn lại mà không có lựa chọn thưa

Hai cơ chế attention xen kẽ và chồng lên nhau, kết hợp với nhánh cửa sổ trượt xử lý các phụ thuộc chi tiết giữa các token lân cận, tạo thành một cách tiếp cận kết hợp "hạt thô + hạt mịn, thưa + dày đặc".

Từ góc độ tiến hóa công nghệ, DeepSeek V2 và V3 chủ yếu theo con đường thưa thớt tham số (tổng tham số lớn nhưng chỉ kích hoạt một phần chuyên gia cho mỗi token). V4 mở ra một con đường mới về thưa thớt ngữ cảnh (nén KV, chọn top-k, tỷ lệ nén phân lớp) trên cơ sở này. Đây là lần đầu tiên DeepSeek áp dụng khái niệm "thưa thớt" vào cấu trúc cốt lõi của Transformer.

Ngoài lớp attention, V4 còn có hai cải tiến kiến trúc quan trọng khác:
1. Nâng cấp các kết nối dư truyền thống lên mHC (Manifold Constrained Hyperconnection), làm cho lan truyền xuôi và lan truyền ngược của mạng sâu ổn định hơn thông qua các ràng buộc toán học
2. Thay thế AdamW bằng bộ tối ưu hóa Muon cho hầu hết các mô-đun, đạt được hội tụ nhanh hơn và đào tạo ổn định hơn

Đây là lần đầu tiên DeepSeek đồng thợii sửa đổi ba thành phần cốt lõi của Transformer: attention, kết nối dư và bộ tối ưu hóa.

## 5. Đổi Mới Mô Hình Đào Tạo Sau: Chưng Cất Mô Hình Chuyên Gia

So với các thay đổi về kiến trúc, đổi mới của V4 trong phương pháp đào tạo sau còn đáng chú ý hơn.

V3.2 sử dụng phương pháp "RL hỗn hợp", tối ưu hóa đồng thợii nhiều mục tiêu bằng học tăng cường. V4 áp dụng chiến lược hai bước "phân biệt rồi thống nhất":
1. **Giai đoạn Phân biệt**: Đối với các lĩnh vực khác nhau như toán học, mã, Agent và tuân thủ chỉ lệnh, đào tạo một mô hình chuyên gia riêng cho mỗi lĩnh vực. Các chuyên gia này trước tiên trải qua tinh chỉnh có giám sát với dữ liệu lĩnh vực chất lượng cao, sau đó học tăng cường với thuật toán GRPO, mỗi chuyên gia đạt hiệu suất tối ưu trong lĩnh vực chuyên môn của mình
2. **Giai đoạn Thống nhất**: Sử dụng phương pháp On-Policy Distillation (OPD) để "tổng hợp" hơn mườii chuyên gia lĩnh vực trở lại thành một mô hình học sinh thống nhất. Sau khi học sinh tạo ra câu trả lờii, nó khớp với phân phối đầu ra của chuyên gia "hiểu rõ nhất vấn đề này", hấp thụ khả năng chuyên gia thông qua căn chỉnh ở cấp độ logit

Cách tiếp cận này có thể được hiểu là chưng cất khả năng của nhiều "học sinh xuất sắc" lĩnh vực vào một mô hình duy nhất. Để giải quyết thách thức kỹ thuật của việc tải đồng thợii hơn mườii mô hình giáo viên nghìn tỷ tham số, DeepSeek tải tất cả trọng số giáo viên xuống bộ nhớ phân tán, chỉ lưu trạng thái ẩn của lớp cuối cùng của mỗi giáo viên. Trong quá trình đào tạo, các mẫu được sắp xếp theo chỉ số giáo viên, đảm bảo rằng tại bất kỳ thờii điểm nào chỉ có một đầu giáo viên nằm trong bộ nhớ GPU.

Cách tiếp cận này tránh được vấn đề nhiễu khả năng phổ biến trong "RL hỗn hợp" truyền thống, cho phép mô hình đạt hiệu suất cấp đỉnh trên nhiều lĩnh vực.

## 6. Tối Ưu Hóa Đặc Biệt Khả Năng Agent

DeepSeek V4 bao gồm các điều chỉnh và tối ưu hóa chuyên biệt cho các sản phẩm Agent phổ biến, với hiệu suất được cải thiện trong các tác vụ mã, tạo tài liệu và các tình huống khác.

Các tối ưu hóa đặc biệt của V4 cho khả năng Agent bao gồm:
1. Trong quá trình đào tạo sau, Agent được coi là một hướng chuyên gia độc lập cùng với toán học và mã, với đào tạo riêng biệt
2. Định dạng gọi công cụ thay đổi từ JSON sang cấu trúc XML với các token đặc biệt, giảm tỷ lệ lỗi thoát
3. Các dấu vết suy luận giữa các lượt được giữ nguyên hoàn toàn trong các tình huống gọi công cụ, không còn bị xóa mỗi lượt như ở V3.2
4. Nền tảng hộp cát DSec tự xây dựng, với một cụm duy nhất có khả năng quản lý đồng thợii hàng trăm nghìn phiên bản hộp cát, hỗ trợ đào tạo và đánh giá học tăng cường Agent

Các quan chức cho biết khả năng Agent của V4-Pro "tốt hơn Sonnet 4.5, với chất lượng giao hàng gần với chế độ không suy nghĩ của Opus 4.5, mặc dù vẫn còn kém chế độ suy nghĩ của Opus 4.6 ở một mức độ nào đó."

![Kiến Trúc Kỹ Thuật DeepSeek V4](https://img.limaxai.com/aiweb/deepseek-blog-limax-260424-1.png)

## Tóm Tắt

DeepSeek V4 Preview là một mô hình lớn với những đổi mới công nghệ nổi bật. Thông qua việc tái cấu trúc cơ chế attention và đổi mới mô hình đào tạo, nó duy trì khả năng suy luận mạnh mẽ đồng thợii giảm mạnh chi phí suy luận ngữ cảnh dài, dọn đường cho các ứng dụng thực tế của ngữ cảnh cấp triệu token.

Dù là các tình huống chuyên nghiệp đòi hỏi khả năng suy luận mạnh mẽ hay các ứng dụng quy mô lớn theo đuổi hiệu quả chi phí, dòng V4 đều cung cấp các lựa chọn phù hợp. Nếu bạn muốn trải nghiệm khả năng mạnh mẽ của DeepSeek V4, hãy sử dụng trực tiếp thông qua nền tảng của chúng tôi.

<div style="text-align: center; margin: 40px 0;">
  <a href="https://www.limaxai.com/vi/chat?model=deepseek-v4-flash" style="display: inline-block; background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; padding: 18px 56px; border-radius: 8px; font-size: 22px; font-weight: bold; text-decoration: none; box-shadow: 0 4px 15px rgba(102, 126, 234, 0.4); transition: transform 0.2s, box-shadow 0.2s;" onmouseover="this.style.transform='translateY(-2px)'; this.style.boxShadow='0 6px 20px rgba(102, 126, 234, 0.6)';" onmouseout="this.style.transform='translateY(0)'; this.style.boxShadow='0 4px 15px rgba(102, 126, 234, 0.4)';">
    Bắt Đầu Sử Dụng DeepSeek
  </a>
</div>