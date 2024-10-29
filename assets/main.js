const questions = [
    "Trong quá trình trao đổi chất, con người không lấy vào cơ thể chất nào sau đây?",
    "Quá trình hấp thụ khí Oxy và thải ra khí Carbon Dioxide diễn ra ở hệ cơ quan nào trong cơ thể?",
    "Dựa vào kiểu trao đổi chất, người ta chia sinh vật thành hai nhóm. Đó là?",
    "Trong các sinh vật sau, nhóm sinh vật nào có khả năng tự dưỡng?",
    "Chuyển hóa năng lượng là?",
    "Quá trình trao đổi chất và chuyển hóa năng lượng giúp cơ thể sinh vật",
    "Chất nào sau đây là sản phẩm của quá trình trao đổi chất được động vật thải ra môi trường?",
    "Trong quá trình trao đổi chất, luôn có sự",
    "Sinh vật có thể tồn tại, sinh trưởng, phát triển và thích nghi với môi trường sống nhờ vào quá trình nào?",
    "Đồng hóa là?",
    "1.Oxigen 2.Carbon dioxide 3.Chất dinh dưỡng 4.Nước uống 5.Năng lượng nhiệt 6.Chất thải. Trong quá trình trao đổi chất ở người, cơ thể thu nhận những chất nào sau đây?",
    "Trong cơ thể người, chất hữu cơ được phân giải để giải phóng năng lượng có nguồn gốc từ sự trao đổi chất ở hệ:",
    "Trong tế bào và cơ thể sinh vật, năng lượng chủ yếu được trữ trong các:",
    "Trong quá trình quang hợp của cây xanh, cây có thể tự tổng hợp được chất hữu cơ nhờ ánh sáng mặt trời, nước và khí carbon dioxide. Năng lượng trong quá trình này là sự chuyển hóa năng lượng từ dạng:",
    "1.Trao đổi chất giữa cơ thể và môi trường là điều kiện tồn tại và phát triển của cơ thể, là đặc tính cơ bản của sự sống. 2.Uống đủ nước, thức khuya, luyện tập thể dục thể thao sẽ thúc đẩy quá trình trao đổi chất ở cơ thể. 3.Tùy theo việc kiểm tra đủ chất, người ta chia sinh vật thành hai nhóm là sinh vật dị dưỡng và sinh vật hóa dưỡng. 4.Trong cơ thể con người đã có quá trình biến đổi hóa học thức ăn thành năng lượng cung cấp cho mọi hoạt động sống hàng ngày. Trong số các nhận định trên, số nhận định đúng là:",
    "Vì sao khi vận động thì cơ thể nóng dần lên?",
    "1.Cung cấp năng lượng cho các hoạt động của cơ thể. 2.Làm phát sinh các cơ quan và chức năng mới trong cơ thể. 3.Xây dựng cơ thể. 4.Loại bỏ các chất thải ra khỏi cơ thể. 5.Tạo ra các cơ chế mới. Nhận định nào đúng khi nói về vai trò của trao đổi chất và chuyển hóa năng lượng?",
    "Vì sao khi chúng ta làm việc nhiều thì cần tiêu thụ nhiều thức ăn?",
    "Quá trình trao đổi chất của con người thải ra môi trường những chất nào?",
    "Trao đổi chất và chuyển hóa năng lượng có vai trò quan trọng đối với sự sống của sinh vật.",
    "Khi nói về mối quan hệ giữa trao đổi chất và chuyển hóa năng lượng ở cấp tế bào và cơ thể, có mấy phát biểu sau đây đúng? 1.Quá trình đồng hóa ở cấp tế bào tổng hợp nên chất hữu cơ để xây dựng cơ thể và dự trữ năng lượng. 2.Quá trình dị hóa ở cấp tế bào phân giải các chất hữu cơ giải phóng năng lượng cung cấp cho hoạt động sống của tế bào và cơ thể. 3.Chất dinh dưỡng cơ thể lấy vào được vận chuyển đến tế bào làm nguyên liệu cho quá trình đồng hóa. 4.Chất thải sinh ra từ quá trình đồng hóa của tế bào được cơ thể thải ra môi trường.",
    "Chuyển hóa năng lượng trong sinh giới gồm?",
    "Sinh vật có thể tồn tại, sinh trưởng, phát triển thích nghi với môi trường sống là nhờ có quá trình nào?",
    "Rễ cây trên cạn hấp thụ nước và ion muối khoáng chủ yếu qua?",
    "Sự xâm nhập của nước vào tế bào lông hút theo cơ chế?",
    "Sự hấp thụ ion khoáng theo cơ chế thụ động của tế bào rễ cây phụ thuộc vào?",
    "Phần lớn các ion khoáng xâm nhập vào rễ cây theo cơ chế chủ động diễn ra theo phương thức vận chuyển từ nơi có nồng độ?",
    "Động lực của dòng mạch rây là sự chênh lệch áp suất thẩm thấu giữa?",
    "Nước được vận chuyển ở thân chủ yếu",
    "Động lực của dịch mạch gỗ từ rễ đến lá là gì?",
    "Nước và các ion khoáng đi từ đất vào mạch gỗ của rễ theo các con đường nào?",
    "Cấu tạo của dòng mạch gỗ gồm những gì?",
    "Cấu tạo của dòng mạch rây gồm những gì?",
    "Cơ quan thoát hơi nước chủ yếu của cây là gì?",
    "Vai trò sinh lý của nitrogen gồm những gì?",
    "1.Phơi ải đất, cày sâu, bừa kĩ. 2.Tưới nước đầy đủ và bón phân hữu cơ cho đất. 3.Giảm bón phân vô cơ và hữu cơ cho đất. 4.Vun gốc và xới đất cho cây. Có bao nhiêu biện pháp giúp cho bộ rễ cây phát triển?",
    "Khi tế bào khí khổng no nước thì thành tế bào thay đổi như thế nào?",
    "Khi tế bào khí khổng mất nước thì thành tế bào thay đổi như thế nào?",
    "1.Được điều chỉnh bằng việc đóng mở khí khổng. 2.Vận tốc lớn. 3.Không được điều chỉnh bằng việc đóng mở khí khổng. 4.Vận tốc nhỏ. Con đường thoát hơi nước qua cutin có bao nhiêu đặc điểm trên?",
    "Lực đóng vai trò chính trong quá trình vận chuyển nước ở thân là",
    "Yếu tố nào đóng vai trò quyết định đến quá trình thoát hơi nước ở lá?",
    "Hiện tượng lá cây bị vàng do thiếu chất diệp lục là do thiếu những nguyên tố khoáng nào?",
    "Sự biểu hiện triệu chứng thiếu nitrogen của cây là gì?",
    "Nguyên tố nitơ có trong thành phần của",

    "Có bao nhiêu phát biểu đúng khi nói về hậu quả bón liều lượng phân bón cao quá mức cần thiết cho cây? 1. Gây độc hại đối với cây. 2. Gây ô nhiễm nông phẩm và môi trường. 3. Làm đất đai phì nhiêu nhưng cây không hấp thụ được hết. 4. Dư lượng phân bón khoáng chất sẽ làm xấu lí tính của đất, giết chết các vi sinh vật có lợi.",
    "Khi nói về quá trình trao đổi nước và khoáng ở thực vật có bao nhiêu phát biểu sau đây đúng? I. Nguyên tố khoáng hòa tan trong nước, do vậy trao đổi khoáng có thể đồng thời với trao đổi nước. II. Nước và các chất khoáng được vận chuyển từ lông hút vào mạch gỗ của rễ theo con đường gian bào và con đường tế bào chất. III. Thoát hơi nước ở lá tạo động lực kéo dòng mạch gỗ đi theo một chiều từ rễ lên thân và lá. IV. Hoạt động trao đổi nước và chất khoáng có thể chịu ảnh hưởng của các yếu tố môi trường.",
    "Khi nói về sự thoát hơi nước ở lá cây, phát biểu nào sau đây đúng?",
    "Khi nói về quá trình biến đổi nitrate và amonium ở thực vật, có bao nhiêu phát biểu sau đây đúng? I. Nitrogen ở dạng NH4 + và NO3 - sau khi được cây hấp thụ sẽ biến đổi thành nitrogen trong các hợp chất hữu cơ. II. Trong cây, NO3 - được khử thành NH4 + do xúc tác của enzyme nitrate reductase và nitrite reductase. III. Hình thành amide giúp giải độc cho tế bào khi lượng NO3 - tích lũy quá nhiều. IV. Hình thành amide là cơ chế dự trữ ammonium cho tế bào thực vật.",
    "Thực vật hấp thụ nitrogen chủ yếu ở dạng nào sau đây?",
    "Khi nói về vai trò của nitrogen phát biểu nào sau đây sai?",
    "Vai trò sinh lí của nitrogen là gì?",
    "Quang hợp ở thực vật là quá trình gì?",
    "Phương trình tổng quát của quang hợp ở thực vật là gì?",
    "Phát biểu nào sau đây đúng khi nói về vai trò của quang hợp đối với thực vật?",
    "Phát biểu nào sau đây đúng khi nói về vai trò của quang hợp đối với sinh quyển?",
    "Những phát biểu nào sau đây đúng khi nói về vai trò của quang hợp đối với sinh vật?",
    "Hệ sắc tố quang hợp ở cây xanh bao gồm những gì?",
    "Vai trò chủ yếu của hệ sắc tố đối với quang hợp ở cây xanh là gì?",
    "Sắc tố quang hợp chủ đạo không thể thiếu ở thực vật có hoa là gì?",
    "Sắc tố quang hợp nào sau đây có chức năng chuyển hóa quang năng thành hóa năng trong các phân tử ATP và NADPH?",
    "Các sắc tố quang hợp của lá có màu đỏ hấp thụ ánh sáng và truyền năng lượng hấp thụ theo sơ đồ nào sau đây?",
    "Pha sáng của quang hợp là pha chuyển hóa năng lượng của ánh sáng đã được diệp lục hấp thụ thành năng lượng của các liên kết hóa học trong chất nào?",
    "Trong pha sáng của quá trình quang hợp, ATP và NADPH được chuyển hóa từ quá trình nào?",
    "Ở thực vật C3, sản phẩm cố định CO2 được tạo ra ổn định đầu tiên là gì?",
    "Ở thực vật C4, sản phẩm cố định CO2 được tạo ra ổn định đầu tiên là gì?",
    "Ở thực vật CAM, sản phẩm dự trữ CO2 vào ban đêm để cung cấp cho pha tối ban ngày là gì?",
    "Sự giống nhau trong quang hợp giữa thực vật C3 và C4 là gì?",
    "Sự khác nhau trong quang hợp giữa thực vật C4 và thực vật CAM là gì?",
    "Quang hợp ở các nhóm thực vật C3, C4 và CAM giống nhau như thế nào?",
    "Khi nói về ảnh hưởng ánh sáng đến quang hợp, phát biểu nào sau đây sai?",
    "Khi nói về ảnh hưởng của CO2 đến quang hợp, phát biểu nào sau đây sai?",

    "Nhận định nào sau đây đúng?",
    "Khi nói về ảnh hưởng của nhiệt độ đến quang hợp, phát biểu nào sau đây sai?",
    "Nhận định không đúng khi nói về sự ảnh hưởng của ánh sáng tới cường độ quang hợp?",
    "Khi nói về ảnh hưởng của ánh sáng đến quá trình quang hợp ở thực vật, phát biểu nào sau đây sai?",
    "Khi nói về quang hợp ở 3 nhóm thực vật, phát biểu nào sau đây đúng?",
    "Khi nói về đặc điểm chung của pha tối quang hợp ở thực vật C3 và C4, phát biểu nào sau đây sai?",
    "Xét các loài thực vật: ngô; xương rồng; cao lương. Khi nói về quá trình quang hợp ở các loài cây đó, phát biểu sau đây đúng?",
    "Hô hấp là quá trình",
    "… là quá trình phân giải các hợp chất hữu cơ phức tạp, phổ biến là cacborhydrate thành các chất đơn giản (CO2 và H2O), đồng thời giải phóng năng lượng ATP và nhiệt.",
    "Các giai đoạn của hô hấp tế bào diễn ra theo trật tự nào?",
    "Đường phân → Chu trình crep → Chuổi chuyền êlectron hô hấp là các giai đoạn của",
    "Đường phân → lên men là các giai đoạn của",
    "Giai đoạn nào chung cho quá trình lên men và hô hấp hiếu khí?",
    "Quá trình hô hấp trong cơ thể thực vật, trải qua các giai đoạn",
    "Sản phẩm của phân giải kị khí (đường phân và lên men) từ axit piruvic là",
    "Đâu không phải là vai trò của hô hấp ở thực vật?",
    "Vai trò của hô hấp đối với cơ thể thực vật là. 1.Năng lượng(ATP) sinh ra từ hô hấp được sử dụng cho hầu hết các hoạt động sống của cây như tổng hợp và vận chuyển các chất, sinh trưởng và phát triển, cảm ứng,… 2.Nhiệt năng được giải phóng ra trong hô hấp giúp duy trì nhiệt độ cơ thể, đảm bảo cho các hoạt động sống trong cơ thể thực vật diễn ra một cách bình thường. 3.Các sản phẩm trung gian được tạo ra từ quá trình hô hấp ở thực vật (đường 3 carbon, pyruvate,…) là nguyên liệu để tổng hợp nên các hợp chất hữu cơ trong cơ thể như protein, acid béo,… 4.Cung cấp nguồn thức ăn cho sinh vật dị dưỡng và là nguồn nguyên liệu cho sản xuất công nghiệp, chế biến dược phẩm của con người; cung cấp năng lượng, điều hoà không khí.",
    "Khi nói về vấn đề hô hấp ở thực vật, nhân tố môi trường nào sau đây không tác động đến hô hấp?",
    "Nhận định nào sau đây là đúng nhất?",
    "Nhận định nào sau đây là sai?",
    "Khi nói về ảnh hưởng của các nhân tố môi trường đến quá trình hô hấp hiếu khí ở thực vật, phát biểu nào sau đây sai?",
    "Các yếu tố ảnh hưởng đến hô hấp ở thực vật gồm",
    "Vai trò quan trọng nhất của hô hấp đối với cây trồng là",
    "Chọn từ thích hợp điền vào chỗ trống sau: ...là quá trình phân giải các hợp chất hữu cơ phức tạp, phổ biến là carbohydrate thành các chất đơn giản (CO2 và H2O), đồng thời giải phóng năng lượng ATP và nhiệt năng.",
    "Những phát biểu nào sau đây đúng khi nói về vai trò của hô hấp đối với cơ thể thực vật?",
    "Khi nói về ảnh hưởng của các nhân tố môi trường đến quá trình hô hấp hiếu khí ở thực vật, phát biểu nào sau đây sai?"

    // "",
];

