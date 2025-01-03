const questions = [
    // bài 8
    "Quá trình dinh dưỡng là quá trình",
    "Động vật nào sau đây lấy thức ăn từ môi trường sống theo kiểu ăn thức ăn rắn kích cỡ khác nhau?",
    "Động vật nào sau đây lấy thức ăn từ môi trường sống theo kiểu ăn lọc?",
    "Động vật nào đây lấy thức ăn từ môi trường sống theo kiểu ăn hút?",
    "Ở động vật có ống tiêu hóa, thức ăn được tiêu hóa bằng hình thức nào sau đây?",
    "Ở động vật có túi tiêu hóa, thức ăn được tiêu hóa bằng hình thức nào sau đây?",
    "Động vật nào sau đây tiêu hóa thức ăn bằng hình thức tiêu hóa nội bào?",
    "Ở động vật đơn bào, các enzyme tiêu hóa có ở bào quan nào sau đây?",
    "Nhóm động vật nào sau đây có túi tiêu hóa?",
    "Ở động vật có ống tiêu hóa, thức ăn được tiêu hóa theo hình thức",
    "Động vật nào sau đây chưa có cơ quan tiêu hóa?",
    "Tóm tắt quá trình tiêu hóa thức ăn trong túi tiêu hóa. <br> I. Thức ăn đi qua miệng vào trong túi. <br> II. Tế bào trên thành túi tiêu hóa tiết ra enzyme phân giải thức ăn thành các mảnh nhỏ. <br> III. Các mảnh thức ăn tiếp tục được các tế bào thành túi tiêu hóa nội bào. <br> IV. Chất thải được thải đi qua miệng ra ngoài.",
    "Ưu điểm của tiêu hóa thức ăn ở động vật có túi tiêu hóa so với động vật chưa có túi tiêu hóa là",
    "Bộ phận nào sau đây của ống tiêu hóa có quá trình tiêu hóa cơ học mạnh hơn tiêu hóa hóa học?",
    "Ở động vật có ống tiêu hóa, quá trình tiêu hóa hóa học diễn ra chủ yếu ở cơ quan nào sau đây?",
    "Khi nói về quá trình tiêu hóa thức ăn ở động vật có túi tiêu hóa, phát biểu nào sau đây đúng?",
    "Khi nói về hoạt động tiêu hóa thức ăn trong các bộ phận của ống tiêu hóa ở người, phát biểu nào sau đây sai?",
    "Sự tiến hóa của các hình thức tiêu hóa diễn ra theo hướng nào sau đây?",
    "Những ưu điểm của tiêu hóa thức ăn trong ống tiêu hóa so với trong túi tiêu hóa: <br> I. Thức ăn đi theo 1 chiều trong ống tiêu hóa không bị trộn lẫn với chất thải (phân) còn thức ăn trong túi tiêu hóa bị trộn lẫn chất thải. <br> II. Trong ống tiêu hóa dịch tiêu hóa không bị hòa loãng <br> III. Thức ăn đi theo 1 chiều nên hình thành các bộ phận chuyên hóa, thực hiện các chức năng khác nhau: tiêu hóa cơ học, hóa học, hấp thụ thức ăn <br> IV. Thức ăn đi qua ống tiêu hóa được biến đổi cơ học, hóa học trở thành những chất phức tạp và được hấp thụ vào máu.",
    "Khi nói về đặc điểm cấu tạo của ruột non thích nghi với hấp thụ các chất dinh dưỡng, có bao nhiêu nhận định sau đây đúng? <br> I. Bề mặt hấp thụ của ruột tăng lên nhiều lần nhờ các nếp gấp của niêm mạc ruột (van ruột). <br> II. Cấu tạo bởi cơ vân nên tạo nhu động ruột đẩy thức ăn di chuyển trong lòng ruột. <br> III. Bề mặt các nếp gấp lại có nhiều lông ruột và vi lông hút nằm trên đỉnh của tế bào lông ruột. <br> IV. Lông ruột chứa lớp tế bào biểu mô, bên trong có hệ mạch máu và dây thần kinh.",
    // bài 9
    "Hô hấp đảm bảo cho động vật lấy được",
    "Hô hấp ở người và thú gồm các giai đoạn liên quan mật thiết với nhau theo thứ tự: <br> I. Thông khí. <br> II. Vận chuyển O2 và CO2. <br> III. Hô hấp tế bào. <br> IV. Trao đổi khí ở phổi. <br> V. Trao đổi khí ở mô.",
    "Ở động vật đơn bào hoặc đa bào có tổ chức thấp trao đổi khí theo hình thức nào sau đây?",
    "Các loài động vật như ruột khoang, giun tròn, giun dẹp trao đổi khí theo hình thức nào?",
    "Châu chấu trao đổi khí theo hình thức nào sau đây?",
    "Động vật nào sau đây trao đổi khí với môi trường thông qua hệ thống ống khí?",
    "Giai đoạn nòng nọc của lưỡng cư trao đổi khí theo hình thức nào sau đây?",
    "Các loài động vật thân mềm trao đổi khí theo hình thức nào sau đây?",
    "Động vật nào sau đây có quá trình trao đổi khí giữa cơ thể với môi trường diễn ra ở mang?",
    "Trâu, bò trao đổi khí bằng hình thức nào sau đây?",
    "Khi nói về hô hấp ở động vật, phát biểu nào sau đây đúng?",
    "Bề mặt trao đổi khí là",
    "Căn cứ vào bề mặt trao đổi khí, có thể chia hô hấp ở động vật gồm mấy hình thức chủ yếu?",
    "Cơ quan thực hiện trao đổi khí ở thú là",
    "Các hình thức trao đổi khí ở động vật là",
    "Hiệu quả trao đổi khí của động vật liên quan đến các đặc điểm của bề mặt trao đổi khí. Có bao nhiêu đặc điểm sau đây là đúng? <br> I. Bề mặt trao đổi khí rộng <br> II. Bề mặt trao đổi mỏng và ẩm ướt <br> III. Bề mặt trao đổi khí có nhiều mạch máu và máu có sắc tố hô hấp <br> IV. Có sự lưu thông không khí tạo ra sự chênh lệch về nồng độ O2 và CO2 để các khí đó dễ dàng khuếch tán qua bề mặt trao đổi khí",
    "Khi nói về sự trao đổi khí qua bề mặt cơ thể, phát biểu nào sau đây sai?",
    "Có bao nhiêu phát biểu sau đây là đúng khi nói về hoạt động trao đổi khí của chim? <br> I. Không khí lưu thông qua các ống khí ở phổi diễn ra liên tục theo một chiều nhất định. <br> II. Không có khí đọng trong các ống khí ở phổi. <br> III. Sự trao đổi khí diễn ra theo 2 chu kì. <br> IV. Thời gian tiếp xúc giữa dòng nước và mao mạch rất ít nhưng quá trình trao đổi chất diễn ra thuận lợi.",
    "Khi nói về trao đổi khí ở động vật, có bao nhiêu phát biểu sau đây đúng? <br> I. Hệ thống mao mạch trên phiến mang là nơi trao đổi khí O2 và CO2 với dòng nước chảy qua mang. <br> II. Thông khí ở cá xương là nhờ hoạt động của các cơ hô hấp làm thay đổi thể tích khoang miệng và khoang mang. <br> III. Phổi là cơ quan trao đổi khí chuyên hóa của nhiều loài động vật sống trên cạn như bò sát, chim và thú. <br> IV. Phổi của lưỡng cư có ít phế nang hơn phổi của chim nên trao đổi khí chủ yếu qua da.",
    "Khi nói về đặc điểm trao đổi khí bằng mang, có bao nhiêu phát biểu sau đây đúng? <br> I. Mang là cơ quan hô hấp thích nghi với môi trường nước, có ở cá, thân mềm, chân khớp sống trong nước. <br> II. Mang gồm các cung mang, mỗi cung mang là hệ thống tĩnh mạch chằng chịt bao lấy chúng. <br> III. Miệng và diềm nắp mang đóng mở nhịp nhàng tạo dòng nước chảy 1 chiều liên tục qua mang. <br> IV. Sự trao đổi khí của cá xương đạt hiệu quả cao, có thể lấy được hơn 80% lượng O2 trong nước khi đi qua mang.",
    // bài 10
    "Hệ tuần hoàn của động vật được cấu tạo từ các bộ phận nào sau đây?",
    "Những động vật nào sau đây có hệ tuần hoàn hở?",
    "Những động vật nào sau đây có hệ tuần hoàn kín?",
    "Nhóm động vật nào sau đây có hệ tuần hoàn đơn?",
    "Nhóm động vật nào sau đây có hệ tuần hoàn kép?",
    "Cấu tạo của hệ tuần hoàn hở gồm các thành phần",
    "Cấu tạo của hệ tuần hoàn kín gồm các thành phần:",
    "Máu vận chuyển trong hệ tuần hoàn hở theo thứ tự nào sau đây?",
    "Máu vận chuyển trong hệ tuần hoàn kín theo thứ tự nào sau đây?",
    "Ở hệ tuần hoàn kín, tim bơm máu vào động mạch với áp lực",
    "Ở hệ tuần hoàn hở, tim bơm máu vào động mạch với áp lực",
    "Trong hệ tuần hoàn kín",
    "Ở động vật có hệ tuần hoàn hở, máu trao đổi chất với tế bào qua",
    "Ở động vật có hệ tuần hoàn kín, máu trao đổi chất với tế bào qua",
    "Tính tự động của tim là",
    "Khả năng co dãn tự động theo chu kì của tim do",
    "Hệ dẫn truyền tim hoạt động theo thứ tự nào sau đây?",
    "Thứ tự nào sau đây đúng với chu kì hoạt động của tim?",
    "Tim co và dãn nhịp nhàng theo chu kì gọi là",
    "Ở người trưởng thành, mỗi chu kì tim kéo dài khoảng",
    "Mỗi chu kì tim kéo dài khoảng 0,8 s, trong đó",
    "Huyết áp là",
    "Huyết áp tâm trương xuất hiện ứng với kỳ nào trong chu kì hoạt động của tim?",
    "Huyết áp tâm thu xuất hiện ứng với kỳ nào trong chu kì hoạt động của tim?",
    "Trị số bình thường của huyết áp tâm thu của người trưởng thành là ..(1)... và huyết áp tâm trương là ..(2)... <br> Dấu ..(1)... và ... (2)... là",
    "Khi nói về tuần hoàn máu, phát biểu nào sau đây đúng?",
    "Nhóm động vật không có sự pha trộn giữa máu giàu oxi và máu giàu CO2 ở tim",
    "Trong hệ mạch huyết áp giảm dần từ",
    "Trong hệ mạch vận tốc máu tăng dần từ",
    "Khi nói về sự thay đổi huyết áp trong hệ mạch, phát biểu nào sau đây đúng?",
    "Huyết áp thay đổi do những yếu tố nào? <br> 1. Lực co tim <br> 2. Nhịp tim <br> 3. Độ quánh của máu <br> 4. Khối lượng máu <br> 5. Số lượng hồng cầu <br> 6. Sự đàn hồi của mạch máu",
    "Ưu điểm của hệ tuần hoàn kín so với hệ tuần hoàn hở? <br> 1. Máu chảy trong ĐM dưới áp lực cao hoặc trung bình. <br> 2. Tốc độ máu chảy nhanh, máu đi được xa đến các cơ quan nhanh. <br> 3. Đáp ứng tốt hơn nhu cầu trao đổi khí và trao đổi chất của cơ thể. <br> 4. Áp lực đẩy máu lưu thông trong hệ mạch  rất thấp, chảy chậm. <br> 5. Giảm hiệu qủa cung cấp O2 và chất dinh dưỡng cho TB. <br> Số phương án đúng là:",
    "Ưu điểm của vòng tuần hoàn kép so với vòng tuần hoàn đơn? <br> 1. máu chảy trong động mạch dưới áp lực thấp hoặc trung bình. <br> 2. tốc độ máu chảy chậm, máu đi được xa đến các cơ quan nhanh. <br> 3. áp lực đẩy máu lưu thông trong hệ mạch  rất lớn, chảy nhanh, đi được xa. <br> 4. tăng hiệu qủa cung cấp O2 và chất dinh dưỡng cho tế bào. <br> 5. đồng thời thải chậm các chất thải ra ngoài <br> Số phương án đúng là:",
    "Làm thế nào để giảm và kiểm soát bệnh tăng HA mà không cần đến thuốc? <br> 1. Giảm cân, vận động thể lực hạn chế căng thẳng <br> 2.Giảm lượng muối ăn  hàng ngày ( < 6g NaCl) <br> 3. Hạn chế  uống rượu bia  không hút thuốc lá. <br> 4. Ăn muối nhiều nhưng tăng cường vận động <br> Số phương án đúng:",
    "Cho các thông tin. <br> 1. Suy tim, hẹp động mạch vành, thiếu máu cơ tim, nhồi máu cơ tim. <br> 2. xuất huyết não, nhũn não, cơn thiếu máu não <br> 3. Suy thận <br> 4. Giảm cân <br> Số phương án đúng về hậu quả của bệnh tăng huyết áp:",
    "Tăng huyết áp là do <br> 1. tuổi cao,di truyền <br> 2. béo phì, ít vận động <br> 3. thói quen ăn mặn <br> 4. Rối loạn tim mạch do lo âu, căng thẳng <br> Số phương án đúng:",
    "Tại sao người mắc bệnh xơ vữa thành mạch lại thường bị cao huyết áp?",
    "Có bao nhiêu hành động sau đây mà người bị cao huyết áp nên thực hiện? <br> I. Tập thể dục, thể thao điều độ. <br> II. Ăn các loại thức ăn có nhiều chất béo, bột đường. <br> III. Hạn chế ăn các loại thức ăn có nồng độ muối cao. <br> IV. Sử dụng dầu thực vật hoặc dầu cá, hạn chế ăn mỡ động vật.",
    // bài 12
    "Bệnh ở người và động vật là",
    "Nguyên nhân gây bệnh cho người và động vật là do",
    "Miễn dịch là",
    "Dị ứng là",
    "Miễn dịch tự nhiên mang tính bẩm sinh gọi là",
    "Miễn dịch xảy ra khi có kháng nguyên xâm nhập vào cơ thể gọi là",
    "Hàng rào bảo vệ cơ thể ở hệ tiêu hóa là",
    "Hàng rào bảo vệ cơ thể ở hệ hô hấp là",
    "Hàng rào bảo vệ cơ thể ở hệ bài tiết là",
    "Khi mầm bệnh vượt qua được hàng rào bảo vệ vật lý và hóa học thì chúng sẽ gặp hàng rào bảo vệ tiếp theo, đó là các đáp ứng không đặc hiệu. Các đáp ứng không đặc hiệu gồm :",
    "Phân tử gây phản ứng đặc hiệu với kháng nguyên gọi là",
    "Phân  tử ngoại lai khi xâm nhập vào cơ thể sẽ kích thích cơ thể tạo ra chất gây phản ứng đặc hiệu với nó gọi là",
    "Bệnh ung thư là",
    "Bệnh ung thư, tự miễn và AIDS là do chức năng",
    "Di căn là quá trình tế bào u ác tính có thể",
    "Người bị nhiễm HIV/AIDS thường dễ mắc bệnh lao vì",
    // bài 13
    "Ở người, quá trình loại bỏ ra khỏi cơ thể các chất sinh ra từ quá trình chuyển hóa mà cơ thể không sử dụng, các chất độc hại, các chất dư thừa được gọi là",
    "Cơ quan nào sau đây có vai trò lọc máu hình thành nước tiểu?",
    "Cơ quan nào sau đây có vai trò bài xuất carbon dioxide ra khỏi cơ thể?",
    "Cơ quan nào sau đây có vai trò bài tiết mồ hôi ra khỏi cơ thể?",
    "Sản phẩm bài tiết chính của phổi là",
    "Nội môi là môi trường",
    "Cân bằng nội môi là duy trì sự ổn định của môi trường trong",
    "Cân bằng nội môi là trạng thái cân bằng",
    "Cơ quan nào sau đây không tham gia cân bằng nội môi?",
    "Bộ phận nào sau đây là bộ phận thực hiện cân bằng nội môi?",
    "Tuyến tụy tiết ra hormone insulin và glucagon tham gia vào cơ chế nào sau đây?",
    "Bộ phận thực hiện trong cơ chế điều hòa cân bằng nội môi là",
    "Mỗi nephron được cấu tạo từ",
    "Mỗi hệ thống điều hòa cân bằng nội môi gồm các thành phần là",
    "Vai trò của gan trong điều hòa cân bằng nội môi là",
    "Khi nói về vai trò của thận trong điều hòa cân bằng nội môi có bao nhiêu phát biểu đúng? <br> I. Điều hòa nồng độ của nhiều chất hòa tan như protein, glucose,… trong huyết tương. <br> II. Điều hòa cân bằng muối và nước, qua đó duy trì áp suất thẩm thấu của dịch cơ thể. <br> III. Duy trì pH máu qua điều chỉnh tiết H+ vào dịch lọc và tái hấp thụ HCO3- từ dịch lọc trả về máu. <br> IV. Duy trì pH máu qua điều chỉnh lượng O2 và CO2 trong máu.",
    "Vai trò của phổi trong điều hòa cân bằng nội môi là",
    "Khi nói về cơ chế điều hòa cân bằng nội môi, có bao nhiêu phát biểu sau đây là đúng? <br> I. Hệ hô hấp giúp duy trì pH bằng cách thải CO2 ra môi trường. <br> II. Gan duy trì cân bằng nội môi thông qua điều hoà nồng độ nhiều chất tan như protein, glucose,…. <br> III. Hệ tiết niệu tham gia điều hòa pH máu thông qua điều hoà áp suất thẩm thấu, điều chỉnh tiết H+ và tái hấp thu HCO3-. <br> IV. Trong cơ thể, chỉ có gan, thận và phổi tham gia điều hoà cân bằng nội môi.",
    "Có bao nhiêu biện pháp sau đây bảo vệ thận của con người? <br> (I) Chế độ ăn uống hợp lí. <br> (II) Uống đủ nước. <br> (III) Không uống nhiều rượu bia. <br> (IV) Không sử dụng quá nhiều loại thuốc.",
    "Khi nói về cơ chế duy trì cân bằng nội môi, trật tự nào sau đây đúng?",
];

