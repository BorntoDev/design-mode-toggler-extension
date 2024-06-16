## DesignModeToggler Chrome Extension

**Chrome Extension ที่จะช่วยให้เราสามารถเรียกใช้งาน document.designMode เพื่อแก้ไขเนื้อหาในเว็บได้ง่ายขึ้น**

**ฟีเจอร์:**

- ตรวจสอบสถานะปัจจุบันของ DesignMode
- สลับ DesignMode แบบเพียงคลิกปุ่ม
- แสดงข้อความปุ่มที่ชัดเจน แสดงสถานะปัจจุบัน ("เปิดใช้งาน" / "ปิดใช้งาน")

**รายละเอียดทางเทคนิค:**

- Chrome Extension นี้ใช้ API `chrome.tabs.query` และ `chrome.scripting.executeScript` เพื่อโต้ตอบกับเว็บที่ใช้งานอยู่
- หน้าต่างป๊อปอัปถูกนำไปใช้งานโดยใช้ HTML, CSS และ Javascript
