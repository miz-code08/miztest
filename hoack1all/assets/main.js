const questions = [
    // bài 4
    "Trong tự nhiên, đơn chất nitrogen có nhiều trong",
    "Trong không khí, chất nào sau đây chiếm phần trăm thể tích lớn nhất?",
    "Ở dạng hợp chất, nitrogen tồn tại nhiều trong các mỏ khoáng dưới dạng",
    "Tính chất nào sau đây không phải tính chất vật lí của N2?",
    "Trong phản ứng: N2(g) + 3H2(g) <=> 2NH3(g). N2 thể hiện",
    "Khi có sấm chớp, khí quyển sinh ra khí",
    "Ứng dụng nào sau đây không phải của N2?",
    "Ở nhiệt độ thường, nitrogen khá trơ về mặt hoạt động hóa học là do",
    "Khí nitrogen ít tan trong nước là do",
    "Tìm các tính chất không thuộc về khí nitrogen? <br> (a) Hóa lỏng ở nhiệt độ rất thấp (-196oC) <br> (b) Cấu tạo phân tử nitrogen là N≡N <br> (c) Tan nhiều trong nước <br> (d) Nặng hơn oxi <br> (e) Kém bền, dễ bị phân hủy thành nitrogen nguyên tử.",
    // bài 5
    "Liên kết hóa học trong phân tử NH3 là liên kết",
    "Cho vài giọt quỳ tím vào dung dịch NH3 thì dung dịch chuyển thành",
    "Nhúng 2 đũa thuỷ tinh vào 2 bình đựng dung dịch HCl đặc và NH3 đặc. Sau đó đưa 2 đũa lại gần nhau thì thấy xuất hiện",
    "Tính chất hóa học của NH3 là",
    "Dung dịch NH3 phản ứng được với dung dịch nào sau đây?",
    "Dung dịch NH3 có thể tác dụng được với các dung dịch",
    "Vai trò của NH3 trong phản ứng 4NH3 + 5O2 → 4NO + 6H2O là",
    "Để tạo độ xốp cho một số loại bánh, có thể dùng muối nào sau đây làm bột nở?",
    "Phương trình hóa học nào sau đây sai?",
    "Cho thí nghiệm như hình vẽ, bên trong bình có chứa khí NH3, trong chậu thủy tinh chứa nước có nhỏ vài giọt phenolphtalein. Hiện tượng xảy ra trong thí nghiệm là:",
    "Cho từ từ dung dịch NH3 đến dư vào dung dịch chứa chất nào sau đây thì thu được kết tủa?",
    "Các chất khí điều chế trong phòng thí nghiệm thường được thu theo ba phương pháp: (1) đẩy không khí (2) đẩy không khí với bình úp ngược (3) đẩy nước. Có thể dùng cách nào trong 3 cách trên để thu khí NH3?",
    "Trong phòng thí nghiệm, người ta có thể điều chế khí NH3 bằng cách",
    // bài 6
    "Nitrogen monoxide là tên gọi của oxide nào sau đây?",
    "Mưa acid là hiện tượng nước mưa có pH như thế nào?",
    "Tác nhân chính gây ra hiện tượng mưa acid là",
    "Nhóm các kim loại đều không phản ứng được với HNO3?",
    "Kim loại không tan trong dung dịch HNO3 đặc, nguội là",
    "Kim loại Fe bị thụ động bởi dung dịch",
    "Kim loại M phản ứng được với dung dịch HCl, dung dịch Cu(NO3)2, dung dịch HNO3 đặc nguội. Kim loại M là",
    "Hợp chất nào của nitrogen không được tạo ra khi cho HNO3 tác dụng với kim loại?",
    "Cho Fe tác dụng với dung dịch HNO3 đặc, nóng thu được khí X có màu nâu đỏ. Khí X là?",
    "Cho Cu phản ứng với dung dịch HNO3 loãng, nóng thu được một chất khí không màu hóa nâu trong không khí, khí đó là",
    "Cho iron (III) oxide tác dụng với nitric acid thì sản phẩm thu được là",
    "Phú dưỡng là hiện tượng dư thừa quá nhiều các nguyên tố dinh dưỡng nào trong các nguồn nước?",
    "HNO3 tinh khiết là chất lỏng không màu, nhưng dung dịch HNO3 để lâu thường chuyển sang màu vàng là do",
    "Một nhóm học sinh thực hiện thí nghiệm cho kim loại Cu tác dụng với dung dịch HNO3 đặc. Hiện tượng quan sát nào sau đây là đúng?",
    // bài 7    
    "Sulfur có kí hiệu hóa học là S, số hiệu nguyên tử là 16, độ âm điện là 2,58. Trong bảng tuần hoàn, sulfur ở đâu?",
    "Trong tự nhiên, đơn chất sulfur được phân bố ở vùng lân cận núi lửa và suối nước nóng. Khi núi lửa hoạt động, sulfur được giải phóng ra khỏi lõi Trái Đất chủ yếu ở dạng nào?",
    "Phần lớn sulfur tồn tại ở dạng hợp chất trong thành phần của các khoáng vật, như quặng pyrite, thạch cao, barite,… Thành phần chính của quặng pyrite là gì?",
    "Sulfur được dân gian sử dụng để pha chế vào thuốc trị các bệnh ngoài da. Tên gọi dân gian của sulfur là gì?",
    "Thạch cao sống là một dạng tồn tại phổ biến của sulfur trong tự nhiên, được sử dụng làm nguyên liệu để sản xuất xi măng, phần viết bảng,... Công thức của thạch cao sống là gì?",
    "Tính chất nào sau đây không phải tính chất vật lí của sulfur?",
    "Số oxi hóa có thể có của sulfur (S) trong hợp chất là gì?",
    "Phát biểu nào sau đây không đúng khi nói về sulfur?",
    "Đơn chất vừa có tính oxi hóa vừa có tính khử là gì?",
    "Hơi mercury (Hg) rất độc, bởi vậy khi làm vỡ nhiệt kế mercury thì chất bột được dùng để rắc lên mercury rồi gom lại là gì?",
    "Kim loại nào sau đây tác dụng với sulfur ở nhiệt độ thường?",
    "Cho dãy các chất sau: Fe, Hg, O2, Ag, H2, F2, Au. Số chất tác dụng được với sulfur ở nhiệt độ thích hợp là bao nhiêu?",
    "Phát biểu nào sau đây không đúng về sulfur?",
    "Trong công nghiệp, phần lớn sulfur đơn chất sau khi khai thác ở các mỏ được dùng làm nguyên liệu để làm gì?",
    "Ứng dụng nào sau đây không phải của sulfur?",
    "Quá trình đốt than sinh ra nhiều loại khí thải, trong đó có khí SO2. Tên gọi của SO2 là gì?",
    "Trong số các chất khí: SO2, CO2, O2, N2. Khí tan tốt trong nước ở điều kiện thường là gì?",
    "Sulfur trong chất nào sau đây vừa có tính oxi hóa, vừa có tính khử?",
    "Phát biểu nào diễn tả đúng tính chất hóa học của SO2?",
    "Để chứng minh SO2 là một oxide acid, người ta cho SO2 phản ứng với chất nào sau đây?",
    "Chất khí (X) tan trong nước tạo ra dung dịch làm quỳ tím hoá đỏ và khí (X) có thể được dùng làm chất tẩy màu. Khí (X) là gì?",
    "SO2 luôn thể hiện tính khử trong các phản ứng với những chất nào?",
    "Khí nào sau đây có khả năng làm mất màu nước bromine?",
    "Ở điều kiện thích hợp, sulfur dioxide đóng vai trò là chất oxi hoá khi tham gia phản ứng với chất nào?",
    // bài 8
    "Sulfuric acid đựng trong chai thuỷ tinh được bán trên thị trường thường có nồng độ là",
    "Quá trình pha loãng dung dịch đậm đặc của acid nào sau đây toả rất nhiều nhiệt nên không được tự ý pha loãng?",
    "Cách pha loãng dung dịch H2SO4 đặc nào sau đây đúng?",
    "Dung địch acid nào sau đây có khả năng gây bỏng nếu rơi vào da?",
    "Bước sơ cứu đầu tiên cần làm ngay khi một người bị bỏng sulfuric acid là",
    "Ở thể lỏng, chất nào sau đây có dạng sánh như đầu đo tồn tại liên kết hydrogen rất mạnh giữa các phân tử?",
    "Dung dịch H2SO4 loãng phản ứng được với tất cả các chất trong dãy nào sau đây?",
    "Tiến hành các thí nghiệm cho dung dịch H2SO4 loãng lần lượt tác dụng với: Mg, NaHCO3, BaCl2, CaCO3. Số thí nghiệm xảy ra phản ứng oxi hoá – khử là",
    "Kim loại nào sau đây không tác dụng với dung dịch H2SO4 loãng?",
    "Sản phẩm thu được khi cho dung dịch H2SO4 loãng tác dụng với Fe là",
    "Dung dịch H2SO4 loãng có thể tác dụng với cả 2 chất nào sau đây?",
    "Dung dịch sulfuric acid đặc khác dung dịch sulfuric acid loãng ở tính chất hóa học nào?",
    "Điều nào sau đây đúng về tính chất hóa học của dung dịch H2SO4 đặc?",
    "Tính chất nào sau đây không phải tính chất của dung dịch sulfuric acid đặc?",
    "Dãy kim loại nào trong các dãy sau đây gồm các kim loại không tác dụng với dung dịch H2SO4 đặc, nguội?",
    "Người ta thường dùng các bình bằng thép để đựng và chuyên chở dung dịch H2SO4 đặc vì",
    "Khi làm thí nghiệm với H2SO4 đặc, nóng thường sinh ra khí SO2. Để hạn chế tốt nhất khí SO2 thoát ra gây ô nhiễm môi trường, người ta nút ống nghiệm bằng bông tẩm dung dịch nào sau đây?",
    "Trường hợp nào tác dụng với H2SO4 đặc nóng và H2SO4 loãng đều cho sản phẩm giống nhau?",
    "Cho dung dịch sulfuric acid đặc tác dụng với từng chất rắn sau: NaCl, NaBr, NaI, NaHCO3 ở nhiệt độ thường. Số phản ứng trong đó sulfuric acid đóng vai trò chất oxi hoá là",
    "Cho chất rắn nào sau đây vào dung dịch H2SO4 đặc thì xảy ra phản ứng oxi hoá – khử?",
    "Trong số những tính chất sau, tính chất nào không phải là tính chất của acid H2SO4 đặc, nguội?",
    "Kim loại nào sau đây khi tác dụng với lượng dư dung dịch H2SO4 loãng và dung dịch H2SO4 đặc, đun nóng thu được một loại muối?",
    "Phản ứng nào sau đây là sai?",
    "Cho phương trình hóa học: H2SO4 (đặc) + 8HI —> 4I2 + H2S + 4H2O. Câu nào sau đây diễn tả không đúng tính chất các chất?",
    "Chất dùng để làm khô khí Cl2 ẩm là",
    "Nhỏ 1 giọt dung dịch acid đặc nào sau đây lên tờ giấy trắng thì tờ giấy bị hoá đen ở chỗ tiếp xúc với acid?",
    // bài 10
    "Hợp chất hữu cơ là các hợp chất của..(1).. (trừ các oxide của carbon, muối carbonate, cyanide, carbide,...). Từ thích hợp điền vào (1) trong định nghĩa trên là",
    "Trong thành phần phân tử hợp chất hữu cơ phải luôn có nguyên tố",
    "Chất nào dưới đây không là chất hữu cơ?",
    "Phân tử chất nào sau đây không chỉ chứa liên kết cộng hóa trị?",
    "Trong các chất sau đây, chất nào dễ cháy nhất?",
    "Phản ứng hoá học của các hợp chất hữu cơ thường xảy ra",
    "Liên kết hóa học trong hợp chất hữu cơ thường là",
    "Hóa học hữu cơ là ngành hoá học chuyên nghiên cứu về các...... Cụm từ thích hợp điền vào chỗ trống trong định nghĩa trên là",
    "Nhân xét nào dưới đây về đặc điểm chung của các chất hữu cơ không đúng?",
    "Nhóm chức là…… gây ra những phản ứng đặc trưng của phân tử hợp chất hữu cơ. Cụm từ thích hợp điền vào chỗ trống trong phát biểu trên là",
    "Phổ hồng ngoại là phương pháp vật lí rất quan trọng và phổ biến để nghiên cứu về",
    "Nhận định nào sau đây không đúng?",
    // bài 11
    "Nấu rượu uống thuộc loại phản ứng tách biệt và tinh chế nào?",
    "Phương pháp chưng cất lôi cuốn hơi nước được dùng để tách các chất có nhiệt độ sôi cao và không tan trong nước. Không thực hiện được phương pháp chưng cất lôi cuốn hơi nước cho quá trình nào sau đây?",
    "Phương pháp chưng cất dùng để tách các chất",
    "Nhiệt độ sôi của rượu (thành phần chính là ethanol) là 78 °C và của nước là 100 °C. Phương pháp nào có thể tách rượu ra khỏi nước?",
    "Tính chất vật lí nào sau đây được quan tâm khi tách hai chất lỏng tan vào nhau bằng phương pháp chưng cất?",
    "Chất lỏng cần tách được chuyển sang pha hơi, rồi làm lạnh cho hơi ngưng tụ, thu lấy chất lỏng ở khoảng nhiệt độ thích hợp đây là cách tiến hành của phương pháp?",
    "Hỗn hợp X gồm các alkane: pentane (ts = 36,1 °C), heptane (ts = 98,4 °C), octane (ts = 125,7 °C) và nonane (ts = 150,8 °C). Có thể tách riêng các chất đó một cách thuận lợi bằng phương pháp nào sau đây?",
    "Để tách benzene (nhiệt độ sôi là 80 °C) và acetic acid (nhiệt độ sôi là 118°C) ra khỏi nhau, có thể dùng phương pháp",
    "Chiết là phương pháp dùng một dung môi thích hợp hoà tan chất cần tách chuyển sang pha lỏng (gọi là dịch chiết) và chất này được tách ra khỏi hỗn hợp các chất còn lại. Tách lấy dịch chiết, giải phóng dung môi sẽ thu được",
    "Thêm benzene vào ống nghiệm đựng dung dịch nước bromine. Sau một thời gian quan sát thấy màu đỏ nâu của bromine",
    "Dung môi thích hợp được lựa chọn trong phương pháp kết tinh thường là dung môi trong đó độ tan của chất cần tinh chế",
    "Xét ba yêu cầu: (a) không hoà tan tạp chất; (b) không có tương tác hoá học với chất kết tinh; (c) dễ bay hơi, dễ kiếm, rẻ tiền. Trong ba yêu cầu này, có bao nhiêu yêu cầu là cần thiết đối với dung môi được lựa chọn trong phương pháp kết tinh?",
    // bài 12
    "Công thức đơn giản nhất là công thức biểu thị",
    "Phát biểu nào sau đây là không đúng?",
    "Cho chất acetylene (C2H2) và benzene (C6H6), hãy chọn nhận xét đúng trong các nhận xét sau:",
    "Công thức phân tử cho biết thông tin nào sau đây về phân tử hợp chất hữu cơ?",
    "Công thức nào sau đây là công thức phân tử của acetic acid?",
    "Trong phương pháp phổ khối lượng, đối với các hợp chất đơn giản, thường mảnh có giá trị lớn nhất ứng với mảnh ion phân tử [M+] và giá trị này bằng giá trị…của chất nghiên cứu. Cụm từ thích hợp điền vào chỗ trống là",
    "Tỉ khối hơi cuả chất X so với hydrogen bằng 44. Phân tử khối của X là?",
    "Trên phổ khối lượng, dữ liệu nào cho biết phân tử khối một chất",
    "Trên phổ MS, trục hoành biểu diễn",
    "Một hydrocarbon X ở thể khí có tỉ khối hơi so với hydrogen là 15. Công thức phân tử của hợp chất X là",
    // bài 13
    "Một trong những luận điểm của thuyết cấu tạo hoá học do Butlerov đề xuất năm 1862 có nội dung là:",
    "Nguyên tử carbon có thể liên kết trực tiếp với nhau tạo thành các dạng mạch carbon là",
    "Công thức cấu tạo của hợp chất hữu cơ biểu diễn",
    "Đồng phân là những chất khác nhau có cùng",
];