const answers = [
    // bài 8
    ["thải chất dinh dưỡng cần thiết dưới dạng thức ăn và tổng hợp thành chất sống của cơ thể → đảm bảo cho cơ thể tồn tại và phát triển.", "lấy chất dinh dưỡng không cần thiết dưới dạng thức ăn và tổng hợp thành chất sống của cơ thể → đảm bảo cho cơ thể tồn tại và phát triển.", "lấy chất dinh dưỡng cần thiết dưới dạng thức ăn và phân giải thành chất sống của cơ thể → đảm bảo cho cơ thể tồn tại và phát triển.", "lấy chất dinh dưỡng cần thiết dưới dạng thức ăn và tổng hợp thành chất sống của cơ thể → đảm bảo cho cơ thể tồn tại và phát triển."],
    ["Muỗi.", "Trai sông.", "Hổ.", "Sò huyết."],
    ["Muỗi.", "Ếch đồng.", "Hổ.", "Sò huyết."],
    ["Muỗi.", "Ếch đồng.", "Hổ.", "Sò huyết."],
    ["Tiêu hóa ngoại bào.", "Tiêu hóa nội bào.", "Tiêu hóa ngoại bào và tiêu hóa nội bào.", "Một số tiêu hóa nội bào, còn lại tiêu hóa ngoại bào."],
    ["Tiêu hóa ngoại bào.", "Tiêu hóa nội bào.", "Tiêu hóa ngoại bào và tiêu hóa nội bào.", "Một số tiêu hóa nội bào, còn lại tiêu hóa ngoại bào."],
    ["Trùng giày.", "Thủy tức.", "Ếch đồng.", "Sò huyết."],
    ["Không bào tiêu hóa.", "Ti thể.", "Lysosome.", "Túi tiêu hóa."],
    ["Ruột khoang và giun dẹp.", "Chim và thú.", "Trùng giày và giun dẹp.", "Ruột khoang và trùng amip."],
    ["tiêu hóa ngoại bào.", "một số tiêu hóa nội bào, còn lại tiêu hóa ngoại bào.", "tiêu hóa nội bào.", "tiêu hóa nội bào và ngoại bào."],
    ["Trùng giày.", "Thủy tức.", "Côn trùng.", "Giun đất."],
    ["I II III IV.", "IV II III I.", "I III II IV.", "I IV II III."],
    ["có enzim tiêu hóa", "tiêu hóa được thức ăn có kích thước lớn.", "tiêu hóa các chất dinh dưỡng phức tạp thành các chất dinh dưỡng đơn giản.", "có lỗ thông để lấy thức ăn."],
    ["Ruột non và ruột già.", "Ruột non và miệng.", "Miệng và dạ dày.", "Dạ dày và ruột già."],
    ["Thực quản.", "Dạ dày.", "Ruột non.", "Ruột già."],
    ["Trong túi tiêu hóa, thức ăn chỉ được biến đổi về mặt cơ học.", "Thức ăn được tiêu hóa ngoại bào nhờ enzyme của lizôxôm.", "Trong ngành Ruột khoang, chỉ có thủy tức mới có cơ quan tiêu hóa dạng túi.", "Thức ăn được tiêu hóa ngoại bào và tiêu hóa nội bào."],
    ["Ở ruột già có tiêu hóa cơ học và hóa học.", "Ở dạ dày có tiêu hóa cơ học và hóa học.", "Ở miệng có tiêu hóa cơ học và hóa học.", "Ở ruột non có tiêu hóa cơ học và hóa học."],
    ["Tiêu hóa nội bào → tiêu hóa ngoại bào → tiêu hóa nội bào kết hợp với ngoại bào.", "Tiêu hóa ngoại bào → tiêu hóa nội bào kết hợp với ngoại bào → tiêu hóa nội bào.", "Tiêu hóa nội bào → tiêu hóa nội bào kết hợp với ngoại bào → tiêu hóa ngoại bào.", "Tiêu hóa nội bào kết hợp với ngoại bào → tiêu hóa nội bào → tiêu hóa ngoại bào."],
    ["I, II, IV.", "I, III, IV.", "II, III, IV.", "I, II, III."],
    ["1.", "2.", "3.", "4."],
    // bài 9
    ["O2 thải CO2.", "CO2 thải O2.", "CO2 thải CO2.", "O2 thải O2."],
    ["I II III IV V.", "I II IV V III.", "I IV II V III.", "I V II IV III."],
    ["Qua bề mặt cơ thể.", "Qua hệ mao mạch mang.", "Qua hệ thống ống khí.", "Qua hệ thống phế nang."],
    ["Qua bề mặt cơ thể.", "Qua hệ thống ống khí.", "Qua mang.", "Qua phổi."],
    ["Qua bề mặt cơ thể.", "Qua hệ thống ống khí.", "Qua mang.", "Qua phổi."],
    ["Châu chấu.", "Sư tử.", "Chuột đồng.", "Ếch đồng."],
    ["Qua bề mặt cơ thể.", "Qua hệ thống ống khí.", "Qua mang.", "Qua phổi."],
    ["Qua bề mặt cơ thể.", "Qua hệ thống ống khí.", "Qua mang.", "Qua phổi."],
    ["Mèo rừng.", "Tôm sông.", "Chim sâu.", "Ếch đồng."],
    ["Qua bề mặt cơ thể.", "Qua hệ thống ống khí.", "Qua mang.", "Qua phổi."],
    ["Hô hấp là quá trình tiếp nhận O2 và CO2 của cơ thể từ môi trường sống và giải phóng ra năng lượng.", "Hô hấp là tập hợp những quá trình, trong đó cơ thể lấy O2 từ bên ngoài vào để oxi hóa các chất trong tế bào và giải phóng năng lượng cho các hoạt động sống đồng thời thải CO2 ra ngoài.", "Hô hấp là quá trình tế bào sử dụng các chất khí như O2, CO2 để tạo ra năng lượng cho hoạt động sống.", "Hô hấp là quá trình trao đổi khí giữa cơ thể và môi trường, đảm bảo cho cơ thể có đầy đủ O2 và CO2 cung cấp cho các quá trình ôxi hóa các chất trong tế bào."],
    ["Bộ phận hoặc cơ quan cho CO2 từ môi trường ngoài khuếch tán vào trong tế bào(hoặc máu) và O2 khuếch tán từ tế bào (hoặc máu) ra ngoài.", "Bộ phận hoặc cơ quan cho O2 từ tế bào này khuếch tán vào trong tế bào(hoặc máu) khác.", "Bộ phận cho O2 từ môi trường ngoài khuếch tán vào trong tế bào(hoặc máu) và O2 khuếch tán từ tế bào (hoặc máu) ra ngoài.", "Bộ phận cho O2 từ môi trường ngoài khuếch tán vào trong tế bào(hoặc máu) và CO2 khuếch tán từ tế bào (hoặc máu) ra ngoài."],
    ["2.", "3.", "4.", "5."],
    ["hệ thống ống khí tiếp xúc trực tiếp với tế bào.", "các ống khí nằm trong phổi.", "phế nang trong phổi.", "lá mang và hệ thống mao mạch ở các lá mang."],
    ["qua bề mặt cơ thể, qua hệ thống ống khí, qua mang, qua da.", "qua bề mặt cơ thể, qua hệ thống ống khí, qua mang, qua phổi.", "qua bề mặt cơ thể, qua hệ thống ống khí, qua mang.", "qua bề mặt cơ thể, qua hệ thống ống khí, qua da."],
    ["2", "3", "4", "1"],
    ["Động vật đơn bào và đa bào bậc thấp chưa có cơ quan hô hấp chuyên biệt.", "Sự trao đổi khí được thực hiện trực tiếp qua màng tế bào hoặc bề mặt cơ thể nhờ sự khuếch tán.", "CO2 từ môi trường vào cơ thể và O2 từ cơ thể ra môi trường.", "Ruột khoang hô hấp trực tiếp. Giun đất hô hấp thực hiện nhờ xoang cơ thể."],
    ["1", "3", "4", "2"],
    ["1", "2", "4", "3"],
    ["3", "1", "2", "4"],
    // bài 10
    ["Dịch tuần hoàn, tim và hệ thống mạch máu.", "Dịch tuần hoàn, tim và máu.", "Máu, nước mô và tim.", "Máu, tim và hệ thống bạch huyết."],
    ["Ốc sên, trai sông, châu chấu.", "Tôm, cua, mực ống.", "Châu chấu, giun đốt, trai sông.", "Tôm, ốc sên, giun đốt."],
    ["Mực ống, cá, giun đốt.", "Giun dẹp, cua, mực ống.", "Côn trùng, giun đốt, trai sông.", "Tôm, ốc sên, giun đốt."],
    ["Lưỡng cư, bò sát.", "Cá, lưỡng cư.", "Cá xương, cá sụn.", "Côn trùng, cá."],
    ["Lưỡng cư, bò sát, chim.", "Cá, lưỡng cư, bò sát.", "Bò sát, chim, côn trùng.", "Côn trùng, cá, bò sát."],
    ["tim, động mạch, ống góp.", "tim, động mạch, tĩnh mạch, mao mạch.", "tim, động mạch, mao mạch.", "tim, tĩnh mạch, mao mạch."],
    ["tim, động mạch, ống góp.", "tim, động mạch, tĩnh mạch, mao mạch.", "tim, động mạch, tĩnh mạch.", "tim, tĩnh mạch, mao mạch."],
    ["Tim → tĩnh mạch → động mạch → mao mạch → tim.", "Tim → mao mạch → động mạch → tĩnh mạch → tim.", "Tim → động mạch → tĩnh mạch → mao mạch → tim.", "Tim → động mạch → xoang cơ thể → ống góp → tim."],
    ["Tim → động mạch → mao mạch → tĩnh mạch → tim.", "Tim → tĩnh mạch → động mạch → mao mạch → tim.", "Tim → mao mạch → động mạch → tĩnh mạch → tim.", "Tim → động mạch → tĩnh mạch → mao mạch → tim."],
    ["cao hoặc trung bình, tốc độ máu chảy nhanh → phân phối máu đến các cơ quan nhanh.", "cao hoặc trung bình, tốc độ máu chảy chậm → phân phối máu đến các cơ quan nhanh.", "thấp, tốc độ máu chảy chậm → phân phối máu đến các cơ quan chậm.", "thấp, tốc độ máu chảy nhanh → phân phối máu đến các cơ quan nhanh."],
    ["cao hoặc trung bình, tốc độ máu chảy nhanh → phân phối máu đến các cơ quan nhanh.", "cao hoặc trung bình, tốc độ máu chảy chậm → phân phối máu đến các cơ quan nhanh.", "thấp, tốc độ máu chảy chậm → phân phối máu đến các cơ quan chậm.", "thấp, tốc độ máu chảy nhanh → phân phối máu đến các cơ quan nhanh."],
    ["Máu lưu thông liên tục trong mạch kín dưới áp lực cao hoặc trung bình, máu chảy nhanh.", "Là hệ tuần hoàn kép gồm 2 vòng tuần hoàn (vòng nhỏ vòng cơ thể).", "Máu đi theo 1 chiều liên tục và trao đổi chất với tế bào qua thành mao mạch.", "Là hệ tuần hoàn đơn theo một chiều liên tục từ tim qua động mạch tới mao mạch qua tĩnh mạch về tim."],
    ["mao mạch.", "tĩnh mạch.", "động mạch.", "xoang cơ thể."],
    ["thành mao mạch.", "thành tĩnh mạch.", "thành động mạch.", "khoang cơ thể."],
    ["khả năng tự co của tim.", "khả năng tự dãn của tim.", "khả năng tự co dãn của tim.", "tốc độ máu chảy trong 1 giây."],
    ["tim.", "hệ dẫn truyền tim.", "mạch máu.", "huyết áp."],
    ["Nút xoang nhĩ → nút nhĩ thất → bó His → mạng Purkinje.", "Nút xoang nhĩ → bó His → nút nhĩ thất → mạng Purkinje.", "Nút xoang nhĩ → nút nhĩ thất → mạng Purkinje → bó His.", "Nút xoang nhĩ → mạng Purkinje → nút nhĩ thất → bó His."],
    ["Pha co tâm nhĩ  → pha dãn chung  → pha co tâm thất.", "Pha co tâm nhĩ  → pha co tâm thất  → pha dãn chung.", "Pha co tâm thất  → pha co tâm nhĩ  → pha dãn chung.", "Pha dãn chung  → pha co tâm thất  → pha co tâm nhĩ."],
    ["huyết áp.", "chu kì tim.", "vận tốc máu.", "tính tự động của tim."],
    ["0,6 s.", "0,7 s.", "0,8 s.", "0,4 s."],
    ["tâm nhĩ co 0,3 s, tâm thất co 0,1 s, dãn chung 0,4 s.", "tâm nhĩ co 0,3 s, tâm thất co 0,3 s, dãn chung 0,2 s.", "tâm nhĩ co 0,1 s, tâm thất co 0,3 s, dãn chung 0,4 s.", "tâm nhĩ co 0,1 s, tâm thất co 0,5 s, dãn chung 0,2 s."],
    ["áp lực dòng máu khi tâm nhĩ co.", "áp lực dòng máu khi tâm thất dãn.", "áp lực của máu tác dụng lên thành mạch.", "do sự ma sát giữa máu và thành mạch."],
    ["Kì tim dãn.", "Kì co tâm nhĩ.", "Kì co tâm thất.", "Giữa hai kì co tâm nhĩ và co tâm thất."],
    ["Kì tim dãn.", "Kì tim co.", "Kì dãn tâm thất.", "Giữa hai kì dãn tâm nhĩ và dãn tâm thất."],
    ["80 - 90 mmHg và 130 - 150 mmHg.", "130 - 150 mmHg và 80 - 90 mmHg.", "70 - 80 mmHg và 110 - 120 mmHg.", "110 - 120 mmHg và 70 - 80 mmHg."],
    ["Huyết áp tâm thu được đo lúc tim đang dãn.", "Hệ tuần hoàn của động vật gồm 2 thành phần là tim và hệ mạch.", "Huyết áp tâm trương được đo ứng với lúc tim co.", "Huyết áp là áp lực của máu tác động lên thành mạch."],
    ["cá xương, chim, thú.", "Lưỡng cư, thú.", "bò sát (Trừ cá sấu), chim, thú.", "lưỡng cư, bò sát, chim."],
    ["động mạch chủ → tiểu động mạch → mao mạch → tiểu tĩnh mạch → tĩnh mạch chủ.", "tĩnh mạch chủ → tiểu tĩnh mạch → mao mạch → tiểu động mạch → động  mạch chủ.", "động mạch chủ → tiểu tĩnh mạch → mao mạch → tiểu động mạch → tĩnh mạch chủ.", "mao mạch → tiểu động mạch → động mạch chủ → tĩnh mạch chủ → tiểu tĩnh mạch."],
    ["động mạch chủ → mao mạch → tĩnh mạch chủ.", "tĩnh mạch chủ → mao mạch → động mạch chủ.", "động mạch chủ → tĩnh mạch chủ → mao mạch.", "mao mạch → tĩnh mạch chủ → động mạch chủ."],
    ["Huyết áp cao nhất ở động mạch, giảm ở tĩnh mạch và thấp nhất ở mao mạch.", "Huyết áp cao nhất ở động mạch, giảm ở mao mạch và thấp nhất ở tĩnh mạch.", "Huyết áp cao nhất ở động mạch, tĩnh mạch và thấp nhất ở mao mạch.", "Huyết áp cao nhất ở động mạch chủ và giữ ổn định ở tĩnh mạch, mao mạch."],
    ["1, 2, 3, 4, 5.", "1, 2, 3, 4, 6.", "2, 3, 4, 5, 6.", "1, 2, 3, 5, 6."],
    ["2", "3", "4", "5"],
    ["2", "3", "4", "5"],
    ["2", "3", "1", "4"],
    ["2", "3", "1", "4"],
    ["2", "3", "1", "4"],
    ["Có nhịp tim nhanh nên bị cao huyết áp.", "Vì khả năng hấp thụ chất dinh dưỡng kém dễ gây thiếu máu nên thường bị cao huyết áp.", "Tạo ra sức cản của thành mạch đối với tốc độ dòng chảy của máu cao.", "Có lực co bóp của tim mạnh nên bị cao huyết áp."],
    ["1", "2", "3", "4"],
    // bài 12
    ["sự sai lệnh hoặc tổn thương về cấu tạo và chức năng của bất kì bộ phận, cơ quan, hệ thống nào của cơ thể.", "sự mất đi tế bào của cơ thể.", "một nhân tố khiến cơ thể trở nên yếu dần về già.", "tác nhân làm cho cơ thể mất đi sự cân bằng vốn có ngay từ đầu."],
    ["các tác nhân vật lí và hóa học.", "các tác nhân sinh học.", "yếu tố di truyền.", "tất cả các nguyên nhân trên."],
    ["cơ thể phản ứng một cách kịch liệt với môi trường xung quanh.", "khả năng cơ thể chống lại các tác nhân gây bệnh, đảm bảo cho cơ thể khoẻ mạnh, không mắc bệnh.", "khả năng tự miễn nhiễm với mọi bệnh tật của cơ thể", "khả năng của cơ thể cần được bổ sung các chất để chống lại tác nhân gây hại"],
    ["Phản ứng đồng điệu của cơ thể đối với kháng nguyên thể định (Cơ thể quá mẫn cảm với kháng thể).", "Phản ứng đồng điệu của cơ thể đối với kháng nguyên nhất định (Cơ thể quá mẫn cảm với kháng nguyên).", "Phản ứng quá mức của cơ thể đối với kháng thể nhất định (Cơ thể quá mẫn cảm với kháng thể).", "Phản ứng quá mức của cơ thể đối với kháng nguyên nhất định (Cơ thể quá mẫn cảm với kháng nguyên)."],
    ["miễn dịch đặc hiệu.", "miễn dịch thể dịch.", "miễn dịch tế bào.", "miễn dịch không đặc hiệu."],
    ["miễn dịch đặc hiệu.", "miễn dịch thể dịch.", "miễn dịch tế bào.", "miễn dịch không đặc hiệu."],
    ["lớp dịch nhầy, lông nhỏ trong khí quản và phế quản, pH thấp ở dạ dày.", "lysosyme trong nước bọt, acid và enzyme pepsin trong dạ dày.", "dòng nước tiểu cuốn trôi mầm bệnh.", "vi khuẩn vô hại cạnh tranh với vi khuẩn có hại."],
    ["lớp dịch nhầy, lông nhỏ trong khí quản và phế quản.", "lysosyme trong nước bọt, acid và enzyme pepsin trong dạ dày.", "nồng độ muối cao trong mồ hôi ức chế nấm, virus và vi khuẩn phát triển.", "vi khuẩn vô hại cạnh tranh với vi khuẩn có hại."],
    ["lớp dịch nhầy, lông nhỏ trong khí quản và phế quản, pH thấp ở dạ dày.", "lysosyme trong nước bọt, acid và enzyme pepsin trong dạ dày.", "vi khuẩn vô hại cạnh tranh với vi khuẩn có hại.", "pH thấp trong âm đạo và nước tiểu ức chế nấm, virus và vi khuẩn phát triển."],
    ["thực bào, đại thực bào, sốt, các peptit và protein chống lại mầm bệnh.", "thực bào, bạch cầu trung tính, sốt, các peptit và protein chống lại mầm bệnh.", "thực bào, viêm, sốt, nhiễm trùng, các peptit và protein chống lại mầm bệnh.", "thực bào, viêm, sốt, các peptit và protein chống lại mầm bệnh."],
    ["độc tố.", "chất cảm ứng.", "kháng thể.", "hormone."],
    ["chất kích thích.", "chất cảm ứng.", "kháng thể.", "kháng nguyên."],
    ["một nhóm tế bào trở nên bất thường và phân chia liên tục, không kiểm soát được dẫn đến tạo thành khối u, gọi là u ác tính.", "một nhóm tế bào trở nên bất thường và phân chia liên tục, không kiểm soát được dẫn đến tạo thành khối u, gọi là u lành tính.", "một tế bào trở nên bất thường và phân chia liên tục, không kiểm soát được dẫn đến tạo thành khối u, gọi là u ác tính.", "một hệ cơ quan trở nên bất thường và phân chia liên tục, không kiểm soát được dẫn đến tạo thành khối u, gọi là u ác tính."],
    ["miễn dịch không đặc hiệu bị phá vỡ.", "hệ miễn dịch bị phá vỡ.", "tế bào T bị ức chế.", "tế bào B bị phân chia liên tục."],
    ["tách ra khỏi khối u theo hệ thần kinh đến các vị trí khác trong cơ thể và hình thành khối u lành tính mới.", "tách ra khỏi khối u theo đường máu hoặc bạch huyết đến các vị trí khác trong cơ thể và hình thành khối u ác tính mới.", "tách ra khỏi khối u và tiêu diệt các mầm bệnh khác của cơ thể.", "di chuyển đến vị trí khác của cơ thể và làm tăng khả năng miễn dịch của cơ quan tại vị trí mà chúng di chuyển tới."],
    ["cơ thể những người này suy giảm khả năng sản xuất kháng nguyên chống lại vi khuẩn lao.", "các tế bào thực bào ở những người này giảm khả năng bắt giữ vi khuẩn lao.", "tế bào bạch cầu bị tiêu diệt, làm suy yếu dần khả năng đáp ứng miễn dịch không đặc hiệu, làm khả năng chống mầm bệnh suy giảm.", "tế bào T hỗ trợ bị tiêu diệt, làm suy yếu dần khả năng đáp ứng miễn dịch dịch thể và đáp ứng miễn dịch tế bào, làm khả năng chống mầm bệnh suy giảm."],
    // bài 13
    ["tiêu hóa", "tuần hoàn", "bài tiết", "hô hấp tế bào"],
    ["Ruột", "Da", "Phổi", "Thận"],
    ["Ruột", "Da", "Phổi", "Thận"],
    ["Da", "Hệ tuần hoàn", "Thận", "Phổi"],
    ["oxygen", "urea", "bilirubin", "carbon dioxide"],
    ["trong cơ thể được tạo bởi huyết tương, bạch huyết và dịch mô.", "ngoài cơ thể được tạo ra bởi máu, bạch huyết và dịch mô.", "trong cơ thể được tạo ra mao mạch, bạch huyết và dịch mô.", "ngoài cơ thể được tạo bởi huyết tương, bạch cầu và hồng cầu."],
    ["tế bào", "mô", "cơ thể", "cơ quan"],
    ["tĩnh, các chỉ số của môi trường trong cơ thể có xu hướng thay đổi và dao động xung quanh một giá trị nhất định.", "động, các chỉ số của môi trường trong cơ thể có xu hướng thay đổi và dao động xung quanh một giá trị nhất định.", "tĩnh, các chỉ số của môi trường trong cơ thể có xu hướng thay đổi và dao động xung quanh nhiều giá trị.", "động, các chỉ số của môi trường trong cơ thể có xu hướng thay đổi và dao động xung quanh nhiều giá trị."],
    ["Thận", "Phổi", "Gan", "Mắt"],
    ["Hệ thần kinh và tuyến nội tiết", "Các cơ quan như thận, gan, mạch máu", "Thụ thể hoặc cơ quan thụ cảm", "Cơ và tuyến"],
    ["Điều hòa hấp thụ nước ở thận", "Duy trì nồng độ glucose bình thường trong máu", "Điều hòa hấp thụ Na+ ở thận", "Điều hòa pH máu"],
    ["thụ thể hoặc cơ quan thụ cảm", "trung ương thần kinh", "tuyến nội tiết", "các cơ quan thận, gan, phổi, tim, mạch máu"],
    ["cầu thận và ống thận", "phần vỏ và phần tủy", "quản cầu và nang Bowman", "cầu thận và bể thận"],
    ["bộ phận tiếp nhận kích thích và bộ phận đáp ứng kích thích", "bộ phận tiếp nhận kích thích và bộ phận thực hiện", "bộ phận tiếp nhận kích thích, bộ phận điều khiển và bộ phận thực hiện", "bộ phận điều khiển, bộ phận thực hiện và hệ thần kinh"],
    ["điều hòa nồng độ của nhiều chất hòa tan như protein, glucose,… trong huyết tương.", "điều hòa cân bằng muối và nước, qua đó duy trì áp suất thẩm thấu của dịch cơ thể.", "duy trì pH máu qua điều chỉnh tiết H+ vào dịch lọc và tái hấp thụ HCO3- từ dịch lọc trả về máu.", "duy trì pH máu qua điều chỉnh lượng O2 và CO2 trong máu."],
    ["1", "2", "3", "4"],
    ["điều hòa nồng độ của nhiều chất hòa tan như protein, glucose,… trong huyết tương.", "điều hòa cân bằng muối và nước, qua đó duy trì áp suất thẩm thấu của dịch cơ thể.", "duy trì pH máu qua điều chỉnh tiết H+ vào dịch lọc và tái hấp thụ HCO3- từ dịch lọc trả về máu.", "duy trì pH máu qua điều chỉnh lượng O2 và CO2 trong máu."],
    ["1", "2", "3", "4"],
    ["2", "3", "4", "1"],
    ["Bộ phận tiếp nhận kích thích → bộ phận điều khiển → bộ phận thực hiện → bộ phận tiếp nhận kích thích.", "Bộ phận điều khiển → bộ phận tiếp nhận kích thích → bộ phận thực hiện → bộ phận tiếp nhận kích thích.", "Bộ phận tiếp nhận kích thích → bộ phận thực hiện → bộ phận điều khiển → bộ phận tiếp nhận kích thích.", "Bộ phận thực hiện → bộ phận tiếp nhận kích thích → bộ phận điều khiển → bộ phận tiếp nhận kích thích."],
];

