import Link from "next/link"
import { ArrowRight } from "lucide-react"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-slate-900 text-white">
      {/* Header */}
      <header className="px-4 lg:px-6 h-14 flex items-center border-b border-slate-700">
        <Link className="flex items-center justify-center" href="/">
          <span className="font-bold text-2xl">TaskFlow</span>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <Link
            className="text-l font-medium hover:underline underline-offset-4"
            href="/login"
          >
            Đăng nhập
          </Link>
          <Link
            className="text-l font-medium hover:underline underline-offset-4"
            href="/register"
          >
            Đăng ký
          </Link>
        </nav>
      </header>

      {/* Hero Section */}
      <main className="flex-1">
        <section className="w-full py-20 md:py-32 lg:py-40 xl:py-48 bg-slate-900">
          <div className="max-w-4xl mx-auto px-4 text-center space-y-6">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight">
              Quản lý dự án hiệu quả với TaskFlow
            </h1>
            <p className="text-lg md:text-xl text-slate-300 max-w-2xl mx-auto">
              Nền tảng quản lý dự án và công việc giúp bạn theo dõi, phân công và
              hoàn thành công việc một cách hiệu quả.
            </p>
            <div className="flex justify-center gap-4 flex-wrap">
              <Link href="/register">
                <button className="inline-flex items-center px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-md transition">
                  Bắt đầu ngay
                  <ArrowRight className="ml-2 h-4 w-4" />
                </button>
              </Link>
              <Link href="/login">
                <button className="inline-flex items-center px-6 py-3 border border-white text-white font-medium rounded-md hover:bg-white hover:text-slate-900 transition">
                  Đăng nhập
                </button>
              </Link>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="w-full py-16 md:py-24 lg:py-20 bg-slate-800">
          <div className="max-w-6xl mx-auto px-4 grid gap-10 sm:grid-cols-2 md:grid-cols-3 text-left">
            <div className="space-y-2">
              <h3 className="text-xl font-bold">Quản lý dự án</h3>
              <p className="text-slate-300">
                Tạo và quản lý nhiều dự án cùng lúc với giao diện trực quan.
              </p>
            </div>
            <div className="space-y-2">
              <h3 className="text-xl font-bold">Theo dõi công việc</h3>
              <p className="text-slate-300">
                Tạo, phân công và cập nhật trạng thái công việc dễ dàng.
              </p>
            </div>
            <div className="space-y-2">
              <h3 className="text-xl font-bold">Cộng tác hiệu quả</h3>
              <p className="text-slate-300">
                Bình luận và trao đổi trực tiếp trên từng công việc.
              </p>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full border-t border-slate-700 px-4 md:px-6">
        <p className="text-xs text-slate-400">
          &copy; {new Date().getFullYear()} TaskFlow. All rights reserved.
        </p>
      </footer>
    </div>
  )
}
