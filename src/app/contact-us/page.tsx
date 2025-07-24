'use client'
import React, { useState } from 'react'

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    alert("تم إرسال الرسالة بنجاح ✅")
  }

  return <>
    <section dir='rtl' className="min-h-screen px-6 md:px-16 py-16 bg-[#fdf5f3]">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

        <div>
          <h2 className="text-4xl sm:text-5xl font-bold text-main mb-6">تواصل معنا</h2>
          <p className="text-gray-700 text-lg mb-8">
            هل عندك استفسار؟ محتاج مساعدة؟ ابعتلنا رسالتك وهنتواصل معاك في أسرع وقت.
          </p>
          <form onSubmit={handleSubmit} className="space-y-5">
            <input
              type="text"
              name="name"
              placeholder="الاسم بالكامل"
              required
              value={formData.name}
              onChange={handleChange}
              className="w-full p-3 rounded-lg border border-gray-300 focus:outline-main"/>
            <input
              type="email"
              name="email"
              placeholder="البريد الإلكتروني"
              required
              value={formData.email}
              onChange={handleChange}
              className="w-full p-3 rounded-lg border border-gray-300 focus:outline-main"/>
            <input
              type="tel"
              name="phone"
              placeholder="رقم الهاتف"
              value={formData.phone}
              onChange={handleChange}
              className="w-full p-3 rounded-lg border border-gray-300 focus:outline-main"/>
            <textarea
              name="message"
              rows={5}
              placeholder="اكتب رسالتك هنا"
              required
              value={formData.message}
              onChange={handleChange}
              className="w-full p-3 rounded-lg border border-gray-300 focus:outline-main resize-none"></textarea>
            <button
              type="submit"
              className="bg-main text-white py-3 px-6 rounded-full hover:bg-red-700 transition-all font-semibold">
              إرسال الرسالة
            </button>
          </form>
        </div>

        <div className="rounded-2xl overflow-hidden shadow-xl">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d110593.99061252016!2d31.233608900000005!3d30.044419799999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sPizza%20Hut%20Egypt!5e0!3m2!1sar!2seg!4v1691336599414!5m2!1sar!2seg"
            width="100%"
            className="h-[300px] sm:h-[400px] lg:h-[450px]"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </section>
  </>
}