const answers = [
    // bài 4
    ["nước biển", "không khí", "cơ thể người", "mỏ khoáng"],
    ["O2", "NO", "CO2", "N2"],
    ["NaNO3", "KNO3", "HNO3", "Ba(NO3)2"],
    ["Chất khí", "Không màu", "Nặng hơn không khí", "Tan ít trong nước"],
    ["tính khử", "tính oxi hóa", "tính base", "tính acid"],
    ["CO", "NO", "SO2", "CO2"],
    ["Tổng hợp NH3", "Bảo quản máu", "Diệt khuẩn, khử trùng", "Bảo quản thực phẩm"],
    ["nitrogen có bán kính nguyên tử nhỏ", "nitrogen có độ âm điện lớn", "phân tử nitrogen có liên kết ba bền vững", "phân tử nitrogen không phân cực"],
    ["nitrogen có bán kính nguyên tử nhỏ", "nitrogen có độ âm điện lớn", "phân tử nitrogen có liên kết ba bền vững", "phân tử nitrogen không phân cực"],
    ["(a), (c), (d)", "(a), (b)", "(c), (d), (e)", "(b), (c), (e)"],
    // bài 5
    ["cộng hoá trị có cực", "ion", "cộng hoá trị không cực", "kim loại"],
    ["màu hồng", "màu vàng", "màu đỏ", "màu xanh"],
    ["khói màu trắng", "khói màu tím", "khói màu nâu", "khói màu vàng"],
    ["tính base, tính khử", "tính base, tính oxi hóa", "tính acid, tính base", "tính acid, tính khử"],
    ["NaOH", "KCl", "HCl", "KOH"],
    ["HCl, CaCl2", "KNO3, H2SO4", "Fe(NO3)3, AlCl3", "Ba(NO3)2, HNO3"],
    ["chất khử", "acid", "chất oxi hóa", "base"],
    ["(NH4)2SO4", "NH4HCO3", "CaCO3", "NH4NO2"],
    ["NH4NO3 → NH3 + HNO3", "NH4CL → NH3 + HCl", "(NH4)2CO3 → 2NH3 + CO2 + H2O", "NH4HCO3 → NH3 + CO2 + H2O"],
    ["Nước phun vào bình và chuyển thành màu hồng", "Nước phun vào bình và chuyển thành màu tím", "Nước phun vào bình và không có màu", "Nước phun vào bình và chuyển thành màu xanh"],
    ["AlCl3", "H2SO4", "HCl", "NaCl"],
    ["Cách 3", "Cách 1", "Cách 2", "Cách 2 hoặc cách 3"],
    ["cho N2 tác dụng với H2 (450oC, bột sắt (iron))", "cho muối ammonium loãng tác dụng với kiềm loãng và đun nóng", "cho muối ammonium đặc tác dụng với kiềm đặc và đun nóng", "nhiệt phân muối (NH4)2CO3"],
    // bài 6
    ["NO", "NO2", "N2O", "N2O4"],
    ["> 5,6", "< 7", "> 7", "< 5,6"],
    ["CO, SO2", "NOx, SO2", "NH3, NO2", "CO, NH3"],
    ["Al, Fe", "Au, Pt", "Al, Au", "Fe, Pt"],
    ["Mg", "Al", "Zn", "Cu"],
    ["H2SO4 loãng", "HCl đặc, nguội", "HNO3 đặc, nguội", "HCl loãng"],
    ["Ag", "Zn", "Fe", "Al"],
    ["NO", "NH4NO3", "NO2", "N2O5"],
    ["N2", "N2O", "NO", "NO2"],
    ["NO", "N2O", "N2", "NH3"],
    ["Fe(NO3)3, NO và H2O", "Fe(NO3)3, NO2 và H2O", "Fe(NO3)3, N2 và H2O", "Fe(NO3)3 và H2O"],
    ["N, C", "N, K", "N, P", "P, K"],
    ["HNO3 tan nhiều trong nước", "khi để lâu thì HNO3 bị khử bởi các chất của môi trường", "dung dịch HNO3 có tính oxi hóa mạnh", "dung dịch HNO3 có hoà tan một lượng nhỏ NO2"],
    ["Khí không màu thoát ra, dung dịch chuyển sang màu xanh", "Khí màu nâu đỏ thoát ra, dung dịch không màu", "Khí màu nâu đỏ thoát ra, dung dịch chuyển sang màu xanh", "Khí không màu thoát ra, dung dịch không màu"],
    // bài 7
    ["ô số 8, chu kì 3, nhóm VIA", "ô số 16, chu kì 3, nhóm VIA", "ô số 32, chu kì 3, nhóm VIA", "ô số 16, chu kì 3, nhóm IIA"],
    ["SO2", "S", "H2S", "SO2 và H2S"],
    ["FeS", "FeS2", "CaSO4", "BaSO4"],
    ["diêm sinh", "đá vôi", "phèn chua", "giấm ăn"],
    ["BaSO4", "CaSO4.2H2O", "MgSO4", "CuSO4.5H2O"],
    ["Màu vàng ở điều kiện thường", "Thể rắn ở điều kiện thường", "Không tan trong benzen", "Không tan trong nước"],
    ["0, 2, 4, 6", "-2, 0, +4, +6", "1, 3, 5, 7", "-2, +4, +6"],
    ["Sulfur phản ứng trực tiếp với hydrogen ở điều kiện thường", "Ở trạng thái rắn, mỗi phân tử sulfur có 8 nguyên tử", "Sulfur tác dụng được hầu hết với các phi kim", "Trong các phản ứng với hydrogen và kim loại, sulfur là chất oxi hoá"],
    ["F2", "O3", "S", "O2"],
    ["vôi sống", "cát", "muối ăn", "sulfur"],
    ["Al", "Fe", "Hg", "Cu"],
    ["2", "3", "4", "5"],
    ["Sulfur là một nguyên tố phi kim, chỉ có tính oxi hoá", "Khi tham gia phản ứng, sulfur thể hiện tính oxi hoá hoặc tính khử", "Ở điều kiện thường, sulfur là chất rắn, màu vàng, không tan trong nước", "Ở điều kiện thường, sulfur tồn tại dạng phân tử tám nguyên tử (S8)"],
    ["lưu hoá cao su tự nhiên", "sản xuất sulfuric acid", "điều chế thuốc bảo vệ thực vật", "bào chế thuốc đông y"],
    ["Làm nguyên liệu sản xuất sulfuric acid", "Làm chất lưu hóa cao su", "Khử chua đất", "Điều chế thuốc súng đen"],
    ["sulfur trioxide", "sulfuric acid", "sulfur dioxide", "hydrogen sulfide"],
    ["O2", "CO2", "SO2", "N2"],
    ["Na2SO4", "H2SO4", "SO2", "H2S"],
    ["SO2 chỉ có tính khử", "SO2 chỉ có tính oxi hoá", "SO2 vừa có tính khử, vừa có tính oxi hoá", "SO2 không có tính khử và không có tính oxi hoá"],
    ["Dung dịch bromine", "Dung dịch kiềm", "Dung dịch KMnO4", "Dung dịch hydrosulfuric acid"],
    ["NH3", "CO2", "SO2", "O3"],
    ["H2S, O2, nước Br2", "dung dịch NaOH, O2, dung dịch KMnO4", "dung dịch KOH, CaO, nước Br2", "O2, nước Br2, dung dịch KMnO4"],
    ["N2", "CO2", "H2", "SO2"],
    ["NO2", "H2S", "NaOH", "Ca(OH)2"],
    // bài 8
    ["98%", "36%", "63%", "8%"],
    ["HCl", "H2SO4", "CH3COOH", "HNO3"],
    ["Rót nhanh acid vào nước và khuấy đều", "Rót nhanh nước vào acid và khuấy đều", "Rót từ từ nước vào acid và khuấy đều", "Rót từ từ acid vào nước và khuấy đều"],
    ["HCl 36%", "HNO3 63%", "H2SO4 98%", "H3PO4 85%"],
    ["rửa với nước lạnh nhiều lần", "trung hoà acid bằng NaHCO3", "băng bó tạm thời vết bỏng", "đưa đến cơ sở y tế gần nhất"],
    ["HF", "H2SO4", "H2O", "CH3COOH"],
    ["Al2O3, Ba(OH)2, Ag", "CuO, NaCl, CuS", "FeCl3, MgO, Cu", "BaCl2, Na2CO3, FeS"],
    ["1", "2", "3", "4"],
    ["Al", "Zn", "Na", "Cu"],
    ["Fe2(SO4)3 và H2", "FeSO4 và H2", "FeSO4 và SO2", "Fe2(SO4)3 và SO2"],
    ["Cu và Cu(OH)2", "Fe và Fe(OH)3", "C và CO2", "S và H2S"],
    ["Tính base mạnh", "Tính oxi hoá mạnh", "Tính acid mạnh", "Tính khử mạnh"],
    ["Dung dịch H2SO4 đặc có tính khử mạnh", "Dung dịch H2SO4 đặc có tính oxi hoá mạnh", "Dung dịch H2SO4 đặc vừa có tính khử, vừa có tính oxi hoá", "Dung dịch H2SO4 đặc không có tính khử, không có tính oxi hoá"],
    ["Tính háo nước", "Tính oxi hoá", "Tính acid", "Tính khử"],
    ["Al, Fe, Au, Pt", "Zn, Pt, Au, Mg", "Al, Fe, Zn, Mg", "Al, Fe, Au, Mg"],
    ["dung dịch H2SO4 đặc bị thụ động hóa trong thép", "dung dịch H2SO4 đặc không phản ứng với iron (Fe) ở nhiệt độ thường", "dung dịch H2SO4 đặc không phản ứng với kim loại ở nhiệt độ thường", "thép có chứa các chất phụ trợ không phản ứng với dung dịch H2SO4 đặc"],
    ["Giấm ăn", "Muối ăn", "Cồn", "Xút. (NaOH)"],
    ["Fe", "FeO", "Fe2O3", "Fe3O4"],
    ["2", "4", "1", "3"],
    ["KBr", "NaCl", "CaF2", "CaCO3"],
    ["Tan trong nước, tỏa nhiệt", "Làm hóa than vải, giấy, đường", "Hòa tan được kim loại Al và Fe", "Háo nước"],
    ["Cu", "Cr", "Fe", "Mg"],
    ["2FeO + 4H2SO4(đặc) —> Fe2(SO4)3 + SO2 + 4H2O", "Fe2O3 + 4H2SO4(đặc) —> Fe2(SO4)3 + SO2 + 4H2O", "FeO + H2SO4(loãng) —> FeSO4 + H2O", "Fe2O3 + 3H2SO4(loãng) —> Fe2(SO4)3 + 3H2O"],
    ["H2SO4 là chất oxi hóa, HI là chất khử", "HI bị oxi hóa thành I2, H2SO4 bị khử thành H2S", "H2SO4 oxi hóa HI thành I2 và nó bị khử thành H2S", "I2 oxi hóa H2S thành H2SO4 và nó bị khử thành HI"],
    ["dung dịch NaOH đặc", "dung dịch H2SO4 đậm đặc", "Na2SO3 khan", "CaO"],
    ["HBr", "HCl", "HNO3", "H2SO4"],  
    // bài 10
    ["carbon", "hydrogen", "oxygen", "nitrogen"],
    ["carbon và hydrogen", "carbon", "carbon, hydrogen và oxygen", "carbon và nitrogen"],
    ["Acetic acid", "Methane", "Ammonium nitrate", "Ethanol"],
    ["CH3CH2OH", "CH3CH=O", "CH≡CH", "CH3COONa"],
    ["CO2", "C2H5OH", "Na2CO3", "N2"],
    ["chậm, không hoàn toàn, không theo một hướng nhất định", "nhanh và cho một sản phẩm duy nhất", "nhanh, không hoàn toàn, không theo một hướng nhất định", "chậm, hoàn toàn, không theo một hướng nhất định"],
    ["liên kết cộng hoá trị", "liên kết kim loại", "liên kết hydrogen", "liên kết ion"],
    ["hợp chất hữu cơ", "hợp chất vô cơ", "hợp chất thiên nhiên", "hợp chất phức"],
    ["Các hợp chất hữu cơ thường khó bay hơi, bền với nhiệt và khó cháy.", "Liên kết hoá học chủ yếu trong các phân tử hợp chất hữu cơ là liên kết cộng hoá trị.", "Các hợp chất hữu cơ thường không tan hoặc ít tan trong nước, tan trong dung môi hữu cơ.", "Các phản ứng hoá học của hợp chất hữu cơ thường xảy ra chậm và theo nhiều hướng khác nhau tạo ra một hỗn hợp các sản phẩm."],
    ["nguyên tử", "phân tử", "nhóm nguyên tử", "nguyên tử hoặc nhóm nguyên tử"],
    ["thành phần nguyên tố chất hữu cơ", "thành phần phân tử hợp chất hữu cơ", "cấu tạo hợp chất hữu cơ", "cấu trúc không gian hợp chất hữu cơ"],
    ["CH4, CH2=CH2 và CH≡CH là những hydrocarbon.", "CH3OH và HOCH2-CH2OH là những alcohol.", "CH3COOH và CH2(COOH)2 là những carboxylic acid.", "CH3CH=O và CH3COCH3 là những aldehyde."],
    // bài 11
    ["Phương pháp chưng cất", "Phương pháp chiết", "Phương pháp kết tinh", "Sắc kí cột"],
    ["Tinh dầu bưởi", "Rượu", "Tinh dầu sả chanh", "Tinh dầu tràm"],
    ["có nhiệt độ sôi khác nhau", "có nhiệt độ nóng chảy khác nhau", "có độ tan khác nhau", "có khối lượng riêng khác nhau"],
    ["Cô cạn", "Lọc", "Bay hơi", "Chưng cất"],
    ["Nhiệt độ sôi của chất", "Nhiệt độ nóng chảy của chất", "Tính tan của chất trong nước", "Màu sắc của chất"],
    ["Phương pháp chưng cất", "Phương pháp chiết", "Phương pháp kết tinh", "Sắc kí cột"],
    ["Kết tinh", "Chưng cất", "Sắc kí", "Chiết"],
    ["chưng cất ở áp suất thấp", "chưng cất ở áp suất thường", "chiết bằng dung môi hexane", "chiết bằng dung môi ethanol"],
    ["chất cần tách", "các chất còn lại", "hỗn hợp ban đầu", "hợp chất khí"],
    ["chủ yếu trong lớp nước", "chủ yếu trong lớp benzene", "phân bố đồng đều ở hai lớp", "bị mất màu hoàn toàn"],
    ["không thay đổi khi thay đổi nhiệt độ của dung dịch", "tăng nhanh khi tăng nhiệt độ, tan kém ở nhiệt độ thường", "giảm nhanh khi tăng nhiệt độ, tan tốt ở nhiệt độ thường", "lớn ở nhiệt độ thường và nhỏ ở nhiệt độ cao"],
    ["0", "1", "2", "3"],
    // bài 12
    ["số nguyên tử của mỗi nguyên tố trong phân tử", "tỉ lệ tối giản về số nguyên tử của các nguyên tố trong phân tử", "tỉ lệ phần trăm số mol của mỗi nguyên tố trong phân tử", "tỉ lệ số nguyên tử C và H có trong phân tử"],
    ["Hai chất có cùng công thức thực nghiệm có thể có phân tử khối khác nhau", "Hai chất có cùng công thức thực nghiệm có phần trăm khối lượng các nguyên tố trong phân tử của chúng như nhau", "Hai chất có cùng công thức thực nghiệm thì thành phần các nguyên tố trong phân tử của chúng giống nhau", "Hai chất có cùng công thức thực nghiệm luôn có cùng công thức phân tử"],
    ["Hai chất đó giống nhau về công thức phân tử và khác nhau về công thức đơn giản nhất", "Hai chất đó khác nhau về công thức phân tử và giống nhau về công thức đơn giản nhất", "Hai chất đó khác nhau về công thức phân tử và khác nhau về công thức đơn giản nhất", "Hai chất đó có cùng công thức phân tử và cùng công thức đơn giản nhất"],
    ["Thành phần nguyên tố và số lượng nguyên tử của mỗi nguyên tố", "Thành phần nguyên tố và tỉ lệ số lượng nguyên tử của mỗi nguyên tố", "Số lượng nguyên tử mỗi nguyên tố và trật tự liên kết giữa các nguyên tử", "Tỉ lệ số lượng nguyên tử của mỗi nguyên tố và trật tự liên kết giữa các nguyên tử"],
    ["CH3-COOH", "C2H4O2", "CH2O", "CxHyO2"],
    ["phân tử khối", "nguyên tử khối", "điện tích ion", "khối lượng"],
    ["88", "22", "44", "48"],
    ["Giá trị m/z nhỏ nhất", "Giá trị m/z lớn nhất", "Giá trị trung bình của các m/z", "Tổng các giá trị m/z"],
    ["Cường độ tương đối", "Nhiệt độ", "Thời gian", "giá trị m/z"],
    ["CH4", "C2H4", "C2H2", "C2H6"],
    // bài 13
    ["Tính chất của các chất không phụ thuộc vào thành phần phân tử mà chỉ phụ thuộc vào cấu tạo hoá học", 
    "Tính chất của các chất không phụ thuộc vào thành phần phân tử và cấu tạo hoá học", 
    "Tính chất của các chất chỉ phụ thuộc vào thành phần phân tử mà không phụ thuộc vào cấu tạo hoá học", 
    "Tính chất của các chất phụ thuộc vào thành phần phân tử và cấu tạo hóa học"],
    
    ["mạch vòng, mạch hở phân nhánh", 
    "mạch hở không phân nhánh, mạch hở phân nhánh", 
    "mạch vòng, mạch hở không phân nhánh, mạch hở phân nhánh", 
    "mạch hở phân nhánh"],
    
    ["số lượng liên kết giữa các nguyên tử trong phân tử", 
    "các loại liên kết giữa các nguyên tử trong phân tử", 
    "thứ tự và cách thức liên kết của các nguyên tử trong phân tử", 
    "bản chất liên kết giữa các nguyên tử trong phân tử"],
    
    ["khối lượng phân tử", 
    "công thức phân tử", 
    "công thức đơn giản nhất", 
    "thành phần nguyên tố"],
];

