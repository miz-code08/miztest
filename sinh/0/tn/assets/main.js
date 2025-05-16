const questions = [
    // bài 22
    "Qúa trình sinh trưởng và phát triển của động vật được chia làm hai giai đoạn chủ yếu",
    "Nhân tố nào là nhân tố bên trong tham gia điều hòa quá trình sinh trưởng và phát triển của động vật?",
    "Các yếu tố bên ngoài ảnh hưởng đến sinh trưởng và phát triển ở động vật là",
    "Các yếu tố bên trong ảnh hưởng đến sinh trưởng và phát triển ở động vật là",
    "Biến thái là sự thay đổi",
    "Những hoocmon nào sau đây điều hòa sinh trưởng và phát triển ở động vật có xương sống?",
    "Tác dụng của hoocmon sinh trưởng GH là:",
    "Thyrôxine có tác dụng kích thích và duy trì",
    "Testosterone được sinh sản ra ở",
    "Estrogen được sinh ra ở",
    "Nếu tuyến yên sản sinh ra quá ít hoặc quá nhiều hoocmôn sinh trưởng ở giai đoạn trẻ em sẽ dẫn đến hậu quả",
    "Những hormone nào gây dậy thì ở trẻ em nam và nữ?",
    "Tắm nắng vào lúc sáng sớm hay chiều tối (ánh sáng yếu) có lợi cho sự sinh trưởng và phát triển của trẻ nhỏ vì tia tử ngoại làm cho tiền vitamin D biến thành vitamin D có vai trò",
    "Khi nói về ảnh hưởng của nhiệt độ đến sinh trưởng và phát triển của động vật, phát biểu nào sau đây sai?",
    "Đối với gia súc, ở mùa có khí hậu lạnh thì sự sinh trưởng và phát triển chậm hơn mùa có khí hậu thích hợp. Nguyên nhân chủ yếu là vì:",
    "Khi nói về các yếu tố ảnh hưởng đến sinh trưởng và phát triển ở động vật, có bao nhiêu nhận định sau đây sai? <br> I. Sinh trưởng và phát triển ở động vật có thể chịu ảnh hưởng bởi các nhân tố bên trong và các yếu tố bên ngoài cơ thể. <br> II. Thức ăn là yếu tố quan trọng gây ảnh hưởng đến sự sinh trưởng và phát triển ở động vật. <br> III. Yếu tố di truyền là yếu tố quyết định tốc độ phát triển của động vật. <br> IV. Tất cả các loài động vật có thể sinh trưởng và phát triển tốt trong mọi điều kiện nhiệt độ khác nhau.",
    "Cho các biện pháp sau đây <br> (1) Cải tạo giống. <br> (2) Cải thiện môi trường sống. <br> (3) Chuyển đổi cơ cấu chăn nuôi. <br> (4) Cải thiện chất lượng dân số. <br> (5) Kế hoạch hoá gia đình. <br> Số biện pháp điều khiển sự sinh trưởng và phát triển ở động vật và người là",
    "Để bảo vệ sức khỏe, chăm sóc bản thân và người khác, nam nữ ở tuổi dậy thì, có bao nhiêu nhận định sau đây là đúng? <br> (1) Chủ động tìm hiểu kiến thức về giới tính, sức khỏe sinh sản từ những nguồn thông tin đáng tin cậy. <br> (2) Không xem phim ảnh, trang mạng không phù hợp. <br> (3) Nên quan hệ tình dục trước tuổi trưởng thành. <br> (4) Không sử dụng các chất kích thích để tránh những ảnh hưởng tiêu cực đến sức khỏe thể chất và tinh thần. <br> (5) Nâng cao sức khỏe, vệ sinh cá nhân và cơ quan sinh dục đúng cách, sinh hoạt điều độ, tập thể dục thường xuyên; có chế độ dinh dưỡng hợp lí giúp nâng cao sức đề kháng cho cơ thể.",
    "Để bảo vệ sức khỏe, chăm sóc bản thân và người khác, nam nữ ở tuổi dậy thì, có bao nhiêu nhận định sau đây là sai? <br> (1) Chủ động tìm hiểu kiến thức về giới tính, sức khỏe sinh sản từ những nguồn thông tin đáng tin cậy. <br> (2) Xem phim ảnh, trang mạng không phù hợp. <br> (3) Nên quan hệ tình dục trước tuổi trưởng thành. <br> (4) Không sử dụng các chất kích thích để tránh những ảnh hưởng tiêu cực đến sức khỏe thể chất và tinh thần. <br> (5) Nâng cao sức khỏe, vệ sinh cá nhân và cơ quan sinh dục đúng cách, sinh hoạt điều độ, tập thể dục thường xuyên; có chế độ dinh dưỡng hợp lí giúp nâng cao sức đề kháng cho cơ thể.",
    // tln
    "Cho các hormone sau đây: <br> (1) Hormone sinh trưởng (GH). <br> (2) Hormone ecdysone. <br> (3) Hormone thyroxine. <br> (4) Hormone juvenile. <br> (5) Hormone testosterone. <br> (6) Hormone estrogen. <br> Những hormone nào gây ảnh hưởng đến quá trình sinh trưởng và phát triển ở động vật có xương sống?",
    "Cho các hormone sau đây: <br> (1) Hormone sinh trưởng (GH). <br> (2) Hormone ecdysone. <br> (3) Hormone thyroxine. <br> (4) Hormone juvenile. <br> (5) Hormone testosterone. <br> (6) Hormone estrogen. <br> Những hormone nào tác động đến quá trình sinh trưởng và phát triển ở bướm?",
    "Vòng đời phát triển của bướm gồm 4 giai đoạn: <br> (1) trứng <br> (2) sâu bướm <br> (3) nhộng <br> (4) bướm trưởng thành. <br> Những giai đoạn nào thuộc giai đoạn phát triển hậu phôi?",
    "Hiện nay, chăn nuôi lợn rừng đang phát triển ở nhiều nơi và trở thành một hướng phát triển kinh tế cho bà con nông dân. Trong chăn nuôi lợn rừng, nhiều người chăn nuôi đang gặp vấn đề sinh sản của lợn nái như lợn nái chậm động dục, động dục nhưng phối giống không đạt, hoặc phối đạt nhưng đẻ ít con…Hiện tượng này thường gặp đối với những người nuôi lợn rừng của Việt Nam hoặc lợn nái lai giữa lợn rừng Việt Nam với lợn địa phương miền núi. Có bao nhiêu giải pháp sau đây cần áp dụng giúp nâng cao năng suất sinh sản của lợn rừng? <br> (1) Sử dụng thức ăn dinh dưỡng phù hợp theo từng giai đoạn sinh trưởng. <br> (2) Sử dụng hormone để kích thích hoạt động sinh dục của lợn nái. <br> (3) Tăng số lần phối giống khi lợn nái động dục. <br> (4) Vệ sinh chuồng trại, tiêm vacxin phòng bệnh cho lợn nuôi.",
    // bài 24
    "Sinh sản là gì?",
    "Sinh sản ở sinh vật có thể là",
    "Sinh sản hữu tính là hình thức sinh sản",
    "Sinh sản vô tính là hình thức sinh sản tạo ra cơ thể mới với các đặc điểm",
    "Sinh sản vô tính ở sinh vật được điều hòa chủ yếu bởi",
    "Vật chất di truyền của cơ thể được truyền đạt nguyên vẹn cho cơ thể con trong sinh sản vô tính ở sinh vật qua cơ chế",
    "Sinh sản hữu tính ở sinh vật được điều hòa bởi",
    "Vật chất di truyền của cơ thể được truyền đạt từ thế hệ mẹ sang thế hệ con trong sinh sản hữu tính ở sinh vật thông qua quá trình",
    "Sinh sản vô tính nhanh chóng tạo ra các cá thể mới có bộ NST đặc trưng cho loài trong điều kiện môi trường sống",
    "Vật chất di truyền của cơ thể con trong sinh sản hữu tính được tái tổ hợp từ",
    // bài 25
    "Các hình thức sinh sản ở thực vật gồm có",
    "Trong sinh sản sinh dưỡng ở thực vật, cây con được tạo ra",
    "Thụ phấn là quá trình",
    "Sinh sản bằng bào tử ở thực vật là hình thức sinh sản mà cơ thể mới được phát triển từ",
    "Hình thức sinh sản bằng bào tử là một giai đoạn trong vòng đời của một số loài thực vật như",
    "Các phương pháp nhân giống vô tính ở thực vật gồm",
    "Qúa trình sinh sản hữu tính ở thực vật có hoa gồm ba giai đoạn kế tiếp nhau",
    "Kỹ thuật nhân giống mà cây con tạo được bằng cách thúc đẩy hình thành rễ từ vết khoanh vỏ một cành bánh tẻ trên cây mẹ là phương pháp",
    "…… là phương pháp được thực hiện dựa trên công nghệ nuôi cấy mô, tế bào thực vật. Dấu “…” sẽ là",
    "Khi nói về ưu điểm của phương pháp nuôi cấy mô, có bao nhiêu nhận định sau đây đúng? <br> 1. Nhân nhanh số lượng cây giống lớn. <br> 2. Phục chế được các giống cây quý. <br> 3. Tạo ra các giống cây mới có năng suất cao hơn cây mẹ. <br> 4. Duy trì tính trạng tốt của cây mẹ.",
    "Dựa trên các phương pháp nhân giống vô tính ở thực vật. Có bao nhiêu phát biểu sau đây đúng về ưu và nhược điểm? <br> I. Phương pháp giâm cành có ưu điểm tạo được số lượng lớn cây con có chất lượng đồng đều trong thời gian ngắn. <br> II. Phương pháp chiết cành có ưu điểm tỉ lệ sống của cây con cao (có thể lên tới 100%), cây thấp, tán lá gọn, sinh trưởng nhanh. <br> III. Phương pháp ghép cành có ưu điểm giữ được các đặc tính của giống muốn nhân. <br> IV. Phương pháp nuôi cấy mô có ưu điểm tạo ra số lượng lớn các giống cây trồng có năng suất cao, chất lượng tốt, thích nghi với điều kiện sinh thái nhất định, chống chịu tốt với nhiều loại sâu bệnh, ...",
    "Khi tìm hiểu các giống cây trồng ở địa phương được nhân giống bằng hình thức hữu tính. Có bao nhiêu phát biểu sau đây đúng? <br> I. Lúa là loại cây trồng được nhân giống bằng phương pháp giao phối tự nhiên giữa các cây khác nhau. <br> II. Việc lai tạo các giống lúa mới giúp tăng cường sức đề kháng và năng suất của lúa. <br> III. Bông là loại cây trồng chủ yếu để sản xuất sợi bông và được nhân giống bằng phương pháp lai tạo giữa các giống khác nhau. <br> IV. Cao su cũng được nhân giống bằng phương pháp lai tạo giữa các giống khác nhau để tạo ra những giống mới có năng suất và chất lượng tốt hơn.",
    "Khi nói đến sinh sản hữu tính so với sinh sản vô tính ở thực vật. Có bao nhiêu phát biểu sau đây đúng? <br> I. Tạo ra được nhiều biến dị tổ hợp làm nguyên liệu cho chọn giống và tiến hóa. <br>  <br> II. Duy trì ổn định những tính trạng tốt về mặt di truyền. <br> III. Có khả năng thích nghi với những điều kiện môi trường biến đổi. <br> IV. Là hình thức sinh sản phổ biến.",
    // bài 27
    "Hình thức sinh sản mà cơ thể mẹ nguyên phân nhiều lần để tạo thành một chồi non, chồi con tách khỏi mẹ tạo thành cá thể mới được gọi là",
    "Trong sinh sản vô tính các cá thể mới sinh ra",
    "Ở ong mật, kết quả của quá trình trinh sản là tạo ra",
    "Giun dẹp có khả năng thắt giữa để tạo ra 2 cơ thể mới hoặc cơ thể có thể tách ra nhiều phần và mỗi phần tạo ra một cơ thể mới. Giun dẹp có các hình thức sinh sản nào sau đây?",
    "Sinh sản hữu tính ở động vật là",
    "Trong cơ chế điều hòa sinh tinh ở động vật, GnRH có vai trò kích thích",
    "Trong cơ chế điều hòa sinh tinh ở động vật, hormone LH có vai trò kích thích",
    "Ở nam giới, testosterone có vai trò kích thích",
    "Trong cơ chế điều hòa sinh sản, hormone LH ở phụ nữ có vai trò kích thích",
    "Trong cơ chế điều hòa sinh trứng, hormone FSH có vai trò kích thích",
    "Ở nam giới, khi nồng độ testosterone trong máu cao có tác dụng",
    "Khi nồng độ testôstêron trong máu cao có tác dụng",
    "Khi nồng độ estrogen và progesterone trong máu tăng cao sẽ",
    "Trong cơ chế điều hoà sinh trứng, nồng độ hormone progesterone và estrogen cao gây",
    // tln
    "Thứ tự đúng của các giai đoạn trong quá trình sinh sản hữu tính ở người. <br> (1) Thụ tinh <br> (2) Hình thành giao tử <br> (3) Đẻ con <br> (4) Phát triển phôi thai <br>",
    "Cho các giai đoạn sau: <br> 1. Tinh trùng thụ tinh với trứng ở vòi trứng <br> 2. Hợp tử phân chia tạo thành phôi <br> 3. Dưới tác dụng của oxytocin, cổ tử cung mở rộng, thai được đẩy ra ngoài <br> 4. Phôi phát triển thành thai trong tử cung <br> Trật tự đúng các giai đoạn trong quá trình sinh sản hữu tính ở người là như thế nào?",
    "Cho các biện pháp điều hòa sinh sản sau: tránh thai ức chế quá trình chín và rụng trứng, lựa chọn giới tính thai nhi, tránh thai ngăn cản tinh trùng gặp trứng, thay đổi điều kiện nhiệt độ, tránh thai ngăn cản sự làm tổ của phôi thai trong tử cung. Có bao nhiêu biện pháp đang được áp dụng ở người?",
    "Trong số các loài sau đây có bao nhiêu loài đẻ con: bò, thú mỏ vịt, cá voi, cá sấu, ếch nhái",
];

