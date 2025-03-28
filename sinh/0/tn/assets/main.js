const questions = [
    // bài 15
    "Cảm ứng của sinh vật là gì?",
    "Vận động hướng động của thực vật là phản ứng của",
    "Các dây leo cuốn quanh cây gỗ là kiểu hướng động nào?",
    "Khi nói về đặc điểm của cảm ứng ở thực vật, phát biểu nào sau đây đúng?",
    "Đặc điểm nào đúng khi nói về tính hướng sáng của thực vật?",
    "Khi nói về cảm ứng ở thực vật, phản ứng nào sau đây được gọi là hướng động?",
    "Phát biểu nào đúng khi nói về ứng động sinh trưởng?",
    "Ứng động không sinh trưởng là kiểu ứng động:",
    "Hướng động là",
    "Khi nhận xét về tính cảm ứng của thực vật và của động vật, phát biểu nào sau đây sai?",
    "Khi được chiếu sáng từ 1 phía đối với cây trồng, nguyên nhân nào làm cho ngọn cây hướng về phía ánh sáng?",
    "Hướng động có đặc điểm gì khác so với ứng động ở thực vật?",
    "Trồng cây trong một hộp kín có khoét một lỗ tròn. Sau thời gian ngọn cây mọc vươn về phía ánh sáng. Đây là thí nghiệm chứng minh loại hướng động nào?",
    "Dựa vào sự vận động hướng động nào sau đây mà người ta tưới nước ở rãnh làm rễ vươn rộng, nước thấm sâu, rễ đâm sâu?",
    "Người ta làm thí nghiệm như sau: lấy một bình thủy tinh hay nhựa trắng có đất vườn, ngăn ở giữa bằng một miếng kính (gỗ mỏng, nhựa cứng), một bên đất khô, một bên thì tưới ẩm. Đặt hạt nảy mầm ở phía trên miệng bình theo dõi rễ mọc về phía đất ẩm, thí nghiệm này chứng minh kiểu hướng động nào của cây?",
    "Người ta làm thí nghiệm như sau: lấy một bình thủy tinh hay nhựa trắng có đất vườn, ngăn ở giữa bằng một miếng kính (gỗ mỏng, nhựa cứng), một bên bón phân đạm, một bên thì không bón phân. Đặt hạt nảy mầm ở phía trên miệng bình theo dõi sự phân bố của hệ rễ. Theo em rễ mọc nhiều về phía nào?",
    "Người ta làm thí nghiệm như sau: lấy một bình thủy tinh hay nhựa trắng có đất vườn, ngăn ở giữa bằng một miếng kính (gỗ mỏng, nhựa cứng), một bên bón phân đạm, một bên thì không bón phân. Đặt hạt nảy mầm ở phía trên miệng bình theo dõi sự phân bố của hệ rễ. Theo em rễ mọc nhiều về phía nào?",
    "Con người vận dụng ứng động vào trong sản xuất trồng trọt để làm gì? <br> I. Điều khiển sự nở hoa vào các thời gian mong muốn của con người. <br> II. Giữ không để  chồi mọc mầm ở củ, ở thân dùng để ăn. <br> III. Dùng tác nhân kích thích để đánh thức chồi, củ, hạt. <br> IV. Điều khiển lá xòe hay khép theo ý muốn của con người. <br> Số phát biểu đúng?",
    // bài 17
    "Cảm ứng của động vật là khả năng cơ thể động vật phản ứng lại các kích thích",
    "Cung phản xạ diễn ra theo trật tự:",
    "Hệ thần kinh dạng lưới được tạo thành bởi các tế bào thần kinh",
    "Khi bị kích thích, thủy tức phản ứng bằng cách",
    "Trong các động vật sau: <br> (1) giun dẹp (2) thủy tức (3) đỉa (4) trùng roi (5) giun tròn (6) gián (7) tôm <br> Bao nhiêu loài có hệ thần kinh dạng chuỗi hạch?",
    "Động vật có hệ thần kinh dạng chuỗi hạch có thể trả lời cục bộ khi bị kích thích vì",
    "Động vật có hệ thần kinh dạng lưới khi bị kích thích thì",
    "Hệ thần kinh dạng chuỗi hạch được hình thành bởi các tế bào thần kinh tập trung thành các hạch thần kinh và được nối với nhau tạo thành chuỗi hạch",
    "Phản xạ là gì?",
    "Thụ thể tiếp nhận chất trung gian hóa học nằm ở",
    "Khi nói về tổ chức thần kinh ở các nhóm động vật, phát biểu nào sau đây là sai?",
    "Thụ thể tiếp nhận chất trung gian hóa học nằm ở",
    "Xung thần kinh được truyền qua synapse theo thứ tự?",
    "Điều không đúng với đặc điểm phản xạ có điều kiện là",
    "Trong các đặc điểm sau: <br> (1) Thường do tủy sống điều khiển <br> (2) Di truyền được, đặc trưng cho loài <br> (3) Có số lượng không hạn chế <br> (4) Mang tính bẩm sinh và bền vững <br> Có bao nhiêu đặc điểm trên đúng với phản xạ không điều kiện?",
    "Ý nào không đúng với đặc điểm của phản xạ có điều kiện?",
    "Xét các đặc điểm sau: <br> (1) Hình thành trong đời sống cá thể. <br> (2) Rất bền vững và không thay đổi. <br> (3) Tác nhân kích thích ứng với thụ thể cảm giác. <br> (4) Có sự tham gia của vỏ não. <br> Trong các đặc điểm trên, những đặc điểm của phản xạ có điều kiện gồm:",
    "Trong quá trình dẫn truyền xung thần kinh qua xinap hóa học, ion Ca2+ có vai trò gì?",
    "Quá trình truyền tin qua xinap gồm các giai đoạn theo thứ tự là",
    // bài 18
    "Tập tính động vật là gì?",
    "Tập tính không có vai trò nào sau đây?",
    "Tập tính hỗn hợp ở động vật là gì?",
    "Chim di cư để tránh rét, cá di cư để đẻ trứng là loại tập tính gì?",
    "Hươu đực quệt dịch có mùi đặc biệt tiết ra từ tuyến cạnh mắt của nó vào cành cây để thông báo cho các con đực khác là tập tính gì?",
    "Đâu là tập tính học được ở động vật?",
    "Ý nào không phải là đặc điểm của tập tính bẩm sinh?",
    "Tập tính quen nhờn là tập tính động vật không trả lời khi kích thích nào?",
    "Khi nói về các hình thức học tập ở động vật, hình thức học tập nào sau đây là đơn giản nhất?",
    // bài 19
    "Sinh trưởng là quá trình tăng gì?",
    "Phát triển là toàn bộ những biến đổi diễn ra bên trong chu kỳ sống của cá thể như thế nào?",
    "Dấu hiệu đặc trưng của sinh trưởng là gì?",
    "Tuổi thọ của sinh vật là thời gian gì?",
    "Vòng đời của sinh vật là khoảng thời gian tính từ khi nào?",
    "Ví dụ nào sau đây nói về quá trình sinh trưởng ở sinh vật?",
    "Ví dụ nào sau đây nói về quá trình phát triển ở sinh vật?",
    "Quá trình nào sau đây là quá trình sinh trưởng của thực vật?",
    "Trong các yếu tố sau đây, có bao nhiêu yếu tố không ảnh hưởng đến tuổi thọ của sinh vật? <br> (1) Di truyền <br> (2) Chế độ ăn uống <br> (3) Lối sống <br> (4) Chất phóng xạ <br> (5) Khói độc, bụi. <br> (6) Chế độ làm việc.",
    "Khi nói về các yếu tố ảnh hưởng đến tuổi thọ của con người, phát biểu nào sau đây đúng? <br> (1) Tuổi thọ của người hoàn toàn do yếu tố di truyền quyết định và không thể thay đổi. <br> (2) Môi trường sống không ảnh hưởng đến tuổi thọ của người. <br> (3) Tuổi thọ của người chịu ảnh hưởng của các yếu tố di truyền và môi trường, xã hội. <br> (4) Tầm vóc, thể trạng không ảnh hưởng đến tuổi thọ của người. <br> (5) Việc giữ gìn và rèn luyện cơ thể khỏe mạnh có thể giúp con người tăng tuổi thọ.",
    // bài 20
    "Nhóm hormone ức chế là gì?",
    "Đâu là hormone kích thích?",
    "Cytokinin có tác dụng kích thích nguyên phân ở mô phân sinh và có tác dụng gì?",
    "Vai trò chủ yếu của Abscisic acid (ABA) là gì?",
    "Hoocmôn thực vật là những chất hữu cơ có hoạt tính sinh học cao do cơ thể thực vật tiết ra để làm gì?",
    "Mô phân sinh là nhóm tế bào có đặc điểm gì?",
    "Mô phân sinh đỉnh không có ở vị trí nào của cây?",
    // tln
    "Trong các sinh vật sau: Vi khuẩn E.coli, trùng giày, giun đất, trùng amip, nhện, sinh vật nào không có hệ thần kinh?",
    "Động vật nào trong nhóm sau có hệ thần kinh dạng lưới? Thủy tức, cá, sứa, cua, giun đốt, mực",
    "Nhóm động vật nào sau đây có hệ thần kinh dạng ống? Sư tử, chó, mèo, cá, sứa, mực",
    "Trong các động vật sau, đâu là những loài không có hệ thần kinh dạng ống? Sư tử, chó, mèo, cá, sứa, mực",

    "Nguyên nhân nào sau đây dẫn đến tập tính di cư ở động vật? <br> Thức ăn, hoạt động sinh sản, thời tiết không thuận lợi, hướng nước chảy",
    "Khi di cư, động vật sống trên cạn định hướng nhờ những yếu tố nào sau đây? <br> Từ trường Trái Đất, vị trí Mặt Trời, vị trí Trăng, thành phần hóa học của nước, hướng dòng nước chảy, địa hình",
    "Những tập tính nào sau đây thuộc tập tính sinh sản? <br> Tìm kiếm bạn tình, tìm tổ, kiếm ăn, ấp trứng và bảo vệ con non",
    "Tập tính nào sau đây thuộc tập tính xã hội? <br> Hợp tác, tìm tổ, thứ bậc, vị tha, chăm sóc con non",
];