// Chỉ số của đáp án đúng ban đầu cho mỗi câu hỏi
const correctAnswers = [
    // bài 4
    1, 3, 0, 2, 1,
    1, 2, 2, 3, 2,
    // bài 5
    0, 3, 0, 0, 2,
    2, 0, 1, 0, 0,
    0, 1, 2, 
    // bài 6
    0, 3, 1, 1, 1,
    2, 1, 3, 3, 0,
    3, 2, 3, 2,
    // bài 7
    1, 3, 1, 0, 1,
    2, 3, 0, 2, 3,
    2, 3, 0, 1, 2,
    2, 2, 2, 2, 1,
    2, 3, 3, 1, 
    // bài 8
    0, 1, 3, 2, 0,
    1, 3, 0, 3, 1,
    1, 1, 1, 3, 0,
    1, 3, 2, 0, 0,
    2, 3, 1, 3, 1,
    3,
    // bài 10
    0, 1, 2, 3, 1,
    0, 0, 0, 0, 3,
    2, 3, 
    // bài 11
    0, 1, 0, 3, 0,
    0, 1, 0, 0, 1,
    1, 3, 
    // bài 12
    1, 3, 1, 0, 1,
    0, 0, 1, 3, 3,
    // bài 13
    3, 2, 2, 1, 
];

function shuffleOptions() {
    // Xáo trộn câu hỏi
    const indices = Array.from({ length: questions.length }, (_, idx) => idx);

    for (let j = indices.length- 1; j > 0; j--) {
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
        for (let j = answerIndices.length- 1; j > 0; j--) {
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
        const elapsedTime = currentTime- startTime;

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
            updateQuestion(viTri- 1);
            showAnswer();
        }
    });

    nextBtn.addEventListener("click", () => {
        if (viTri < questions.length- 1) {
            updateQuestion(viTri + 1);
            showAnswer();
        }
    });

    document.addEventListener('keydown', function (event) {
        if (event.key === 'ArrowLeft' && viTri > 0) {
            updateQuestion(viTri- 1);
            showAnswer();
        } else if (event.key === 'ArrowRight' && viTri < questions.length- 1) {
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
