export function Header() {
  return (
    <div>
      <header aria-label="Site Header" class="border-b border-gray-100">
        <div class="mx-auto flex h-16 max-w-screen-2xl items-center justify-between sm:px-6 lg:px-8">
          <div class="flex items-center">
            <a href="/" class="flex">
              <span class="sr-only">Logo</span>
              <img src="src/assets/medminder.png" width={"80px"} />{" "}
            </a>
          </div>

          <div class="flex flex-1 items-center justify-end">
            <nav
              aria-label="Site Nav"
              class="hidden lg:flex lg:gap-4 lg:text-xs lg:font-bold lg:uppercase lg:tracking-wide lg:text-gray-500"
            >
              <a
                href="/about"
                class="block h-16 border-b-4 border-transparent leading-[4rem] hover:border-current hover:text-blue-400"
              >
                About
              </a>

              <a
                href="/medication"
                class="block h-16 border-b-4 border-transparent leading-[4rem] hover:border-current hover:text-blue-400"
              >
                Meds
              </a>

              <a
                href="/schedule"
                class="block h-16 border-b-4 border-transparent leading-[4rem] hover:border-current hover:text-blue-400"
              >
                Schedule
              </a>
            </nav>

            <div class="ml-8 flex items-center">
              <div class="flex items-center divide-x divide-gray-100 border-x border-gray-100">
                <span>
                  <a href="/login" class="block border-b-4 border-transparent p-6 hover:border-blue-400">
                    <svg
                      class="h-4 w-4"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                      />
                    </svg>

                    <span class="sr-only"> Login </span>
                  </a>
                </span>
              </div>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}