// Chỉ số của đáp án đúng ban đầu cho mỗi câu hỏi
const correctAnswers = [
    // bài 8
    3, 2, 3, 0, 0, 
    2, 0, 2, 0, 0, 
    0, 0, 1, 2, 2, 
    3, 0, 2, 3, 2, 
    // bài 9
    0, 2, 0, 0, 1, 
    0, 2, 2, 1, 3, 
    1, 3, 2, 2, 1, 
    2, 2, 1, 3, 0, 
    // bài 10
    0, 0, 0, 2, 0,
    0, 1, 3, 0, 0,
    2, 0, 3, 0, 2,
    1, 0, 1, 1, 2,
    2, 2, 0, 1, 3,
    3, 0, 0, 3, 1,
    1, 1, 0, 1, 1,
    3, 2, 2, 
    // bài 12
    0, 3, 1, 3, 3,
    0, 1, 0, 3, 3,
    2, 3, 0, 1, 1,
    3, 
    // bài 13
    2, 3, 2, 0, 3,
    0, 2, 1, 3, 1,
    1, 3, 0, 2, 0,
    1, 3, 2, 2, 0,
];

function shuffleOptions() {
    // Xáo trộn câu hỏi
    const indices = Array.from({ length: questions.length }, (_, idx) => idx);

    for (let j = indices.length - 1; j > 0; j--) {
        const k = Math.floor(Math.random() * (j + 1));
        [indices[j], indices[k]] = [indices[k], indices[j]];
    }

    // Áp dụng thứ tự xáo trộn cho câu hỏi, đáp án và đáp án đúng
    const shuffledQuestions = indices.map(index => questions[index]);
    const shuffledAnswers = indices.map(index => answers[index]);
    const shuffledCorrectAnswers = indices.map(index => correctAnswers[index]);

    questions.splice(0, questions.length, ...shuffledQuestions);
    answers.splice(0, answers.length, ...shuffledAnswers);
    correctAnswers.splice(0, correctAnswers.length, ...shuffledCorrectAnswers);

    // Xáo trộn các đáp án trong mỗi câu hỏi
    for (let i = 0; i < answers.length; i++) {
        const answerSet = answers[i];
        const correctIndex = correctAnswers[i];

        // Tạo mảng chỉ số cho các đáp án
        const answerIndices = Array.from({ length: answerSet.length }, (_, idx) => idx);

        // Xáo trộn các chỉ số
        for (let j = answerIndices.length - 1; j > 0; j--) {
            const k = Math.floor(Math.random() * (j + 1));
            [answerIndices[j], answerIndices[k]] = [answerIndices[k], answerIndices[j]];
        }

        // Áp dụng thứ tự xáo trộn cho các đáp án và cập nhật chỉ số đáp án đúng
        const shuffledAnswers = answerIndices.map(index => answerSet[index]);
        answers[i] = shuffledAnswers;
        correctAnswers[i] = answerIndices.indexOf(correctIndex);
    }
}

