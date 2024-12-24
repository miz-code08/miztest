const questions = [
    "Đâu là đặc điểm của cổng logic AND?",
    "Đâu là đặc điểm của cổng logic OR?",
    "Đâu là đặc điểm của cổng logic NOT?",
    "Đâu là đặc điểm của cổng logic XOR?",
    "Khi tắt máy hoặc khởi động lại, dữ liệu trong bộ phận nào sau đây mất đi?",
    "Cho biểu thức logic A AND B và A OR B. Với A=0 và B=0, giá trị của 2 biểu thức logic lần lượt là:",
    "Cho biểu thức logic A AND B và A OR B. Với A=1 và B=0, giá trị của 2 biểu thức logic lần lượt là:",
    "Mục “Vận hành” (Operation) trong tài liệu hướng dẫn sử dụng thiết bị số có ý nghĩa gì?",
    "Mục “Bảo trì” (Maintenance) trong tài liệu hướng dẫn sử dụng thiết bị số có ý nghĩa gì?",
    "Mục “Lắp đặt/thiết đặt” (Setup) trong tài liệu hướng dẫn sử dụng thiết bị số có ý nghĩa gì?",
    "Thông số kĩ thuật quan trọng của thiết bị số là:",
    "Thông số kĩ thuật quan trọng về hình ảnh thiết bị số là:",
    "Biết một màn hình có kích thước chiều dài và chiều rộng là 33.1 cm x 20.7 cm. Hỏi màn hình đó có kích thước bao nhiêu inch, biết 1 inch = 2,54 cm?",
    "12 megapixel có bao nhiêu điểm ảnh?",
    "Hệ điều hành là nơi?",
    "Hai hệ điều hành phổ biến cho thiết bị di động?",
    "Các phần mềm để soạn thảo văn bản, duyệt web, xử lí hình ảnh, viết chương trình bằng ngôn ngữ Python được gọi là?",
    "Các phần mềm thiết kế cho việc vận hành và điều khiển phần cứng máy tính được gọi là?",
    "Đâu là chức năng quản lí tệp của hệ điều hành?",
    "Đâu là chức năng quản lí, khai thác các thiết bị của hệ thống?",
    "Loại máy tính mạnh nhất là?",
    "Đây là hệ điều hành có giao diện đẹp mắt, tính ổn định cao, bảo mật tốt và được cài đặt sẵn miễn phí trên các thiết bị của Apple?",
    "Hệ điều hành LINUX có nguồn gốc từ hệ điều hành nào dưới đây?",
    "Hệ điều hành theo chế độ đa nhiệm, cho phép tại mỗi thời điẻm có nhiều chương trình được thực hiện là đặc điểm của hệ điều hành máy tính thế hệ thứ mấy?",
    "Các phiên bản Windows đầu tiên chạy trên nền tảng của?",
    "Hệ điều hành được sử dụng cho các máy tính lớn, siêu máy tính là?",
    "Phím tắt Alt + tab có tác dụng?",
    "Phím tắt Win + D có tác dụng?",
    "Cổng USB được sử dụng để?",
    "Cổng VGA được sử dụng để?",
    "Cổng tròn 3.5 mm được sử dụng để?",
    "Em cần kết nối máy tính với máy chiếu, em sử dụng cổng nào dưới đây?",
    "Đâu không phải một trợ thủ cá nhân?",
    "Kết nối nào không phải là kết nối phổ biến trên các PDA (trợ thủ cá nhân) hiện nay?",
    "Phần mềm thương mại là gì?",
    "Phần mềm nguồn đóng là gì?",
    "Phần mềm khai thác trực tuyến chỉ sử dụng được trên môi trường nào?",
    "Phần mềm thương mại thường là loại phần mềm nào?",
    "Google Slides là công cụ nào?",
    "Phần mềm khai thác trực tuyến có đặc điểm gì?",
    "Đâu không phải là một loại phần mềm ứng dụng?",
    "Phần mềm tra cứu bản đồ và chỉ dẫn đường đi maps.google.com được cung cấp dưới dạng?",
    "Phần mềm phục vụ học tập như ngôn ngữ lập trình C++ là phần mềm gì?",
    "Giấy phép được áp dụng rộng rãi nhất là?",
    "Phần mềm nào sau đây không phải là phần mềm trực tuyến?",
    "Ứng dụng nào dưới đây là phần mềm thương mại trong lĩnh vực xử lí ảnh?",
    "Phần mềm cần cài đặt đầu tiên vào máy tính để máy tính hoạt động được có thể là?",
    "Phần mềm trình chiếu Microsoft Powerpoint là?",
    "Lưu trữ trực tuyến là gì?",
    "Điểm mạnh chính của lưu trữ trực tuyến là gì?",
    "Điều gì tạo ra tính khả thi của lưu trữ trực tuyến?",
    "Đâu là dịch vụ lưu trữ trực tuyến phổ biến?",
    "Một trong các nhược điểm của lưu trữ trực tuyến là gì?",
    "Google Drive là?",
    "Tính năng chia sẻ tệp là gì?",
    "Để tìm kiếm thông trên Internet, em sử dụng?",
    "Để tìm kiếm thông tin trên Google bằng giọng nói, bạn có thể sử dụng ứng dụng nào trên điện thoại di động?",
    "Bạn muốn tìm kiếm các trang web chỉ trong một loại tệp tin cụ thể, bạn sẽ sử dụng từ khoá gì?",
    "Để tìm kiếm một cụm từ chính xác trên Google, bạn nên sử dụng kí tự nào?",
    "Để thay đổi kích thước ảnh trong GIMP cần sử dụng công cụ nào?",
    "Để di chuyển ảnh nhưng không di chuyển khung ảnh ta sử dụng công cụ nào?",
    "Để cắt ảnh trong GIMP cần sử dụng công cụ nào?",
    "Để lật ảnh trong GIMP cần sử dụng công cụ nào?",
    "Tại sao phải hòa trộn độ sáng và sắc thái của các điểm ảnh giữa vùng mẫu và vùng đích?",
    "Phát biểu nào sau đây đúng với tác dụng của công cụ Clone?",
    "Phát biểu nào sau đây đúng với tác dụng của công cụ Healing?",
    "Ảnh động là gì?",
    "Các khung hình trong ảnh động được gọi là gì?",
    "Lệnh nào được sử dụng để xuất ảnh động trong GIMP?",
    "Khi mở phần mềm có giao diện bắt đầu em muốn mở một dự án mới em cần chọn?",
    "Giao diện chỉnh sửa video muốn đưa hình ảnh vào để tạo video em chọn nút nào?",
    "Phần mềm Animiz không hỗ trợ được những định dạng ảnh nào?",
    "Để chia tệp âm thanh thành nhiều đoạn, ta sử dụng lệnh?",
    "Để chỉnh sửa âm thanh của video, mở cửa sổ nào sau đây?",
    "Để thực hiện xóa âm thanh hoặc xóa hình ảnh, dùng lệnh?",
    "Tạo dự án phim hoạt hình: Tại giao diện bắt đầu của Animiz, chọn?",
    "Đối tượng nào trong giao diện chỉnh sửa video cho phép thêm mẫu nhân vật vào dự án?",
    "Đối tượng nào trong giao diện chỉnh sửa video cho phép thêm văn bản vào dự án?",
    "Công cụ nào sau đây giúp bạn thêm phụ đề vào video?",
    "Thao tác nào sau đây có thể thay đổi khung thời gian xuất hiện của hình ảnh trong video?",
];