const answers = [
    ["A. Nước uống", "B. Thức ăn", "C. Carbon dioxide", "D. Oxygen", 2],
    ["A. Hệ tuần hoàn", "B. Hệ hô hấp", "C. Hệ tiêu hóa", "D. Hệ thần kinh", 1],
    ["A. Nhóm sinh vật tự dưỡng và nhóm sinh vật hoại dưỡng", "B. Nhóm sinh vật tự dưỡng và nhóm sinh vật dị dưỡng", "C. Nhóm sinh vật dị dưỡng và nhóm sinh vật ngoại dưỡng", "D. Nhóm sinh vật dị dưỡng và nhóm sinh vật hóa dưỡng", 1],
    ["A. Tảo, cá, chim, rêu, cây xà cừ", "B. Tảo, nấm, rau, lúa, cây xà cừ", "C. Con người, vật nuôi, cây trồng", "D. Tảo, trùng roi xanh, lúa, cây xà cừ", 3],
    ["A. Quá trình biến đổi năng lượng từ dạng này sang dạng khác", "B. Quá trình biến đổi năng lượng ánh sáng thành năng lượng hóa học", "C. Quá trình biến đổi năng lượng hóa học thành nhiệt năng", "D. Quá trình biến đổi năng lượng để hoạt động hàng ngày", 0],
    ["A. Phát triển kích thước theo thời gian", "B. Tồn tại, sinh trưởng, phát triển, sinh sản", "C. Cân tịnh và vận động", "D. Tích lũy năng lượng", 1],
    ["A. Oxygen", "B. Carbon Dioxide", "C. Chất dinh dưỡng", "D. Vitamin", 1],
    ["A. Giải phóng năng lượng", "B. Tích lũy (lưu trữ) năng lượng", "C. Giải phóng hoặc tích lũy năng lượng", "D. Phản ứng dị hóa", 2],
    ["A. Quá trình trao đổi chất và sinh sản", "B. Quá trình chuyển hóa năng lượng", "C. Hiệu quả trao đổi chất và chuyển hóa năng lượng", "D. Quá trình trao đổi chất và cảm ứng", 2],
    ["A. Phân hủy các chất.", "B. Tổng hợp chất mới, tích lũy năng lượng.", "C. Giải phóng năng lượng.", "D. Biến đổi các chất.", 1],
    ["A. 1, 2, 3, 4, 5", "B. 1, 2, 3, 4", "C. 1, 3, 4, 5", "D. 1, 3, 4", 3],
    ["A. Bài tiết", "B. Tuần hoàn", "C. Tiêu hóa", "D. Thần kinh", 2],
    ["A. Liên kết hóa học", "B. Mô mỡ và máu", "C. Phản ứng", "D. Bào quan của tế bào", 0],
    ["A. Nhiệt năng thành hóa năng", "B. Quang năng thành nhiệt năng", "C. Quang năng thành hóa năng", "D. Nhiệt năng thành quang năng", 2],
    ["A. 1", "B. 2", "C. 3", "D. 4", 1],
    ["A. Bởi vì khi vận động, trong cơ thể, thức ăn được biến đổi thành năng lượng hóa học nên nóng cơ thể.", "B. Bởi vì khi vận động nhiều, cơ thể sẽ đổ nhiều mồ hôi mất nước nên nóng dần lên.", "C. Bởi vì khi vận động, để có năng lượng cho quá trình hoạt động thì trong cơ thể đã xảy ra một phản ứng biến đổi hóa học và phản ứng này sinh ra nhiệt, khiến cho cơ thể nóng dần lên.", "D. Bởi vì khi vận động thì trong cơ thể con người đã xảy ra sự biến đổi năng lượng từ dạng liên kết hóa học tích trữ sang cơ năng và nhiệt năng, nên khiến cho cơ thể người nóng dần lên.", 3],
    ["A. 1, 2, 3, 4, 5.", "B. 1, 2, 3.", "C. 1, 3, 4.", "D. 1, 3, 5.", 2],
    ["A. Thức ăn là nguồn cung cấp nguyên liệu cho quá trình chuyển hóa tạo năng lượng để hoạt động.", "B. Thức ăn là nguồn cung cấp nguyên liệu cho quá trình chuyển hóa tạo nhiệt năng để duy trì nhiệt độ cơ thể.", "C. Thức ăn là nguồn cung cấp nguyên liệu cho quá trình chuyển hóa tạo năng lượng để đào thải khí carbon dioxide ra ngoài.", "D. Thức ăn là nguồn cung cấp nguyên liệu cho quá trình chuyển hóa tạo nhiệt năng để đào thải mồ hôi ra ngoài.", 0],
    ["A. Khi carbon dioxide, nước tiểu, mô hôi.", "B. Khí oxygen, nước tiểu, mồ hôi, nước mắt.", "C. Khi oxygen, khí carbon dioxide, nước tiểu.", "D. Khí oxygen, phân, nước tiểu, mồ hôi.", 0],
    ["A. Sự chuyển hóa của sinh vật.", "B. Có vai trò quan trọng đối với sự biến đổi các chất.", "C. Sự trao đổi năng lượng.", "D. Sự sống của sinh vật.", 3],
    ["A. 2.", "B. 3.", "C. 1.", "D. 4.", 1],
    ["A. Phân giải — Tổng hợp — Huy động năng lượng.", "B. Tổng hợp → Huy động năng lượng.", "C. Tổng hợp → Phân giải — Huy động năng lượng.", "D. Phân giải — Huy động năng lượng — Tổng hợp.", 2],
    ["A. Quá trình trao đổi chất và cảm ứng.", "B. Quá trình trao đổi chất và chuyển hóa năng lượng.", "C. Quá trình chuyển hóa năng lượng.", "D. Quá trình trao đổi chất và sinh sản.", 1],
    ["A. Miền lông hút.", "B. Miền chóp rễ.", "C. Miền sinh trưởng.", "D. Miền trưởng thành.", 0],
    ["A. Thẩm thấu.", "B. Cần tiêu tốn năng lượng.", "C. Nhờ các bơm ion.", "D. Chủ động.", 0],
    ["A. Hoạt động trao đổi chất.", "B. Chênh lệch nồng độ ion.", "C. Cung cấp năng lượng.", "D. Hoạt động thẩm thấu.", 1],
    ["A. Cao đến nơi có nồng độ thấp, cần tiêu tốn ít năng lượng.", "B. Cao đến nơi có nồng độ thấp.", "C. Thấp đến nơi có nồng độ cao, không đòi hỏi tiêu tốn năng lượng.", "D. Thấp đến nơi có nồng độ cao, đòi hỏi phải tiêu tốn năng lượng.", 3],
    ["A. Lá và rễ.", "B. Cành và lá.", "C. Rễ và thân.", "D. Thân và lá.", 0],
    ["A. Qua dòng mạch rây theo chiều từ trên xuống.", "B. Từ mạch gỗ sang mạch rây.", "C. Từ mạnh rây sang mạch gỗ.", "D. Qua dòng mạch gỗ.", 3],    
    ["A. Lực đẩy (áp suất rễ)", "B. Lực hút do thoát hơi nước ở lá", "C. Lực liên kết giữa các phần tử nước với nhau và với thành tế bào mạch", "D. Do sự phối hợp của 3 lực: Lực đẩy, lực hút và lực liên kết.", 3],
    ["A. Con đường tế bào chất và con đường gian bào", "B. Qua lông hút vào tế bào nhu mô vỏ, sau đó vào trung trụ", "C. Xuyên qua tế bào chất của các tế bào vỏ rễ vào mạch gỗ", "D. Đi theo khoảng không gian giữa các tế bào vào mạch gỗ", 0],
    ["A. Tế bào chết là quản bào và mạch ống", "B. Tế bào sống là mạch ống và tế bào kèm", "C. Tế bào chết là mạch ống và tế bào kèm", "D. Tế bào sống là quản bào và mạch ống", 0],
    ["A. Tế bào chết là quản bào và mạch ống", "B. Tế bào sống là mạch ống và tế bào kèm", "C. Tế bào chết là mạch ống và tế bào kèm", "D. Tế bào sống là quản bào và mạch ống", 1],
    ["A. Lá", "B. Cành", "C. Thân", "D. Rễ", 0],
    ["A. Vai trò cấu trúc, vai trò điều tiết", "B. Vai trò cấu trúc", "C. Vai trò điều tiết", "D. Tham gia cấu tạo protein, axit nucleic", 0],
    ["A. 1", "B. 2", "C. 3", "D. 4", 3],
    ["A. Mỏng căng ra, thành dày co lại làm cho khí khổng mở ra", "B. Dày căng ra làm cho thành mỏng căng theo, khí khổng mở ra", "C. Dày căng ra làm cho thành mỏng co lại, khí khổng mở ra", "D. Mỏng căng ra làm cho thành dày căng theo, khí khổng mở ra", 3],
    ["A. Mỏng hết căng ra làm cho thành dày duỗi thẳng, khí khổng đóng lại", "B. Dày căng ra làm cho thành mỏng cong theo, khí khổng đóng lại", "C. Dày căng ra làm cho thành mỏng co lại, khí khổng đóng lại", "D. Mỏng căng ra làm cho thành dày duỗi thẳng, khí khổng khép lại", 0],
    ["A. 1", "B. 2", "C. 3", "D. 4", 1],
    ["A. Lực đẩy của rễ do quá trình hấp thụ nước", "B. Lực hút của lá do quá trình thoát hơi nước", "C. Lực liên kết giữa các phân tử nước", "D. Lực bám giữa các phân tử nước với thành mạch dẫn", 1],
    ["A. Số lượng khí khổng", "B. Sự phân bố khí khổng trên bề mặt lá", "C. Hoạt động đóng mở khí khổng", "D. Kích thước của khí khổng", 2],
    ["A. P, K, Fe", "B. S, P, K", "C. N, Mg, Fe", "D. N, K, Mn", 2],
    ["A. Sinh trưởng bị còi cọc, lá có màu vàng", "B. Lá mới có màu vàng, sinh trưởng rễ bị tiêu giảm", "C. Lá màu vàng nhạt, mép lá màu đỏ và có nhiều chấm đỏ trên mặt lá", "D. Lá nhỏ có màu lục đậm, màu của thân không bình thường, sinh trưởng rễ bị tiêu giảm", 0],
    ["A. Protein và axit nucleic", "B. Lipid", "C. Saccarit", "D. Phốt pho", 0],

    ["A. 1", "B. 3", "C. 2", "D. 4", 3], // Câu 22
    ["A. 3", "B. 2", "C. 1", "D. 4", 3], // Câu 23
    ["A. Thoát hơi nước là sự vận chuyển chủ động của nước qua bề mặt cơ thể thực vật vào khí quyển.", "B. Lượng nước thoát qua khí khổng chỉ phụ thuộc vào số lượng khí khổng của lá.", "C. Khi cây trưởng thành, tầng cutin dày, lượng nước thoát qua bề mặt lá chỉ chiếm khoảng 10 - 20%.", "D. Thoát hơi nước ở lá chỉ diễn ra theo con đường qua khí khổng của lá.", 2], // Câu 24
    ["A. 4", "B. 2", "C. 3", "D. 1", 0], // Câu 25
    ["A. NO2 - và NH3", "B. NO3 - và NH4 +", "C. NH3 và NH4 +", "D. NO3 - và NH3", 1], // Câu 26
    ["A. Khi thiếu nitrogen, lá cây có màu vàng, cây sinh trưởng chậm.","B. Nitrogen là thành phần của protein, nucleic acid, dKiệp lục.","C. Nitrogen tham gia cấu tạo enzyme, các hormone thực vật.","D. Nitrogen thúc đẩy khí khổng mở, làm tăng tốc độ thoát hơi nước.", 3], // Câu 27
    ["A. vai trò cấu trúc", "B. vai trò điều tiết", "C. tham gia cấu tạo protein, axit nucleic", "D. vai trò cấu trúc, vai trò điều tiết", 3], // Câu 28
    ["A. lục lạp hấp thụ và sử dụng năng lượng ánh sáng mặt trời để tổng hợp chất hữu cơ và giải phóng O2 từ CO2 và nước.", "B. sử dụng năng lượng ánh sáng mặt trời đựơc lục lạp hấp thu để tổng hợp các chất hữu cơ từ các chất vô cơ đơn giản (CO2)", "C. tổng hợp được các hợp chất cacbonhyđrat và O2 từ các chất vô cơ đơn giản xảy ra ở lá cây.","D. sử dụng năng lượng ATP được lục lạp hấp thụ để tổng hợp cacbonhydrat và giải phóng O2 từ CO2 và nước.", 0], // Câu 1
    ["A. 6CO2 + 12 H2O ASMT, DL C6H12O6 + 6 O2 + 6 H2O.","B. C6H12O6 + 6 O2 ASMT, DL 6 H2O+ 6CO2","C. 6CO2 + 12H2O ASMT, DL C6H12O6 + 12 O2.","D. C6H12O6 + 6 O2 + 6 H2O ASMT, DL 6CO2 + 12 H2O.", 0], // Câu 2
    ["A. Tạo ra đường xây dựng nên tế bào, cơ thể đồng thời làm nguyên liệu cho quá trình giải phóng năng lượng và là nguồn dự trữ năng lượng.","B. Giải phóng O2 cung cấp dưỡng khí cho nhiều sinh vật trên Trái Đất.","C. Tạo ra nguyên liệu và năng lượng cung cấp cho các sinh vật khác trên Trái Đất.","D. Hấp thụ CO2 giải phóng O2 giúp điều hòa không khí kiến tạo và duy trì tầng ozon giảm hiệu ứng nhà kính.", 0], // Câu 3
    ["A. Tạo ra đường xây dựng nên tế bào, cơ thể đồng thời làm nguyên liệu cho quá trình giải phóng năng lượng và là nguồn dự trữ năng lượng.","B. Giải phóng O2 cung cấp dưỡng khí cho nhiều sinh vật trên Trái Đất.","C. Tạo ra nguyên liệu và năng lượng cung cấp cho các sinh vật khác trên Trái Đất.","D. Hấp thụ CO2 giải phóng O2 giúp điều hòa không khí kiến tạo và duy trì tầng ozon giảm hiệu ứng nhà kính", 0], // Câu 4
    ["A. I, II", "B. II, III", "C. I, III", "D. II, IV", 0], // Câu 5
    ["A. Diệp lục và carôtenôit", "B. Diệp lục a và diệp lục b", "C. Carôten và xantôphyl", "D. Diệp lục a và carôten", 1], // Câu 6
    ["A. hấp thụ năng lượng ánh sáng", "B. tạo màu sắc đặc trưng cho cây", "C. chuyển hóa năng lượng ánh sáng thành năng lượng hóa học", "D. hấp thụ CO2", 2], // Câu 7
    ["A. diệp lục a", "B. diệp lục b", "C. carotene", "D. xanthophyl", 0], // Câu 8
    ["A. diệp lục a", "B. diệp lục b", "C. carotene", "D. xanthophyl", 0], // Câu 9
    ["A. Diệp lục b → diệp lục a → diệp lục a ở trung tâm phản ứng → carotenoid","B. Carotenoid → diệp lục b → diệp lục a → diệp lục a ở trung tâm phản ứng","C. Carotenoid → xanthophyl → diệp lục b ở trung tâm phản ứng","D. Diệp lục b → diệp lục a → Carotenoid → diệp lục a ở trung tâm phản ứng", 1], // Câu 10
    ["A. ATP và NADPH", "B. NADH", "C. ADP và NADH", "D. ADP", 0], // Câu 11
    ["A. Hấp thụ năng lượng của nước", "B. Hoạt động của chuỗi truyền điện tử trong quang hợp", "C. Quang phân li nước", "D. Diệp lục hấp thu ánh sáng trở thành trạng thái kích động", 2], // Câu 12
    ["A. RuBP (Ribulose 1,5 bisphosphate)", "B. G3P (Glyceraldehyde 3 phosphate)", "C. 3-PGA (3-phosphoglycerid acid)", "D. OAA (Oxaloacetic acid)", 2], // Câu 13
    ["A. OAA (Oxaloacetic acid)", "B. G3P (Glyceraldehyde 3 phosphate)", "C. RuBP (Ribulose 1,5 bisphosphate)", "D. 3-PGA (3-phosphoglycerid acid)", 0], // Câu 14
    ["A. AM (Malic acid)", "B. G3P (Glyceraldehyde 3 phosphate)", "C. RuBP (Ribulose 1,5 bisphosphate)", "D. 3-PGA (3-phosphoglycerid acid)", 0], // Câu 15
    ["A. thời gian cố định CO2", "B. enzim cố định CO2", "C. sản phẩm đầu tiên của pha tối", "D. chất nhận CO2 đầu tiên", 3], // Câu 16
    ["A. thời gian cố định CO2", "B. enzim cố định CO2", "C. sản phẩm đầu tiên của pha tối", "D. chất nhận CO2 đầu tiên", 0], // Câu 17
    ["A. sản phẩm cố định CO2 đầu tiên", "B. chất nhận CO2 đầu tiên", "C. các phản ứng sáng tương tự", "D. loại tế bào thực hiện quang hợp", 2], // Câu 18
    ["A. Điểm bão hòa ánh sáng là cường độ ánh sáng mà ở đó cường độ hô hấp bằng cường độ quang hợp.", "B. Trong giới hạn từ điểm bù đến điểm bão hòa ánh sáng, cường độ quang hợp tỉ lệ thuận với cường độ ánh sáng.","C. Cây ưa bóng có điểm bù ánh sáng thấp hơn cây ưa sáng.","D. Thành phần ánh sáng ảnh hưởng đến quá trình chuyển hóa sản phẩm quang hợp.", 0], // Câu 19
    ["A. Khi tăng nồng độ CO2 thì cường độ quang hợp tăng.", "B. Nồng độ CO2 tối thiểu mà cường độ hô hấp bằng quang hợp gọi là điểm bù CO2.","C. Điểm bão hòa CO2 là nồng độ CO2 mà tại đó quang hợp đạt cực đại.","D. Điểm bù CO2 ở thực vật C4 thấp hơn thực vật C3.", 0], // Câu 20  

    ["A. Ở điều kiện cường độ ánh sáng cao, tăng nồng độ CO2 thuận lợi cho quang hợp.", "B. Ở điều kiện cường độ ánh sáng thấp, tăng nồng độ CO2 thuận lợi cho quang hợp.", "C. Ở điều kiện cường độ ánh sáng thấp, giảm nồng độ CO2 thuận lợi cho quang hợp.", "D. Ở điều kiện cường độ ánh sáng cao, giảm nồng độ CO2 thuận lợi cho quang hợp.", 0],
    ["A. Cây nhiệt đới bắt đầu quang hợp ở nhiệt độ khoảng 3 -5 oC.", "B. Nhiệt độ tối ưu cho quang hợp ở cây nhiệt đới cao hơn cây ôn đới.", "C. Cây vùng lạnh có thể quang hợp ở nhiệt độ thấp hơn 0oC.", "D. Nhiệt độ tối ưu cho quang hợp khác nhau tuỳ theo từng loài.", 0],
    ["A. Quang hợp chỉ xảy ra tại miền ánh sáng xanh tím và miền ánh sáng đỏ.", "B. Các tia sáng có độ dài bước sóng khác nhau ảnh hưởng đến cường độ quang hợp là như nhau.", "C. Các tia sáng đỏ xúc tiến quá trình hình thành cacbohiđrat.", "D. Các tia sáng xanh tím kích thích sự tổng hợp các axit amin, prôtêin.", 0],
    ["A. Quang hợp xảy ra khi bộ máy quang hợp hấp thu ánh sáng tại miền xanh tím và ánh sáng đỏ.", "B. Các cây dưới tán rừng thường chứa nhiều diệp lục b giúp hấp thụ các tia sáng có bước sóng ngắn.", "C. Khi cường độ ánh sáng cao hơn điểm bù ánh sáng thì cường độ quang hợp tăng tỉ lệ thuận với cường độ ánh sáng cho đến khi đạt tới điểm bão hòa ánh sáng.", "D. Các tia sáng xanh tím kích thích sự tổng hợp cabohydrate và lipid, trong khi các tia đỏ kích thích tổng hợp acid amin và protein.", 0],
    ["A. Chu trình Canvin tồn tại ở cả 3 nhóm thực vật C3, C4 và CAM.", "B. O2 được tạo ra trong pha sáng có nguồn gốc từ phân tử CO2.", "C. Pha tối (pha cố định CO2) diễn ra trong xoang tilacôit của lục lạp.", "D. Quá trình quang hợp ở các nhóm thực vật C3, C4 và CAM chỉ khác nhau chủ yếu ở pha sáng.", 0],
    ["A. Vị trí cố định CO2 đầu tiên là ở tế bào nhu mô thịt lá.", "B. Có giai đoạn cố định CO2 theo chu trình Canvin.", "C. Tạo ra hợp chất G3P để tổng hợp các chất hữu cơ khác nhau trong tế bào.", "D. Tinh bột đều được tổng hợp từ chu trình Canvin.", 0],
    ["A. Ở cùng một nồng độ CO2 giống nhau thì cả 3 loài cây này đều có cường độ quang hợp giống nhau.", "B. Ở cùng một cưởng độ ánh sáng như nhau thì cả 3 loài cây này đều có cường độ quang hợp như nhau.", "C. Pha tối của cả 3 loài cây này đều có chu trình C4 và chu trình Canvin.", "D. Cả 3 loài này đều có pha tối diễn ra ở lục lạp của tế bào bao quanh bó mạch.",3],
    ["A. oxi hóa các hợp chất hữu cơ thành CO2 và H2O, đồng thời giải phóng năng lượng cần thiết cho các hoạt động sống của cơ thể.", "B. oxi hóa các hợp chất hữu cơ thành O2 và H2O, đồng thời giải phóng năng lượng cần thiết cho các hoạt động sống của cơ thể.", "C. oxi hóa các hợp chất hữu cơ thành CO2 và H2O, đồng thời tích lũy năng lượng cần thiết cho các hoạt động sống của cơ thể.", "D. khử các hợp chất hữu cơ thành CO2 và H2O, đồng thời giải phóng năng lượng cần thiết cho các hoạt động sống của cơ thể.", 0],
    ["A. quang hợp ở thực vật.", "B. hô hấp sáng ở thực vật.", "C. hô hấp ở thực vật.", "D. Lên men.", 1],
    ["A. Chu trình crep → Đường phân → Chuổi chuyền êlectron hô hấp.", "B. Đường phân → Chuổi chuyền êlectron hô hấp → Chu trình crep.", "C. Đường phân → Chu trình crep → Chuổi chuyền êlectron hô hấp.", "D. Chuổi chuyền êlectron hô hấp → Chu trình crep → Đường phân.", 2],
    ["A. phân giải hiếu khí.", "B. hô hấp sáng.", "C. phân giải kị khí.", "D. Lên men.", 0],
    ["A. phân giải hiếu khí.", "B. hô hấp sáng.", "C. phân giải kị khí.", "D. hô hấp hiếu khí.", 2],
    ["A. Chu trình Crep.", "B. Chuỗi chuyền điện tử electron.", "C. Đường phân.", "D. Tổng hợp axetyl – CoA.", 2],
    ["A. đường phân và hô hấp hiếu khí.", "B. đường phân hiếu khí và chu trình Crep.", "C. cacboxi hóa - khử - tái tạo chất nhận.", "D. oxy hóa chất hữu cơ và khử.", 0],
    ["A. rượu etylic + CO2 + năng lượng.", "B. axit lactic + CO2 + năng lượng.", "C. rượu etylic + năng lượng.", "D. rượu etylic + CO2.", 0],
    ["A. Giải phóng năng lượng ATP.", "B. Giải phóng năng lượng dạng nhiệt.", "C. Tạo các sản phẩm trung gian.", "D. Tổng hợp các chất hữu cơ.", 3],
    ["A. (1), (2) và (3).", "B. (2), (3) và (4).", "C. (1), (2) và (4).", "D. (1), (3) và (4).", 2],
    ["A. Nhiệt độ.", "B. Nồng độ khí CO2.", "C. Nồng độ khí Nitơ (N2).", "D. Hàm lượng nước.", 2],
    ["A. Hàm lượng nước tỉ lệ nghịch với cường độ hô hấp.", "B. Cường độ hô hấp và nhiệt độ tỉ lệ thuận với nhau.", "C. Nồng độ CO2 cao sẽ ức chế hô hấp.", "D. Nồng độ CO2 thấp sẽ ức chế hô hấp.", 1],
    ["A. Hàm lượng nước tỉ lệ thuận với cường độ hô hấp.", "B. Cường độ hô hấp và nhiệt độ luôn tỉ lệ thuận với nhau.", "C. Nồng độ CO2 cao sẽ ức chế hô hấp.", "D. Vượt qua nhiệt độ tối ưu thì cường độ hô hấp giảm.", 2],
    ["A. Hô hấp bị ảnh hưởng nếu O2 giảm dưới 10%.", "B. Nhiệt độ môi trường ảnh hưởng đến hô hấp ở thực vật.", "C. Nồng độ CO2 cao có thể ức chế quá trình hô hấp.", "D. Trong điều kiện thiếu ôxi, thực vật tăng cường quá trình hô hấp hiếu khí.", 3],
    ["A. Nước, nhiệt độ, hàm lượng O2.", "B. Nước, nhiệt độ, hàm lượng CO2.", "C. Nước, hàm lượng O2, CO2.", "D. Nước, nhiệt độ, hàm lượng O2, CO2.", 3],
    ["A. Cung cấp năng lượng chống chịu.", "B. Tăng khả năng chống chịu.", "C. Tạo ra sản phẩm trung gian.", "D. Miễn dịch cho cây.", 0],
    ["A. Quang hợp ở thực vật.", "B. Hô hấp ở thực vật.", "C. Lên men.", "D. Hô hấp sáng ở thực vật.", 1],
    ["A. I, III và IV.", "B. I, II và IV.", "C. I, II và III.", "D. II, III và IV.", 2],
    ["A. Nhiệt độ môi trường ảnh hưởng đến hô hấp ở thực vật.", "B. Các loại hạt khô như hạt thóc, hạt ngô có cường độ hô hấp thấp.", "C. Nồng độ CO2 cao có thể ức chế quá trình hô hấp.", "D. Trong điều kiện thiếu oxy, thực vật tăng cường quá trình hô hấp hiếu khí.", 3],
    // ["aaaaa", "bbbbb", "ccccc", "ddddd", 
];

