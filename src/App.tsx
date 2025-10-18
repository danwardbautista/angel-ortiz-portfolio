import { useState } from 'react'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-12 px-4">
      <div className="max-w-4xl mx-auto space-y-8">
        {/* Header Section */}
        <div className="text-center">
          <h1 className="text-5xl font-bold text-gray-900 mb-4">
            Tailwind CSS v4 Demo
          </h1>
          <p className="text-xl text-gray-600">
            Testing various Tailwind utility classes
          </p>
        </div>

        {/* Card with Counter */}
        <div className="bg-white rounded-lg shadow-xl p-8 border border-gray-200">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            Interactive Counter
          </h2>
          <div className="flex items-center justify-center gap-4">
            <button
              onClick={() => setCount(count - 1)}
              className="px-6 py-3 bg-red-500 hover:bg-red-600 text-white font-medium rounded-lg transition-colors duration-200 shadow-md hover:shadow-lg"
            >
              Decrease
            </button>
            <span className="text-4xl font-bold text-indigo-600 min-w-[100px] text-center">
              {count}
            </span>
            <button
              onClick={() => setCount(count + 1)}
              className="px-6 py-3 bg-green-500 hover:bg-green-600 text-white font-medium rounded-lg transition-colors duration-200 shadow-md hover:shadow-lg"
            >
              Increase
            </button>
          </div>
        </div>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-purple-500 text-white p-6 rounded-lg shadow-lg hover:scale-105 transition-transform duration-300">
            <h3 className="text-xl font-bold mb-2">Purple Card</h3>
            <p className="text-purple-100">
              Hover over me to see the scale effect!
            </p>
          </div>

          <div className="bg-orange-500 text-white p-6 rounded-lg shadow-lg hover:scale-105 transition-transform duration-300">
            <h3 className="text-xl font-bold mb-2">Orange Card</h3>
            <p className="text-orange-100">
              Grid layout with responsive columns
            </p>
          </div>

          <div className="bg-teal-500 text-white p-6 rounded-lg shadow-lg hover:scale-105 transition-transform duration-300">
            <h3 className="text-xl font-bold mb-2">Teal Card</h3>
            <p className="text-teal-100">
              Beautiful gradient background above
            </p>
          </div>
        </div>

        {/* Flexbox Example */}
        <div className="bg-white rounded-lg shadow-xl p-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-6">
            Flexbox Alignment
          </h2>
          <div className="flex flex-wrap gap-4 justify-center items-center">
            <span className="px-4 py-2 bg-blue-100 text-blue-800 rounded-full font-medium">
              Tag 1
            </span>
            <span className="px-4 py-2 bg-pink-100 text-pink-800 rounded-full font-medium">
              Tag 2
            </span>
            <span className="px-4 py-2 bg-yellow-100 text-yellow-800 rounded-full font-medium">
              Tag 3
            </span>
            <span className="px-4 py-2 bg-green-100 text-green-800 rounded-full font-medium">
              Tag 4
            </span>
          </div>
        </div>

        {/* Typography Example */}
        <div className="bg-gradient-to-r from-indigo-500 to-purple-600 text-white rounded-lg shadow-xl p-8">
          <h2 className="text-3xl font-bold mb-4">Typography Styles</h2>
          <p className="text-lg leading-relaxed mb-4">
            This is a paragraph with relaxed line height and large text size.
            Tailwind CSS makes it easy to style your content.
          </p>
          <ul className="list-disc list-inside space-y-2 text-indigo-100">
            <li>Responsive design utilities</li>
            <li>Customizable color palette</li>
            <li>Flexbox and Grid support</li>
            <li>Hover and focus states</li>
          </ul>
        </div>

        {/* Button Variants */}
        <div className="bg-white rounded-lg shadow-xl p-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-6">
            Button Variations
          </h2>
          <div className="flex flex-wrap gap-4">
            <button className="px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-md font-medium transition-colors">
              Primary
            </button>
            <button className="px-6 py-2 bg-gray-600 hover:bg-gray-700 text-white rounded-md font-medium transition-colors">
              Secondary
            </button>
            <button className="px-6 py-2 border-2 border-blue-600 text-blue-600 hover:bg-blue-50 rounded-md font-medium transition-colors">
              Outline
            </button>
            <button className="px-6 py-2 text-blue-600 hover:bg-blue-50 rounded-md font-medium transition-colors">
              Ghost
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