const answers = [
    ["Đầu ra bằng 1, khi tất cả bằng 1", "Đầu ra bằng 1, khi hoặc một trong các đầu vào bằng 1", "Đầu ra có giá trị đảo lại giá trị đầu vào", "Đầu ra bằng 1 khi hai đầu vào khác nhau"],
    ["Đầu ra bằng 1, khi tất cả bằng 1", "Đầu ra bằng 1, khi hoặc một trong các đầu vào bằng 1", "Đầu ra có giá trị đảo lại giá trị đầu vào", "Đầu ra bằng 1 khi hai đầu vào khác nhau"],
    ["Đầu ra bằng 1, khi tất cả bằng 1", "Đầu ra bằng 1, khi hoặc một trong các đầu vào bằng 1", "Đầu ra có giá trị đảo lại giá trị đầu vào", "Đầu ra bằng 1 khi hai đầu vào khác nhau"],
    ["Đầu ra bằng 1, khi tất cả bằng 1", "Đầu ra bằng 1, khi hoặc một trong các đầu vào bằng 1", "Đầu ra có giá trị đảo lại giá trị đầu vào", "Đầu ra bằng 1 khi hai đầu vào khác nhau"],
    ["RAM", "Ổ cứng HDD/SSD", "ROM", "CPU"],
    ["0; 0", "0; 1", "1; 0", "1; 1"],
    ["0; 1", "0; 0", "1; 0", "1; 1"],
    ["Hướng dẫn sử dụng các tính năng của thiết bị", "Hướng dẫn vệ sinh, chăm sóc kĩ thuật,… nhằm đảm bảo sự hoạt động bình thường của thiết bị", "Hướng dẫn chuẩn đoán và xử lí sơ bộ các lỗi thường gặp của thiết bị", "Hướng dẫn lắp ráp hoặc thiết đặt thông số ban đầu cho thiết bị"],
    ["Hướng dẫn sử dụng các tính năng của thiết bị", "Hướng dẫn vệ sinh, chăm sóc kĩ thuật,… nhằm đảm bảo sự hoạt động bình thường của thiết bị", "Hướng dẫn chuẩn đoán và xử lí sơ bộ các lỗi thường gặp của thiết bị", "Hướng dẫn lắp ráp hoặc thiết đặt thông số ban đầu cho thiết bị"],
    ["Hướng dẫn sử dụng các tính năng của thiết bị", "Hướng dẫn vệ sinh, chăm sóc kĩ thuật,… nhằm đảm bảo sự hoạt động bình thường của thiết bị", "Hướng dẫn chuẩn đoán và xử lí sơ bộ các lỗi thường gặp của thiết bị", "Hướng dẫn lắp ráp hoặc thiết đặt thông số ban đầu cho thiết bị"],
    ["Tốc độ CPU, dung lượng RAM, dung lượng lưu trữ", "Tốc độ CPU, dung lượng lưu trữ", "Độ dài đường chéo màn hình", "Dung lượng RAM"],
    ["Độ dài đường chéo màn hình", "Tốc độ CPU", "Dung lượng lưu trữ", "Dung lượng RAM"],
    ["15.4 inch", "16.2 inch", "16 inch", "15 inch"],
    ["12 điểm ảnh", "12 triệu điểm ảnh", "12 tỉ điểm ảnh", "12 nghìn điểm ảnh"],
    ["Phần cứng khai thác hiệu quả của phần mềm", "Tập các chương trình điều khiển và xử lí tạo giao diện trung gian giữa các thiết bị của hệ thống với phần mềm ứng dụng, đồng thời quản lí các thiết bị của hệ thống, phân phối tài nguyên và điều khiển các quá trình xử lí trong hệ thống.", "Tập các chương trình điều khiển và xử lí", "Các ứng dụng quản lí các thiết bị của hệ thống, phân phối tài nguyên và điều khiển các quá trình xử lí trong hệ thống."],
    ["MAC và JAVA", "IOS và Android", "CONTROL và BETA", "Android và QC"],
    ["Ứng dụng di động", "Các thiết bị ngoại vi", "Phần cứng", "Phần mềm ứng dụng"],
    ["Phần mềm hệ thống", "Phần cứng máy tính", "Phần mềm ứng dụng", "Ứng dụng di động"],
    ["Tạo và tổ chức lưu trữ các tệp trên bộ nhớ ngoài, cung cấp các công cụ để tìm kiếm và truy cập các tệp, chia sẻ và bảo vệ tệp.", "Hệ điều hành tự nhận biết có thiết bị ngoại vi mới được kết nối với máy tính qua các cổng vào – ra như: USB, HDMI, Datamini Port, Bluetooth,... và tự động bổ sung các chương trình điều khiển vào hệ thống. Người dùng có thể sử dụng các thiết bị đó ngay sau khi thiết bị kết nối với hệ thống. OS sẽ tự động ngắt kết nối khi tháo thiết bị khỏi hệ thống", "Hệ điều hành cung cấp phương thức giao tiếp để người dùng điều khiển máy tính bằng câu lệnh hoặc qua giao diện đồ họa hay dùng tiếng nói.", "Hệ điều hành có cơ chế nhằm bảo vệ hệ thống và thông tin lưu trữ hạn chế tối đa ảnh hưởng của các sai lầm do vô tình hay cố ý."],
    ["Tạo và tổ chức lưu trữ các tệp trên bộ nhớ ngoài, cung cấp các công cụ để tìm kiếm và truy cập các tệp, chia sẻ và bảo vệ tệp.", "Hệ điều hành tự nhận biết có thiết bị ngoại vi mới được kết nối với máy tính qua các cổng vào – ra như: USB, HDMI, Datamini Port, Bluetooth,... và tự động bổ sung các chương trình điều khiển vào hệ thống. Người dùng có thể sử dụng các thiết bị đó ngay sau khi thiết bị kết nối với hệ thống. OS sẽ tự động ngắt kết nối khi tháo thiết bị khỏi hệ thống", "Hệ điều hành cung cấp phương thức giao tiếp để người dùng điều khiển máy tính bằng câu lệnh hoặc qua giao diện đồ họa hay dùng tiếng nói.", "Hệ điều hành có cơ chế nhằm bảo vệ hệ thống và thông tin lưu trữ hạn chế tối đa ảnh hưởng của các sai lầm do vô tình hay cố ý."],
    ["Máy tính mini", "Máy tính lớn", "Siêu máy tính", "Máy vi tính"],
    ["UNIX", "Windows Vista", "Linux", "Mac OS"],
    ["Windows XP", "UNIX", "Android", "iOS"],
    ["Thứ nhất", "Thứ hai", "Thứ ba", "Thứ tư"],
    ["macOS", "LINUX", "MS DOX", "UNIX"],
    ["macOS", "LINUX", "MS DOX", "UNIX"],
    ["bật cửa sổ chứa biểu tượng cảm xúc", "chuyển sang màn hình nền", "bật/tắt bàn phím ảo trên màn hình", "chuyển cửa sổ đang hoạt động"],
    ["bật cửa sổ chứa biểu tượng cảm xúc", "chuyển sang màn hình nền", "bật/tắt bàn phím ảo trên màn hình", "chuyển cửa sổ đang hoạt động"],
    ["kết nối với các loại thiết bị có giao tiếp USB như: chuột, bàn phím, điện thoại,...", "kết nối với màn hình, máy chiếu,...", "kết nối với các thiết bị âm thanh: loa, tai nghe, micro.", "kết nối với tất cả các thiết bị"],
    ["kết nối với các loại thiết bị có giao tiếp USB như: chuột, bàn phím, điện thoại,...", "kết nối với màn hình, máy chiếu,...", "kết nối với các thiết bị âm thanh: loa, tai nghe, micro.", "kết nối với tất cả các thiết bị"],
    ["kết nối với các loại thiết bị có giao tiếp USB như: chuột, bàn phím, điện thoại,...", "kết nối với màn hình, máy chiếu,...", "kết nối với các thiết bị âm thanh: loa, tai nghe, micro.", "kết nối với tất cả các thiết bị"],
    ["Cổng HDMI", "Cổng COM", "Cổng USB.", "Cổng tròn 3,5mm"],
    ["Đồng hồ cơ", "Máy tính bảng", "Đồng hồ thông minh", "Điện thoại thông minh"],
    ["Hồng ngoại", "Wifi", "USB", "Bluetooth"],
    ["Phần mềm không phải trả phí.", "Phần mềm phải trả phí để sử dụng.", "Phần mềm chỉ sử dụng trực tuyến.", "Phần mềm khai thác trực tuyến."],
    ["Mô đun chương trình viết trên ngôn ngữ máy.", "Mô đun chương trình viết trên ngôn ngữ bậc cao.", "Mô đun chương trình viết trên ngôn ngữ máy và bậc cao.", "Phần mềm khai thác trực tuyến."],
    ["Máy tính cá nhân.", "Máy tính laptop.", "Môi trường Web.", "Điện thoại di động."],
    ["Phần mềm nguồn đóng.", "Phần mềm nguồn mở.", "Phần mềm miễn phí.", "Phần mềm khai thác trực tuyến."],
    ["Trình chiếu.", "Soạn thảo văn bản.", "Đồ họa.", "Bảng tính."],
    ["Chỉ sử dụng được trên môi trường Web và có phí.", "Chỉ sử dụng được trên môi trường Web và miễn phí.", "Có thể cài đặt trên máy tính và sử dụng miễn phí.", "Chỉ sử dụng được trên môi trường Web và có thể có phí hoặc miễn phí."],
    ["Phần mềm xử lý văn bản", "Phần mềm chỉnh sửa hình ảnh", "Phần mềm anti-virus", "Phần mềm duyệt web"],
    ["miễn phí (bị hạn chế một số tính năng) và có trả phí nếu không muốn bị hạn chế sử dụng những tính năng phong phú khác", "miễn phí hoàn toàn và không giới hạn tính năng", "có trả phí được cung cấp theo cách linh hoạt, như một dịch vụ, tùy theo nhu cầu của người dùng", "người dùng được tự do khai thác, nghiên cứu, sửa đổi và chia sẻ phần mềm"],
    ["Phần mềm thương mại", "Phần mềm miễn phí", "Phần mềm nguồn đóng", "Phần mềm nguồn mở"],
    ["GLU GPL", "GNU GPN", "GLU GPN", "GNU GPL"],
    ["Microsoft Teams", "Google Docs", "Zoom meeting", "File Explorer"],
    ["Inkcape", "Blender", "GIMP", "Photoshop"],
    ["Microsoft Word", "Microsoft Powerpoint", "Google Chrome", "Window10"],
    ["phần mềm ứng dụng", "phần mềm hệ thống", "phần mềm công cụ", "phần mềm tiện ích"],
    ["Phương thức lưu trữ thông qua băng từ", "Quá trình lưu trữ dữ liệu trên ổ cứng trong máy tính cá nhân", "Hình thức lưu trữ dữ liệu thông qua Internet", "Phương pháp lưu trữ dữ liệu trên đĩa CD"],
    ["Tiết kiệm chi phí", "Tránh được các sự cố, thảm họa,…", "Dễ dàng quản lý dữ liệu", "Khả năng bảo mật dữ liệu."],
    ["Công nghệ đám mây", "Hệ điều hành Windows", "Cơ chế lưu trữ RAID", "Giao thức HTTP"],
    ["Google Drive", "Microsoft Word", "Photoshop", "Skype"],
    ["Tốn nhiều băng thông Internet", "Tốc độ truy cập phụ thuộc vào tốc độ đường truyền", "Giới hạn về khoảng cách địa lí", "Không thể lưu trữ nhiều loại tệp tin"],
    ["dịch vụ lưu trữ trực tuyến của Google", "ứng dụng chỉnh sửa văn bản của Google", "công cụ tìm kiếm của Google", "trình duyệt web của Google"],
    ["Cho phép người dùng gửi tệp đến người khác để xem hoặc chỉnh sửa", "Cho phép người dùng lưu trữ tệp trên đám mây", "Cho phép người dùng tải tệp xuống từ đám mây", "Cho phép người dùng tạo bản sao lưu tệp trong trường hợp tệp gốc bị mất"],
    ["Google", "Gmail", "Cloud", "Python"],
    ["Google Maps", "Google Drive", "Google Assistant", "Google Translate"],
    ["filetype:", "website:", "domain:", "link:"],
    ["Dấu chấm hỏi (?)", "Kí tự gạch chân (_)", "Dấu nháy kép (“)", "Dấu gạch ngang (-)"],
    ["Scale", "Crop", "Free Select", "Perspective"],
    ["Công cụ Move", "Sử dụng thanh cuộn dọc và thanh cuộn ngang", "Công cụ Zoom", "Công cụ Crop"],
    ["Crop", "Rotate", "Free Select", "Perspective"],
    ["Flip", "Rotate", "Scale", "Perspective"],
    ["Để làm cho những điểm ảnh được chỉnh sửa không có sự khác biệt với những điểm ảnh còn lại", "Để bức ảnh được rõ nét, đặc sắc hơn", "Để bức ảnh nhìn chân thực hơn", "Để màu sắc của bức ảnh được hài hòa hơn"],
    ["Sao chép nguyên văn điểm ảnh ở vùng mẫu đến vùng đích", "Sao chép và hòa trộn màu sắc của điểm ảnh ở vùng mẫu với điểm ảnh ở vùng đích", "Sao chép điểm ảnh ở vùng mẫu đến vùng đích theo một cách xác định", "Sao chép điểm ảnh ở vùng đến vùng khác"],
    ["Sao chép và hòa trộn màu sắc của điểm ảnh ở vùng mẫu với điểm ảnh ở vùng đích", "Sao chép điểm ảnh ở vùng mẫu đến vùng đích theo một cách xác định", "Sao chép nguyên văn điểm ảnh ở vùng mẫu đến vùng đích", "Sao chép điểm ảnh ở vùng đích"],
    ["Sự kết hợp và thể hiện của nhiều ảnh tĩnh trong những khoảng thời gian ngắn.", "Các khung hình trong ảnh tĩnh.", "Các hình ảnh tĩnh.", "Các hình ảnh động vật."],
    ["Khung hình tĩnh.", "Ảnh tĩnh.", "Đối tượng trong ảnh.", "Hiệu ứng tự thiết kế."],
    ["File\\Export As.", "Filters Animation\\Playback.", "File\\Open As Layers.", "Filters Animation\\Export Image."],
    ["New Empty Project", "Open Project", "New Project From PPT", "New Video"],
    ["Image", "Sound", "Text", "Video"],
    [".xcf", ".png", ".jpg", ".jpeg"],
    ["Cut out", "Undo", "Split", "Delete"],
    ["Audio editor", "Windows", "Transition Effect", "Timeline"],
    ["Delete Object", "Delete Image", "Delete Animation", "Delete Transitions"],
    ["New Empty Project", "New Empty File", "New Empty Record", "New Empty Video"],
    ["Roles", "Shape", "Sound", "Effect"],
    ["Text", "Shape", "Image", "Sound"],
    ["Subtitle", "Split", "Duration", "Timeline"],
    ["Thay đổi thứ tự ảnh trong Timeline", "Thêm âm thanh mới", "Xóa hình ảnh không mong muốn", "Thêm phụ đề cho video"],
];


// Chỉ số của đáp án đúng ban đầu cho mỗi câu hỏi
const correctAnswers = [
    0, 1, 2, 3, 0,
    0, 0, 0, 1, 3,
    0, 0, 0, 1, 1,
    1, 3, 0, 0, 1,
    2, 3, 1, 2, 2,
    3, 3, 1, 0, 1,
    2, 0, 0, 0, 1,
    0, 2, 0, 0, 3,
    2, 0, 1, 3, 3,
    3, 3, 0, 2, 3,
    0, 0, 1, 0, 0,
    0, 2, 0, 2, 0,
    0, 0, 0, 0, 0,
    0, 0, 0, 0, 0,
    0, 0, 0, 0, 0,
    0, 0, 0, 0, 0,
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
