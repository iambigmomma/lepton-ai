import Link from 'next/link'

export default function Home() {
  return (
    <main className="min-h-screen bg-grid">
      {/* Top Banner */}
      <div className="w-full bg-[#111111] py-2 px-4 text-center">
        <Link href="/docs" className="flex items-center justify-center gap-2 text-sm text-gray-300 hover:text-white">
          Integrating Your Own Lambda Account Cloud with Lepton
          <span className="text-xs bg-[#222222] px-2 py-1 rounded">Read more →</span>
        </Link>
      </div>

      {/* Navigation */}
      <nav className="w-full px-6 py-4">
        <div className="flex items-center justify-between mx-auto max-w-7xl">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8">
              <svg viewBox="0 0 32 32" className="text-blue-500">
                <path 
                  fill="currentColor"
                  d="M16 0C7.163 0 0 7.163 0 16s7.163 16 16 16 16-7.163 16-16S24.837 0 16 0zm0 24c-4.418 0-8-3.582-8-8s3.582-8 8-8 8 3.582 8 8-3.582 8-8 8z"
                />
              </svg>
            </div>
            <span className="text-xl font-semibold">Lepton AI</span>
          </div>
          
          <div className="flex items-center gap-8">
            <Link href="https://www.lepton.ai/customers" className="text-gray-300 hover:text-white">Customers</Link>
            <Link href="https://www.lepton.ai/docs/guides" className="text-gray-300 hover:text-white">Docs</Link>
            <Link href="https://www.lepton.ai/pricing" className="text-gray-300 hover:text-white">Pricing</Link>
            <Link href="https://blog.lepton.ai" className="text-gray-300 hover:text-white">Blog</Link>
            <Link href="/dashboard" className="px-4 py-2 bg-blue-600 rounded-md hover:bg-blue-700">
              Dashboard
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="max-w-4xl px-4 mx-auto mt-32 text-center">
        <h2 className="mb-4 text-2xl text-gray-400">Meet the</h2>
        <h1 className="mb-8 font-bold text-7xl">New AI Cloud</h1>
        <p className="max-w-2xl mx-auto mb-12 text-xl text-gray-400">
          Cutting-edge AI inference and training, unmatched cloud-native experience, and top-tier GPU infrastructure.
        </p>
        <div className="flex justify-center gap-6">
          <button className="px-6 py-3 text-lg bg-blue-600 rounded-md hover:bg-blue-700">
            Start Building
          </button>
          <button className="px-6 py-3 text-lg text-gray-300 rounded-md hover:text-white">
            Reserve GPU
          </button>
          <button className="px-6 py-3 text-lg text-gray-300 rounded-md hover:text-white">
            Schedule Demo
          </button>
        </div>
      </div>

      {/* Framework Logos */}
      <div className="max-w-4xl px-4 mx-auto mt-32">
        <div className="flex items-center justify-center gap-16">
          <div className="flex items-center gap-2 text-gray-400">
            <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 8c-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4zm8.94 3c-.46-4.17-3.77-7.48-7.94-7.94V1h-2v2.06C6.83 3.52 3.52 6.83 3.06 11H1v2h2.06c.46 4.17 3.77 7.48 7.94 7.94V23h2v-2.06c4.17-.46 7.48-3.77 7.94-7.94H23v-2h-2.06zM12 19c-3.87 0-7-3.13-7-7s3.13-7 7-7 7 3.13 7 7-3.13 7-7 7z"/>
            </svg>
            Caffe
          </div>
          <div className="flex items-center gap-2 text-gray-400">
            <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm0 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2z"/>
            </svg>
            PyTorch
          </div>
          <div className="flex items-center gap-2 text-gray-400">
            <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2L2 7v10l10 5 10-5V7L12 2zm0 2.236L19.09 8 12 11.764 4.91 8 12 4.236zM4 16.764V9.236L11 13v7.528L4 16.764zm18 0L15 20.528V13l7-3.764v7.528z"/>
            </svg>
            ONNX
          </div>
          <div className="flex items-center gap-2 text-gray-400">
            <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm0 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2z"/>
            </svg>
            etcd
          </div>
        </div>
      </div>

      {/* Why Lepton AI Cloud Section */}
      <div className="max-w-4xl px-4 mx-auto mt-32 text-center">
        <h2 className="mb-4 text-4xl font-bold">Why Lepton AI Cloud</h2>
        <p className="mb-16 text-gray-400">Efficient, reliable and easy to use</p>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {/* First Row */}
          <div className="bg-[#111111] rounded-lg p-8">
            <div className="mb-4 text-4xl font-bold text-blue-500">1B+</div>
            <div className="text-sm text-gray-400">
              tokens processed per day
              <br />by a single deployment
              <br />with 100% uptime
            </div>
          </div>
          <div className="bg-[#111111] rounded-lg p-8">
            <div className="mb-4 text-4xl font-bold text-blue-500">1M+</div>
            <div className="text-sm text-gray-400">
              images generated per day
              <br />by a single deployment
              <br />with 100% uptime
            </div>
          </div>
          <div className="bg-[#111111] rounded-lg p-8">
            <div className="mb-4 text-4xl font-bold text-blue-500">600+</div>
            <div className="text-sm text-gray-400">
              tokens/s max speed with
              <br />Tuna, our fast LLM engine
            </div>
          </div>

          {/* Second Row */}
          <div className="bg-[#111111] rounded-lg p-8">
            <div className="mb-4 text-4xl font-bold text-blue-500">6x+</div>
            <div className="text-sm text-gray-400">
              faster high-resolution
              <br />image generation via our
              <br />distributed engine DistriFusion
            </div>
          </div>
          <div className="bg-[#111111] rounded-lg p-8">
            <div className="mb-4 text-4xl font-bold text-blue-500">10K+</div>
            <div className="text-sm text-gray-400">
              models and Loras
              <br />supported concurrency
              <br />for image generation
            </div>
          </div>
          <div className="bg-[#111111] rounded-lg p-8">
            <div className="mb-4 text-4xl font-bold text-blue-500">1PB</div>
            <div className="text-sm text-gray-400">
              accelerated serverless storage
              <br />for fast distributed training
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
