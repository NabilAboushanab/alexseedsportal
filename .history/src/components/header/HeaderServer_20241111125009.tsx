/* Header styles */
.header {
  display: flex;
  justify-content: space-between; /* توزيع المساحة بين العناصر */
  align-items: center;
  padding: 20px;
  position: relative; /* تمكين التمركز باستخدام absolute للعنصر التالي */
}

/* Navbar styles */
.navbar {
  display: flex;
  align-items: center;
  justify-content: flex-start; /* محاذاة العناصر لليسار */
}

/* Right section styles */
.right {
  display: flex;
  align-items: center;
  gap: 10px;
  position: absolute; /* لجعلها في أعلى اليمين */
  top: 20px; /* إبعاد الزر عن الحافة العلوية */
  right: 40px; /* محاذاة الزر إلى اليمين */
}

/* Portal Web styles */
.portal-web {
  font-size: 24px;
  font-weight: bold;
  color: #333;
  position: absolute; /* لجعلها في أعلى اليسار */
  top: 20px; /* إبعاد النص عن الحافة العلوية */
  left: 20px; /* محاذاة النص إلى اليسار */
}

/* Button styles */
.btn {
  cursor: pointer;
  background-color: green;
  color: white;
  border-radius: 10px;
  padding: 5px 10px;
  font-size: 21px;
  font-weight: 600;
  align-items: center;
  transition: background-color 0.3s; /* تأثير التحول عند تمرير المؤشر */
}

.btn:hover {
  background-color: darkblue;
}

/* Navigation link styles */
.navLinkWrapper {
  display: flex;
  align-items: center;
  justify-content: flex-start;
}

.navLinks {
  display: flex;
  align-items: center;
  justify-content: flex-start;
}

.navLink {
  font-size: 20px;
  font-weight: 600;
  margin: 0 12px;
  cursor: pointer;
}

/* Submenu styles */
.navLink.departments {
  position: relative;
}

.subMenu {
  position: absolute;
  top: 100%; /* وضع القائمة الفرعية أسفل العنصر */
  left: 0;
  display: none;
  background-color: rgb(227, 225, 225);
  list-style-type: none;
  padding-left: 20px;
  min-width: 200px;
}

.navLink.departments:hover .subMenu {
  display: block;
}

.subMenu li {
  padding: 8px 0;
  color: #333;
}

.subMenu li a {
  color: inherit;
  text-decoration: none;
}

.subMenu li a:hover {
  background-color: #bbb;
}

/* Responsive styles */
@media (max-width: 1080px) {
  .navLinkWrapper {
    flex-direction: column;
    align-items: flex-start;
  }

  .navLinks {
    flex-direction: column;
    padding-left: 0;
  }
}
