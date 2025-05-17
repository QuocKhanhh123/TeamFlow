'use client'
import { useState } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
export default function RegisterPage() {
  const [form, setForm] = useState({email : '',  username: '', fullname: '', password: '' })
  const router = useRouter()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    const res = await fetch('/api/auth/register', {
      method: 'POST',
      body: JSON.stringify(form),
    })

    if (res.ok) router.push('/login')
  }

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-[#0f111a] px-4 py-12">
      <div className="w-full max-w-md space-y-6">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-white">TaskFlow</h1>
          <h2 className="mt-2 text-xl font-semibold text-white">Tạo tài khoản mới</h2>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="text-left">
            <label className="block text-sm font-medium text-white">Họ tên</label>
            <input
              type="text"
              placeholder="Nguyễn Văn A"
              onChange={(e) => setForm({ ...form, fullname: e.target.value })}
              required
              className="mt-1 w-full rounded-md border border-gray-600 bg-transparent px-4 py-2 text-sm text-white placeholder-gray-400 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
            />
          </div>

          <div className="text-left">
            <label className="block text-sm font-medium text-white">Email</label>
            <input
              type="text"
              placeholder="name@example.com"
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              required
              className="mt-1 w-full rounded-md border border-gray-600 bg-transparent px-4 py-2 text-sm text-white placeholder-gray-400 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
            />
          </div>

          <div className="text-left">
            <label className="block text-sm font-medium text-white">Tên tài khoản</label>
            <input
              type="text"
              placeholder="Nhập tên tài khoản"
              onChange={(e) => setForm({ ...form, username: e.target.value })}
              required
              className="mt-1 w-full rounded-md border border-gray-600 bg-transparent px-4 py-2 text-sm text-white placeholder-gray-400 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
            />
          </div>

          <div className="text-left">
            <label className="block text-sm font-medium text-white">Mật khẩu</label>
            <input
              type="password"
              placeholder="••••••••"
              onChange={(e) => setForm({ ...form, password: e.target.value })}
              required
              className="mt-1 w-full rounded-md border border-gray-600 bg-transparent px-4 py-2 text-sm text-white placeholder-gray-400 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
            />
          </div>

          <button
            type="submit"
            className="w-full rounded-md bg-blue-600 px-4 py-2 text-white hover:bg-blue-700 transition"
          >
            Đăng ký
          </button>
        </form>

        <div className="text-center text-sm text-white">
          <p>
            Đã có tài khoản?{" "}
            <Link href="/login" className="text-blue-500 hover:underline">
              Đăng nhập
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
