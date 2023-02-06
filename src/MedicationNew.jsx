export function MedicationNew() {
  return (
    <div className="w-screen h-auto min-h-screen">
      <section className="mt-48">
        <div class="py-8 px-4 mx-auto max-w-2xl ">
          <h2 class="mb-4 text-3xl text-center font-bold text-gray-900 ">Add a new medication</h2>
          <form action="#">
            <div class="mt-10 grid gap-4 sm:grid-cols-2 sm:gap-6">
              <div class="sm:col-span-2">
                <label for="name" class="block mb-2 text-sm font-medium text-gray-900">
                  Medication Name
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 "
                  placeholder="Type product name"
                  required=""
                />
              </div>
              <div class="sm:col-span-2">
                <label for="name" class="block mb-2 text-sm font-medium text-gray-900">
                  Medication Type
                </label>
                <select
                  id="category"
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 "
                >
                  <option selected="">Select Medication Type</option>
                  <option value="units">Liquid</option>
                  <option value="mg">Tablet</option>
                  <option value="mcg">Capsule</option>
                  <option value="g">Topical</option>
                  <option value="mL">Suppository</option>
                  <option value="%">Drops</option>
                  <option value="%">Inhaler</option>
                  <option value="%">Injection</option>
                  <option value="%">Patch</option>
                </select>
              </div>
              <div>
                <label for="item-weight" class="block mb-2 text-sm font-medium text-gray-900">
                  Medication amount
                </label>
                <input
                  type="number"
                  name="item-weight"
                  id="item-weight"
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5  "
                  placeholder="0"
                  required=""
                />
              </div>
              <div>
                <label for="category" class="block mb-2 text-sm font-medium text-gray-900">
                  Unit of Measurement
                </label>
                <select
                  id="category"
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 "
                >
                  <option selected="">Select Unit</option>
                  <option value="units">units</option>
                  <option value="mg">mg</option>
                  <option value="mcg">mcg</option>
                  <option value="g">g</option>
                  <option value="mL">mL</option>
                  <option value="%">%</option>
                </select>
              </div>

              <div class="sm:col-span-2">
                <label for="directions" class="block mb-2 text-sm font-medium text-gray-900 ">
                  Directions
                </label>
                <textarea
                  id="directions"
                  rows="8"
                  class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-primary-500 focus:border-primary-500  "
                  placeholder="Your directions here"
                ></textarea>
              </div>
            </div>
            <button
              type="submit"
              class="inline-flex items-center px-5 py-2.5 mt-4 sm:mt-6 text-sm font-medium text-center text-white bg-blue-400 rounded-lg focus:ring-4 focus:ring-primary-200 "
            >
              Add product
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}