const answers = [
    // bài 15
    ["Là phản ứng của sinh vật đối với kích thích từ môi trường.", "Là phản ứng của thực vật đối với kích thích từ môi trường.", "Là phản ứng của thực vật đối với ánh sáng.", "Là phản ứng của thực vật đối phân bón."],
    ["Cây trước tác nhân kích thích theo nhiều hướng xác định.", "Cây trước tác nhân kích thích không định hướng.", "Cơ quan thực vật trước tác nhân kích thích từ một hướng xác định.", "Cây trước tác nhân kích thích theo mọi hướng."],
    ["Hướng đất.", "Hướng tiếp xúc.", "Hướng sáng.", "Hướng nước."],
    ["Phản ứng nhanh, hình thức đa dạng, dễ nhận thấy.", "Phản ứng nhanh, hình thức đa dạng, khó nhận thấy.", "Phản ứng chậm, hình thức ít đa dạng, dễ nhận thấy.", "Phản ứng chậm, hình thức ít đa dạng, khó nhận thấy."],
    ["Rễ cây hướng tránh nguồn ánh sáng, thân cây hướng theo chiều ngược lại.", "Rễ cây hướng vào lòng đất nơi có nguồn phân bón, thân cây hướng về ánh sáng.", "Rễ cây hướng vào lòng đất nơi có nguồn nước, ngọn cây thì hướng về phía ánh sáng.", "Rễ cây hướng vào lòng đất, thân cây thì hướng ngược lại."],
    ["Bắt côn trùng của cây nắp ấm.", "Vận động nở hoa của cây hoa hướng dương.", "Ngọn cây hướng về phía có ánh sáng.", "Vận động cụp lá của cây trinh nữ."],
    ["Vận động nở hoa có sự cảm ứng của nhiệt độ và ánh sáng.", "Vận động bắt mồi của cây nắp ấm.", "Sự đóng mở của lá cây trinh nữ khí khổng đóng mở.", "Vận động bắt mồi của cây gọng vó."],
    ["Có sự phân chia và lớn lên của các tế bào (liên quan chủ yếu đến hiện tượng sức trương nước).", "Không có sự phân chia và lớn lên của các tế bào (liên quan chủ yếu đến hiện tượng sức trương nước).", "Không có sự chết đi của các tế bào (liên quan chủ yếu đến hiện tượng sức trương nước).", "Có sự chết đi nhanh chóng của các tế bào (liên quan chủ yếu đến hiện tượng sức trương nước)."],
    ["Vận động của rễ hướng về lòng đất.", "Hướng mà cây sẽ cử động vươn đến.", "Cử động sinh trưởng cây về phía có ánh sáng.", "Vận động sinh trưởng của cây trước tác nhân kích thích của môi trường."],
    ["Cảm ứng của thực vật thường diễn ra chậm.", "Cảm ứng của thực vật biểu hiện chủ yếu bằng các cử động dinh dưỡng hoặc sinh trưởng.", "Cảm ứng của động vật diễn ra nhanh hơn của thực vật.", "Tất cả cảm ứng của động vật còn gọi là phản xạ."],
    ["Auxin phân bố không đều ở hai phía, phía được chiếu sáng thì nhiều auxin hơn.", "Auxin phân bố nhiều hơn về phía không được chiếu sáng, tế bào sinh trưởng nhanh hơn.", "Auxin phân bố ở phía được chiếu sáng nhiều hơn, tế bào sinh trưởng nhanh hơn.", "Auxin phân bố nhiều hơn về phía không được chiếu sáng, ức chế tế bào sinh trưởng."],
    ["Có nhiều tác nhân kích thích từ môi trường.", "Liên quan đến sự phân chia tế bào.", "Phản ứng của cây với tác nhân kích thích từ 1 hướng xác định.", "Phản ứng của cây với tác nhân kích thích của môi trường."],
    ["Hướng sáng.", "Hướng sáng âm.", "Hướng sáng âm.", "Hướng sáng và hướng gió."],
    ["Hướng sáng dương.", "Hướng nước dương.", "Hướng hóa dương.", "Hướng đất dương."],
    ["Hướng nước.", "Hướng nước âm.", "Hướng phân bón.", "Hướng hóa."],
    ["Phía có bón phân đạm.", "Phía không được bón phân đạm.", "Phía có nhiều nước.", "Phía được chiếu sáng."],
    ["Phía có bón phân đạm.", "Phía không được bón phân đạm.", "Phía có nhiều nước.", "Phía được chiếu sáng."],
    ["1.", "2.", "3.", "4."],
    // bài 17
    ["của một số tác nhân môi trường sống, đảm bảo cho cơ thể tồn tại và phát triển", "của môi trường sống, đảm bảo cho cơ thể tồn tại và phát triển", "định hướng của môi trường sống, đảm bảo cho cơ thể tồn tại và phát triển", "của môi trường (bên trong và bên ngoài cơ thể) để tồn tại và phát triển"],
    ["bộ phận tiếp nhận kích thích → bộ phận phân tích và tổng hợp thông tin → bộ phận phản hồi thông tin", "bộ phận tiếp nhận kích thích → bộ phận thực hiện phản ứng → bộ phận phân tích và tổng hợp thông tin → bộ phận phản hồi thông tin", "bộ phận tiếp nhận kích thích → bộ phận phân tích và tổng hợp thông tin → bộ phận thực hiện phản ứng", "bộ phận tiếp nhận kích thích → bộ phận trả lời kích thích → bộ phận thực hiện phản ứng"],
    ["rải rác dọc theo khoang cơ thể và liên hệ với nhau qua sợi thần kinh tạo thành mạng lưới tế bào thần kinh", "phân bố đều trong cơ thể và liên hệ với nhau qua sợi thần kinh tạo thành mạng lưới tế bào thần kinh", "rải rác trong cơ thể và liên hệ với nhau qua sợi thần kinh tạo thành mạng lưới tế bào thần kinh", "phân bố tập trung ở một số vùng trong cơ thể và liên hệ với nhau qua sợi thần kinh tạo thành mạng lưới tế bào thần kinh"],
    ["trả lời kích thích cục bộ", "co toàn bộ cơ thể", "co rút chất nguyên sinh", "chuyển động cả cơ thể"],
    ["1", "3", "4", "5"],
    ["số lượng tế bào thần kinh tăng lên", "mỗi hạch là một trung tâm điều khiển một vùng xác định của cơ thể", "các tế bào thần kinh trong hạch nằm gần nhau", "các hạch thần kinh liên hệ với nhau"],
    ["duỗi thẳng cơ thể", "co toàn bộ cơ thể", "di chuyển đi chỗ khác", "co ở phần cơ thể bị kích thích"],
    ["nằm dọc theo chiều dài cơ thể", "nằm dọc theo lưng và bụng", "nằm dọc theo lưng", "phân bố ở một số phần cơ thể"],
    ["Phản ứng của cơ thể thông qua hệ thần kinh trả lời lại các kích thích chỉ bên ngoài cơ thể.", "Phản ứng của cơ thể thông qua hệ thần kinh chỉ trả lời lại các kích thích bên trong cơ thể.", "Phản ứng của cơ thể thông qua hệ thần kinh trả lời lại các kích thích bên trong hoặc bên ngoài cơ thể.", "Phản ứng của cơ thể trả lời lại các kích thích đồng thời thông qua mạng lưới thần kinh bên ngoài cơ thể."],
    ["màng trước synapse", "khe synapse", "chùy synapse", "màng sau synapse"],
    ["Nhện có hệ thần kinh dạng chuỗi hạch", "Mực có hệ thần kinh dạng chuỗi hạch", "Sứa có hệ thần kinh mạng lưới", "Cá có thệ thần kinh mạng lưới"],
    ["màng trước synapse", "khe synapse", "chùy synapse", "màng sau synapse"],
    ["Chùy synapse → khe synapse → màng sau synapse → màng trước synapse.", "Khe synapse → màng trước synapse → chuỳ synapse → màng sau synapse.", "Màng trước synapse → chuỳ synapse → khe synapse → màng sau synapse.", "Chuỳ synapse → màng trước synapse → khe synapse → màng sau synapse."],
    ["được hình thành trong quá trình sống và không bền vững", "không di truyền được, mang tính cá thể", "có số lượng hạn chế", "thường do vỏ não điều khiển"],
    ["1", "2", "3", "4"],
    ["Được hình thành trong quá trình sống và không bền vững", "Không di truyền được, mang tính cá thể", "Có số lượng hạn chế", "Thường do vỏ não điều khiển"],
    ["(1) và (4)", "(2) và (3)", "(2), (3) và (4)", "(1), (2) và (4)"],
    ["Làm thay đổi tính thấm của dung dịch ở tận cùng sợi trục, từ đó làm xuất bào các bóng chứa chất trung gian hóa học", "Tác động lên thụ thể ở màng sau xinap, làm thay đổi tính thấm của màng sau dẫn đến xung thần kinh được dẫn truyền", "Làm tăng nồng độ ion của dung dịch ngoại bào, từ đó làm tăng độ lớn của điện thế nghỉ", "Làm thay đổi hướng truyền của xung thần kinh khi đi qua xinap"],
    ["Ca2+ vào làm bóng chứa acetylcholine gắn vào màng trước và vỡ ra, giải phóng acetylcholine vào khe xinap → Xung thần kinh đến làm Ca2+ đi vào chùy xinap → acetylcholine gắn vào thụ thể trên màng sau và làm xuất hiện điện thế hoạt động lan truyền đi tiếp", "Ca2+ vào làm bóng chứa acetylcholine gắn vào màng trước và vỡ ra, giải phóng acetylcholine vào khe xinap → acetylcholine gắn vào thụ thể trên màng sau và làm xuất hiện điện thế hoạt động lan truyền đi tiếp → Xung thần kinh đến làm Ca2+ đi vào chùy xinap", "acetylcholine gắn vào thụ thể trên màng sau và làm xuất hiện điện thế hoạt động lan truyền đi tiếp → Xung thần kinh đến làm Ca2+ đi vào chùy xinap → Ca2+ vào làm bóng chứa acetylcholine gắn vào màng trước và vỡ ra, giải phóng acetylcholine vào khe xinap", "Xung thần kinh đến làm Ca2+ đi vào chùy xinap → Ca2+ vào làm bóng chứa acetylcholine gắn vào màng trước và vỡ ra, giải phóng acetylcholine vào khe xinap → acetylcholine gắn vào thụ thể trên màng sau và làm xuất hiện điện thế hoạt động lan truyền đi tiếp"],
    // bài 18
    ["Chuỗi những phản ứng trả lời lại các kích thích của môi trường, nhờ đó động vật tồn tại và phát triển.", "Các phản xạ có điều kiện của động vật học được trong quá trình sống.", "Các phản xạ không điều kiện, mang tính bẩm sinh của động vật, giúp chúng được bảo vệ.", "Các phản xạ không điều kiện, nhưng được sự can thiệp của não bộ."],
    ["Tăng khả năng sinh tồn của động vật.", "Đảm bảo cho sự thành công sinh sản.", "Là một cơ chế cân bằng nội môi, duy trì môi trường ổn định.", "Giảm khả năng sinh tồn của động vật."],
    ["Trường hợp cơ thể phản ứng trước những hoạt động phức tạp.", "Sự phối hợp giữa tập tính bẩm sinh và tập tính thứ sinh, được hình thành khi điều kiện sống thay đổi.", "Sự phối hợp của nhiều loại tập tính thứ sinh.", "Sự phối hợp của nhiều loại tập tính bẩm sinh."],
    ["Tập tính thứ sinh.", "Tập tính bẩm sinh.", "Học được.", "Thói quen."],
    ["Kiếm ăn.", "Sinh sản.", "Di cư.", "Bảo vệ lãnh thổ."],
    ["Nhện chăng tơ.", "Đèn giao thông màu đỏ, người qua đường dừng lại.", "Thú con bú sữa mẹ.", "Chim sinh sản."],
    ["Có sự thay đổi linh hoạt trong đời sống cá thể.", "Rất bền vững và không thay đổi.", "Là tập hợp các phản xạ không điều kiện diễn ra theo một trình tự nhất định.", "Do kiểu gen quy định."],
    ["Không liên tục và không gây nguy hiểm gì.", "Lặp đi lặp lại nhiều lần và không gây nguy hiểm gì.", "Ngắn gọn và không gây nguy hiểm gì.", "Giảm dần cường độ và không gây nguy hiểm gì."],
    ["In vết.", "Quen nhờn.", "Học liên kết.", "Học xã hội."],
    // bài 19
    ["Kích thước và tuổi của sinh vật.", "Kích thước và khối lượng cơ thể.", "Khối lượng và tuổi tác của sinh vật.", "Tuổi của sinh vật."],
    ["Ngoài của cá thể, gồm thay đổi chiều cao và cân nặng.", "Ngoài chu kỳ sống của cá thể, gồm thay đổi về số lượng tế bào, cấu trúc, hình thái, trạng thái sinh lý.", "Trong chu kỳ sống của cá thể, gồm chiều cao, cân nặng.", "Trong chu kỳ sống của cá thể, gồm thay đổi về số lượng tế bào, cấu trúc, hình thái, trạng thái sinh lý."],
    ["Tăng khối lượng, số lượng và kích thước của tế bào.", "Tăng khối lượng, số lượng và kích thước của chiều cao.", "Tăng khối lượng, số lượng và kích thước của cân nặng.", "Tăng khối lượng, số lượng của tế bào."],
    ["Sống trung bình của các cá thể trong loài.", "Sinh con của sinh vật.", "Mà sinh vật chết.", "Sống của một sinh vật."],
    ["Chết đi, sinh ra, lớn lên đẻ con và chết đi.", "Sinh ra, lớn lên, phát triển thành cơ thể trưởng thành, sinh sản tạo cơ thể mới, già đi rồi chết.", "Sinh ra, lớn lên, phát triển thành cơ thể trưởng thành, sinh sản tạo cơ thể mới.", "Sinh ra, lớn lên, phát triển thành cơ thể trưởng thành, sinh sản tạo cơ thể mới và già đi."],
    ["Hạt đậu nảy mầm thành cây con.", "Voi mẹ sinh ra voi con.", "Quả trứng gà nở ra gà con.", "Cây đậu cao thêm 3 cm sau hai ngày."],
    ["Cây cam ra hoa.", "Lợn tăng thêm 3 cm sau một tuần.", "Sự tăng kích thước của lá cây.", "Diện tích phiến lá tăng lên."],
    ["Cơ thể thực vật ra hoa.", "Cơ thể thực vật tạo hạt.", "Cơ thể thực vật tăng kích thước.", "Cơ thể thực vật rụng lá, hoa."],
    ["0.", "3.", "4.", "5."],
    ["1, 4.", "3, 5.", "2, 3.", "4, 5."],
    //  bài 20
    ["Abscisic acid, cytokinin.", "Abscisic acid, ethylene.", "Cytokinin, ethylene.", "Ethylene, gibberellin."],
    ["Abscisic acid, cytokinin, gibberellin.", "Abscisic acid, ethylene.", "Auxin, ethylene, gibberellin.", "Auxin, cytokinin, gibberellin."],
    ["Phát triển chồi bên, làm tăng sự hóa già của tế bào.", "Phát triển chồi bên, làm chậm sự già hóa của tế bào.", "Làm chậm sự phát triển của chồi bên và sự hóa già của tế bào.", "Làm chậm sự phát triển của chồi bên, làm chậm sự hóa già của tế bào."],
    ["Cây, lóng, trạng thái ngủ của chồi, của hạt, làm khí khổng mở.", "Cành, lóng, làm mất trạng thái ngủ của chồi, của hạt, làm khí khổng đóng.", "Cành, lóng, gây trạng thái ngủ của chồi, của hạt, làm khí khổng đóng.", "Cành, lóng, làm mất trạng thái ngủ của chồi, của hạt, làm khí khổng mở."],
    ["Tham gia điều tiết các hoạt động sống của cây.", "Chỉ có tác dụng ức chế hoạt động của cây.", "Có tác dụng kháng bệnh cho cây.", "Chỉ có tác dụng kích thích sinh trưởng của cây."],
    ["Phân hóa, không có khả năng phân chia tạo tế bào mới trong suốt đời sống thực vật.", "Chưa phân hóa, có khả năng phân chia tạo tế bào mới trong suốt đời sống thực vật.", "Chưa phân hóa, không có khả năng phân chia tạo tế bào mới trong suốt đời sống thực vật.", "Phân hóa, có khả năng phân chia tạo tế bào mới trong suốt đời sống thực vật."],
    ["Ở thân.", "Ở chồi nách.", "Ở đỉnh rễ.", "Ở chồi đỉnh."],
    // tln
    ["Giun đất và Nhện", "Vi khuẩn E.coli và Trùng amip", "Trùng giày và Trùng amip", "Nhện và Trùng giày"],
    ["Cá và Cua", "Chỉ có Thủy tức", "Thủy tức và Sứa", "Giun đốt và Mực"],
    ["Sư tử, Chó, Mèo và Cá", "Cá, Sứa và Mực", "Mèo, Cá và Mực", "Chỉ có Chó và Mèo"],
    ["Cá và Sứa", "Sứa và Mực", "Mèo và Cá", "Chó và Mực"],

    ["Chỉ có Thời tiết không thuận lợi", "Hướng nước chảy, Thời tiết không thuận lợi và Thức ăn", "Thức ăn, Hoạt động sinh sản và Thời tiết không thuận lợi", "Hoạt động sinh sản và Hướng nước chảy"],
    ["Vị trí Mặt Trời, Vị trí Trăng và Địa hình", "Từ trường Trái Đất, Thành phần hóa học của nước và Hướng dòng nước chảy", "Vị trí Mặt Trời, Từ trường Trái Đất và Thành phần hóa học của nước", "Hướng dòng nước chảy, Địa hình và Thành phần hóa học của nước"],
    ["Tìm kiếm bạn tình, Tìm tổ, Ấp trứng và Bảo vệ con non", "Kiếm ăn, Ấp trứng và Tìm tổ", "Tìm tổ, Kiếm ăn và Bảo vệ con non", "Chỉ có Tìm kiếm bạn tình và Ấp trứng"],
    ["Hợp tác, Thứ bậc và Vị tha", "Tìm tổ, Chăm sóc con non và Thứ bậc", "Hợp tác, Chăm sóc con non và Tìm tổ", "Vị tha, Tìm tổ và Chăm sóc con non"],
];

// Chỉ số của đáp án đúng ban đầu cho mỗi câu hỏi
const correctAnswers = [
    // bài 15
    0, 2, 1, 3, 0,
    2, 0, 1, 3, 3,
    1, 2, 0, 1, 0,
    0, 0, 2,
    // bài 17
    3, 2, 2, 1, 3,
    1, 1, 0, 2, 3,
    3, 3, 3, 2, 2,
    2, 0, 0, 3,
    // bài 18
    0, 3, 1, 1, 3,
    1, 0, 1, 1,
    // bài 19
    1, 3, 0, 3, 1,
    3, 0, 2, 0, 1,
    //  bài 20
    1, 3, 1, 2, 0,
    1, 0, 
    // tln
    2, 2, 0, 1,

    2, 0, 0, 0,
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