// tạo câu hỏi
const questionTable = document.querySelector(`.question__table`);
questions.forEach((_, index) => {
    const questionItem = document.createElement('div');
    questionItem.classList.add('question__item');
    questionItem.textContent = index + 1; // Thiết lập nội dung là số thứ tự
    questionTable.appendChild(questionItem);
});

const userAnswer = new Array(questions.length).fill(null);
const startTime = Date.now();
let time;

const nav = document.querySelector(`.nav`);
const menu = document.querySelector(`.fa-bars`);
const closeMenu = document.querySelector(`.fa-xmark`);

const questionItem = document.querySelectorAll(`.question__item`);
const questionContent = document.querySelector(`.question__content`);
const answerDesc = document.querySelectorAll(`.answer__desc`);
const radio = document.querySelectorAll(`.choose`);

const prevBtn = document.querySelector(`.prevBtn`);
const nextBtn = document.querySelector(`.nextBtn`);
const submit = document.querySelector(`.submit`);
const ask = document.querySelector(`.ask`);
const noBtn = document.querySelector(`.no`);
const yesBtn = document.querySelector(`.yes`);

const scoreDesc = document.querySelector(`.score__desc`);
let score = 0;
let show = false;

let viTri = 0;

console.log(questions.length , answers.length);


window.onload = () => {
    function createShuffledArray(n) {
        const array = Array.from({ length: n }, (_, index) => index);
        for(let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }    
        return array;
    }    

    const shuffledArray = createShuffledArray(questions.length);
    const lastElements = shuffledArray.map(i => answers[i][answers[i].length - 1]);

    function updateQuestion(e) {
        radio.forEach((val, idx) => {
            if(val.checked) {
                userAnswer[viTri] = idx;
            }
            val.checked = false;
        });
        viTri = e;
        if(userAnswer[viTri] != null) {
            radio[userAnswer[viTri]].checked = true;
        }
        questionContent.textContent = `Câu hỏi ${viTri+1}: ${questions[shuffledArray[viTri]]}`
        answerDesc.forEach((val, idx) => {
            val.textContent = `${answers[shuffledArray[viTri]][idx]}`;
        });
        questionItem.forEach((val, idx) => {
            val.classList.remove("active");
        });
        questionItem[viTri].classList.add("active");        
    }
    updateQuestion(0);

    function updateTimeDisplay() {
        const currentTime = Date.now();
        const elapsedTime = currentTime - startTime;

        // Tính toán giờ, phút và giây
        const hours = Math.floor((elapsedTime / (1000 * 60 * 60)) % 24);
        const minutes = Math.floor((elapsedTime / (1000 * 60)) % 60);
        const seconds = Math.floor((elapsedTime / 1000) % 60);

        // Định dạng thành HH:MM:SS
        const formattedTime = [
            String(hours).padStart(2, '0'),
            String(minutes).padStart(2, '0'),
            String(seconds).padStart(2, '0')
        ].join(':');

        document.querySelector('.time__cnt').innerText = formattedTime;

        return formattedTime;
    }
    timerInterval = setInterval(updateTimeDisplay, 1000);

    function updateResults() {
        lastElements.forEach((val, idx) => {
            if(val === userAnswer[idx]) {
                score++;
                questionItem[idx].classList.add("green");
            }
            else {
                questionItem[idx].classList.add("red");
            }            
        });
        scoreDesc.textContent = `Số câu đúng: ${score}/${questions.length}`;
    }

    function showAnswer() {
        if(show) {
            answerDesc.forEach(val => {
                val.style.color = "#000";
            });
            
            questionItem.forEach((val, idx) => {
                if(viTri === idx) {
                    answerDesc[lastElements[idx]].style.color = "red";
                }
            });
        }        
    }


    questionItem.forEach((val, idx) => {
        val.addEventListener("click", () => {
            updateQuestion(idx);
            showAnswer();
        });
    });    

    prevBtn.addEventListener("click", () => {
        if(viTri > 0) {{
            updateQuestion(viTri-1);
            showAnswer();
        }}        
    });

    nextBtn.addEventListener("click", () => {
        if(viTri < questions.length - 1) {{
            updateQuestion(viTri+1);
            showAnswer();
        }}        
    });

    document.addEventListener('keydown', function(event) {
        if(event.key === 'ArrowLeft') {
            if(viTri > 0) {{
                updateQuestion(viTri-1);
                showAnswer();
            }}  
        } 
        else if(event.key === 'ArrowRight') {
            if(viTri < questions.length - 1) {{
                updateQuestion(viTri+1);
                showAnswer();
            }}  
        }
    });

    radio.forEach((val, idx) => {
        val.addEventListener('click', () => {
            questionItem[viTri].classList.add("blue");
        });
    })

    submit.addEventListener('click', () => {
        updateQuestion(viTri);
        ask.style.display = "block";
    });

    noBtn.addEventListener('click', () => {
        ask.style.display = "none";
    });    

    yesBtn.addEventListener('click', () => {
        ask.style.display = "none";
        time = updateTimeDisplay();
        clearInterval(timerInterval);
        scoreDesc.style.display = "block";
        updateResults();
        show = true;
        showAnswer();
    });    
    if(window.innerWidth < 767.98) {
        yesBtn.addEventListener('click', () => {
            nav.style.display = "block";
            closeMenu.style.display = "block";
            menu.style.display = "none";
        });   
        menu.addEventListener('click', () => {
            nav.style.display = "block";
            closeMenu.style.display = "block";
            menu.style.display = "none";
        });
    
        nav.addEventListener('click', () => {
            nav.style.display = "none";
            closeMenu.style.display = "none";
            menu.style.display = "block";
        });
        
        closeMenu.addEventListener('click', () => {
            nav.style.display = "none";
            closeMenu.style.display = "none";
            menu.style.display = "block";
        });
    }    
};