const answers = [
    // bài 22
    ["giai đoạn phôi và giai đoạn hậu phôi", "giai đoạn phôi và giai đoạn trứng", "giai đoạn ấu trùng và giai đoạn hậu phôi", "giai đoạn trứng và giai đoạn hậu phôi"],
    ["Testosterone", "Thyroxine", "Thức ăn", "Hoocmon"],
    ["di truyền và hormone", "di truyền, hormone, thức ăn, nhiệt độ và ánh sáng", "thức ăn, nhiệt độ và ánh sáng", "thức ăn, nhiệt độ"],
    ["di truyền và hormone", "di truyền, hormone thức ăn, nhiệt độ và ánh sáng", "thức ăn, nhiệt độ và ánh sáng", "thức ăn, nhiệt độ, ánh sáng và hormone"],
    ["đột ngột về hình thái, cấu tạo và từ từ về sinh lý của động vật sau khi sinh ra hoặc nở từ trứng ra", "từ từ về hình thái, cấu tạo và đột ngột về sinh lý của động vật sau khi sinh ra hoặc nở từ trứng ra", "đột ngột về hình thái, cấu tạo và sinh lý của động vật sau khi sinh ra hoặc nở từ trứng ra", "từ từ về hình thái, cấu tạo và về sinh lý của động vật sau khi sinh ra hoặc nở từ trứng ra"],
    ["Hoocmon sinh trưởng, estrogen, testosterone, ecdysone, juvenile", "Hoocmon sinh trưởng, thyroxin, estrogen, testosterone", "Hoocmon thyroxine, estrogen, estrogen, ecdysone, juvenile", "Hoocmon sinh trưởng, hyroxine, estrogen, testosterone, juvenile"],
    ["tăng cường tất cả các quá trình trao đổi chất trong cơ thể", "tăng cường khả năng hấp thụ các chất protein, lipit, gluxit", "tăng cường quá trình tổng hợp protein", "tăng cường quá trình chuyển hóa Ca vào xương"],
    ["quá trình sinh tổng hợp protein, do đó kích quá trình phân bào và tăng kích thước tế bào,  vì vậy làm tăng cường sự sinh trưởng của cơ thể", "chuyển hóa ở tế bào, qua đó tác động lên quá trình sinh trưởng và phát triển bình thường của cơ thể", "sự sinh trưởng và phát triển các đặc điểm sinh dục phụ ở con đực", "sự sinh trưởng và phát triển các đặc điểm sinh dục phụ ở con cái"],
    ["tuyến giáp", "tuyến yên", "tinh hoàn", "buồng trứng"],
    ["tuyến giáp", "buồng trứng", "tuyến yên", "tinh hoàn"],
    ["chậm lớn hoặc ngừng lớn,  trí tuệ kém", "các đặc điểm sinh dục phụ nữ kém phát triển", "người bé nhỏ hoặc khổng lồ", "các đặc điểm sinh dục nam kém phát triển"],
    ["Do tác động của tăng testosterone ở nam và tăng estrogen ở nữ", "Do tác động của tăng testosterone ở nữ và tăng estrogen ở nam", "Do tác động của tăng testosterone ở cả nam và nữ", "Do tác động của tăng estrogen ở cả nam và nữ"],
    ["chuyển hóa Na để hình thành xương", "chuyển hóa Ca để hình thành xương", "chuyển hóa K để hình thành xương", "oxi hóa để hình thành xương"],
    ["Ảnh hưởng của nhiệt độ chủ yếu thông qua ảnh hưởng đến hoạt tính enzim", "Tất cả vật nuôi khi nhiệt độ xuống thấp sẽ làm cơ thể mất nhiều năng lượng để duy trì thân nhiệt làm vật nuôi chậm lớn", "Ở côn trùng nhiệt độ môi trường tăng lên (trong giới hạn sống của chúng) thì tuổi thọ bị rút ngắn lại", "Nhiệt độ ảnh hưởng đến tốc độ các quá trình sinh lí, sinh hóa trong cơ thể"],
    ["Thân nhiệt giảm làm cho sự chuyển hóa, sinh sản giảm", "Cơ thể mất nhiều năng lượng để duy trì thân nhiệt", "Thân nhiệt giảm làm cho sự chuyển hóa trong cơ thể giảm làm hạn chế tiêu thụ năng lượng", "Thân nhiệt giảm làm cho sự chuyển hóa trong cơ thể giảm, sinh sản tăng"],
    ["1", "2", "3", "4"],
    ["2", "3", "4", "5"],
    ["1", "2", "3", "4"],
    ["1", "2", "3", "4"],
    // tln
    ["1, 3, 5, 6", "2 , 4", "1, 3, 4, 6", "1, 2, 4, 5, 6"],
    ["2, 4", "1, 3, 5, 6", "1, 3, 4, 6", "1, 2, 4, 5, 6"],
    ["1, 2, 3", "2 ,3", "1, 3, 4", "1, 2, 3, 4"],
    ["1, 2, 3, 4", "2, 3", "1, 3, 4", "4"],
    // bài 24
    ["Quá trình tạo ra cơ thể mới, đảm bảo sự sinh trưởng và phát triển của loài.", "Quá trình tạo ra cơ thể mới, bảo đảm sự phát triển liên tục của loài.", "Quá trình tạo ra cơ thể mới, đảm bảo sự tồn tại vĩnh viễn của loài.", "Quá trình tạo ra cơ thể mới, đảm bảo sự sinh trưởng liên tục của loài."],
    ["sinh sản vô tính hoặc hữu tính.", "sinh sản vô tính hoặc sinh sản bằng bào tử.", "sinh sản sinh dưỡng hoặc hữu tính.", "sinh sản hữu tính."],
    ["có sự kết hợp giữa giao tử đực và giao tử cái để tạo thành hợp tử.", "không có sự kết hợp của giao tử đực và giao tử cái.", "có sự kết hợp của 2 giao tử đực và 2 giao đực cái để tạo thành hợp tử.", "có sự kết hợp của 2 giao tử đực và 1 giao tử cái để tạo thành hợp tử."],
    ["khác cá thể ban đầu mà không có sự đóng góp vật chất di truyền của cá thể khác.", "giống cá thể ban đầu mà không có sự đóng góp vật chất di truyền của cá thể khác.", "giống cá thể ban đầu và có sự đóng góp vật chất di truyền của cá thể khác.", "khác cá thể ban đầu và có sự đóng góp vật chất di truyền của cá thể khác."],
    ["các hormone.", "các chất kích thích.", "các chất ức chế.", "hệ thống kiểm soát chu kì tế bào."],
    ["giảm phân.", "thụ tinh.", "nguyên phân.", "phiên mã."],
    ["các hormone.", "các chất kích thích.", "các chất ức chế.", "hệ thống kiểm soát chu kì tế bào."],
    ["giảm phân và thụ tinh.", "thụ tinh và nguyên phân.", "nguyên phân và giảm phân.", "giảm phân, thụ tinh và nguyên phân."],
    ["ổn định, thuận lợi.", "bất lợi.", "không ổn định.", "thay đổi."],
    ["3 nguồn khác nhau nên không có sự sai khác.", "2 nguồn khác nhau nên có sự sai khác.", "2 nguồn khác nhau nên không có sự sai khác.", "1 nguồn nên không có sự sai khác."],
    // bài 25
    ["sinh sản sinh dưỡng và sinh sản bào tử", "sinh sản bằng rễ và bằng thân và bằng lá", "sinh sản bằng hạt và sinh sản bằng chồi", "sinh sản vô tính và sinh sản hữu tính"],
    ["từ các bộ phận sinh dưỡng khác nhau của cây mẹ", "chỉ từ một phần thân của cây", "chỉ từ rễ của cây", "chỉ từ lá của cây"],
    ["hạt phấn phát tán và rơi trên núm nhụy", "vận chuyển hạt phấn từ nhụy đến núm nhị", "hợp nhất nhân giao tử đực và nhân tế bào trứng", "hợp nhất giữa nhị và nhụy"],
    ["bào tử (2n)", "hợp tử (2n)", "bào tử (n)", "giao tử (n)"],
    ["rêu, củ khoai tây", "rêu, dương xỉ", "dương xỉ, lá cây thuốc bỏng", "cây rau má, củ khoai tây"],
    ["giâm cành, chiết cành, ghép, nhân giống in vitro", "giâm cành, chiết cành, ghép", "giâm cành, ghép, nhân giống in vitro", "giâm cành, chiết cành, nhân giống in vitro"],
    ["hình thành hạt và quả, thụ phấn và thụ tinh, hình thành hạt phấn và túi phôi", "thụ phấn và thụ tinh, hình thành hạt phấn và túi phôi, hình thành hạt và quả", "hình thành hạt phấn và túi phôi, hình thành hạt và quả, thụ phấn và thụ tinh", "hình thành hạt phấn và túi phôi, thụ phấn và thụ tinh, hình thành hạt và quả"],
    ["chiết cành", "giâm cành", "ghép", "nhân giống in vitro"],
    ["chiết cành", "giâm cành", "ghép", "nhân giống in vitro"],
    ["1", "2", "3", "4"],
    ["1", "2", "3", "4"],
    ["1", "2", "3", "4"],
    ["1", "2", "3", "4"],
    // bài 27
    ["trinh sinh", "phân đôi", "phân mảnh", "nảy chồi"],
    ["giống nhau và giống cá thể gốc", "khác nhau và giống cá thể gốc", "giống nhau và khác cá thể gốc", "khác nhau và khác cá thể gốc"],
    ["ong đực mang bộ NST lưỡng bội", "ong đực mang bộ NST đơn bội", "ong thợ mang bộ NST đơn bội", "ong đực mang bộ NST lưỡng bội"],
    ["Phân đôi và trinh sinh", "Nảy chồi và phân mảnh", "Nảy chồi và phân đôi", "Phân mảnh và phân đôi"],
    ["sự kết hợp của nhiều giao tử đực với 1 giao tử cái -> hợp tử -> cơ thể mới", "kiểu sinh sản tạo ra cơ thể mới qua hình thành và hợp nhất hai giao tử đơn bội (đực và cái) -> hợp tử -> cơ thể mới", "sự kết hợp có chọn lọc của hai giao tử đực và cái -> hợp tử -> cơ thể mới", "sự kết hợp có chọn lọc của nhiều giao tử cái và nhiều giao tử đực -> hợp tử -> cơ thể mới"],
    ["ống sinh tinh phát triển", "tế bào kẽ sản sinh ra testosterone", "ống sinh tinh sản xuất ra tinh trùng", "tuyến yên tiết FSH và LH"],
    ["ống sinh tinh sản xuất tinh trùng", "tế bào kẽ tiết ra hormone testosterone", "vùng dưới đồi sản xuất hormone GnRH", "tuyến yên sản xuất hormone ICSH (LH)"],
    ["vùng dưới đồi tiết GnRH", "tế bào Sertoli của tinh hoàn tiết inhibin", "ống sinh tinh sản xuất ra tinh trùng", "tuyến yên tiết FSH"],
    ["buồng trứng tạo trứng", "dạ con phát triển chuẩn bị cho hợp tử làm tổ", "trứng chín, rụng, tạo thể vàng", "nang trứng phát triển và tiết estrogen"],
    ["buồng trứng tạo trứng", "vùng dưới đồi tiết GnRH", "trứng chín, rụng, tạo thể vàng", "nang trứng phát triển và tiết estrogen"],
    ["ức chế tuyến yên và vùng dưới đồi, làm giảm tiết GnRH, FSH và LH", "ức chế tuyến yên và vùng dưới đồi, làm hai bộ phận này mất chức năng", "ức chế tuyến yên tiết FSH và LH, đồng thời kích thích vùng dưới đồi làm tăng tiết GnRH", "kích thích tuyến yên và vùng dưới đồi, làm tăng tiết GnRH, FSH và LH"],
    ["gây ức chế ngược lên vùng dưới đồi và tuyến yên giảm tiết hormone gây ức chế quá trình sinh tinh trùng", "gây ức chế ngược lên vùng dưới đồi và tuyến yên giảm tiết hormone làm cho trứng không chín và rụng", "kích thích vùng dưới đồi và tuyến yên tăng tiết hormone kích thích quá trình sinh tinh trùng", "kích thích vùng dưới đồi và tuyến yên giảm tiết hormone ức chế quá trình sinh tinh trùng"],
    ["kích thích quá trình sinh trứng", "làm cho trứng không chín và rụng", "làm niêm mạc tử cung bong ra", "kích thích nang trứng phát triển"],
    ["ức chế tuyến yên giảm tiết hormone FSH và LH", "ức chế vùng dưới đồi và tuyến yên giảm tiết hormone GnRH, FSH và LH", "kích thích vùng dưới đồi và tuyến yên tăng tiết hormone GnRH, FSH và LH", "ức chế vùng dưới đồi giảm tiết hormone GnRH"],
    // tln
    ["2 -> 1 -> 4 -> 3", "1 -> 2 -> 4 -> 3", "1 -> 4 -> 2 -> 3", "1 -> 2 -> 3 -> 4"],
    ["1 -> 2 - > 4 -> 3", "1 -> 2 -> 3 -> 4", "1 -> 3 -> 4 -> 2", "3 -> 1 -> 2 -> 4"],
    ["3", "4", "5", "6"],
    ["2", "1", "3", "4"],
];

const correctAnswers = [
    // bài 22
    0, 3, 2, 0, 2,
    1, 2, 1, 2, 1,
    2, 0, 1, 1, 1,
    0, 2, 3, 1,     
    // tln
    0, 0, 0, 0,
    // bài 24
    1, 0, 0, 1, 3,
    2, 0, 3, 0, 1,
    // bài 25
    3, 0, 0, 2, 1,
    0, 3, 0, 3, 2,
    3, 3, 2, 
    // bài 27
    3, 0, 1, 3, 1,
    3, 1, 2, 2, 3,
    0, 0, 1, 1, 
    // tln
    0, 0, 0, 0,
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
