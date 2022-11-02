export const Card = () => {
  return (
    <div class="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      <div class="mb-10 border-t border-b divide-y">
        <div class="grid py-8 sm:grid-cols-4">
          <div class="mb-4 sm:mb-0">
            <div class="space-y-1 text-xs font-semibold tracking-wide uppercase">
              <a
                href="/"
                class="transition-colors duration-200 text-deep-purple-accent-400 hover:text-deep-purple-800"
                aria-label="Category">
                Books
              </a>
              <p class="text-gray-600">5 Jan 2020</p>
            </div>
          </div>
          <div class="sm:col-span-3 lg:col-span-2">
            <div class="mb-3">
              <a
                href="/"
                aria-label="Article"
                class="inline-block text-black transition-colors duration-200 hover:text-deep-purple-accent-700">
                <p class="text-3xl font-extrabold leading-none sm:text-4xl xl:text-4xl">
                  Tell them I hate them
                </p>
              </a>
            </div>
            <p class="text-gray-700">
              Well, the way they make shows is, they make one show. That show's
              called a pilot. Then they show that show to the people who make
              shows.
            </p>
          </div>
        </div>
        <div class="grid py-8 sm:grid-cols-4">
          <div class="mb-4 sm:mb-0">
            <div class="space-y-1 text-xs font-semibold tracking-wide uppercase">
              <a
                href="/"
                class="transition-colors duration-200 text-deep-purple-accent-400 hover:text-deep-purple-800"
                aria-label="Category">
                Inspiration
              </a>
              <p class="text-gray-600">15 Sep 2020</p>
            </div>
          </div>
          <div class="sm:col-span-3 lg:col-span-2">
            <div class="mb-3">
              <a
                href="/"
                aria-label="Article"
                class="inline-block text-black transition-colors duration-200 hover:text-deep-purple-accent-700">
                <p class="text-3xl font-extrabold leading-none sm:text-4xl xl:text-4xl">
                  A flower in my green garden
                </p>
              </a>
            </div>
            <p class="text-gray-700">
              Chase ball of string eat plants, meow, and throw up because I ate
              plants going to catch the red dot today going.
            </p>
          </div>
        </div>
        <div class="grid py-8 sm:grid-cols-4">
          <div class="mb-4 sm:mb-0">
            <div class="space-y-1 text-xs font-semibold tracking-wide uppercase">
              <a
                href="/"
                class="transition-colors duration-200 text-deep-purple-accent-400 hover:text-deep-purple-800"
                aria-label="Category">
                Detective
              </a>
              <p class="text-gray-600">28 Dec 2020</p>
            </div>
          </div>
          <div class="sm:col-span-3 lg:col-span-2">
            <div class="mb-3">
              <a
                href="/"
                aria-label="Article"
                class="inline-block text-black transition-colors duration-200 hover:text-deep-purple-accent-700">
                <p class="text-3xl font-extrabold leading-none sm:text-4xl xl:text-4xl">
                  We never had the love we deserve
                </p>
              </a>
            </div>
            <p class="text-gray-700">
              Sportacus andrew weatherall goose Refined gentlemen super mario
              des lynam alpha trion zap.
            </p>
          </div>
        </div>
      </div>
      <div class="text-center">
        <a
          href="/"
          aria-label=""
          class="inline-flex items-center font-semibold transition-colors duration-200 text-deep-purple-accent-400 hover:text-deep-purple-800">
          See all articles
          <svg
            class="inline-block w-3 ml-2"
            fill="currentColor"
            viewBox="0 0 12 12">
            <path d="M9.707,5.293l-5-5A1,1,0,0,0,3.293,1.707L7.586,6,3.293,10.293a1,1,0,1,0,1.414,1.414l5-5A1,1,0,0,0,9.707,5.293Z"></path>
          </svg>
        </a>
      </div>
    </div>
  )
}
