.right {
  display: flex;
  align-items: center;
  gap: 10px;
  position: absolute; /* لجعلها في أعلى اليمين */
  top: 20px; /* إبعاد الزر عن الحافة العلوية */
  right: 40px; /* محاذاة الزر إلى اليمين */
}

.btn {
  cursor: pointer;
  background-color: green;
  color: white;
  border-radius: 10px;
  padding: 5px 10px;
  font-size: 21px;
  font-weight: 600;
  align-items: center;
}

.btn:hover {
  background-color: darkblue;
}

.navbar {
  display: flex;
  align-items: center;
  justify-content: flex-start; /* محاذاة العناصر لليسار */
}

.navLinkWrapper {
  display: flex;
  align-items: center;
  justify-content: flex-start; /* محاذاة العناصر لليسار */
}

.navLinks {
  display: flex;
  align-items: center;
  justify-content: flex-start; /* محاذاة العناصر لليسار */
}

.navLink {
  font-size: 20px;
  font-weight: 600;
  margin: 0 12px;
  cursor: pointer;
}

/* لتغيير نمط العناصر الفرعية (Submenu) */
.navLink.departments {
  position: relative;
}

/* قائمة القوائم الفرعية */
.subMenu {
  position: absolute;
  top: 100%; /* لوضع القائمة الفرعية أسفل العنصر */
  left: 0;
  display: none;
  background-color: rgb(227, 225, 225);
  list-style-type: none;
  padding-left: 20px;
  min-width: 200px;
}

.navLink.departments:hover .subMenu {
  display: block; /* عرض القائمة الفرعية عند التمرير فوق Departments */
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

/* استجابة للعرض الصغير */
@media (max-width: 1080px) {
  .navLinkWrapper {
    flex-direction: column; /* تغيير الاتجاه إلى عمودي */
    align-items: flex-start;
  }

  .navLinks {
    flex-direction: column; /* تغيير الاتجاه إلى عمودي */
    padding-left: 0;
  }
}
