Cách chạy dự án:
WEB:
B1: Clone Poject:git clone https://github.com/haupotter72/PotterGeminiAiFlutter.git
B2:cd đến thư mục prj:cd [tên thư mục project]
B3:Cài đặt các dependencies (thư viện) cần thiết:
npm install

yarn install
Một số lưu ý:

Đảm bảo máy bạn đã cài đặt NodeJS và npm/yarn
Kiểm tra file package.json để biết chính xác lệnh chạy project (có thể là npm start, npm run dev, ...)
Nếu gặp lỗi, hãy kiểm tra:

Phiên bản Node.js có phù hợp không (xem trong package.json)
Các biến môi trường có được cấu hình đúng không (file .env)
Log lỗi trong terminal để xử lý

#APP:
B1: Clone Poject:git clone https://github.com/haupotter72/PotterGeminiAiFlutter.git
B2:cd đến thư mục prj:cd [tên thư mục project]
B3:Lấy các dependencies từ file pubspec.yaml:
flutter pub get
B4:Kiểm tra cấu hình và thiết bị:
flutter doctor
B5:Chạy project:
flutter run
Một số lưu ý quan trọng:

1. Đảm bảo đã cài đặt:
- Flutter SDK >= 3.0
- Dart >= 2.18
- Firebase Project
- VS Code hoặc Android Studio

2. Kiểm tra các yêu cầu:
- Phiên bản Flutter phù hợp (trong file pubspec.yaml)
- Cấu hình các file môi trường (nếu có)

3. Cấu hình Firebase:
- Tạo dự án trên Firebase.
- Thêm tệp google-services.json (Android) và GoogleService-Info.plist (iOS) vào thư mục tương ứng.
- Đảm bảo các tệp được khai báo trong pubspec.yaml.

4. Cấu hình API (nếu có sử dụng):
- Tạo file .env tại thư mục gốc: "API_KEY=your-api-key"
  
Kết nối thiết bị thật hoặc máy ảo
Xử lý lỗi thường gặp:
Nếu gặp lỗi về dependencies: thử xóa file pubspec.lock và chạy lại flutter pub get
Nếu có vấn đề về build: chạy flutter clean rồi build lại
Với iOS: chạy pod install trong thư mục ios
