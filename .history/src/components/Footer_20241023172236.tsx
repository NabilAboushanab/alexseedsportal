.footer {
    background-color: #333; /* لون الخلفية */
    color: white; /* لون النص */
    padding: 20px; /* تباعد داخلي */
    text-align: center; /* محاذاة النص للوسط */
}

.marquee {
    overflow: hidden; /* إخفاء النص الزائد */
    white-space: nowrap; /* عدم التفاف النص */
    width: 100%; /* عرض 100% */
}

.marquee p {
    display: inline-block; /* عرض ككتلة داخلية */
    animation: marquee 10s linear infinite; /* تأثير الحركة */
}

@keyframes marquee {
    from {
        transform: translateX(100%); /* يبدأ من خارج الشاشة على اليمين */
    }
    to {
        transform: translateX(-100%); /* ينتهي عند خارج الشاشة على اليسار */
    }
}