shuffleOptions();

// Tạo câu hỏi
const questionTable = document.querySelector(`.question__table`);
questions.forEach((_, index) => {
    const questionItem = document.createElement('div');
    questionItem.classList.add('question__item');
    questionItem.textContent = index + 1;
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

window.onload = () => {
    function updateQuestion(e) {
        radio.forEach((val, idx) => {
            if (val.checked) {
                userAnswer[viTri] = idx;
            }
            val.checked = false;
        });
        viTri = e;
        if (userAnswer[viTri] != null) {
            radio[userAnswer[viTri]].checked = true;
        }
        questionContent.innerHTML = `Câu hỏi ${viTri + 1}: ${questions[viTri]}`
        const sttAnswers = ["A", "B", "C", "D"];
        answerDesc.forEach((val, idx) => {
            val.innerHTML = `${sttAnswers[idx]}. ${answers[viTri][idx]}`;
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

        const hours = Math.floor((elapsedTime / (1000 * 60 * 60)) % 24);
        const minutes = Math.floor((elapsedTime / (1000 * 60)) % 60);
        const seconds = Math.floor((elapsedTime / 1000) % 60);

        const formattedTime = [
            String(hours).padStart(2, '0'),
            String(minutes).padStart(2, '0'),
            String(seconds).padStart(2, '0')
        ].join(':');

        document.querySelector('.time__cnt').innerText = formattedTime;

        return formattedTime;
    }
    const timerInterval = setInterval(updateTimeDisplay, 1000);

    function updateResults() {
        correctAnswers.forEach((correctAnswerIndex, idx) => {
            if (userAnswer[idx] === correctAnswerIndex) {
                score++;
                questionItem[idx].classList.add("green");
            } else {
                questionItem[idx].classList.add("red");
            }
        });
        scoreDesc.textContent = `Số câu đúng: ${score}/${questions.length}`;
    }

    function showAnswer() {
        if (show) {
            answerDesc.forEach(val => {
                val.style.color = "#000";
            });
            answerDesc[correctAnswers[viTri]].style.color = "red";
        }
    }

    questionItem.forEach((val, idx) => {
        val.addEventListener("click", () => {
            updateQuestion(idx);
            showAnswer();
        });
    });

    prevBtn.addEventListener("click", () => {
        if (viTri > 0) {
            updateQuestion(viTri - 1);
            showAnswer();
        }
    });

    nextBtn.addEventListener("click", () => {
        if (viTri < questions.length - 1) {
            updateQuestion(viTri + 1);
            showAnswer();
        }
    });

    document.addEventListener('keydown', function (event) {
        if (event.key === 'ArrowLeft' && viTri > 0) {
            updateQuestion(viTri - 1);
            showAnswer();
        } else if (event.key === 'ArrowRight' && viTri < questions.length - 1) {
            updateQuestion(viTri + 1);
            showAnswer();
        }
    });

    radio.forEach((val) => {
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

    if (window.innerWidth < 767.98) {
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
